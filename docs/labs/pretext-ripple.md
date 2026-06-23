---
title: 文字水波纹
---

# 沉浸式文字水波纹交互体验

<div class="project-links-header">
  <a href="https://waw666waw666.github.io/pretext-ripple/" target="_blank" class="badge bg-primary">👉 全屏在线体验</a>
  <a href="https://github.com/waw666waw666/pretext-ripple" target="_blank" class="badge bg-secondary">💻 GitHub 源码</a>
</div>

## 项目简介

**文字水波纹 (Pretext Ripple)** 是一个专注于视觉呈现与交互反馈的创意前端实验。当鼠标在屏幕上划过或点击时，背景会生成如水波般荡漾的涟漪效果，同时与前景的排版文字产生奇妙的光影折射与视觉互动。

这类交互非常适合作为个人博客、数字艺术展览或创意工作室官网的首屏视觉焦点，带给访问者极强的沉浸感。

## 核心特性

- 🌊 **物理级流体模拟**：基于 WebGL 或高阶 Canvas API 实现的逼真水波算法。
- 🖱️ **高灵敏度交互**：实时响应鼠标滑动、点击，生成动态波纹。
- 🎭 **文字折射效果**：水波穿过文字时，会产生真实的光学折射畸变。
- 🚀 **高性能渲染**：通过 GPU 硬件加速，保证在 60fps 帧率下流畅运行。

## 互动预览

您可以直接在下方无缝体验该项目：

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
        <iframe src="https://waw666waw666.github.io/pretext-ripple/" scrolling="no"></iframe>
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
