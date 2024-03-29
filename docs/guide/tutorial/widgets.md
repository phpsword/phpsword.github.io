# Widgets

Widgets are a bit different, as they can't be services. They inherit `WP_Widget` class and are instantiated by WordPress.

## Configuration

To let Sword understand where to load widgets, we need to configure them. Open `/config/packages/sword.yaml` file and add:

```yaml
sword:
    # ...
    widgets_namespace: 'App\Wordpress\Widget\'
    widgets_path: '%kernel.project_dir%/src/Wordpress/Widget/'
```

::: tip
By default, the namespace is `App\\Widget\\` and path `%kernel.project_dir%/src/Widget/`. You don't have to configure it
if you like it this way.
:::

## Create a widget

Now create your first widget in `src/Wordpress/Widget/MyWidget.php` and fill it with this content:

```php
<?php

declare(strict_types=1);

namespace App\Wordpress\Widget;

use WP_Widget;

final class MyWidget extends WP_Widget
{
    public function __construct()
    {
        parent::__construct(
            'my_widget',
            'My Widget',
            ['description' => __('This is my new widget', 'mychildtheme')],
        );
    }

    public function widget($args, $instance): void
    {
        // ...
    }

    public function form($instance): void
    {
        // ...
    }

    public function update($newInstance, $oldInstance): array
    {
        $instance = [];

        // ...

        return $instance;
    }
}
```

::: tip
You don't need to register the widget using `register_widget()` nor call `widgets_init` action. This is automatically done for you,
as long as your widgets live in the namespace you configured. You can also create sub-namespaced widgets and they'll be loaded as well.
:::

## Dependency injection

Widgets are instantiated while WordPress is loading, therefore you can't autowire services in the constructor.

This is where the helper functions `get_symfony_service()` and `get_symfony_parameter()` come into play.

```php{3,6-7,11-12,16-17,22,28-31}
// ...

use Twig\Environment;
use WP_Widget;

use function Sword\SwordBundle\Helper\get_symfony_parameter;
use function Sword\SwordBundle\Helper\get_symfony_service;

final class MyWidget extends WP_Widget
{
    private readonly Environment $twig;
    private readonly string $translationDomain;

    public function __construct()
    {
        $this->twig = get_symfony_service(Environment::class);
        $this->translationDomain = get_symfony_parameter('sword.child_theme_translation_domain');

        parent::__construct(
            'my_widget',
            'My Widget',
            ['description' => __('This is my new widget', $this->translationDomain)],
        );
    }

    public function widget($args, $instance): void
    {
        echo $this->twig->render(
            'wordpress/widget/my_widget.html.twig',
            compact('args', 'instance'),
        );
    }

    // ...
}
```

Then create a template in `/templates/wordpress/widget/my_widget.html.twig` and put this content:

```twig
{{ args.before_title|raw }}
    Hello from Twig
{{ args.after_title|raw}}
```

If you run this code, you'll get the following error:

`The "Twig\Environment" service or alias has been removed or inlined when the container was compiled.`

The next step is to make this service public. To do so, simply add it to the list of the public services in `/config/packages/sword.yaml`:

```yaml
sword:
    # ...
    public_services:
        - Twig\Environment
```

Now you can add your widget to the sidebar and see the result.

![WordPress widget](/images/wordpress-widget.jpg)
