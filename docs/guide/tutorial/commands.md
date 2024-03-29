# Commands for WP-CLI

Sword commands are automatically loaded so you don't need to include them in your `functions.php` of your theme.
They are [`WordpressService`](services.md) classes under the hood.

## Create a command

To create a WP-CLI command, the only thing to do is to create a class extending `WordpressCommand`.

Try this by creating this file in your Sword project: `src/Wordpress/Command/TweetCommand.php`.

```php
declare(strict_types=1);

namespace App\Wordpress\Command;

use Sword\SwordBundle\Attribute\AsWordpressCommand;
use Sword\SwordBundle\Command\WordpressCommand;
use WP_CLI;

#[AsWordpressCommand(name: 'tweet')]
class TweetCommand extends WordpressCommand
{
    /**
     * Tweets a blog post
     *
     * @synopsis --post-id=<post-id>
     */
    public function __invoke(array $arguments, array $options)
    {
        $postId = (int) ($options['post-id'] ?? 0);

        // Do something with $postId

        WP_CLI::success('Tweet sent.');
        WP_CLI::halt(0);
    }
}
```

## Requesting Symfony services and parameters

Your command will probably need to call a Symfony service to handle things.
In our example, let's call a `Twitter` service that will handle the tweet.

The first step is to register this service as a public service.
To do so, simply add it to the list of the public services in `/config/packages/sword.yaml`:

```yaml
sword:
    # ...
    public_services:
        - App\Social\Twitter
```

Then use it in your command:

```php{5,10,24-26}
declare(strict_types=1);

namespace App\Wordpress\Command;

use App\Social\Twitter;
use Sword\SwordBundle\Attribute\AsWordpressCommand;
use Sword\SwordBundle\Command\WordpressCommand;
use WP_CLI;

use function Sword\SwordBundle\Helper\get_symfony_service;

#[AsWordpressCommand(name: 'tweet')]
class TweetCommand extends WordpressCommand
{
    /**
     * Tweets a blog post
     *
     * @synopsis --post-id=<post-id>
     */
    public function __invoke(array $arguments, array $options)
    {
        $postId = (int) ($options['post-id'] ?? 0);

        if (!get_symfony_service(Twitter::class)->tweet($postId)) {
            WP_CLI::error('The tweet cannot be sent.');
        }

        WP_CLI::success('Tweet sent.');
        WP_CLI::halt(0);
    }
}
```

## Calling your command

To call your `tweet` command, here's how to call it:

```bash
docker compose exec -u 82:82 php bin/console wp tweet --post-id=123
```

And if you've aliased as explained [here](../tooling.md#wp-cli), that will be as short as:
```bash
wp tweet --post-id=123
```
