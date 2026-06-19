# AI HOT 情报流机器人

**AI 行业极简情报推送**

<span style="display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border:1px solid #d0d7de;border-radius:6px;font-size:14px;">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#24292f"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
  <a href="https://github.com/waw666waw666/ai-hot-rss-feishu" target="_blank" style="color:#0969da;text-decoration:none;">waw666waw666/ai-hot-rss-feishu</a>
</span>

## 项目简介

RSS feeds → GitHub Actions → 去重/过滤/可选 AI 摘要 → 飞书群机器人。专注于 AI 行业情报的极简推送系统。

## 技术栈

Node.js, GitHub Actions, RSS, Axios

## 工作流

```
RSS 源集合 → rss-parser 抓取 → 去重过滤 → 可选 AI 摘要 → 飞书 Webhook
```

### 1. 数据采集

订阅 5 个核心 RSS 源：AI HOT、OpenAI News、Claude Status、Google Blog、GitHub Changelog。

### 2. 去重过滤

通过 `data/seen.json` 持久化已推送条目缓存，避免重复推送。支持关键词过滤。

### 3. AI 摘要

可选集成 OpenAI 兼容 API，对每篇文章生成一句话摘要。

### 4. 自动部署

GitHub Actions 定时运行，每天自动推送 AI 行业最新动态。

## 特点

- 纯 Node.js，无外部服务依赖
- 去重缓存自动 commit，不丢记录
- 支持关键词过滤，只推你关心的
- 完全免费（GitHub Actions 免费额度）
