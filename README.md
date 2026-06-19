# Wei Blog

一个基于 VitePress 搭建的个人技术博客与个人简历/项目作品展示网站。

## 功能特性

*   **Markdown 首选**：所有文章、周记和简历均采用纯 Markdown 编写，具备极佳的书写体验与快速渲染。
*   **文档结构**：
    *   `blogs/`：个人技术文章与博客。
    *   `weekly/`：周记或阶段性总结。
    *   `projects/`：精选个人项目展示。
    *   `resume/`：个人技术简历。
*   **图片缩放**：集成 `medium-zoom` 插件，支持博客中所有图片的点击放大与缩放交互。
*   **编译脚本**：内置构建后处理逻辑，自动处理图片资源到静态发布目录。

## 技术栈

*   **静态站点生成**：VitePress
*   **前端框架**：Vue 3
*   **依赖库**：medium-zoom, shelljs
*   **构建管理**：npm

## 本地运行与构建

```bash
# 1. 安装依赖
npm install

# 2. 启动本地开发服务 (支持实时热更新)
npm run dev

# 3. 编译并打包静态文件 (输出到 docs/.vitepress/dist 目录)
npm run build

# 4. 在本地预览打包后的生产静态包
npm run serve
```

## 许可证

基于 [MIT License](./LICENSE) 协议开源。
