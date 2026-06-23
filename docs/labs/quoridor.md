---
title: 路障棋网页版
---

# 路障棋网页版 (Quoridor)

<div class="project-links-header">
  <a href="https://waw666waw666.github.io/quoridor-game/" target="_blank" class="badge bg-primary">👉 全屏在线游玩</a>
  <a href="https://github.com/waw666waw666/quoridor-game" target="_blank" class="badge bg-secondary">💻 GitHub 源码</a>
</div>

## 项目简介

**路障棋 (Quoridor)** 是一款极具策略的经典桌游。在这个网页版中，你可以同机双人对弈，也可选择与内置的 AI 切磋。通过移动棋子和放置木墙阻挡对手，最先到达对边的一方即可获胜。

项目旨在还原原汁原味的规则，同时提供丝滑的 UI 和动画交互体验。

## 核心特性

- 👥 **双人对战**：支持直接同机双人对战。
- 🤖 **内置 AI 引擎**：不同难度深度的 AI，提供挑战。
- 📜 **对局历史记录**：实时记录并支持对局回放。
- 💡 **提示系统**：支持 AI 分析并给出最佳走法建议。
- 🎨 **平滑视觉**：现代 UI 设计，动画效果和平滑响应。

## 互动预览

您可以直接在下方无缝体验该游戏：

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const wrapper = ref(null)
const scale = ref(1)
const targetWidth = 1280
const targetHeight = 800
const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().includes('firefox')

onMounted(() => {
  const updateScale = () => {
    if (wrapper.value) {
      scale.value = wrapper.value.clientWidth / targetWidth
    }
  }
  
  const observer = new ResizeObserver(updateScale)
  if (wrapper.value) observer.observe(wrapper.value)
  
  updateScale()
  
  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<div class="iframe-wrapper" ref="wrapper" :style="{ height: isFirefox ? (targetHeight * scale) + 'px' : 'auto' }">
  <iframe src="https://waw666waw666.github.io/quoridor-game/" scrolling="no" :style="isFirefox ? { transform: 'scale(' + scale + ')' } : { zoom: scale }"></iframe>
</div>

<style>
.project-links-header {
  margin: 1.5rem 0;
  display: flex;
  gap: 10px;
}
.badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none !important;
  color: white !important;
}
.bg-primary { background-color: var(--vp-c-brand); }
.bg-secondary { background-color: #333; }

.iframe-wrapper {
  width: 100%;
  margin-top: 1rem;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  background: var(--vp-c-bg-mute);
  position: relative;
  overscroll-behavior: none;
}
.iframe-wrapper iframe {
  width: 1280px;
  height: 800px;
  border: none;
  transform-origin: 0 0;
  display: block;
}
</style>