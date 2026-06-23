---
title: 在线预览
---

# 在线预览

欢迎来到**在线预览**板块。这里收集了可以直接在网页上运行或交互体验的独立项目。

<div class="project-grid">

  <a href="/wei-blog/labs/frontend-components.html" class="project-card">
    <div class="project-image">
      <img src="/wei-blog/images/labs/frontend.png" alt="前端组件展示" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'200\'><rect width=\'100%\' height=\'100%\' fill=\'%23f0f0f0\'/><text x=\'50%\' y=\'50%\' fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' text-anchor=\'middle\' dominant-baseline=\'middle\'>请放入你的图片</text></svg>'" />
    </div>
    <div class="project-info">
      <h3>前端组件展示</h3>
      <p>基于 React + TypeScript + Ant Design + SortableJS 的前端组件功能展示平台。</p>
    </div>
  </a>

  <a href="/wei-blog/labs/quoridor.html" class="project-card">
    <div class="project-image">
      <img src="/wei-blog/images/labs/quoridor.png" alt="路障棋网页版" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'200\'><rect width=\'100%\' height=\'100%\' fill=\'%23f0f0f0\'/><text x=\'50%\' y=\'50%\' fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' text-anchor=\'middle\' dominant-baseline=\'middle\'>请放入你的图片</text></svg>'" />
    </div>
    <div class="project-info">
      <h3>路障棋网页版</h3>
      <p>现代网页版路障棋 (Quoridor)，点击即可直接在线游玩，支持多人对抗逻辑。</p>
    </div>
  </a>

  <a href="/wei-blog/labs/pretext-ripple.html" class="project-card">
    <div class="project-image">
      <img src="/wei-blog/images/labs/pretext.png" alt="文字水波纹" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'200\'><rect width=\'100%\' height=\'100%\' fill=\'%23f0f0f0\'/><text x=\'50%\' y=\'50%\' fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' text-anchor=\'middle\' dominant-baseline=\'middle\'>请放入你的图片</text></svg>'" />
    </div>
    <div class="project-info">
      <h3>沉浸式文字水波纹</h3>
      <p>基于 2D 离散波动方程的 Canvas 动画，呈现极具视觉冲击力的水波纹交互体验。</p>
    </div>
  </a>

  <a href="/wei-blog/labs/claude-cmd-tutor.html" class="project-card">
    <div class="project-image">
      <img src="/wei-blog/images/labs/cmd-tutor.png" alt="互动命令行平台" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'200\'><rect width=\'100%\' height=\'100%\' fill=\'%23f0f0f0\'/><text x=\'50%\' y=\'50%\' fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' text-anchor=\'middle\' dominant-baseline=\'middle\'>请放入你的图片</text></svg>'" />
    </div>
    <div class="project-info">
      <h3>互动式命令学习平台</h3>
      <p>Claude Code 118个命令互动学习平台，模拟真实终端体验，含情景挑战。</p>
    </div>
  </a>

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
  text-decoration: none !important;
  color: inherit !important;
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
.project-card:hover .project-image img {
  transform: scale(1.05);
}
.project-info {
  padding: 16px;
}
.project-info h3 {
  margin: 0 0 8px 0;
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
}
.project-info p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
</style>
