import{_ as a,r,o as d,c as l,a as e,b as n,w as s,d as t,e as c}from"./app.063010ee.js";const h={},u=e("h1",{id:"what-is-sword",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-is-sword","aria-hidden":"true"},"#"),t(" What is Sword?")],-1),_=t("Modern WordPress development has been around for a while with software like "),p={href:"https://roots.io/bedrock/",target:"_blank",rel:"noopener noreferrer"},g=t("Bedrock"),f=t("."),m=e("p",null,"Sword takes an alternative approach. Instead of being WordPress with extra features and new file structure, it's Symfony embedding WordPress. All WordPress pages and logic, including WP-CLI, run through Symfony.",-1),w=e("p",null,"Welcome in a new era.",-1),y=e("h2",{id:"get-started",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#get-started","aria-hidden":"true"},"#"),t(" Get started")],-1),x=t("Please see "),b=t("installation"),P=t(" page for instructions on creating a new project."),W=e("h2",{id:"features",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#"),t(" Features")],-1),v=c("<li>PHP &gt;= 8.1 (latest version for new projects)</li><li>Symfony &gt;= 6.1 (latest version for new projects)</li><li>WordPress &gt;= 5.6 (latest version for new projects)</li><li>WordPress files hidden from the web server, one <code>/public/index.php</code> entrypoint</li><li><strong>Composer-based</strong> WordPress updates and vendor dependencies</li><li><strong>Dependency injection</strong> for WordPress code</li><li><strong>Synchronized auth</strong> between WordPress and Symfony</li><li><strong>Compatible</strong> with most WordPress <strong>themes</strong> and <strong>plugins</strong></li><li>Possibility to <strong>use both Symfony and WordPress assets</strong> in your theme</li>",9),k=t("Docker"),S=t(" development and production ready environments"),j=t("WP-CLI"),C=t(" as Symfony command"),L=e("h2",{id:"project-structure",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#project-structure","aria-hidden":"true"},"#"),t(" Project structure")],-1),I=e("p",null,[t("The project structure is the same as a standard Symfony project, with a new "),e("code",null,"wp"),t(" folder containing WordPress core, theme, plugins and uploads.")],-1),B=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`\u251C\u2500\u2500 assets
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
`)])],-1);function E(N,V){const i=r("ExternalLinkIcon"),o=r("RouterLink");return d(),l("div",null,[u,e("p",null,[_,e("a",p,[g,n(i)]),f]),m,w,y,e("p",null,[x,n(o,{to:"/guide/installation.html"},{default:s(()=>[b]),_:1}),P]),W,e("ul",null,[v,e("li",null,[e("strong",null,[n(o,{to:"/guide/tooling.html#php-image"},{default:s(()=>[k]),_:1})]),S]),e("li",null,[e("strong",null,[n(o,{to:"/guide/tooling.html#wp-cli"},{default:s(()=>[j]),_:1})]),C])]),L,I,B])}const D=a(h,[["render",E],["__file","index.html.vue"]]);export{D as default};
