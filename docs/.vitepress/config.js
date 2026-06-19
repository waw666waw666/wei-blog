function getNav() {
  return [
    { text: '博客', link: '/blogs/' },
    { text: '项目', link: '/projects/' },
    { text: '周刊', link: '/weekly/' },
    { text: '简历', link: '/resume/' },
  ];
}

export default {
  title: 'Wei',
  description: 'Wei 的博客',
  base: '/wei-blog/',
  outDir: '../public',

  themeConfig: {
    siteTitle: 'Wei',

    nav: getNav(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/waw666waw666' }
    ],

    search: {
      provider: 'local',
    },

    sidebar: {
      '/blogs/': [
        {
          text: 'JavaScript',
          collapsed: false,
          collapsible: true,
          items: [
            { text: '数组去重', link: '/blogs/js/uniq' },
            { text: '防抖与节流', link: '/blogs/js/debounce-throttle' },
            { text: '类型判断', link: '/blogs/js/types' },
          ]
        },
        {
          text: 'Vue',
          collapsed: false,
          collapsible: true,
          items: [
            { text: '组件封装心得', link: '/blogs/vue/component' },
          ]
        },
        {
          text: 'Vue3',
          collapsed: false,
          collapsible: true,
          items: [
            { text: '组合式 API 实践', link: '/blogs/vue3/composition-api' },
          ]
        },
      ],
      '/projects/': [
        {
          text: '项目',
          collapsed: false,
          collapsible: true,
          items: [
            { text: 'claude-cmd-tutor', link: '/projects/claude-cmd-tutor' },
            { text: 'SettingsNav', link: '/projects/settingsnav' },
            { text: 'ToDo 极简待办', link: '/projects/todo' },
            { text: 'Win11 桌面提醒', link: '/projects/win11-reminder' },
            { text: '前端组件平台', link: '/projects/frontend-components' },
            { text: '文字水波纹', link: '/projects/pretext-ripple' },
            { text: 'lx-music-import', link: '/projects/lx-music' },
            { text: 'AI 情报推送', link: '/projects/ai-radar' },
            { text: 'PakePlus', link: '/projects/pakeplus' },
          ]
        }
      ],
      '/weekly/': [
        {
          text: '周刊',
          collapsed: false,
          collapsible: true,
          items: [
            { text: '第一期', link: '/weekly/01' },
          ]
        }
      ],
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Wei'
    },

    lastUpdated: 'Last Updated',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  },
  lastUpdated: true
}
