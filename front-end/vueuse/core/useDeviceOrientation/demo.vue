<script setup>
import { useDeviceOrientation } from './'
// import { stringify } from '@vueuse/docs-utils'
import { reactive } from 'vue'

const orientation = reactive(useDeviceOrientation())
// const text = stringify(orientation)
</script>

<template>
  <!-- <pre lang="yaml">{{ text }}</pre> -->
  <pre>{{ orientation }}</pre>
</template>
