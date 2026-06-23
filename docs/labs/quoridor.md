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
import { ref, onMounted, onUnmounted, computed } from 'vue'

const wrapper = ref(null)
const inlineScale = ref(1)
const fullscreenScale = ref(1)
const targetWidth = 1280
const targetHeight = 800

const isFocused = ref(false)

onMounted(() => {
  const updateScale = () => {
    if (wrapper.value && !isFocused.value) {
      inlineScale.value = wrapper.value.clientWidth / targetWidth
    }
    fullscreenScale.value = Math.min(
      (window.innerWidth * 0.95) / targetWidth,
      (window.innerHeight * 0.95) / targetHeight
    )
  }
  
  const observer = new ResizeObserver(updateScale)
  if (wrapper.value) observer.observe(wrapper.value)
  window.addEventListener('resize', updateScale)
  
  updateScale()
  
  onUnmounted(() => {
    observer.disconnect()
    window.removeEventListener('resize', updateScale)
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  })
})

const startFocus = () => {
  isFocused.value = true
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
}

const exitFocus = () => {
  isFocused.value = false
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
}

const wrapperStyle = computed(() => {
  if (isFocused.value) {
    return {
      width: targetWidth + 'px',
      height: targetHeight + 'px',
      transform: `scale(${fullscreenScale.value})`,
      transformOrigin: 'center center',
      margin: '0',
      flexShrink: 0
    }
  } else {
    return {
      width: '100%',
      height: (targetHeight * inlineScale.value) + 'px',
      position: 'relative',
      transform: 'none',
      margin: '0'
    }
  }
})

const iframeStyle = computed(() => {
  if (isFocused.value) {
    return {
      width: '100%',
      height: '100%',
      transform: 'none'
    }
  } else {
    return {
      width: targetWidth + 'px',
      height: targetHeight + 'px',
      transform: `scale(${inlineScale.value})`,
      transformOrigin: '0 0'
    }
  }
})
</script>

<div class="iframe-container">
  <ClientOnly>
  <Teleport to="body" :disabled="!isFocused">
      <div :class="isFocused ? 'fullscreen-mode' : 'inline-mode'" @click="isFocused && exitFocus()">
        <div class="iframe-wrapper" ref="wrapper" :style="wrapperStyle" @click.stop>
          <iframe src="https://waw666waw666.github.io/quoridor-game/" scrolling="no" :style="iframeStyle"></iframe>
          <div v-if="!isFocused" class="focus-overlay" @click.stop="startFocus">
            <div class="play-button">▶ 点击进入全屏游玩</div>
          </div>
        </div>
        <div v-if="isFocused" class="focus-hint-fixed">
          💡 正在全屏游玩。点击外部黑色区域退出。
        </div>
      </div>
  </Teleport>
  </ClientOnly>
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

.iframe-container {
  margin-top: 1.5rem;
}
.inline-mode {
  width: 100%;
}
.fullscreen-mode {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 2147483647 !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
}
.iframe-wrapper {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  background: var(--vp-c-bg-mute);
  transition: transform 0.2s ease-out;
}
.fullscreen-mode .iframe-wrapper {
  box-shadow: 0 0 0 2px var(--vp-c-brand), 0 20px 60px rgba(0,0,0,0.8);
  border: none;
}
.iframe-wrapper iframe {
  border: none;
  display: block;
}
.focus-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  transition: background 0.3s;
}
.focus-overlay:hover {
  background: rgba(0, 0, 0, 0.2);
}
.play-button {
  background: var(--vp-c-brand);
  color: white;
  padding: 12px 28px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  pointer-events: none;
}
.focus-hint-fixed {
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  z-index: 10000;
  pointer-events: none;
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);
  font-weight: bold;
}
</style>
