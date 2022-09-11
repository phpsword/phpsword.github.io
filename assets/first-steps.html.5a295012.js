import{_ as e,o as s,c as n,e as a}from"./app.d3a2c6e9.js";const i="/images/wordpress-installation.jpg",t="/images/wordpress-dashboard.jpg",c="/images/wordpress-child-theme.jpg",l={},o=a('<h1 id="first-steps" tabindex="-1"><a class="header-anchor" href="#first-steps" aria-hidden="true">#</a> First steps</h1><h2 id="wordpress-installation" tabindex="-1"><a class="header-anchor" href="#wordpress-installation" aria-hidden="true">#</a> WordPress installation</h2><p>When you first access your website, you&#39;ll be redirected to the WordPress installation page.</p><p><img src="'+i+'" alt="WordPress installation page"></p><p>Enter your desired credentials to access the dashboard.</p><p><img src="'+t+`" alt="WordPress dashboard"></p><h2 id="create-a-child-theme" tabindex="-1"><a class="header-anchor" href="#create-a-child-theme" aria-hidden="true">#</a> Create a child theme</h2><p>In your terminal, initialize your child theme:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">mkdir</span> wp/content/themes/mychildtheme
<span class="token function">touch</span> wp/content/themes/mychildtheme/style.css
<span class="token function">touch</span> wp/content/themes/mychildtheme/functions.php
</code></pre></div><p>Then open <code>style.css</code> and fill it with this header, modify to your needs:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*
 Theme Name:   My Child Theme
 Description:  Theme for my Sword app
 Author:       John Doe
 Author URI:   http://example.com
 Template:     twentytwentytwo
 Version:      1.0.0
 License:      GNU General Public License v2 or later
 License URI:  http://www.gnu.org/licenses/gpl-2.0.html
 Text Domain:  mychildtheme
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">IMPORTANT</p><p>Make sure the text domain is the same as the one in <code>/config/packages/sword.yaml</code></p></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">sword</span><span class="token punctuation">:</span>
    <span class="token key atrule">child_theme_translation_domain</span><span class="token punctuation">:</span> <span class="token string">&#39;mychildtheme&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Next thing to do is to connect your child theme to Symfony. Open <code>functions.php</code> and fill it with this content:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token keyword">function</span> <span class="token package">Sword<span class="token punctuation">\\</span>SwordBundle<span class="token punctuation">\\</span>Helper<span class="token punctuation">\\</span>initialize_services</span><span class="token punctuation">;</span>

<span class="token function">initialize_services</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, go activate it in WordPress admin.</p><p><img src="`+c+'" alt="WordPress theme"></p><p>That&#39;s it. Your child theme is Symfony ready.</p>',18),d=[o];function r(p,u){return s(),n("div",null,d)}const m=e(l,[["render",r],["__file","first-steps.html.vue"]]);export{m as default};
