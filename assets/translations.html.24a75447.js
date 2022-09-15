import{_ as l,r as t,o as c,c as r,a as n,b as a,w as o,d as s,e as p}from"./app.e9d564d5.js";const d={},u=n("h1",{id:"translations",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#translations","aria-hidden":"true"},"#"),s(" Translations")],-1),h=n("p",null,"WordPress plugins such as Loco Translate will parse your theme source code to find new strings. But that only works for files present in your child theme directory, not for Symfony files.",-1),k=n("p",null,"With Sword, you'll translate WordPress just like you would translate Symfony. This will allow you to work with fallback locales out of the box and manage your translations with YAML files.",-1),m=n("h2",{id:"about-child-theme-translation-domain",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#about-child-theme-translation-domain","aria-hidden":"true"},"#"),s(" About child theme translation domain")],-1),v=s("We've talked about configuring the child theme translation domain in the "),b=s("First steps"),_=s(" section."),f=n("p",null,[s("This is useful for legacy translations or if you want to continue to work with a "),n("code",null,".po"),s(" file. But this is useless for the new Sword translations as they won't be synchronized.")],-1),y=n("h2",{id:"symfony-translator",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#symfony-translator","aria-hidden":"true"},"#"),s(" Symfony translator")],-1),g=n("p",null,[s("For new translations, it's recommanded to use Symfony translator by injecting "),n("code",null,"TranslatorInterface"),s(" in your services.")],-1),w=s("We'll take the "),S=n("code",null,"Sidebars",-1),x=s(" service we've created in the "),T=s("Service"),W=s(" section and adapt it for Symfony."),B=p(`<div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Translation<span class="token punctuation">\\</span>TranslatorInterface</span><span class="token punctuation">;</span>

<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">Sidebars</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractWordpressService</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span>
        <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name type-declaration">TranslatorInterface</span> <span class="token variable">$translator</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ...</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">registerSidebars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token function">register_sidebar</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">translator</span><span class="token operator">-&gt;</span><span class="token function">trans</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;sidebars.new_sidebar.name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token comment">// ...</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Assuming you&#39;ve installed WordPress with <code>en_US</code> locale, create your first translation file <code>/translations/messages.en.yaml</code>:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">sidebars</span><span class="token punctuation">:</span>
    <span class="token key atrule">new_sidebar</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> My new sidebar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This file will be the fallback for all English locales such as <code>en_US</code>, <code>en_GB</code>, <code>en_IE</code>, etc.</p>`,4),I={href:"https://symfony.com/doc/current/translation.html",target:"_blank",rel:"noopener noreferrer"},L=s("Read more about the translations in Symfony");function E(A,N){const e=t("RouterLink"),i=t("ExternalLinkIcon");return c(),r("div",null,[u,h,k,m,n("p",null,[v,a(e,{to:"/guide/tutorial/first-steps.html#create-a-child-theme"},{default:o(()=>[b]),_:1}),_]),f,y,g,n("p",null,[w,S,x,a(e,{to:"/guide/tutorial/services.html"},{default:o(()=>[T]),_:1}),W]),B,n("p",null,[n("a",I,[L,a(i)])])])}const C=l(d,[["render",E],["__file","translations.html.vue"]]);export{C as default};