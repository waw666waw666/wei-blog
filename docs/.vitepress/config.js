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
          text: 'AI 教程',
          collapsed: false,
          collapsible: true,
          items: [
            { text: 'Claude Code 入门到精通', link: '/blogs/ai-tutorials/claude-code-guide' },
            { text: 'Prompt 工程实战', link: '/blogs/ai-tutorials/ai-prompt-engineering' },
            { text: '搭建个人 AI 工作流', link: '/blogs/ai-tutorials/ai-workflow' },
            { text: 'DeepSeek 使用指南', link: '/blogs/ai-tutorials/deepseek-guide' },
            { text: 'AI 做独立开发的经验', link: '/blogs/ai-tutorials/indie-dev-ai' },
          ]
        },
        {
          text: '开发教程',
          collapsed: false,
          collapsible: true,
          items: [
            { text: 'VitePress 搭建博客', link: '/blogs/dev-tutorials/vitepress-guide' },
            { text: 'GitHub Actions 自动化', link: '/blogs/dev-tutorials/github-actions' },
            { text: 'Git 实用技巧', link: '/blogs/dev-tutorials/git-basics' },
          ]
        },
        {
          text: '项目实战',
          collapsed: false,
          collapsible: true,
          items: [
            { text: 'CLI 学习平台', link: '/blogs/projects/cli-tutor' },
            { text: '前端组件平台', link: '/blogs/projects/frontend-components' },
            { text: '文字水波纹', link: '/blogs/projects/pretext-ripple' },
          ]
        },
        {
          text: '工具',
          collapsed: false,
          collapsible: true,
          items: [
            { text: 'Windows 设置启动器', link: '/blogs/projects/settings-nav' },
            { text: '极简待办应用', link: '/blogs/projects/todo-app' },
            { text: 'Win11 桌面提醒', link: '/blogs/projects/win11-reminder' },
            { text: '歌单迁移工具', link: '/blogs/tools/lx-music' },
          ]
        },
        {
          text: 'AI 与自动化',
          collapsed: false,
          collapsible: true,
          items: [
            { text: 'AI 情报推送系统', link: '/blogs/ai/ai-radar' },
            { text: 'AI HOT 情报流', link: '/blogs/ai/ai-hot-rss' },
          ]
        },
        {
          text: '跨平台开发',
          collapsed: false,
          collapsible: true,
          items: [
            { text: '跨平台打包方案', link: '/blogs/cross-platform/pakeplus' },
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
            { text: 'AI HOT 情报流', link: '/projects/ai-hot-rss-feishu' },
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
