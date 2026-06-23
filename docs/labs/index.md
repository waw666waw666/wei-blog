---
title: 在线预览
---

# 在线预览

欢迎来到**在线预览**板块。这里收集了可以直接在网页上运行或交互体验的独立项目。

<div class="project-grid">

  <div class="project-card">
    <div class="project-image">
      <a href="/wei-blog/labs/frontend-components.html">
        <img src="/images/labs/frontend.png" alt="前端组件展示" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'200\'><rect width=\'100%\' height=\'100%\' fill=\'%23f0f0f0\'/><text x=\'50%\' y=\'50%\' fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' text-anchor=\'middle\' dominant-baseline=\'middle\'>请放入你的图片</text></svg>'" />
      </a>
    </div>
    <div class="project-info">
      <h3>前端组件展示</h3>
      <p>基于 React + TypeScript + Ant Design + SortableJS 的前端组件功能展示平台。包含了大量可复用且精美的业务组件和交互演示。</p>
      <div class="project-links">
        <a href="/wei-blog/labs/frontend-components.html" class="btn primary">在线体验</a>
        <a href="https://github.com/waw666waw666/frontend-components-skill" target="_blank" class="btn secondary">GitHub 源码</a>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-image">
      <a href="/wei-blog/labs/quoridor.html">
        <img src="/images/labs/quoridor.png" alt="路障棋网页版" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'200\'><rect width=\'100%\' height=\'100%\' fill=\'%23f0f0f0\'/><text x=\'50%\' y=\'50%\' fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' text-anchor=\'middle\' dominant-baseline=\'middle\'>请放入你的图片</text></svg>'" />
      </a>
    </div>
    <div class="project-info">
      <h3>路障棋网页版</h3>
      <p>现代网页版路障棋 (Quoridor)，经典策略桌游。点击即可直接在线游玩，支持多人对抗逻辑，拥有流畅的动画效果和响应式界面。</p>
      <div class="project-links">
        <a href="/wei-blog/labs/quoridor.html" class="btn primary">在线体验</a>
        <a href="https://github.com/waw666waw666/quoridor-game" target="_blank" class="btn secondary">GitHub 源码</a>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-image">
      <a href="/wei-blog/labs/pretext-ripple.html">
        <img src="/images/labs/pretext.png" alt="文字水波纹" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'200\'><rect width=\'100%\' height=\'100%\' fill=\'%23f0f0f0\'/><text x=\'50%\' y=\'50%\' fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' text-anchor=\'middle\' dominant-baseline=\'middle\'>请放入你的图片</text></svg>'" />
      </a>
    </div>
    <div class="project-info">
      <h3>沉浸式文字水波纹</h3>
      <p>基于 2D 离散波动方程的 Canvas 动画，呈现极具视觉冲击力的水波纹交互体验。鼠标或手指滑动即可感受细腻的物理波纹特效。</p>
      <div class="project-links">
        <a href="/wei-blog/labs/pretext-ripple.html" class="btn primary">在线体验</a>
        <a href="https://github.com/waw666waw666/pretext-ripple" target="_blank" class="btn secondary">GitHub 源码</a>
      </div>
    </div>
  </div>

  <div class="project-card">
    <div class="project-image">
      <a href="/wei-blog/labs/claude-cmd-tutor.html">
        <img src="/images/labs/cmd-tutor.png" alt="互动命令行平台" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'200\'><rect width=\'100%\' height=\'100%\' fill=\'%23f0f0f0\'/><text x=\'50%\' y=\'50%\' fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' text-anchor=\'middle\' dominant-baseline=\'middle\'>请放入你的图片</text></svg>'" />
      </a>
    </div>
    <div class="project-info">
      <h3>互动式命令学习平台</h3>
      <p>Claude Code 118个命令互动学习平台。通过模拟真实的终端体验和情景挑战，帮助开发者快速掌握复杂的命令操作和工作流。</p>
      <div class="project-links">
        <a href="/wei-blog/labs/claude-cmd-tutor.html" class="btn primary">在线体验</a>
        <a href="https://github.com/waw666waw666/claude-cmd-tutor" target="_blank" class="btn secondary">GitHub 源码</a>
      </div>
    </div>
  </div>

</div>

<style>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 2rem;
}
.project-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.2s, box-shadow 0.2s;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  border-color: var(--vp-c-brand);
}
.project-image {
  width: 100%;
  height: 180px;
  background-color: var(--vp-c-bg-mute);
  overflow: hidden;
}
.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.project-image a {
  display: block;
  width: 100%;
  height: 100%;
}
.project-card:hover .project-image img {
  transform: scale(1.05);
}
.project-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.project-info h3 {
  margin: 0 0 8px 0;
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
}
.project-info p {
  margin: 0 0 16px 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  flex-grow: 1;
}
.project-links {
  display: flex;
  gap: 10px;
  margin-top: auto;
}
.btn {
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none !important;
  text-align: center;
  transition: background-color 0.2s, color 0.2s;
  flex: 1;
}
.btn.primary {
  background-color: var(--vp-c-brand);
  color: white !important;
}
.btn.primary:hover {
  background-color: var(--vp-c-brand-dark);
}
.btn.secondary {
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1) !important;
  border: 1px solid var(--vp-c-divider);
}
.btn.secondary:hover {
  background-color: var(--vp-c-gray-soft);
}
</style>