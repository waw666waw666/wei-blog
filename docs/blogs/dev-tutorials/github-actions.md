---
tags:
  - 开发教程
  - CI/CD
  - GitHub
---
# GitHub Actions 自动化部署实战

这个博客能自动部署到 GitHub Pages，全靠 GitHub Actions。分享一下我的配置过程和一些实用技巧。

## 什么是 GitHub Actions

简单说，GitHub Actions 是 GitHub 自带的 CI/CD 工具。你可以在仓库里放一个配置文件，当某些事件发生时（比如 push），GitHub 会自动执行你定义的任务。

免费额度对于个人项目来说完全够用：每个月 2000 分钟的运行时间，我博客一次部署大概 1 分钟，一个月 30 次也才 30 分钟。

## 基本概念

- **Workflow** — 一个自动化流程
- **Job** — 工作流中的一个任务
- **Step** — 任务中的一个步骤
- **Action** — 可复用的功能模块
- **Runner** — 执行环境（GitHub 提供 Ubuntu/Windows/macOS）

## 我的部署配置

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [master]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - uses: actions/configure-pages@v4
      - run: npm ci
      - run: npx vitepress build docs
      - uses: actions/upload-pages-artifact@v3
        with:
          path: public

  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
```

### 关键点说明

1. **permissions** — Pages 部署需要写权限
2. **concurrency** — 防止同时部署冲突
3. **npm ci** — 比 npm install 更快，用于 CI 环境
4. **upload-pages-artifact** — 上传构建产物，供部署用
5. **needs: build** — 部署依赖构建成功

## 更复杂的场景

### 多环境部署

如果你有 dev/staging/prod 环境：

```yaml
name: Deploy to multiple environments

on:
  push:
    branches:
      - master    # → production
      - dev       # → staging

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: ${{ github.ref == 'refs/heads/master' && 'production' || 'staging' }}
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      - run: echo "Deploying to ${{ github.ref == 'refs/heads/master' && 'prod' || 'staging' }}"
```

### 定时任务

用 cron 触发，比如每周清理日志：

```yaml
on:
  schedule:
    - cron: '0 0 * * 0'  # 每周日凌晨
```

## 加速构建的技巧

### 缓存依赖

```yaml
- uses: actions/cache@v4
  with:
    path: |
      **/node_modules
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
```

加了缓存后，我的部署时间从 2 分钟降到了 40 秒。

### 并行执行

独立的任务并行跑：

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - run: npm run lint

  test:
    runs-on: ubuntu-latest
    steps:
      - run: npm run test

  build:
    needs: [lint, test]  # 等 lint 和 test 都过了才构建
    steps:
      - run: npm run build
```

## 实用技巧

### 1. 使用环境变量

```yaml
steps:
  - name: Deploy
    env:
      NODE_ENV: production
      API_KEY: ${{ secrets.API_KEY }}
    run: npm run deploy
```

敏感信息用 Secrets 存，不要硬编码在配置文件里。

### 2. 错误通知

部署失败时通知自己：

```yaml
steps:
  - run: npm run build
  - if: failure()
    run: echo "构建失败！" | mail -s "部署失败" your@email.com
```

### 3. 手动触发

除了自动触发，也支持手动：

```yaml
on:
  workflow_dispatch:  # 可以在 GitHub 页面上手动点
```

## 常见问题

### 部署后页面空白
大概率是 base path 没配置对。检查框架的 base 配置和 Pages 的路径设置。

### Action 运行失败
先在本地测试一下构建命令能不能跑通。

### 权限不足
检查 workflow 的 permissions 配置，Pages 部署需要 write 权限。

## 总结

GitHub Actions 是一个被低估的功能。它不只是 CI/CD 工具，还能做很多事情：定时任务、自动化脚本、数据采集等。而且免费额度对个人项目来说绰绰有余。

建议每个开发者都花点时间学学 GitHub Actions，投入产出比很高。
