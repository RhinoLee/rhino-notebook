---
category: Elements
---

# useMouseInElement

Reactive mouse position related to an element

## Usage

```vue
<script setup>
import { useMouseInElement } from './'
import { ref } from 'vue'

const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<template>
  <div ref="target">
    <h1>Hello world</h1>
  </div>
</template>
```
