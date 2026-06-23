---
title: 文字水波纹
---
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const wrapper = ref(null)
const scale = ref(1)
const targetWidth = 1280
const targetHeight = 850

const updateScale = () => {
  if (wrapper.value) {
    scale.value = wrapper.value.clientWidth / targetWidth
  }
}

onMounted(() => {
  updateScale()
  window.addEventListener('resize', updateScale)
  setTimeout(updateScale, 500)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScale)
})
</script>

# 沉浸式文字水波纹交互体验

<div class="project-links-header">
  <a href="https://waw666waw666.github.io/pretext-ripple/" target="_blank" class="badge bg-primary">👉 全屏在线体验</a>
  <a href="https://github.com/waw666waw666/pretext-ripple" target="_blank" class="badge bg-secondary">🔗 GitHub 源码</a>
</div>

## 项目简介

**文字水波纹 (Pretext Ripple)** 是一个完全基于原生 Canvas API 打造的高性能视觉互动项目。它利用 2D 离散波动方程算法，实时模拟水波荡漾的物理扩散效果。当用户的鼠标或者手指在屏幕上滑动时，会产生栩栩如生的水波折射。

该项目没有任何繁重的 3D 库依赖，仅通过像素级渲染和深度缓冲区映射即可达到惊艳的沉浸感。

## 核心特性

- 🌊 **真实物理模拟**：基于严谨的 2D 物理波动方程演算，水波扩散自然。
- 🖱️ **高帧率鼠标互动**：监听轨迹与速度，随着光标的滑动产生对应强度的涟漪。
- 📱 **多端触摸适配**：完美适配移动端触屏，多指触控依然丝滑。
- ⚡ **原生 Canvas 渲染**：不依赖 WebGL，极低性能开销的高清像素操作。
- 🎨 **可自定义折射率**：支持通过代码调节文字扭曲程度和水波阻力。

</style>

## 互动预览

您可以直接在下方无缝体验该项目：

<ClientOnly>
<div class="iframe-wrapper" ref="wrapper" :style="{ height: (targetHeight * scale) + 'px' }">
  <iframe src="https://waw666waw666.github.io/pretext-ripple/" :style="{ transform: 'scale(' + scale + ')' }"></iframe>
</div>
</ClientOnly>

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
}
</style>
