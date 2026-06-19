# Vue3 组合式 API 实践

## ref 与 reactive

```vue
<script setup>
import { ref, reactive } from 'vue'

const count = ref(0)
const state = reactive({ name: 'Wei', age: 25 })

function increment() {
  count.value++
}
</script>
```

## computed

```vue
<script setup>
import { ref, computed } from 'vue'

const price = ref(100)
const total = computed(() => price.value * 1.2)
</script>
```

## watch

```vue
<script setup>
import { ref, watch } from 'vue'

const keyword = ref('')
watch(keyword, (newVal, oldVal) => {
  console.log(`搜索: ${newVal}`)
})
</script>
```
