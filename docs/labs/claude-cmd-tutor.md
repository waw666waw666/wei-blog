---
title: 互动命令行平台
---

# 互动式 Claude 命令学习平台

<div class="project-links-header">
  <a href="https://claudelearn.top" target="_blank" class="badge bg-primary">👉 全屏在线体验</a>
  <a href="https://github.com/waw666waw666/claude-cmd-tutor" target="_blank" class="badge bg-secondary">💻 GitHub 源码</a>
</div>

## 项目简介

**互动式 Claude 命令学习平台** (Claude Cmd Tutor) 是一个专为开发者和 AI 爱好者设计的网页端模拟器环境。它完美复刻了真实的终端（Terminal）体验，并将其作为教学媒介，帮助用户沉浸式地学习和掌握 Claude 相关的命令行工具、Prompt 技巧及工作流自动化指令。

无论是初学者想熟悉基础命令，还是高级用户想测试复杂的脚本组合，都可以在这个安全的沙盒环境中自由练习。

## 核心特性

- 🖥️ **高保真终端模拟**：还原了真实的命令行界面，包括语法高亮、自动补全、命令历史（上下键）。
- 🎓 **交互式教学**：内置课程体系，根据用户的命令输入实时给出反馈和下一步引导。
- 🛡️ **安全沙盒环境**：所有命令仅在浏览器端模拟执行，无需担心损坏本地系统。
- ⚙️ **可定制配置**：支持自定义终端主题色、字体大小和提示符样式。

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
        <iframe src="https://claudelearn.top" scrolling="no"></iframe>
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
