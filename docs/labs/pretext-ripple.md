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

</div>
  <div v-if="isFocused" class="focus-hint">
    💡 正在沉浸游玩，锁定网页滚动。点击游戏外部任意区域即可退出。
  </div>
</div>

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
      (window.innerWidth * 0.9) / targetWidth,
      (window.innerHeight * 0.9) / targetHeight
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
      transform: `translate(-50%, -50%) scale(${fullscreenScale.value})`,
      position: 'fixed',
      top: '50%',
      left: '50%',
      zIndex: 9999,
      transformOrigin: 'center center'
    }
  } else {
    return {
      width: '100%',
      height: (targetHeight * inlineScale.value) + 'px',
      position: 'relative',
      transform: 'none'
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
  <Teleport to="body" :disabled="!isFocused">
  <div v-if="isFocused" class="fullscreen-backdrop" @click="exitFocus"></div>
  <div class="iframe-wrapper" ref="wrapper" :style="wrapperStyle" :class="{ 'is-focused': isFocused }">
      <iframe src="https://waw666waw666.github.io/pretext-ripple/" scrolling="no" :style="iframeStyle"></iframe>
      <div v-if="!isFocused" class="focus-overlay" @click.stop="startFocus">
        <div class="play-button">▶ 点击进入全屏游玩</div>
      </div>
  </div>
  <div v-if="isFocused" class="focus-hint-fixed">
      💡 正在全屏游玩。点击外部黑色区域退出。
  </div>
  </Teleport>
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
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  background: var(--vp-c-bg-mute);
  transition: all 0.3s;
}
.iframe-wrapper.is-focused {
  box-shadow: 0 0 0 2px var(--vp-c-brand), 0 20px 60px rgba(0,0,0,0.5);
}
.fullscreen-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(4px);
  z-index: 9998;
}
.focus-hint-fixed {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  z-index: 10000;
  pointer-events: none;
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);
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
</style>
