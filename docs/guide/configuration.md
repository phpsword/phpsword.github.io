# Configuration reference

## Symfony configuration

Edit or create the file `config/packages/sword.yaml` then configure it to suit your needs.

Below is the default configuration:

```yaml
sword:
    app_namespace: 'App\\'
    child_theme_language_path: '%kernel.project_dir%/translations/%sword.child_theme_translation_domain%'
    child_theme_translation_domain: 'mychildtheme' # must be configured in your app
    public_services: []
    table_prefix: 'wp_'
    widgets_namespace: 'App\\Widget\\'
    widgets_path: '%kernel.project_dir%/src/Widget/'
    wordpress_content_dir: '%kernel.project_dir%/wp/content'
    wordpress_core_dir: '%kernel.project_dir%/wp/core'
    wordpress_host: '' # Use this if you're behind a reverse-proxy. Example: 'https://domain.com'
```

## Environment variables

::: tip
All environment variables have their alternative with `_FILE` suffix if you need to provide a value contained in a file (e.g. with Docker secrets).
:::

| Variable name | Default value |
| --------------|---------------|
| `WORDPRESS_DB_NAME` | `wordpress` |
| `WORDPRESS_DB_USER` | `user` |
| `WORDPRESS_DB_PASSWORD` | `password` |
| `WORDPRESS_DB_HOST` | `mysql` |
| `WORDPRESS_DB_CHARSET` | `utf8mb4` |
| `WORDPRESS_DB_COLLATE` | empty |
| `WORDPRESS_TABLE_PREFIX` | `wp_` |
| `WORDPRESS_DEBUG` | false |
| `WORDPRESS_DEBUG_LOG` | false |
| `WORDPRESS_DEBUG_DISPLAY` | false |
| `WORDPRESS_DISABLE_FATAL_ERROR_HANDLER` | true |
| `WORDPRESS_REDIS_HOST` | `redis` |
| `WORDPRESS_REDIS_PASSWORD` | `password` |
| `WORDPRESS_CACHE_KEY_SALT` | random string |
| `WORDPRESS_DISABLE_WP_CRON` | true |
| `WORDPRESS_CACHE` | true |
| `WORDPRESS_HTTP_BLOCK_EXTERNAL` | false |
| `WORDPRESS_AUTO_UPDATE_CORE` | false |
| `WORDPRESS_AUTOMATIC_UPDATER_DISABLED` | true |
| `WORDPRESS_SITE_URL` | `https://localhost` |
| `WORDPRESS_CONFIG_EXTRA` | empty |
| `WORDPRESS_AUTH_KEY` | random string |
| `WORDPRESS_SECURE_AUTH_KEY` | random string |
| `WORDPRESS_LOGGED_IN_KEY` | random string |
| `WORDPRESS_NONCE_KEY` | random string |
| `WORDPRESS_AUTH_SALT` | random string |
| `WORDPRESS_AUTH_KEY` | random string |
| `WORDPRESS_SECURE_AUTH_SALT` | random string |
| `WORDPRESS_LOGGED_IN_SALT` | random string |
| `WORDPRESS_NONCE_SALT` | random string |
