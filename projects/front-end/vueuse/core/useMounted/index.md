---
category: Component
---

# useMounted

Mounted state in ref.

## Demo

<script setup>
import Demo from './demo.vue'
</script>

<DemoContainer>
  <Demo />
</DemoContainer>

## Usage

```js
import { useMounted } from './'

const isMounted = useMounted()
```

Which is essentially a shorthand of:

```ts
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
```
