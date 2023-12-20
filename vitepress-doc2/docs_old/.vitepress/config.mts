import { defineConfig } from 'vitepress'

//命令集：pnpm add -D vitepress vue less sass @mdit-vue/shared vitepress-markdown-timeline medium-zoom vitepress-plugin-comment-with-giscus

import timeline from "vitepress-markdown-timeline"; 

export default defineConfig({
  lang: 'zh-CN',
  title: "VitePress",
  description: "我的vitpress文档教程",

  // #region fav
  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],
  // #endregion fav

  base: '/', //网站部署到github的vitepress这个仓库里

  //cleanUrls:true, //开启纯净链接无html


  //启用深色模式
  appearance:'dark',

  //多语言
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    },
    fr: {
      label: 'French',
      lang: 'fr',
      link: '/fr/',
    }
  },

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true, 

    //时间线 
    config: (md) => {
      md.use(timeline);
    },

  },


  //主题配置
  themeConfig: {
    //左上角logo
    //logo: '/logo.png',
    //logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
    //siteTitle: false, //标题隐藏

    //设置站点标题 会覆盖title
    //siteTitle: 'Hello World',

    //导航栏
    nav: [
      { text: '表紙', link: '/' },
      {
        text: 'ガイド',
        items: [
          {
            // 分组标题1
            text: '導入',
            items: [
              { text: 'はじめに', link: '/01/preface' },
            ],
          },
          {
            // 分组标题2
            text: '基本設定',
            items: [
              { text: 'すぐに始めましょう', link: '/02/getting-started' },
              { text: '構成', link: '/02/configuration' },
              { text: 'ページ', link: '/02/page' },
              { text: 'Frontmatter', link: '/02/frontmatter' },
            ],
          },
          {
            // 分组标题3
            text: '高度なゲームプレイ',
            items: [
              { text: 'Markdown', link: '/03/markdown' },
              { text: 'チーム', link: '/03/team' },
              { text: 'アセット', link: '/03/assets' },
              { text: 'スタイル', link: '/03/style' },
              { text: 'コンポネント', link: '/03/components' },
              { text: 'プラグイン', link: '/03/plugin' },
              { text: 'アップデート', link: '/03/update' },
              { text: 'ビルドナビゲーション', link: '/03/nav/step' },
            ],
          },
        ],
      },
      { text: 'VitePress', link: 'https://vitepress.dev/' },

      {
        text: '1.0.0-rc.31',
        items: [
          { text: '更新日志', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md' },
          { text: '贡献', link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md' },
        ],
      },
    ],


    //侧边栏
    sidebar: [
      {
        //分组标题1
        text: '介绍',
        collapsed: false,
        items: [
          { text: '前言', link: '/01/preface' },
        ],
      },
      {
        //分组标题2
        text: '基础配置',
        collapsed: false,
        items: [
          { text: '快速上手', link: '/02/getting-started' },
          { text: '配置', link: '/02/configuration' },
          { text: '页面', link: '/02/page' },
          { text: 'Frontmatter', link: '/02/frontmatter' },
        ],
      },
      {
        //分组标题3
        text: '高度なゲームプレイ',
        collapsed: false,
        items: [
          { text: 'Markdown', link: '/03/markdown' },
          { text: 'チーム', link: '/03/team' },
          { text: 'アセット', link: '/03/assets' },
          { text: 'スタイル', link: '/03/style' },
          { text: 'コンポーネント', link: '/03/components' },
          { text: 'プラグイン', link: '/03/plugin' },
          { text: 'アップデート', link: '/03/update' },
          { text: 'ナビ', link: '/03/nav/step' },
        ],
      },
      {
        //分组标题3
        text: '他のサイト',
        collapsed: false,
        items: [
          { text: 'VuePress', link: 'https://vuepress.yiov.top/' },
          { text: '学習促進に関するチュートリアル', link: 'https://yiov.top/' },
          { text: 'ホームページ', link: 'https://yingyayi.com/' },
        ],
      },
    ],



    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },



    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yiov/vitepress-doc' },
      { icon: 'twitter', link: 'https://twitter.com/' }, 
      { icon: 'discord', link: 'https://chat.vitejs.dev/' }, 
    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',



    //页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 备案号：<a href="https://beian.miit.gov.cn/">京****号</a>',
    },


    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel:'返回顶部',


    //大纲显示2-3级标题
    outline:[2,3],
    //大纲顶部标题
    outlineTitle:'当前页大纲',


    //编辑本页
    //editLink: {
    //  pattern: 'https://github.com/账户名/仓库名/edit/main/docs/:path',
    //  text: '在GitHub编辑本页'
    //},
    


    //上次更新时间
    lastUpdatedText:'Last updated',


    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 

  },

  
  
})
