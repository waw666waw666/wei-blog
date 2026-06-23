---
title: 互动命令行平台
---

# 互动式 Claude 命令学习平台

<div class="project-links-header">
  <a href="https://claudelearn.top" target="_blank" class="badge bg-primary">👉 全屏在线学习</a>
  <a href="https://github.com/waw666waw666/claude-cmd-tutor" target="_blank" class="badge bg-secondary">🔗 GitHub 源码</a>
</div>

## 项目简介

**互动式命令学习平台** 是一款专为掌握复杂终端命令和 AI 助手交互指令而设计的在线学习应用。平台不仅收录了多达 118 个命令，更是通过高度拟真的 Terminal（终端模拟器）界面，让用户在真实的敲击中获得肌肉记忆。

配合情景驱动的关卡挑战系统与成就解锁机制，它将枯燥的命令行学习变成了一场充满乐趣与挑战的通关游戏。

## 核心特性

- 🖥️ **全真终端模拟器**：支持高亮、历史记录、Tab 补全等核心 CLI 体验。
- 📚 **118+ 核心命令库**：涵盖了日常高频使用的文件操作、进程管理以及智能对话指令。
- 🏆 **情景化成就挑战**：内置多级任务关卡，在解决实际问题的过程中解锁学习成就。
- 🔍 **智能检错提示**：实时解析输入命令，在执行失败时提供极具启发性的报错引导。
- 🌓 **深邃暗色模式**：专注沉浸的极客风 UI 设计，保护视力的同时激发创造力。

## 互动预览

您可以直接在此处的虚拟终端中尝试输入命令：

*(提示：部分安全设置可能限制终端脚本，若无法输入，请点击上方“全屏在线学习”)*

<div class="iframe-container">
  <iframe src="https://claudelearn.top" frameborder="0" allowfullscreen></iframe>
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