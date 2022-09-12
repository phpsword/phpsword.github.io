import{_ as t,r as p,o,c,a as n,b as i,e as a,d as s}from"./app.aeb0c78e.js";const l="/assets/wordpress-gray.4470172d.jpg",r="/assets/wordpress-hello-edit.ae1b5ed7.jpg",u="/assets/wordpress-hello-render.7f7b13fe.jpg",d={},k=a(`<h1 id="assets" tabindex="-1"><a class="header-anchor" href="#assets" aria-hidden="true">#</a> Assets</h1><p>This section will show you how to render Symfony assets in WordPress.</p><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>We&#39;ll simply use the default assets that Symfony gives us for a new project installation, and render a Stimulus controller in a WordPress page. You don&#39;t need to create js or css files for this tutorial.</p></div><h2 id="install-encore-and-build-assets" tabindex="-1"><a class="header-anchor" href="#install-encore-and-build-assets" aria-hidden="true">#</a> Install Encore and build assets</h2><p>A fresh Sword project doesn&#39;t have Encore installed yet. Install it by running this command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">composer</span> require symfony/webpack-encore-bundle
</code></pre></div><p>And build the assets:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span>
<span class="token function">yarn</span> dev
</code></pre></div><h2 id="render-scripts-and-styles-on-wordpress" tabindex="-1"><a class="header-anchor" href="#render-scripts-and-styles-on-wordpress" aria-hidden="true">#</a> Render scripts and styles on WordPress</h2><p>Unlike a regular Symfony app using Twig templates, we need to print the <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> tags in a WordPress template. To do that we&#39;ll hook <code>wp_head</code> for the CSS and <code>wp_footer</code> for the JavaScript.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Wordpress</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Sword<span class="token punctuation">\\</span>SwordBundle<span class="token punctuation">\\</span>Service<span class="token punctuation">\\</span>AbstractWordpressService</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>DependencyInjection<span class="token punctuation">\\</span>Attribute<span class="token punctuation">\\</span>Autowire</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>WebpackEncoreBundle<span class="token punctuation">\\</span>Asset<span class="token punctuation">\\</span>TagRenderer</span><span class="token punctuation">;</span>

<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">Assets</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractWordpressService</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span>
        <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name">Autowire</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;@webpack_encore.tag_renderer&#39;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
        <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name type-declaration">TagRenderer</span> <span class="token variable">$tagRenderer</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token function">add_action</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;wp_head&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;renderSymfonyStyles&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">add_action</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;wp_footer&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;renderSymfonyScripts&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">renderSymfonyStyles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">tagRenderer</span>
            <span class="token operator">-&gt;</span><span class="token function">renderWebpackLinkTags</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;app&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;_default&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">renderSymfonyScripts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">tagRenderer</span>
            <span class="token operator">-&gt;</span><span class="token function">renderWebpackScriptTags</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;app&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;_default&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),v={class:"custom-container tip"},m=n("p",{class:"custom-container-title"},"NOTE",-1),g=n("p",null,[s("The code above is the equivalent of calling twig functions "),n("code",null,"{{ encore_entry_link_tags('app') }}"),s(" and "),n("code",null,"{{ encore_entry_script_tags('app') }}"),s(".")],-1),h={href:"https://symfony.com/doc/current/frontend.html",target:"_blank",rel:"noopener noreferrer"},b=s("Read more about the frontend in Symfony"),y=a('<p>At this point, you should notice your page became gray, because the example CSS file <code>/assets/styles/app.css</code> sets <code>body</code> to gray.</p><p><img src="'+l+`" alt="Gray page"></p><h2 id="create-a-shortcode-for-a-stimulus-controller" tabindex="-1"><a class="header-anchor" href="#create-a-shortcode-for-a-stimulus-controller" aria-hidden="true">#</a> Create a shortcode for a Stimulus controller</h2><p>Now let&#39;s create a shortcode so we don&#39;t have to edit the page template.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Wordpress</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Sword<span class="token punctuation">\\</span>SwordBundle<span class="token punctuation">\\</span>Service<span class="token punctuation">\\</span>AbstractWordpressService</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Twig<span class="token punctuation">\\</span>Environment</span><span class="token punctuation">;</span>

<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">HelloStimulusShortcode</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractWordpressService</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span>
        <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name type-declaration">Environment</span> <span class="token variable">$twig</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token function">add_shortcode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;hello_stimulus&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;renderShortcode&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">renderShortcode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">twig</span><span class="token operator">-&gt;</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;wordpress/shortcode/hello_stimulus.html.twig&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And its template <code>/templates/wordpress/shortcodes/hello_stimulus.html.twig</code>:</p><div class="language-twig ext-twig line-numbers-mode"><pre class="language-twig"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> stimulus_controller<span class="token punctuation">(</span><span class="token string"><span class="token punctuation">&#39;</span>hello<span class="token punctuation">&#39;</span></span><span class="token punctuation">)</span> <span class="token delimiter punctuation">}}</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="insert-the-shortcode-in-post" tabindex="-1"><a class="header-anchor" href="#insert-the-shortcode-in-post" aria-hidden="true">#</a> Insert the shortcode in post</h2><p>Final step, edit <code>Hello world!</code> post and insert the shortcode in the content.</p><p><img src="`+r+'" alt="Edit Hello world! post"></p><p>And admire the rendered page:</p><p><img src="'+u+'" alt="View Hello world! post"></p>',12);function f(w,_){const e=p("ExternalLinkIcon");return o(),c("div",null,[k,n("div",v,[m,g,n("p",null,[n("a",h,[b,i(e)])])]),y])}const x=t(d,[["render",f],["__file","Assets.html.vue"]]);export{x as default};
