# VitePress 从零搭建个人博客

这个博客就是我用 VitePress 搭的。分享一下搭建过程，和一些自定义的小技巧。

## 为什么选 VitePress

选静态站点生成器的时候，我对比了几个主流方案：

| 方案 | 优点 | 缺点 |
|------|------|------|
| VitePress | 轻量、Vue 生态、速度快 | 生态不如 Docusaurus |
| Docusaurus | 功能全面、成熟 | 有点重、React 生态 |
| Hugo | 极快、单文件 | Go 模板学习成本高 |
| Jekyll | GitHub Pages 原生支持 | Ruby 生态、慢 |

最后选了 VitePress，主要原因是：**轻量**。一个 npm install 就能跑起来，Markdown 写文章，不需要折腾。

## 快速开始

```bash
# 初始化项目
mkdir my-blog
cd my-blog
npm init -y

# 安装 VitePress
npm install -D vitepress vue

# 创建第一篇文章
mkdir docs
echo '# Hello World' > docs/index.md

# 启动
npx vitepress dev docs
```

浏览器打开本地地址就能看到页面了。

## 目录结构

我博客的目录结构：

```
wei-blog/
├── docs/
│   ├── .vitepress/
│   │   ├── config.js      # 核心配置
│   │   └── theme/         # 主题自定义
│   ├── blogs/             # 博客文章
│   ├── projects/          # 项目展示
│   ├── weekly/            # 周刊
│   ├── resume/            # 简历
│   ├── public/            # 静态资源
│   └── index.md           # 首页
├── .github/workflows/     # 自动部署
├── package.json
└── .gitignore
```

## 配置详解

### 基础配置

```js
// docs/.vitepress/config.js
export default {
  title: 'Wei',
  description: '个人技术博客',
  base: '/wei-blog/',  // GitHub Pages 路径
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'Wei',
    nav: [...],        // 导航栏
    sidebar: {...},    // 侧边栏
    footer: {...},     // 页脚
    search: {
      provider: 'local' // 本地搜索
    }
  }
}
```

base 路径是个坑——如果部署在 GitHub Pages 的子路径下，一定要设置 base。不然样式和资源会加载失败。

### 导航栏

导航栏支持多级：

```js
nav: [
  { text: '博客', link: '/blogs/' },
  { text: '项目', link: '/projects/' },
  { text: '周刊', link: '/weekly/' },
  { text: '简历', link: '/resume/' },
]
```

### 侧边栏

侧边栏按路径匹配：

```js
sidebar: {
  '/blogs/': [
    {
      text: 'AI 教程',
      items: [
        { text: 'Claude Code 入门', link: '/blogs/ai-tutorials/claude-code-guide' },
      ]
    }
  ]
}
```

## 自定义主题

### 添加图片缩放

VitePress 默认不支持点击图片放大。用 medium-zoom 插件解决：

```js
// docs/.vitepress/theme/index.js
import mediumZoom from 'medium-zoom'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    onMounted(() => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    })
  }
}
```

### 自定义 CSS

覆写默认样式：

```css
/* docs/.vitepress/theme/styles/index.css */
.medium-zoom-overlay {
  z-index: 99;
}
```

## 部署到 GitHub Pages

我的部署方案是用 GitHub Actions，自动构建部署。

### 配置 workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to Pages
on:
  push:
    branches: [master]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npx vitepress build docs
      - uses: actions/upload-pages-artifact@v3
        with:
          path: public
      - uses: actions/deploy-pages@v4
```

注意 build 命令的输出路径要和 outDir 一致。

## 写作体验

### Markdown 增强

VitePress 支持 Vue 组件嵌入 Markdown，这是我用得比较多的功能：

```markdown
## 代码示例

::: code-group

```bash
# 安装
npm install
```

```js
// 运行
console.log('hello')
```

:::
```

### Frontmatter

每篇文章可以加 YAML 头部元数据：

```markdown
---
title: 文章标题
date: 2026-06-19
tags:
  - VitePress
  - 教程
---
```

### 图片处理

图片放在 `docs/public/images/` 下，引用时用 `/images/xxx.jpg`。

路径有个坑：本地开发时路径是相对于根目录的，但部署后要加上 base path。所以统一用绝对路径（以 / 开头）是最稳妥的。

## 踩坑记录

1. **base path 问题** — 部署后发现样式没了，查了半天是 base 没设置对
2. **图片路径** — 本地跑得好好的，部署后图片全裂了。解决方案：统一用绝对路径
3. **中文搜索** — VitePress 内置搜索对中文支持不太理想，不过基本能用
4. **构建缓存** — 有时候改了配置不生效，删掉 docs/.vitepress/cache 重新构建

## 总结

VitePress 是我用过最舒服的静态博客工具。配置简单、生态够用、Vue 加持让自定义变得很容易。如果你正在选博客工具，推荐试试。
