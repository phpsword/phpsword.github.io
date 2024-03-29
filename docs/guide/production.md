# Production

::: warning
This section requires some containerization knowledge, with Docker Swarm or Kubernetes.
:::

## Docker compose

To build a production image, use the `docker-compose.prod.yml` in your CI.
This will embed your source files in the production PHP image and give you a staging image that you can test
on your staging server.

## Using secrets

If you're using Docker Swarm or Kubernetes with secrets, you can simply append `_FILE` to all the
environment variables. As an example:

```yaml
services:
    php:
        # ...
        environment:
            # ...
            WORDPRESS_DB_PASSWORD_FILE: /run/secrets/myproject-db-password
            WORDPRESS_AUTH_KEY_FILE: /run/secrets/myproject-auth-key
            # ...
```

## Volumes

You'll need to create some volumes so some settings don't get erased everytime you upgrade your containers.

Here's a list of the important volumes you should create on production (Docker Swarm syntax):

```yaml
services:
    php:
        # ...
        volumes:
            # Media files (strongly recommended)
            - wordpress-uploads:/var/www/html/wp/content/uploads

            # Translations (strongly recommended)
            - wordpress-languages:/var/www/html/wp/content/languages

            # PHP and FPM custom configs (optional)
            - /some/path/to/php.ini:/etc/php81/conf.d/99_wordpress.ini:ro
            - /some/path/to/www.override.conf:/etc/php81/php-fpm.d/www.override.1.conf:ro

    #...

volumes:
    wordpress-uploads:
    wordpress-languages:
```

## Upgrade

After every upgrade, it's recommended to execute some WP-CLI commands to keep WordPress database and files up to date.
These need to be executed in one of your replicas, or create a separate container if you want.

```bash:no-line-numbers
bin/console wp core update-db

# --- if WooCommerce is installed
bin/console wp wc update
# ---

bin/console wp language core update
bin/console wp language plugin update --all
bin/console wp cron event run --due-now
bin/console wp action-scheduler run
```

If you're using Ansible with Docker Swarm, here's a snippet to include in your `tasks/main.yaml` file:

```yaml
- name: Get container name
  command: docker ps -q -f name=your-container-name.*php.1
  register: wordpress_container_name

- name: Update WordPress database and run scheduled tasks
  community.docker.docker_container_exec:
    user: '82:82'
    container: '{{ wordpress_container_name.stdout_lines[0] }}'
    command: 'bin/console wp {{ item }}'
  with_items:
    - 'core update-db'
    - 'wc update'
    - 'language core update'
    - 'language plugin update --all'
    - 'cron event run --due-now'
    - 'action-scheduler run'
```

## Cron

::: tip
Sword disables WordPress cron by default so you can run it in your crontab.

To restore the default behavior, set `WORDPRESS_DISABLE_WP_CRON` environment variable to `false`.
:::

To manually run WordPress cron, run this command inside your container or create a new one:

```bash:no-line-numbers
bin/console wp cron event run --due-now
```

So the crontab might look like this:

```bash:no-line-numbers
* * * * * docker exec -u 82:82 "$(docker ps -q -f name=my-wordpress-service.*php.1)" bin/console wp cron event run --due-now > /dev/null
```
