import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'en-US',
    title: 'Sword',
    description: 'Documentation for Sword',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/images/favicon-sm.png'
            },
        ],
    ],
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
            },
        }),
        googleAnalyticsPlugin({
            id: 'G-92G4XJ5HFS',
        }),
    ],

    theme: defaultTheme({
        logo: './images/favicon-sm.png',
        repo: 'phpsword/sword-bundle',
        docsRepo: 'phpsword/phpword.github.io',
        docsBranch: 'master',
        docsDir: 'docs',
        contributors: false,
        navbar: [
            {
                text: 'Guide',
                link: '/guide/',
            },
        ],
        sidebar: [
            {
                text: 'Introduction',
                children: [
                    '/guide/index.md',
                    '/guide/installation.md',
                    '/guide/tooling.md',
                ],
            },
            {
                text: 'Tutorial',
                children: [
                    '/guide/tutorial/first-steps.md',
                    '/guide/tutorial/services.md',
                    '/guide/tutorial/widgets.md',
                    '/guide/tutorial/translations.md',
                ],
            },
        ],
    }),
});
