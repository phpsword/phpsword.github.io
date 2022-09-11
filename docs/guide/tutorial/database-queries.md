---
prev: /guide/tutorial/translations.md
---

# Database queries

In a classic WordPress theme, you would make calls to the database using `WP_Query`.

While Sword obviously doesn't remove this functionality, it provides an additional abstraction layer to
query the database entities with a Doctrine-like syntax.

::: tip
The full documentation for this library can be found on the dedicated Github repo:
[williarin/wordpress-interop](https://github.com/williarin/wordpress-interop).
:::

To use it in Sword, just inject `Williarin\WordpressInterop\EntityManagerInterface` in your service, or any repository as below:

```php
// ...
use Williarin\WordpressInterop\Bridge\Repository\PostRepository;

final class SomeShortcode extends AbstractWordpressService
{
    public function __construct(
        private readonly PostRepository $postRepository,
    ) {
    }

    public function initialize(): void
    {
        add_shortcode('some_shortcode', [$this, 'renderShortcode']);
    }

    public function renderShortcode(array $parameters): void
    {
        // ...

        $parameters = shortcode_atts([
            'term' => 'Travel',
            'per_page' => '4',
        ], $parameters);

        $posts = $this->postRepository->findBy([
            new TermRelationshipCondition([
                'taxonomy' => 'tag',
                'name' => $parameters['term'],
            ]),
            'post_status' => 'publish',
        ], [
            'comment_count' => 'DESC',
            'post_date' => 'DESC',
        ], (int) $parameters['per_page']);

        // ...
    }
}
```
