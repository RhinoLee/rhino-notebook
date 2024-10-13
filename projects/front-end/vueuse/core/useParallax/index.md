---
category: Sensors
---

# useParallax

Create parallax effect easily. It uses `useDeviceOrientation` and fallback to `useMouse` if orientation is not supported.

## Demo

<script setup>
import Demo from './demo.vue'
</script>

This is a .md using a custom component

<Demo />

## Usage

```vue
<script setup>
import { useParallax } from './'

const container = ref(null)
const { tilt, roll, source } = useParallax(container)
</script>

<template>
  <div ref="container" />
</template>
```
