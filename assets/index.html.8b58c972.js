import{_ as a,r as n,o as i,c as d,a as e,b as o,w as c,d as t,e as l}from"./app.28e263b9.js";const h={},p=e("h1",{id:"what-is-sword",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-is-sword","aria-hidden":"true"},"#"),t(" What is Sword?")],-1),u=t("Modern WordPress development has been around for a while with software like "),g={href:"https://roots.io/bedrock/",target:"_blank",rel:"noopener noreferrer"},_=t("Bedrock"),f=t("."),m=e("p",null,"Sword takes an alternative approach. Instead of being WordPress with extra features and new file structure, it's Symfony embedding WordPress. All WordPress pages and logic, including WP-CLI, run through Symfony.",-1),w=e("p",null,"Welcome in a new era.",-1),y=e("h2",{id:"get-started",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#get-started","aria-hidden":"true"},"#"),t(" Get started")],-1),x=t("Please see "),b=t("installation"),P=t(" page for instructions on creating a new project."),W=l(`<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><ul><li>PHP &gt;= 8.1 (latest version for new projects)</li><li>Symfony &gt;= 6.1 (latest version for new projects)</li><li>WordPress &gt;= 5.6 (latest version for new projects)</li><li>WordPress files hidden from the web server, one <code>/public/index.php</code> entrypoint</li><li><strong>Composer-based</strong> WordPress updates and vendor dependencies</li><li><strong>Dependency injection</strong> for WordPress code</li><li><strong>Synchronized auth</strong> between WordPress and Symfony</li><li><strong>Compatible</strong> with most WordPress <strong>themes</strong> and <strong>plugins</strong></li><li>Possibility to <strong>use both Symfony and WordPress assets</strong> in your theme</li><li><strong>Docker</strong> development and production ready environments</li><li><strong>WP-CLI</strong> as Symfony command</li></ul><h2 id="project-structure" tabindex="-1"><a class="header-anchor" href="#project-structure" aria-hidden="true">#</a> Project structure</h2><p>The project structure is the same as a standard Symfony project, with a new <code>wp</code> folder containing WordPress core, theme, plugins and uploads.</p><div class="language-text ext-text"><pre class="language-text"><code>\u251C\u2500\u2500 assets
\u251C\u2500\u2500 bin
\u251C\u2500\u2500 config
\u251C\u2500\u2500 migrations
\u251C\u2500\u2500 public
\u2502  \u2514\u2500\u2500 index.php
\u251C\u2500\u2500 src
\u2502  \u251C\u2500\u2500 Controller
\u2502  \u251C\u2500\u2500 Entity
\u2502  \u2514\u2500\u2500 Repository
\u251C\u2500\u2500 templates
\u251C\u2500\u2500 tests
\u251C\u2500\u2500 translations
\u251C\u2500\u2500 var
\u2514\u2500\u2500 wp
   \u251C\u2500\u2500 content
   \u2502  \u251C\u2500\u2500 plugins
   \u2502  \u251C\u2500\u2500 themes
   \u2502  \u2514\u2500\u2500 uploads
   \u251C\u2500\u2500 core
   \u2514\u2500\u2500 wp-config.php
</code></pre></div>`,5);function v(k,S){const s=n("ExternalLinkIcon"),r=n("RouterLink");return i(),d("div",null,[p,e("p",null,[u,e("a",g,[_,o(s)]),f]),m,w,y,e("p",null,[x,o(r,{to:"/guide/installation.html"},{default:c(()=>[b]),_:1}),P]),W])}const C=a(h,[["render",v],["__file","index.html.vue"]]);export{C as default};
