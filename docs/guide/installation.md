# Installation

## Docker one-liner installation (recommended)

To install Sword, you need only Docker to be installed on your host.

You don't need to be familiar with Docker. Everything is taken care of for you. [Just download and install it](https://www.docker.com/products/docker-desktop).

To create a new project, simply replace `myproject` by the name of your project and run:

```bash:no-line-numbers
docker run --rm --pull=always -t -e HOST_PWD="$PWD" \
    -v "$PWD":/app -v /var/run/docker.sock:/var/run/docker.sock \
    ghcr.io/phpsword/installer myproject
```

::: tip NOTE
The command line above will install a new project using the [latest compatible version](https://make.wordpress.org/core/handbook/references/php-compatibility-and-wordpress-versions/).
If you want to install a project using a newer PHP version in beta support, use the tag corresponding to the PHP version you want to install:
```bash:no-line-numbers
docker run --rm --pull=always -t -e HOST_PWD="$PWD" \
    -v "$PWD":/app -v /var/run/docker.sock:/var/run/docker.sock \
    ghcr.io/phpsword/installer:php-8.3 myproject
```
:::


Wait a couple of minutes. Done! Now visit [https://myproject.localhost/](https://myproject.localhost/) to access WordPress installation page.

::: tip NOTE
If port 443 is unavailable, the installation process will automatically assign a free port to your app.
:::


You can now check the [tutorial](./tutorial/first-steps.md) to understand the basics.

## Windows / Linux / WSL / macOS manual installation

::: warning
The manual installation process is a bit complex and has not been tested.
:::

Requirements to install Sword:

* [PHP 8.1](https://www.php.net/downloads.php) or above, with `bcmath`, `mysqli`, `exif` and `imagick` extensions (`redis` too if you want to use redis)
* [MySQL 8.0](https://www.mysql.com/downloads/) or above
* [Composer 2](https://getcomposer.org/download/)
* [Symfony CLI executable](https://symfony.com/download)
* [Nginx](http://nginx.org/en/download.html)


If for any reason you don't want to use Docker, try a manual install using these files as guide:

* [The installer project build](https://github.com/phpsword/installer/blob/master/.github/workflows/build.yml#L60:L79)
* [The installer install script](https://github.com/phpsword/installer/blob/master/build/docker-entrypoint.sh#L65:L87)
* [The Nginx configuration](https://github.com/phpsword/sword-bundle/tree/master/install/docker/nginx) configured to be behind Traefik reverse-proxy
* [Environment variables](https://github.com/phpsword/sword-bundle/blob/master/install/docker-compose.yml#L12:L27)
