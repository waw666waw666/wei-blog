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
          <iframe src="https://waw666waw666.github.io/frontend-components-skill/" scrolling="no" :style="iframeStyle"></iframe>
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
