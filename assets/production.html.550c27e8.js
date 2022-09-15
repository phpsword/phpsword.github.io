import{_ as n,o as s,c as a,e}from"./app.e9d564d5.js";const t={},o=e(`<h1 id="production" tabindex="-1"><a class="header-anchor" href="#production" aria-hidden="true">#</a> Production</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This section requires some containerization knowledge, with Docker Swarm or Kubernetes.</p></div><h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker compose</h2><p>To build a production image, use the <code>docker-compose.prod.yml</code> in your CI. This will embed your source files in the production PHP image and give you a staging image that you can test on your staging server.</p><h2 id="using-secrets" tabindex="-1"><a class="header-anchor" href="#using-secrets" aria-hidden="true">#</a> Using secrets</h2><p>If you&#39;re using Docker Swarm or Kubernetes with secrets, you can simply append <code>_FILE</code> to all the environment variables. As an example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token key atrule">php</span><span class="token punctuation">:</span>
        <span class="token comment"># ...</span>
        <span class="token key atrule">environment</span><span class="token punctuation">:</span>
            <span class="token comment"># ...</span>
            <span class="token key atrule">WORDPRESS_DB_PASSWORD_FILE</span><span class="token punctuation">:</span> /run/secrets/myproject<span class="token punctuation">-</span>db<span class="token punctuation">-</span>password
            <span class="token key atrule">WORDPRESS_AUTH_KEY_FILE</span><span class="token punctuation">:</span> /run/secrets/myproject<span class="token punctuation">-</span>auth<span class="token punctuation">-</span>key
            <span class="token comment"># ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="volumes" tabindex="-1"><a class="header-anchor" href="#volumes" aria-hidden="true">#</a> Volumes</h2><p>You&#39;ll need to create some volumes so some settings don&#39;t get erased everytime you upgrade your containers.</p><p>Here&#39;s a list of the important volumes you should create on production (Docker Swarm syntax):</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token key atrule">php</span><span class="token punctuation">:</span>
        <span class="token comment"># ...</span>
        <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
            <span class="token comment"># Media files (strongly recommended)</span>
            <span class="token punctuation">-</span> wordpress<span class="token punctuation">-</span>uploads<span class="token punctuation">:</span>/var/www/html/wp/content/uploads

            <span class="token comment"># Translations (strongly recommended)</span>
            <span class="token punctuation">-</span> wordpress<span class="token punctuation">-</span>languages<span class="token punctuation">:</span>/var/www/html/wp/content/languages

            <span class="token comment"># PHP and FPM custom configs (optional)</span>
            <span class="token punctuation">-</span> /some/path/to/php.ini<span class="token punctuation">:</span>/etc/php81/conf.d/99_wordpress.ini<span class="token punctuation">:</span>ro
            <span class="token punctuation">-</span> /some/path/to/www.override.conf<span class="token punctuation">:</span>/etc/php81/php<span class="token punctuation">-</span>fpm.d/www.override.1.conf<span class="token punctuation">:</span>ro

    <span class="token comment">#...</span>

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token key atrule">wordpress-uploads</span><span class="token punctuation">:</span>
    <span class="token key atrule">wordpress-languages</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="upgrade" tabindex="-1"><a class="header-anchor" href="#upgrade" aria-hidden="true">#</a> Upgrade</h2><p>After every upgrade, it&#39;s recommended to execute some WP-CLI commands to keep WordPress database and files up to date. These need to be executed in one of your replicas, or create a separate container if you want.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>bin/console wp core update-db

<span class="token comment"># --- if WooCommerce is installed</span>
bin/console wp <span class="token function">wc</span> update
<span class="token comment"># ---</span>

bin/console wp language core update
bin/console wp language plugin update <span class="token parameter variable">--all</span>
bin/console wp <span class="token function">cron</span> event run --due-now
bin/console wp action-scheduler run
</code></pre></div><p>If you&#39;re using Ansible with Docker Swarm, here&#39;s a snippet to include in your <code>tasks/main.yaml</code> file:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get container name
  <span class="token key atrule">command</span><span class="token punctuation">:</span> docker ps <span class="token punctuation">-</span>q <span class="token punctuation">-</span>f name=your<span class="token punctuation">-</span>container<span class="token punctuation">-</span>name.<span class="token important">*php.1</span>
  <span class="token key atrule">register</span><span class="token punctuation">:</span> wordpress_container_name

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Update WordPress database and run scheduled tasks
  <span class="token key atrule">community.docker.docker_container_exec</span><span class="token punctuation">:</span>
    <span class="token key atrule">user</span><span class="token punctuation">:</span> <span class="token string">&#39;82:82&#39;</span>
    <span class="token key atrule">container</span><span class="token punctuation">:</span> <span class="token string">&#39;{{ wordpress_container_name.stdout_lines[0] }}&#39;</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token string">&#39;bin/console wp {{ item }}&#39;</span>
  <span class="token key atrule">with_items</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;core update-db&#39;</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;wc update&#39;</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;language core update&#39;</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;language plugin update --all&#39;</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;cron event run --due-now&#39;</span>
    <span class="token punctuation">-</span> <span class="token string">&#39;action-scheduler run&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cron" tabindex="-1"><a class="header-anchor" href="#cron" aria-hidden="true">#</a> Cron</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Sword disables WordPress cron by default so you can run it in your crontab.</p><p>To restore the default behavior, set <code>WORDPRESS_DISABLE_WP_CRON</code> environment variable to <code>false</code>.</p></div><p>To manually run WordPress cron, run this command inside your container or create a new one:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>bin/console wp <span class="token function">cron</span> event run --due-now
</code></pre></div><p>So the crontab might look like this:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>* * * * * <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-u</span> <span class="token number">82</span>:82 <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-f</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>my-wordpress-service.*php.1<span class="token variable">)</span></span>&quot;</span> bin/console wp <span class="token function">cron</span> event run --due-now <span class="token operator">&gt;</span> /dev/null
</code></pre></div>`,22),c=[o];function p(i,l){return s(),a("div",null,c)}const u=n(t,[["render",p],["__file","production.html.vue"]]);export{u as default};
