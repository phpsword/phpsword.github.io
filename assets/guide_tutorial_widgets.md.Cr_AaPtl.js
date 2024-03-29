import{_ as s,c as i,o as a,a5 as n,ae as t}from"./chunks/framework.CoNgQsep.js";const o=JSON.parse('{"title":"Widgets","description":"","frontmatter":{},"headers":[],"relativePath":"guide/tutorial/widgets.md","filePath":"guide/tutorial/widgets.md","lastUpdated":1711689985000}'),l={name:"guide/tutorial/widgets.md"},h=n(`<h1 id="widgets" tabindex="-1">Widgets <a class="header-anchor" href="#widgets" aria-label="Permalink to &quot;Widgets&quot;">​</a></h1><p>Widgets are a bit different, as they can&#39;t be services. They inherit <code>WP_Widget</code> class and are instantiated by WordPress.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>To let Sword understand where to load widgets, we need to configure them. Open <code>/config/packages/sword.yaml</code> file and add:</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes catppuccin-latte dracula vp-code"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">sword</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    # ...</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    widgets_namespace</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">App\\Wordpress\\Widget\\</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    widgets_path</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">%kernel.project_dir%/src/Wordpress/Widget/</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>By default, the namespace is <code>App\\\\Widget\\\\</code> and path <code>%kernel.project_dir%/src/Widget/</code>. You don&#39;t have to configure it if you like it this way.</p></div><h2 id="create-a-widget" tabindex="-1">Create a widget <a class="header-anchor" href="#create-a-widget" aria-label="Permalink to &quot;Create a widget&quot;">​</a></h2><p>Now create your first widget in <code>src/Wordpress/Widget/MyWidget.php</code> and fill it with this content:</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes catppuccin-latte dracula vp-code"><code><span class="line"><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">&lt;?</span><span style="--shiki-light:#4C4F69;--shiki-dark:#BD93F9;">php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">declare</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#4C4F69;--shiki-dark:#BD93F9;">strict_types</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">=</span><span style="--shiki-light:#FE640B;--shiki-dark:#BD93F9;">1</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">namespace</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> App</span><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">\\</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Wordpress</span><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">\\</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Widget</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">use</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> WP_Widget</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">final</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> class</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> MyWidget</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> extends</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> WP_Widget</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">{</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">    public</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> function</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> __construct</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">()</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    {</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#8BE9FD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        parent</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">::</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">__construct</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">            &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">my_widget</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">            &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">My Widget</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">            [</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">description</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;"> =&gt;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> __</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">This is my new widget</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">mychildtheme</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">)],</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">        );</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">    public</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> function</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> widget</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;">$</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">args</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;"> $</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">instance</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">)</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> void</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    {</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">        // ...</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">    public</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> function</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> form</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;">$</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">instance</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">)</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> void</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    {</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">        // ...</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">    public</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> function</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> update</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;">$</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">newInstance</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;"> $</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">oldInstance</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">)</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> array</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    {</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;">        $instance </span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">=</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">        // ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">        return</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;"> $instance</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You don&#39;t need to register the widget using <code>register_widget()</code> nor call <code>widgets_init</code> action. This is automatically done for you, as long as your widgets live in the namespace you configured. You can also create sub-namespaced widgets and they&#39;ll be loaded as well.</p></div><h2 id="dependency-injection" tabindex="-1">Dependency injection <a class="header-anchor" href="#dependency-injection" aria-label="Permalink to &quot;Dependency injection&quot;">​</a></h2><p>Widgets are instantiated while WordPress is loading, therefore you can&#39;t autowire services in the constructor.</p><p>This is where the helper functions <code>get_symfony_service()</code> and <code>get_symfony_parameter()</code> come into play.</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes catppuccin-latte dracula vp-code"><code><span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// ...</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">use</span><span style="--shiki-light:#4C4F69;--shiki-dark:#8BE9FD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> Twig</span><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">\\</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Environment</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">use</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> WP_Widget</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">use</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> function</span><span style="--shiki-light:#4C4F69;--shiki-dark:#8BE9FD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> Sword</span><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">\\</span><span style="--shiki-light:#4C4F69;--shiki-dark:#8BE9FD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">SwordBundle</span><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">\\</span><span style="--shiki-light:#4C4F69;--shiki-dark:#8BE9FD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">Helper</span><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">\\</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">get_symfony_parameter</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line highlighted"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">use</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> function</span><span style="--shiki-light:#4C4F69;--shiki-dark:#8BE9FD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> Sword</span><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">\\</span><span style="--shiki-light:#4C4F69;--shiki-dark:#8BE9FD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">SwordBundle</span><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">\\</span><span style="--shiki-light:#4C4F69;--shiki-dark:#8BE9FD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">Helper</span><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">\\</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">get_symfony_service</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">final</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> class</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> MyWidget</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> extends</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> WP_Widget</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">{</span></span>
<span class="line highlighted"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">    private</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> readonly</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> Environment</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;"> $twig</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line highlighted"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">    private</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> readonly</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> string</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;"> $translationDomain</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">    public</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> function</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> __construct</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">()</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    {</span></span>
<span class="line highlighted"><span style="--shiki-light:#D20F39;--shiki-dark:#BD93F9;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        $this</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">-&gt;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;">twig </span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">=</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> get_symfony_service</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Environment</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">::</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">class</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line highlighted"><span style="--shiki-light:#D20F39;--shiki-dark:#BD93F9;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        $this</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">-&gt;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;">translationDomain </span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">=</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> get_symfony_parameter</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">sword.child_theme_translation_domain</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#8BE9FD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        parent</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">::</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">__construct</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">            &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">my_widget</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">            &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">My Widget</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">            [</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">description</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;"> =&gt;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> __</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">This is my new widget</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span><span style="--shiki-light:#D20F39;--shiki-dark:#BD93F9;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> $this</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">-&gt;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;">translationDomain</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">)],</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">        );</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">    public</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> function</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> widget</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;">$</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">args</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;"> $</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">instance</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">)</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> void</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    {</span></span>
<span class="line highlighted"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">        echo</span><span style="--shiki-light:#D20F39;--shiki-dark:#BD93F9;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> $this</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">-&gt;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;">twig</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">-&gt;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">render</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span></span>
<span class="line highlighted"><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">            &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">wordpress/widget/my_widget.html.twig</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">            compact</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">args</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">instance</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">),</span></span>
<span class="line highlighted"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">        );</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>Then create a template in <code>/templates/wordpress/widget/my_widget.html.twig</code> and put this content:</p><div class="language-twig vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes catppuccin-latte dracula vp-code"><code><span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">{{</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;"> args</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;">before_title</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">|</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">raw</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;"> }}</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;">    Hello from Twig</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">{{</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;"> args</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">.</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;">after_title</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">|</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">raw</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">}}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>If you run this code, you&#39;ll get the following error:</p><p><code>The &quot;Twig\\Environment&quot; service or alias has been removed or inlined when the container was compiled.</code></p><p>The next step is to make this service public. To do so, simply add it to the list of the public services in <code>/config/packages/sword.yaml</code>:</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes catppuccin-latte dracula vp-code"><code><span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">sword</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    # ...</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;">    public_services</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;">        -</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;"> Twig\\Environment</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Now you can add your widget to the sidebar and see the result.</p><p><img src="`+t+'" alt="WordPress widget"></p>',22),e=[h];function p(k,r,F,d,g,y){return a(),i("div",null,e)}const C=s(l,[["render",p]]);export{o as __pageData,C as default};