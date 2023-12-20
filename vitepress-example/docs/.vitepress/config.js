export default {
    title: 'VitePress作ってみた',
    description: 'デフォルト説明文',
    themeConfig: {
        sidebar: {
            '/': [
                {
                  text: 'トップページ',
                  items: [
                    { text: 'Index', link: '/' }, 
                    { text: '技術', link: '/dev/' }, 
                    { text: '趣味', link: '/hobby/' } 
                  ]
                }
              ],
            '/dev/': [
              {
                text: '技術ブログ',
                items: [
                  { text: 'Index', link: '/dev/' },
                  { text: 'dev1 blog', link: '/dev/dev1' }, 
                  { text: 'dev2 blog', link: '/dev/dev2' } 
                ]
              }
            ],
      
            '/hobby/': [
              {
                text: '趣味',
                items: [
                  { text: 'Index', link: '/hobby/' },
                  { text: 'hobby1', link: '/hobby/hobby1' }, 
                  { text: 'hobby2', link: '/hobby/hobby2' } 
                ]
              }
            ]
          }
      }
  }