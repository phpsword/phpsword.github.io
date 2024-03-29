import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.CoNgQsep.js";const o=JSON.parse('{"title":"Database queries","description":"","frontmatter":{},"headers":[],"relativePath":"guide/tutorial/database-queries.md","filePath":"guide/tutorial/database-queries.md","lastUpdated":1711689985000}'),t={name:"guide/tutorial/database-queries.md"},l=n(`<h1 id="database-queries" tabindex="-1">Database queries <a class="header-anchor" href="#database-queries" aria-label="Permalink to &quot;Database queries&quot;">​</a></h1><p>In a classic WordPress theme, you would make calls to the database using <code>WP_Query</code>.</p><p>While Sword obviously doesn&#39;t remove this functionality, it provides an additional abstraction layer to query the database entities with a Doctrine-like syntax.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The full documentation for this library can be found on the dedicated Github repo: <a href="https://github.com/williarin/wordpress-interop" target="_blank" rel="noreferrer">williarin/wordpress-interop</a>.</p></div><p>To use it in Sword, just inject <code>Williarin\\WordpressInterop\\EntityManagerInterface</code> in your service, or any repository as below:</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes catppuccin-latte dracula vp-code"><code><span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// ...</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">use</span><span style="--shiki-light:#4C4F69;--shiki-dark:#8BE9FD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> Williarin</span><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">\\</span><span style="--shiki-light:#4C4F69;--shiki-dark:#8BE9FD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">WordpressInterop</span><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">\\</span><span style="--shiki-light:#4C4F69;--shiki-dark:#8BE9FD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">Bridge</span><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">\\</span><span style="--shiki-light:#4C4F69;--shiki-dark:#8BE9FD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">Repository</span><span style="--shiki-light:#7C7F93;--shiki-dark:#FF79C6;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">\\</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">PostRepository</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">final</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> class</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> SomeShortcode</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> extends</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> AbstractWordpressService</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">{</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">    public</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> function</span><span style="--shiki-light:#1E66F5;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> __construct</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">        private</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> readonly</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> PostRepository</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;"> $</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">postRepository</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    )</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;"> {</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">    public</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> function</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> initialize</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">()</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> void</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    {</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">        add_shortcode</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">some_shortcode</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;"> [</span><span style="--shiki-light:#D20F39;--shiki-dark:#BD93F9;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">$this</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">renderShortcode</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">]);</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">    public</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> function</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> renderShortcode</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">(</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">array</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;"> $</span><span style="--shiki-light:#E64553;--shiki-dark:#F8F8F2;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">parameters</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">)</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">:</span><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;"> void</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    {</span></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">        // ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;">        $parameters </span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">=</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> shortcode_atts</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">([</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">            &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">term</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;"> =&gt;</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">Travel</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">            &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">per_page</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;"> =&gt;</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">4</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">        ],</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;"> $parameters</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;">        $posts </span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">=</span><span style="--shiki-light:#D20F39;--shiki-dark:#BD93F9;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> $this</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">-&gt;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;">postRepository</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;">-&gt;</span><span style="--shiki-light:#1E66F5;--shiki-dark:#50FA7B;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">findBy</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">([</span></span>
<span class="line"><span style="--shiki-light:#8839EF;--shiki-dark:#FF79C6;">            new</span><span style="--shiki-light:#DF8E1D;--shiki-dark:#8BE9FD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> TermRelationshipCondition</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">([</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">                &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">taxonomy</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;"> =&gt;</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">tag</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">                &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">name</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;"> =&gt;</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;"> $parameters</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">[</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">term</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">],</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">            ]),</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">            &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">post_status</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;"> =&gt;</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">publish</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">        ],</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;"> [</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">            &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">comment_count</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;"> =&gt;</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">DESC</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">            &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">post_date</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#179299;--shiki-dark:#FF79C6;"> =&gt;</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;"> &#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">DESC</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">,</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">        ],</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;"> (</span><span style="--shiki-light:#8839EF;--shiki-dark:#8BE9FD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">int</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">)</span><span style="--shiki-light:#4C4F69;--shiki-dark:#F8F8F2;"> $parameters</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">[</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#40A02B;--shiki-dark:#F1FA8C;">per_page</span><span style="--shiki-light:#40A02B;--shiki-dark:#E9F284;">&#39;</span><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-dark:#6272A4;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">        // ...</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">    }</span></span>
<span class="line"><span style="--shiki-light:#7C7F93;--shiki-dark:#F8F8F2;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,6),h=[l];function k(e,p,r,F,d,y){return a(),i("div",null,h)}const c=s(t,[["render",k]]);export{o as __pageData,c as default};
