<script setup>
import { withBase } from 'vitepress'

const modules = import.meta.glob('/blogs/**/*.md', { eager: true })

const tagMap = new Map()

for (const [path, mod] of Object.entries(modules)) {
  const fm = mod.frontmatter
  if (!fm?.tags) continue
  for (const tag of fm.tags) {
    if (!tagMap.has(tag)) tagMap.set(tag, [])
    tagMap.get(tag).push({
      title: fm.title || path,
      url: path.replace(/\.md$/, '').replace('/blogs/', '/blogs/'),
    })
  }
}

const groups = Array.from(tagMap.entries())
  .sort((a, b) => b[1].length - a[1].length)

for (const [, items] of groups) {
  items.sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'))
}
</script>

# 标签

<template v-for="[tag, items] in groups" :key="tag">
  <h2 :id="tag" style="display:flex;align-items:center;gap:8px;">
    # {{ tag }}
    <span style="font-size:13px;font-weight:400;color:#888;">({{ items.length }})</span>
  </h2>
  <ul>
    <li v-for="post in items" :key="post.url">
      <a :href="withBase(post.url)">{{ post.title }}</a>
    </li>
  </ul>
</template>
