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
const scaleFactor = ref(1)
const isFullscreen = ref(false)

onMounted(() => {
  const updateScale = () => {
    if (!wrapper.value) return
    const rect = wrapper.value.getBoundingClientRect()
    const scaleX = rect.width / 1280
    const scaleY = rect.height / 800
    scaleFactor.value = Math.min(scaleX, scaleY)
  }
  
  const observer = new ResizeObserver(updateScale)
  if (wrapper.value) observer.observe(wrapper.value)
  window.addEventListener('resize', updateScale)
  
  updateScale()
  
  const handleFsChange = () => {
    isFullscreen.value = !!(document.fullscreenElement || document.webkitFullscreenElement)
    setTimeout(updateScale, 100) // Ensure scale is recalculated after layout
  }
  document.addEventListener('fullscreenchange', handleFsChange)
  document.addEventListener('webkitfullscreenchange', handleFsChange)
  
  onUnmounted(() => {
    observer.disconnect()
    window.removeEventListener('resize', updateScale)
    document.removeEventListener('fullscreenchange', handleFsChange)
    document.removeEventListener('webkitfullscreenchange', handleFsChange)
  })
})

const toggleFullscreen = async () => {
  if (!isFullscreen.value) {
    try {
      if (wrapper.value.requestFullscreen) {
        await wrapper.value.requestFullscreen()
      } else if (wrapper.value.webkitRequestFullscreen) {
        await wrapper.value.webkitRequestFullscreen()
      }
    } catch (err) {
      console.error("Fullscreen failed:", err)
    }
  } else {
    if (document.exitFullscreen) {
      await document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      await document.webkitExitFullscreen()
    }
  }
}
</script>

<div class="iframe-container">
  <ClientOnly>
  <div class="iframe-wrapper" ref="wrapper" :class="{ 'is-fullscreen': isFullscreen }">
      <div class="iframe-scaler" :style="{ transform: `scale(${scaleFactor})` }">
        <iframe src="https://waw666waw666.github.io/quoridor-game/" scrolling="no"></iframe>
      </div>
      <div v-if="!isFullscreen" class="focus-overlay" @click.stop="toggleFullscreen">
        <div class="play-button">▶ 开启原生全屏 (等比例缩放)</div>
      </div>
      <button v-if="isFullscreen" class="exit-btn" @click.stop="toggleFullscreen">
        ✕ 退出全屏
      </button>
  </div>
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
.iframe-wrapper {
  width: 100%;
  aspect-ratio: 1280 / 800;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
.iframe-wrapper.is-fullscreen {
  border-radius: 0;
  border: none;
}
.iframe-scaler {
  width: 1280px;
  height: 800px;
  transform-origin: center center;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.iframe-scaler iframe {
  width: 1280px;
  height: 800px;
  border: none;
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
.exit-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0,0,0,0.6);
  color: #fff;
  border: 2px solid rgba(255,255,255,0.3);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  z-index: 9999;
  transition: all 0.2s;
}
.exit-btn:hover {
  background: rgba(255,0,0,0.8);
  border-color: #fff;
}
</style>
