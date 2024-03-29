import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Sword',
  description: "Documentation for Sword",
  lastUpdated: true,
  head: [
    [
      'link',
      { rel: 'icon', href: '/images/favicon-sm.png' },
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-92G4XJ5HFS' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-92G4XJ5HFS');`
    ]
  ],
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'catppuccin-latte',
      dark: 'dracula',
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/favicon-sm.png',
    siteTitle: 'Sword',

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present William Arin'
    },

    nav: [
      { text: 'Guide', link: '/guide/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Sword?', link: '/guide/index.md' },
          { text: 'Installation', link: '/guide/installation.md' },
          { text: 'Tooling', link: '/guide/tooling.md' },
          { text: 'Production', link: '/guide/production.md' },
          { text: 'Configuration reference', link: '/guide/configuration.md' },
        ],
      },
      {
        text: 'Tutorial',
        items: [
          { text: 'First steps', link: '/guide/tutorial/first-steps.md' },
          { text: 'Services', link: '/guide/tutorial/services.md' },
          { text: 'Widgets', link: '/guide/tutorial/widgets.md' },
          { text: 'Translations', link: '/guide/tutorial/translations.md' },
          { text: 'Database queries', link: '/guide/tutorial/database-queries.md' },
          { text: 'Assets', link: '/guide/tutorial/assets.md' },
          { text: 'Commands for WP-CLI', link: '/guide/tutorial/commands.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/phpsword/sword-bundle' },
      { icon: 'twitter', link: 'https://twitter.com/william_arin' },
    ],

  }
})
