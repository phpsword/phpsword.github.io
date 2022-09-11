---
prev: /guide/tutorial/first-steps.md
next: /guide/tutorial/widgets.md
---

# Services

This section will introduce you to the `WordpressService` interface and its helper abstract class `AbstractWordpressService`.

All services that implement `WordpressService` interface will be automatically initialized by your theme's `functions.php`.

## Overview

Create a file `/src/Wordpress/Sidebars.php`. This class will look something like this:

```php
declare(strict_types=1);

namespace App\Wordpress;

use Sword\SwordBundle\Service\AbstractWordpressService;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

final class Sidebars extends AbstractWordpressService
{
    public function __construct(
        #[Autowire('%sword.child_theme_translation_domain%')]
        private readonly string $translationDomain,
    ) {
    }

    public function initialize(): void
    {
        add_action('widgets_init', [$this, 'registerSidebars']);
    }

    public function registerSidebars(): void
    {
        register_sidebar([
            'name' => __('My new sidebar', $this->translationDomain),
            'id' => 'my-new-sidebar',
            'before_widget' => '<aside id="%1$s" class="widget %2$s">',
            'after_widget'  => '</aside>',
            'before_title'  => '<span class="widget-title">',
            'after_title'   => '</span><div class="is-divider small"></div>',
        ]);
    }
}
```

Now when you navigate to `/wp-admin/widgets.php` you get your new sidebar:

![WordPress sidebar](/images/wordpress-sidebar.jpg)

## Dependency injection

Classes implementing `WordpressService` can take advantage of Symfony's dependency injection.

::: warning IMPORTANT
Symfony services are initialized **before** WordPress is loaded, therefore
you can't use the constructor to call WordPress hooks. Instead, call them in the `initialize()` method, which is called
while WordPress is loading, in your child theme's `functions.php`.
:::

## Priority

`WordpressService` interface also allows you to define a loading priority.

To make a service to load with a high priority, implement `getPriority()` method:

```php
final class Sidebars extends AbstractWordpressService
{
    // ...

    public function getPriority(): int
    {
        return 100;
    }
}
```

::: tip
The default priority used by `AbstractWordpressService` is `0`. Higher number means higher priority.
:::