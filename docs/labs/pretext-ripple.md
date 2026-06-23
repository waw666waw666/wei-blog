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
const scale = ref(1)
const targetWidth = 1280
const targetHeight = 800

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

<div class="iframe-wrapper" ref="wrapper" :style="{ height: (targetHeight * scale) + 'px' }">
  <iframe src="https://waw666waw666.github.io/pretext-ripple/" :style="{ transform: 'scale(' + scale + ')' }"></iframe>
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
}
.iframe-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 1280px;
  height: 800px;
  border: none;
  transform-origin: 0 0;
}
</style>