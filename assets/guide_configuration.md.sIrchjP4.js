import{_ as s,c as t,o as i,a5 as a}from"./chunks/framework.CoNgQsep.js";const E=JSON.parse('{"title":"Configuration reference","description":"","frontmatter":{},"headers":[],"relativePath":"guide/configuration.md","filePath":"guide/configuration.md","lastUpdated":1711689985000}'),e={name:"guide/configuration.md"},d=a(`<h1 id="configuration-reference" tabindex="-1">Configuration reference <a class="header-anchor" href="#configuration-reference" aria-label="Permalink to &quot;Configuration reference&quot;">​</a></h1><h2 id="symfony-configuration" tabindex="-1">Symfony configuration <a class="header-anchor" href="#symfony-configuration" aria-label="Permalink to &quot;Symfony configuration&quot;">​</a></h2><p>Edit or create the file <code>config/packages/sword.yaml</code> then configure it to suit your needs.</p><p>Below is the default configuration:</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes catppuccin-latte dracula vp-code"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">sword</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    app_namespace</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">App\\\\</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    child_theme_language_path</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">%kernel.project_dir%/translations/%sword.child_theme_translation_domain%</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    child_theme_translation_domain</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">mychildtheme</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> # must be configured in your app</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    public_services</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;"> []</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    table_prefix</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">wp_</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    widgets_namespace</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">App\\\\Widget\\\\</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    widgets_path</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">%kernel.project_dir%/src/Widget/</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    wordpress_content_dir</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">%kernel.project_dir%/wp/content</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    wordpress_core_dir</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">%kernel.project_dir%/wp/core</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    wordpress_host</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;&#39;</span><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> # Use this if you&#39;re behind a reverse-proxy. Example: &#39;https://domain.com&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="environment-variables" tabindex="-1">Environment variables <a class="header-anchor" href="#environment-variables" aria-label="Permalink to &quot;Environment variables&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>All environment variables have their alternative with <code>_FILE</code> suffix if you need to provide a value contained in a file (e.g. with Docker secrets).</p></div><table><thead><tr><th>Variable name</th><th>Default value</th></tr></thead><tbody><tr><td><code>WORDPRESS_DB_NAME</code></td><td><code>wordpress</code></td></tr><tr><td><code>WORDPRESS_DB_USER</code></td><td><code>user</code></td></tr><tr><td><code>WORDPRESS_DB_PASSWORD</code></td><td><code>password</code></td></tr><tr><td><code>WORDPRESS_DB_HOST</code></td><td><code>mysql</code></td></tr><tr><td><code>WORDPRESS_DB_CHARSET</code></td><td><code>utf8mb4</code></td></tr><tr><td><code>WORDPRESS_DB_COLLATE</code></td><td>empty</td></tr><tr><td><code>WORDPRESS_TABLE_PREFIX</code></td><td><code>wp_</code></td></tr><tr><td><code>WORDPRESS_DEBUG</code></td><td>false</td></tr><tr><td><code>WORDPRESS_DEBUG_LOG</code></td><td>false</td></tr><tr><td><code>WORDPRESS_DEBUG_DISPLAY</code></td><td>false</td></tr><tr><td><code>WORDPRESS_DISABLE_FATAL_ERROR_HANDLER</code></td><td>true</td></tr><tr><td><code>WORDPRESS_REDIS_HOST</code></td><td><code>redis</code></td></tr><tr><td><code>WORDPRESS_REDIS_PASSWORD</code></td><td><code>password</code></td></tr><tr><td><code>WORDPRESS_CACHE_KEY_SALT</code></td><td>random string</td></tr><tr><td><code>WORDPRESS_DISABLE_WP_CRON</code></td><td>true</td></tr><tr><td><code>WORDPRESS_CACHE</code></td><td>true</td></tr><tr><td><code>WORDPRESS_HTTP_BLOCK_EXTERNAL</code></td><td>false</td></tr><tr><td><code>WORDPRESS_AUTO_UPDATE_CORE</code></td><td>false</td></tr><tr><td><code>WORDPRESS_AUTOMATIC_UPDATER_DISABLED</code></td><td>true</td></tr><tr><td><code>WORDPRESS_SITE_URL</code></td><td><code>https://localhost</code></td></tr><tr><td><code>WORDPRESS_CONFIG_EXTRA</code></td><td>empty</td></tr><tr><td><code>WORDPRESS_AUTH_KEY</code></td><td>random string</td></tr><tr><td><code>WORDPRESS_SECURE_AUTH_KEY</code></td><td>random string</td></tr><tr><td><code>WORDPRESS_LOGGED_IN_KEY</code></td><td>random string</td></tr><tr><td><code>WORDPRESS_NONCE_KEY</code></td><td>random string</td></tr><tr><td><code>WORDPRESS_AUTH_SALT</code></td><td>random string</td></tr><tr><td><code>WORDPRESS_AUTH_KEY</code></td><td>random string</td></tr><tr><td><code>WORDPRESS_SECURE_AUTH_SALT</code></td><td>random string</td></tr><tr><td><code>WORDPRESS_LOGGED_IN_SALT</code></td><td>random string</td></tr><tr><td><code>WORDPRESS_NONCE_SALT</code></td><td>random string</td></tr></tbody></table>`,8),n=[d];function r(l,o,p,h,c,k){return i(),t("div",null,n)}const g=s(e,[["render",r]]);export{E as __pageData,g as default};