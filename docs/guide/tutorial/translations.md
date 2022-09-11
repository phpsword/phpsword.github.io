---
prev: /guide/tutorial/widgets.md
---

# Translations

WordPress plugins such as Loco Translate will parse your theme source code to find new strings.
But that only works for files present in your child theme directory, not for Symfony files.

With Sword, you'll translate WordPress just like you would translate Symfony. This will allow you to
work with fallback locales out of the box and manage your translations with YAML files.

## About child theme translation domain

We've talked about configuring the child theme translation domain in the
[First steps](first-steps.md#create-a-child-theme) section.

This is useful for legacy translations or if you want to continue to work with a `.po` file.
But this is useless for the new Sword translations as they won't be synchronized.

## Symfony translator

For new translations, it's recommanded to use Symfony translator by injecting `TranslatorInterface` in your services.

We'll take the `Sidebars` service we've created in the [Service](services.md) section and adapt it for Symfony.

```php{1,6,15}
use Symfony\Contracts\Translation\TranslatorInterface;

final class Sidebars extends AbstractWordpressService
{
    public function __construct(
        private readonly TranslatorInterface $translator,
    ) {
    }

    // ...

    public function registerSidebars(): void
    {
        register_sidebar([
            'name' => $this->translator->trans('sidebars.new_sidebar.name'),
            // ...
        ]);
    }
}
```

Assuming you've installed WordPress with `en_US` locale, create your first translation file `/translations/messages.en.yaml`:

```yaml
sidebars:
    new_sidebar:
        name: My new sidebar
```

This file will be the fallback for all English locales such as `en_US`, `en_GB`, `en_IE`, etc.

[Read more about the translations in Symfony](https://symfony.com/doc/current/translation.html)
