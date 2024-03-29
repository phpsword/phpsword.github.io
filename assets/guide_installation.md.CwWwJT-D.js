import{_ as s,c as a,o as i,a5 as t}from"./chunks/framework.CoNgQsep.js";const g=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"guide/installation.md","filePath":"guide/installation.md","lastUpdated":1711689985000}'),e={name:"guide/installation.md"},l=t(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><h2 id="docker-one-liner-installation-recommended" tabindex="-1">Docker one-liner installation (recommended) <a class="header-anchor" href="#docker-one-liner-installation-recommended" aria-label="Permalink to &quot;Docker one-liner installation (recommended)&quot;">​</a></h2><p>To install Sword, you need only Docker to be installed on your host.</p><p>You don&#39;t need to be familiar with Docker. Everything is taken care of for you. <a href="https://www.docker.com/products/docker-desktop" target="_blank" rel="noreferrer">Just download and install it</a>.</p><p>To create a new project, simply replace <code>myproject</code> by the name of your project and run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes catppuccin-latte dracula vp-code"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">docker</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> run</span><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;"> --rm</span><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;"> --pull=always</span><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;"> -t</span><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;"> -e</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> HOST_PWD=</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&quot;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#BD93F9;">$PWD</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&quot;</span><span style="--shiki-light:#EA76CB;--shiki-dark:#FF79C6;"> \\</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;">    -v</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &quot;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#BD93F9;">$PWD</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&quot;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">:/app</span><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;"> -v</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> /var/run/docker.sock:/var/run/docker.sock</span><span style="--shiki-light:#EA76CB;--shiki-dark:#FF79C6;"> \\</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">    ghcr.io/phpsword/installer</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> myproject</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>The command line above will install a new project using the <a href="https://make.wordpress.org/core/handbook/references/php-compatibility-and-wordpress-versions/" target="_blank" rel="noreferrer">latest compatible version</a>. If you want to install a project using a newer PHP version in beta support, use the tag corresponding to the PHP version you want to install:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes catppuccin-latte dracula vp-code"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">docker</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> run</span><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;"> --rm</span><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;"> --pull=always</span><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;"> -t</span><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;"> -e</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> HOST_PWD=</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&quot;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#BD93F9;">$PWD</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&quot;</span><span style="--shiki-light:#EA76CB;--shiki-dark:#FF79C6;"> \\</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;">    -v</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &quot;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#BD93F9;">$PWD</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&quot;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">:/app</span><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;"> -v</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> /var/run/docker.sock:/var/run/docker.sock</span><span style="--shiki-light:#EA76CB;--shiki-dark:#FF79C6;"> \\</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">    ghcr.io/phpsword/installer:php-8.3</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> myproject</span></span></code></pre></div></div><p>Wait a couple of minutes. Done! Now visit <a href="https://myproject.localhost/" target="_blank" rel="noreferrer">https://myproject.localhost/</a> to access WordPress installation page.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>If port 443 is unavailable, the installation process will automatically assign a free port to your app.</p></div><p>You can now check the <a href="./tutorial/first-steps.html">tutorial</a> to understand the basics.</p><h2 id="windows-linux-wsl-macos-manual-installation" tabindex="-1">Windows / Linux / WSL / macOS manual installation <a class="header-anchor" href="#windows-linux-wsl-macos-manual-installation" aria-label="Permalink to &quot;Windows / Linux / WSL / macOS manual installation&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The manual installation process is a bit complex and has not been tested.</p></div><p>Requirements to install Sword:</p><ul><li><a href="https://www.php.net/downloads.php" target="_blank" rel="noreferrer">PHP 8.1</a> or above, with <code>bcmath</code>, <code>mysqli</code>, <code>exif</code> and <code>imagick</code> extensions (<code>redis</code> too if you want to use redis)</li><li><a href="https://www.mysql.com/downloads/" target="_blank" rel="noreferrer">MySQL 8.0</a> or above</li><li><a href="https://getcomposer.org/download/" target="_blank" rel="noreferrer">Composer 2</a></li><li><a href="https://symfony.com/download" target="_blank" rel="noreferrer">Symfony CLI executable</a></li><li><a href="http://nginx.org/en/download.html" target="_blank" rel="noreferrer">Nginx</a></li></ul><p>If for any reason you don&#39;t want to use Docker, try a manual install using these files as guide:</p><ul><li><a href="https://github.com/phpsword/installer/blob/master/.github/workflows/build.yml#L60:L79" target="_blank" rel="noreferrer">The installer project build</a></li><li><a href="https://github.com/phpsword/installer/blob/master/build/docker-entrypoint.sh#L65:L87" target="_blank" rel="noreferrer">The installer install script</a></li><li><a href="https://github.com/phpsword/sword-bundle/tree/master/install/docker/nginx" target="_blank" rel="noreferrer">The Nginx configuration</a> configured to be behind Traefik reverse-proxy</li><li><a href="https://github.com/phpsword/sword-bundle/blob/master/install/docker-compose.yml#L12:L27" target="_blank" rel="noreferrer">Environment variables</a></li></ul>`,16),n=[l];function r(o,h,p,k,d,c){return i(),a("div",null,n)}const y=s(e,[["render",r]]);export{g as __pageData,y as default};
