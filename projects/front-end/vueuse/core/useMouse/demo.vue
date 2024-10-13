<script setup>
import { stringify } from '@vueuse-practice/docs-utils'
import { reactive, ref } from 'vue'
import { useMouse } from './'

const demoContainer = ref(null)

const mouseDefault = reactive(useMouse())
const textDefault = stringify(mouseDefault)

function extractor(event) {
  if (typeof Touch !== 'undefined' && event instanceof Touch)
    return null
  else
    return [event.offsetX, event.offsetY]
}

const mouseWithExtractor = reactive(useMouse({ target: demoContainer, type: extractor }))
const textWithExtractor = stringify(mouseWithExtractor)
</script>

<template>
  <div ref="demoContainer">
    <p>Basic Usage</p>
    <pre lang="yaml">{{ textDefault }}</pre>
    <p>Extractor Usage</p>
    <pre lang="yaml">{{ textWithExtractor }}</pre>
  </div>
</template>
