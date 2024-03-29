import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.CoNgQsep.js";const y=JSON.parse('{"title":"Production","description":"","frontmatter":{},"headers":[],"relativePath":"guide/production.md","filePath":"guide/production.md","lastUpdated":1711689985000}'),e={name:"guide/production.md"},l=n(`<h1 id="production" tabindex="-1">Production <a class="header-anchor" href="#production" aria-label="Permalink to &quot;Production&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This section requires some containerization knowledge, with Docker Swarm or Kubernetes.</p></div><h2 id="docker-compose" tabindex="-1">Docker compose <a class="header-anchor" href="#docker-compose" aria-label="Permalink to &quot;Docker compose&quot;">​</a></h2><p>To build a production image, use the <code>docker-compose.prod.yml</code> in your CI. This will embed your source files in the production PHP image and give you a staging image that you can test on your staging server.</p><h2 id="using-secrets" tabindex="-1">Using secrets <a class="header-anchor" href="#using-secrets" aria-label="Permalink to &quot;Using secrets&quot;">​</a></h2><p>If you&#39;re using Docker Swarm or Kubernetes with secrets, you can simply append <code>_FILE</code> to all the environment variables. As an example:</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes catppuccin-latte dracula vp-code"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">services</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    php</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">        # ...</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">        environment</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">            # ...</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">            WORDPRESS_DB_PASSWORD_FILE</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> /run/secrets/myproject-db-password</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">            WORDPRESS_AUTH_KEY_FILE</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> /run/secrets/myproject-auth-key</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">            # ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="volumes" tabindex="-1">Volumes <a class="header-anchor" href="#volumes" aria-label="Permalink to &quot;Volumes&quot;">​</a></h2><p>You&#39;ll need to create some volumes so some settings don&#39;t get erased everytime you upgrade your containers.</p><p>Here&#39;s a list of the important volumes you should create on production (Docker Swarm syntax):</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes catppuccin-latte dracula vp-code"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">services</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    php</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">        # ...</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">        volumes</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">            # Media files (strongly recommended)</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;">            -</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> wordpress-uploads:/var/www/html/wp/content/uploads</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">            # Translations (strongly recommended)</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;">            -</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> wordpress-languages:/var/www/html/wp/content/languages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">            # PHP and FPM custom configs (optional)</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;">            -</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> /some/path/to/php.ini:/etc/php81/conf.d/99_wordpress.ini:ro</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;">            -</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> /some/path/to/www.override.conf:/etc/php81/php-fpm.d/www.override.1.conf:ro</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    #...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">volumes</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    wordpress-uploads</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    wordpress-languages</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="upgrade" tabindex="-1">Upgrade <a class="header-anchor" href="#upgrade" aria-label="Permalink to &quot;Upgrade&quot;">​</a></h2><p>After every upgrade, it&#39;s recommended to execute some WP-CLI commands to keep WordPress database and files up to date. These need to be executed in one of your replicas, or create a separate container if you want.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes catppuccin-latte dracula vp-code"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">bin/console</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> wp</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> core</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> update-db</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"># --- if WooCommerce is installed</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">bin/console</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> wp</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> wc</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> update</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"># ---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">bin/console</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> wp</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> language</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> core</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> update</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">bin/console</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> wp</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> language</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> plugin</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> update</span><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;"> --all</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">bin/console</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> wp</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> cron</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> event</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> run</span><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;"> --due-now</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">bin/console</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> wp</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> action-scheduler</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> run</span></span></code></pre></div><p>If you&#39;re using Ansible with Docker Swarm, here&#39;s a snippet to include in your <code>tasks/main.yaml</code> file:</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes catppuccin-latte dracula vp-code"><code><span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;">-</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;"> name</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> Get container name</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">  command</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> docker ps -q -f name=your-container-name.*php.1</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">  register</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> wordpress_container_name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;">-</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;"> name</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> Update WordPress database and run scheduled tasks</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">  community.docker.docker_container_exec</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    user</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">82:82</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    container</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">{{ wordpress_container_name.stdout_lines[0] }}</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    command</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">bin/console wp {{ item }}</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">  with_items</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;">    -</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">core update-db</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;">    -</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">wc update</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;">    -</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">language core update</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;">    -</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">language plugin update --all</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;">    -</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">cron event run --due-now</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;">    -</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">action-scheduler run</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="cron" tabindex="-1">Cron <a class="header-anchor" href="#cron" aria-label="Permalink to &quot;Cron&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Sword disables WordPress cron by default so you can run it in your crontab.</p><p>To restore the default behavior, set <code>WORDPRESS_DISABLE_WP_CRON</code> environment variable to <code>false</code>.</p></div><p>To manually run WordPress cron, run this command inside your container or create a new one:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes catppuccin-latte dracula vp-code"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">bin/console</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> wp</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> cron</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> event</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> run</span><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;"> --due-now</span></span></code></pre></div><p>So the crontab might look like this:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes catppuccin-latte dracula vp-code"><code><span class="line"><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">*</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;"> *</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;"> *</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;"> *</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;"> *</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;"> docker exec -u 82:82 </span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&quot;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F1FA8C;">$(</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">docker</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> ps </span><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;">-q</span><span style="--shiki-light:#40A02B;--shiki-dark:#BD93F9;"> -f</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> name=my-wordpress-service.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#BD93F9;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">*</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">php.1</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F1FA8C;">)</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&quot;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;"> bin/console wp cron event run --due-now </span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">&gt;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;"> /dev/null</span></span></code></pre></div>`,22),t=[l];function p(h,k,r,d,o,c){return a(),i("div",null,t)}const g=s(e,[["render",p]]);export{y as __pageData,g as default};