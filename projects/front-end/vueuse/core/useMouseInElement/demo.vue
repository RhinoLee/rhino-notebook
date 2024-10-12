<script setup lang="ts">
import { useMouseInElement } from './'
// import { stringify } from '@vueuse/docs-utils'
import { reactive, ref } from 'vue'
import Area from './Area.vue'

const target = ref(null)
const mouse = reactive(useMouseInElement(target))
// const text = stringify(mouse)
</script>

<template>
  <div flex="~" gap="4">
    <Area ref="target" />
    <pre>{{ mouse }}</pre>
    <!-- <pre lang="yaml">{{ text }}</pre> -->
  </div>
</template>
