---
prev: /guide/installation.md
next: /guide/tutorial/services.md
---

# First steps

## WordPress installation

When you first access your website, you'll be redirected to the WordPress installation page.

![WordPress installation page](/images/wordpress-installation.jpg)

Enter your desired credentials to access the dashboard.

![WordPress dashboard](/images/wordpress-dashboard.jpg)

## Create a child theme

In your terminal, initialize your child theme:

```bash
mkdir wp/content/themes/mychildtheme
touch wp/content/themes/mychildtheme/style.css
touch wp/content/themes/mychildtheme/functions.php
```

Then open `style.css` and fill it with this header, modify to your needs:

```css
/*
 Theme Name:   My Child Theme
 Description:  Theme for my Sword app
 Author:       John Doe
 Author URI:   http://example.com
 Template:     twentytwentytwo
 Version:      1.0.0
 License:      GNU General Public License v2 or later
 License URI:  http://www.gnu.org/licenses/gpl-2.0.html
 Text Domain:  mychildtheme
*/
```

::: warning Note
Make sure the text domain is the same as the one in `/config/packages/sword.yaml`
:::

```yaml
sword:
    child_theme_translation_domain: 'mychildtheme'
```

Next thing to do is to connect your child theme to Symfony. Open `functions.php` and fill it with this content:

```php
<?php

declare(strict_types=1);

use function Sword\SwordBundle\Helper\initialize_services;

initialize_services();
```

Finally, go activate it in WordPress admin.

![WordPress dashboard](/images/wordpress-child-theme.jpg)

That's it. Your child theme is Symfony ready.