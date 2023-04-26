import{_ as i,M as r,p as l,q as d,R as e,t,N as n,V as s,a1 as c}from"./framework-5866ffd3.js";const h={},u=e("h1",{id:"what-is-sword",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-is-sword","aria-hidden":"true"},"#"),t(" What is Sword?")],-1),p={href:"https://roots.io/bedrock/",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"Sword takes an alternative approach. Instead of being WordPress with extra features and new file structure, it's Symfony embedding WordPress. All WordPress pages and logic, including WP-CLI, run through Symfony.",-1),_=e("p",null,"Welcome in a new era.",-1),f=e("h2",{id:"get-started",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#get-started","aria-hidden":"true"},"#"),t(" Get started")],-1),m=e("h2",{id:"features",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#"),t(" Features")],-1),w=c("<li>PHP &gt;= 8.1 (new projects will use the latest version available)</li><li>Symfony &gt;= 6.1 (new projects will use the latest version available)</li><li>WordPress &gt;= 5.6 (new projects will use the latest version available)</li><li>WordPress files hidden from the web server, one <code>/public/index.php</code> entrypoint</li><li>Bcrypt password hashing by default, without plugin</li><li><strong>Composer-based</strong> WordPress updates and vendor dependencies</li><li><strong>Dependency injection</strong> for WordPress code</li><li><strong>Synchronized auth</strong> between WordPress and Symfony</li><li><strong>Compatible</strong> with most WordPress <strong>themes</strong> and <strong>plugins</strong></li><li>Possibility to <strong>use both Symfony and WordPress assets</strong> in your theme</li>",10),y=e("h2",{id:"project-structure",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#project-structure","aria-hidden":"true"},"#"),t(" Project structure")],-1),b=e("p",null,[t("The project structure is the same as a standard Symfony project, with a new "),e("code",null,"wp"),t(" folder containing WordPress core, theme, plugins and uploads.")],-1),x=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`├── assets
├── bin
├── config
├── migrations
├── public
│  └── index.php
├── src
│  ├── Controller
│  ├── Entity
│  └── Repository
├── templates
├── tests
├── translations
├── var
└── wp
   ├── content
   │  ├── plugins
   │  ├── themes
   │  └── uploads
   ├── core
   └── wp-config.php
`)])],-1);function P(v,W){const a=r("ExternalLinkIcon"),o=r("RouterLink");return l(),d("div",null,[u,e("p",null,[t("Modern WordPress development has been around for a while with software like "),e("a",p,[t("Bedrock"),n(a)]),t(".")]),g,_,f,e("p",null,[t("Please see "),n(o,{to:"/guide/installation.html"},{default:s(()=>[t("installation")]),_:1}),t(" page for instructions on creating a new project.")]),m,e("ul",null,[w,e("li",null,[e("strong",null,[n(o,{to:"/guide/tooling.html#php-image"},{default:s(()=>[t("Docker")]),_:1})]),t(" development and production ready environments")]),e("li",null,[e("strong",null,[n(o,{to:"/guide/tooling.html#wp-cli"},{default:s(()=>[t("WP-CLI")]),_:1})]),t(" as Symfony command")])]),y,b,x])}const S=i(h,[["render",P],["__file","index.html.vue"]]);export{S as default};
