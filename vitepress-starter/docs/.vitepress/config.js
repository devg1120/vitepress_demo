import { defineConfig } from 'vitepress'
import { sidebarGuide, sidebarConfig,nav } from './util'
export default defineConfig({
  lang: 'en-US',
  title: 'Blog',
  base: '/vitepress-starter/',
  description: 'Get a full fake REST API with zero coding in less than 30 seconds.',
  // markdown: {
  //   theme: 'material-palenight',
  //   lineNumbers: true,
  // },
  cleanUrls: 'without-subfolders',
  lastUpdated: true,
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/typicode/json-server#getting-started' },
      { icon: 'twitter', link: 'https://github.com/vuejs/vitepress' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="37.07" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 198"><path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path><path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path><path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path></svg>',
        },
        link: 'https://github.com/vuejs/vitepress',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Eli Xiao',
    },
  },
})
