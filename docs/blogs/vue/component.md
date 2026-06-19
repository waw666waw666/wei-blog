# 组件封装心得

## 组件设计原则

1. **单一职责** - 一个组件只做一件事
2. **Props 驱动** - 通过 props 控制组件行为
3. **事件向外** - 通过 emit 与父组件通信
4. **插槽灵活** - 使用 slot 提供内容定制能力

## 示例：按钮组件

```vue
<template>
  <button
    :class="['btn', `btn--${type}`, { 'btn--disabled': disabled }]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'default' },
  disabled: { type: Boolean, default: false }
})
defineEmits(['click'])
</script>
```
