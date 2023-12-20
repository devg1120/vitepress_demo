import { version } from '../../package.json'

const sidebarGuide = () => {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'Why Exist?', link: '/guide/why-exist' },
        { text: 'What is Jsonserver?', link: '/guide/what-is-jsonserver' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Deploying', link: '/guide/deploying' },
      ],
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'API', link: '/guide/api' },
      ],
    },
    {
      text: 'Theme',
      collapsible: true,
      items: [
        { text: 'NavBar', link: '/guide/theme-nav' },
        { text: 'Sidebar', link: '/guide/theme-sidebar' },
      ],
    },
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress',
        },
      ],
    },
  ]
}

const sidebarConfig = () => {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Configs', link: '/config/app-configs' },
        { text: 'Theme Configs', link: '/config/theme-configs' },
        { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' },
      ],
    },
  ]
}

function nav() {
  return [
    { text: 'Guide', link: '/guide/what-is-jsonserver', activeMatch: '/guide/' },
    { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
        },
      ],
    },
  ]
}
export { sidebarGuide, sidebarConfig, nav }
