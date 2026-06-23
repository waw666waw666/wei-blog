---
title: 前端组件展示
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

# 前端组件功能展示平台

<div class="project-links-header">
  <a href="https://waw666waw666.github.io/frontend-components-skill/" target="_blank" class="badge bg-primary">👉 全屏在线浏览</a>
  <a href="https://github.com/waw666waw666/frontend-components-skill" target="_blank" class="badge bg-secondary">🔗 GitHub 源码</a>
</div>

## 项目简介

这是一个基于 **React + TypeScript + Ant Design + SortableJS** 打造的前端业务组件库展示与交互平台。通过这个平台，你可以直观地体验到各种复杂前端组件的交互逻辑、状态管理以及设计美学。

不仅如此，该平台内还集成了丰富的 AI 提示词模板和进阶组件代码参考，非常适合作为前端工程师的练手项目或日常业务组件库的灵感来源。

## 核心特性

- 🧩 **51+ 精美组件库**：涵盖了表单、表格、图表、拖拽排序等多种常见的业务场景。
- 📦 **现代技术栈**：全面采用 React Hooks 与 TypeScript，保证组件的可读性与拓展性。
- 🎨 **极佳的设计规范**：深度定制 Ant Design 主题，符合现代企业级 B 端产品设计审美。
- 🪄 **SortableJS 拖拽封装**：针对列表排序和面板拖拽做出了流畅的物理动效优化。
- 📝 **内置 AI Prompt 模板**：提供丰富的 AI 代码生成参考，提升日常研发效率。

</style>

## 互动预览

您可以直接在下方无缝体验该项目：

<ClientOnly>
<div class="iframe-wrapper" ref="wrapper" :style="{ height: (targetHeight * scale) + 'px' }">
  <iframe src="https://waw666waw666.github.io/frontend-components-skill/" :style="{ transform: 'scale(' + scale + ')' }"></iframe>
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
