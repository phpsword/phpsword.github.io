# What is Sword?

Modern WordPress development has been around for a while with software like [Bedrock](https://roots.io/bedrock/).

Sword takes an alternative approach. Instead of being WordPress with extra features and new file structure,
it's Symfony embedding WordPress. All WordPress pages and logic, including WP-CLI, run through Symfony.

Welcome to a new era.

## Get started

Check out the [installation](/guide/installation.md) page for instructions on creating a new project.

## Features

* PHP >= 8.1 (new projects will use the [latest officially compatible](https://make.wordpress.org/core/handbook/references/php-compatibility-and-wordpress-versions/) version available)
* Symfony >= 6.1 (new projects will use the latest version available)
* Symfony 7 support
* WordPress >= 5.6 (new projects will use the latest version available)
* WordPress files hidden from the web server, one `/public/index.php` entrypoint
* Bcrypt password hashing by default, without plugin
* **Composer-based** WordPress updates and vendor dependencies
* **Dependency injection** for WordPress code
* **Synchronized auth** between WordPress and Symfony
* **Compatible** with most WordPress **themes** and **plugins**
* Possibility to **use both Symfony and WordPress assets** in your theme
* **[Docker](tooling.md#php-image)** development and production ready environments
* **[WP-CLI](tooling.md#wp-cli)** as Symfony command

## Project structure

The project structure is the same as a standard Symfony project, with a new `wp` folder containing WordPress core, theme, plugins and uploads.

```:no-line-numbers
├── assets
├── bin
├── config
├── migrations
├── public
│  └── index.php
├── src
│  ├── Controller
│  ├── Entity
│  └── Repository
├── templates
├── tests
├── translations
├── var
└── wp
   ├── content
   │  ├── plugins
   │  ├── themes
   │  └── uploads
   ├── core
   └── wp-config.php
```
