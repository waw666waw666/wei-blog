---
title: 文字水波纹
---

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

## 互动预览

在下方面板中滑动你的鼠标（或手指），感受水波的物理反馈：

<div class="iframe-container">
  <iframe src="https://waw666waw666.github.io/pretext-ripple/" frameborder="0" allowfullscreen></iframe>
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
  width: 100%;
  height: 75vh;
  min-height: 600px;
  margin-top: 2rem;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
.iframe-container iframe {
  width: 100%;
  height: 100%;
}
</style>