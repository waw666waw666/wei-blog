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

## 使用与写作指南

1. **新建文章**：
   - 在 `docs/blogs/` 目录下新建 `.md` 文件（如 `my-post.md`）。
   - 文件头部需编写 VitePress Frontmatter 信息（标题、日期等）。
2. **本地预览**：运行 `npm run dev`，浏览器访问 `http://localhost:5173` 实时预览写作效果。
3. **静态构建与发布**：
   - 运行 `npm run build`，编译产物将输出在 `docs/.vitepress/dist` 目录下。
   - 自定义图片资产保存在 `docs/images/`，打包脚本会自动将其处理至发布根目录下。

## 目录结构

```text
.
├── docs/
│   ├── .vitepress/            # VitePress 配置、主题与路由设置
│   ├── blogs/                 # 个人技术博客 Markdown 源文件
│   ├── weekly/                # 阶段性周记 Markdown 源文件
│   ├── projects/              # 个人项目作品展示页面
│   ├── resume/                # 个人技术简历
│   ├── public/                # 静态资源存放处
│   └── index.md               # 博客主页
├── scripts/
│   └── index.js               # 构建后图片资源拷贝脚本
├── package.json               # 依赖与打包脚本配置
└── README.md                  # 说明文档
```

## 许可证

基于 [MIT License](./LICENSE) 协议开源。
