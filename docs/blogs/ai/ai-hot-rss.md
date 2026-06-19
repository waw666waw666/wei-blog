# AI HOT 情报流机器人：从 RSS 到飞书

## 为什么写这个

我一直在用 ai-tg-radar-bot（Python 版）推送 AI 资讯，但有同事不在 TG 上，只有飞书。需要一个飞书专属版本。

正好发现 AI HOT（aihot.virxact.com）提供了 RSS feed，加上几个官方源，一个极简的 Node.js 版本就够用了。

## 技术选型

这个项目很小，选择很简单：

| 选项 | 选择 | 原因 |
|------|------|------|
| 语言 | **Node.js** | 比 Python 更轻，GitHub Actions 启动快 |
| 抓取 | **rss-parser** | 成熟稳定的 RSS 解析库 |
| HTTP | **axios** | 飞书 Webhook 推送 + 代理支持 |
| 部署 | **GitHub Actions** | 免费，cron 定时触发 |

## 架构设计

整个项目就 4 个文件：

```
src/
├── main.js    # 入口，编排流程
├── rss.js     # RSS 抓取
├── filter.js  # 去重 + 过滤
└── feishu.js  # 飞书推送
```

### 工作流程

1. **抓取** — 同时请求 5 个 RSS 源，用 `Promise.all` 并行
2. **去重** — 读取 `data/seen.json`，过滤已推送的条目
3. **评分** — 按关键词匹配度排序（可选的 AI 摘要先打分）
4. **推送** — 组装飞书消息卡片，通过 Webhook 发送
5. **缓存** — 更新 `data/seen.json`，GitHub Actions 自动提交

### 飞书消息卡片

飞书 Webhook 支持丰富的消息格式。我用的是一组消息卡片，包含标题、摘要、来源标签和时间：

```json
{
  "msg_type": "interactive",
  "card": {
    "header": { "title": { "tag": "plain_text", "content": "AI HOT" } },
    "elements": [
      { "tag": "markdown", "content": "**文章标题**" },
      { "tag": "note", "elements": [{ "tag": "plain_text", "content": "来源 · 时间" }] }
    ]
  }
}
```

## GitHub Actions 配置

```yaml
name: RSS Feishu Push

on:
  schedule:
    - cron: '0 */2 * * *'   # 每 2 小时
  workflow_dispatch:          # 支持手动触发

jobs:
  rss:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm start
        env:
          FEISHU_WEBHOOK: ${{ secrets.FEISHU_WEBHOOK }}
      - run: |
          git config user.name "bot"
          git config user.email "bot@users.noreply.github.com"
          git add data/seen.json
          git commit -m "update seen cache" || exit 0
          git push
```

关键设计：**去重缓存通过 git 持久化**。每次运行后自动 commit `seen.json`，确保下次触发时不会重复推送。

## 遇到的问题

### 1. RSS 编码问题

某些源返回的内容编码不一致。解决方案是在 `rss.js` 中统一做 decode：

```js
import { decode } from 'html-entities'
```

### 2. 飞书消息长度限制

飞书 Webhook 对消息长度有限制。长标题要截断，用 `String.prototype.slice(0, 200)`。

### 3. GitHub Actions 自动 commit

自动 commit 时需要处理「没有新内容」的情况。用 `git commit || exit 0` 避免因无变化而报错。

## 和 ai-tg-radar-bot 的对比

| 特性 | ai-tg-radar-bot (Python) | ai-hot-rss-feishu (Node) |
|------|--------------------------|--------------------------|
| 推送渠道 | Telegram | 飞书 |
| AI 摘要 | DeepSeek 必选 | OpenAI 兼容 API 可选 |
| 启动时间 | 慢（Python 环境） | 快（Node 环境） |
| 代码量 | ~500 行 | ~150 行 |

Node.js 版本更轻量，适合飞书场景。

## 总结

这个项目很小，但有几点设计我觉得不错：

1. **去重缓存 git 化** — 不需要数据库，利用 git 天然做持久化
2. **纯 GitHub Actions** — 零服务器成本
3. **极简架构** — 4 个文件，150 行代码，改起来很快

如果你也需要一个飞书 AI 情报推送机器人，可以直接 fork 改 Webhook 就能用。
