---
title: 前端组件展示
---

# 前端组件功能展示平台

<div class="project-links-header">
  <a href="https://waw666waw666.github.io/frontend-components-skill/" target="_blank" class="badge bg-primary">👉 全屏在线体验</a>
  <a href="https://github.com/waw666waw666/frontend-components-skill" target="_blank" class="badge bg-secondary">💻 GitHub 源码</a>
</div>

## 项目简介

**前端组件展示平台** 是一个集合了多种实用前端组件和技巧的独立页面。这个项目旨在将平时开发中积累的优质 UI 交互、动画效果和组件逻辑沉淀下来，形成一个随时可复用、可预览的展示库。

在这里，你可以直接互动体验各种组件的实际运行效果，为你的下一个项目寻找灵感。

## 核心特性

- 🧩 **组件化设计**：将复杂功能拆解为独立的小组件，易于理解和复用。
- ⚡ **现代交互**：包含多种流行的前端动画和交互模式。
- 🛠️ **源码直达**：每个组件都可以通过查阅源码轻松迁移到其他项目。
- 📱 **响应式布局**：完美适配不同尺寸的屏幕。

## 互动预览

您可以直接在下方无缝体验该项目：

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'

const wrapper = ref(null)
const scaleFactor = ref(1)
const isFullscreen = ref(false)
let observer = null

const updateScale = () => {
  if (!wrapper.value) return
  const rect = wrapper.value.getBoundingClientRect()
  const scaleX = rect.width / 1280
  const scaleY = rect.height / 800
  scaleFactor.value = Math.min(scaleX, scaleY)
}

watch(wrapper, (newVal) => {
  if (newVal) {
    updateScale()
    if (!observer) {
      observer = new ResizeObserver(updateScale)
    }
    observer.observe(newVal)
  }
})

onMounted(() => {
  window.addEventListener('resize', updateScale)
  
  const handleFsChange = () => {
    isFullscreen.value = !!(document.fullscreenElement || document.webkitFullscreenElement)
    setTimeout(updateScale, 100)
  }
  document.addEventListener('fullscreenchange', handleFsChange)
  document.addEventListener('webkitfullscreenchange', handleFsChange)
  
  onUnmounted(() => {
    if (observer) observer.disconnect()
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
        <iframe src="https://waw666waw666.github.io/frontend-components-skill/" scrolling="no"></iframe>
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
