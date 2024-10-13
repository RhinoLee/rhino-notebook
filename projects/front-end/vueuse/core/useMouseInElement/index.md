---
category: Elements
---

# useMouseInElement

Reactive mouse position related to an element

## Demo

<script setup>
import Demo from './demo.vue'
</script>

<DemoContainer>
  <Demo />
</DemoContainer>

## Usage

```vue
<script setup>
import { ref } from 'vue'
import { useMouseInElement } from './'

const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<template>
  <div ref="target">
    <h1>Hello world</h1>
  </div>
</template>
```
