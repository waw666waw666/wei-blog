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
import { ref, onMounted, onUnmounted } from 'vue'

const wrapper = ref(null)
const scale = ref(1)
const targetWidth = 1280
const targetHeight = 800
const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().includes('firefox')

const isFocused = ref(false)
let scrollTimeout = null

onMounted(() => {
  const updateScale = () => {
    if (wrapper.value) {
      scale.value = wrapper.value.clientWidth / targetWidth
    }
  }
  
  const observer = new ResizeObserver(updateScale)
  if (wrapper.value) observer.observe(wrapper.value)
  
  updateScale()
  
  const handleOutsideClick = (e) => {
    if (isFocused.value && wrapper.value && !wrapper.value.contains(e.target)) {
      isFocused.value = false
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }
  
  window.addEventListener('click', handleOutsideClick, true)
  
  onUnmounted(() => {
    observer.disconnect()
    window.removeEventListener('click', handleOutsideClick, true)
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    clearTimeout(scrollTimeout)
  })
})

const startFocus = () => {
  if (wrapper.value) {
    wrapper.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  scrollTimeout = setTimeout(() => {
    isFocused.value = true
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
  }, 300)
}
</script>

<div class="iframe-container" :class="{ 'is-focused': isFocused }">
  <div class="iframe-wrapper" ref="wrapper" :style="{ height: isFirefox ? (targetHeight * scale) + 'px' : 'auto' }">
    <iframe src="https://waw666waw666.github.io/frontend-components-skill/" scrolling="no" :style="isFirefox ? { transform: 'scale(' + scale + ')' } : { zoom: scale }"></iframe>
    
    <div v-if="!isFocused" class="focus-overlay" @click.stop="startFocus">
      <div class="play-button">▶ 点击进入沉浸游玩</div>
    </div>
  </div>
  <div v-if="isFocused" class="focus-hint">
    💡 正在沉浸游玩，锁定网页滚动。点击游戏外部任意区域即可退出。
  </div>
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
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  background: var(--vp-c-bg-mute);
  position: relative;
  overscroll-behavior: none;
  transition: all 0.3s;
}
.is-focused .iframe-wrapper {
  box-shadow: 0 0 0 2px var(--vp-c-brand), 0 10px 40px rgba(0,0,0,0.4);
  z-index: 100;
}
.iframe-wrapper iframe {
  width: 1280px;
  height: 800px;
  border: none;
  transform-origin: 0 0;
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
  backdrop-filter: blur(2px);
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
.focus-hint {
  text-align: center;
  margin-top: 0.8rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  animation: fadeIn 0.5s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
