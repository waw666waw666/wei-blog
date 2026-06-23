---
title: 路障棋网页版
---
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const wrapper = ref(null)
const scale = ref(1)
const targetWidth = 1280
const targetHeight = 850
let observer = null

const updateScale = () => {
  if (wrapper.value) {
    const cw = wrapper.value.clientWidth
    if (cw > 0) {
      scale.value = cw / targetWidth
    }
  }
}

onMounted(() => {
  nextTick(() => {
    updateScale()
    if (wrapper.value) {
      // Use ResizeObserver for highly reliable size tracking
      observer = new ResizeObserver(() => {
        updateScale()
      })
      observer.observe(wrapper.value)
    }
  })
})

onUnmounted(() => {
  if (observer && wrapper.value) {
    observer.unobserve(wrapper.value)
  }
})
</script>
# 路障棋网页版 (Quoridor)

<div class="project-links-header">
  <a href="https://waw666waw666.github.io/quoridor-game/" target="_blank" class="badge bg-primary">👉 全屏在线游玩</a>
  <a href="https://github.com/waw666waw666/quoridor-game" target="_blank" class="badge bg-secondary">🔗 GitHub 源码</a>
</div>

## 项目简介

**路障棋 (Quoridor)** 是一款极其经典的抽象策略桌游。在这个由现代网页技术构建的线上版本中，玩家可以在同一台设备上进行双人博弈，也可以选择与内置的 AI 对局。通过巧妙地移动棋子和放置墙壁，率先到达对岸的一方即可获胜。

该项目在保留桌游原汁原味核心规则的同时，加入了极具质感的 UI 设计和丝滑的交互动画。

## 核心特性

- 🎮 **双人对战**：支持本地双人同屏对战，完美复刻线下桌游体验。
- 🤖 **单机 AI 对局**：内嵌 AI 引擎，提供不同难度选择，随时随地享受智力博弈。
- 📜 **对局历史记录**：侧边栏实时记录双方动作，支持完整对局回放。
- ↩️ **悔棋与提示**：支持随时撤销上一步，并带有 AI 支招功能帮助你打破僵局。
- 💅 **精美视觉设计**：现代化的拟物风设计，操作音效与动画一应俱全。

</style>

## 互动预览

您可以直接在下方无缝体验该项目：
<div class="iframe-wrapper" ref="wrapper" :style="{ height: (targetHeight * scale) + 'px' }">
  <iframe src="https://waw666waw666.github.io/quoridor-game/" :style="{ transform: 'scale(' + scale + ')' }"></iframe>
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
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  position: relative;
  background: var(--vp-c-bg-soft);
  margin-top: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
.iframe-wrapper iframe {
  width: 1280px;
  height: 850px;
  transform-origin: 0 0;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.1s ease-out;
}
</style>