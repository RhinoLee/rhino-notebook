<script setup>
import { useMouse } from './'
// import { stringify } from '@vueuse/docs-utils'
import { reactive, ref } from 'vue'

const demoContainer = ref(null)

const mouseDefault = reactive(useMouse())
// const textDefault = stringify(mouseDefault)

function extractor(event) {
  if (typeof Touch !== 'undefined' && event instanceof Touch)
    return null
  else
    return [event.offsetX, event.offsetY]
}

const mouseWithExtractor = reactive(useMouse({ target: demoContainer, type: extractor }))
// const textWithExtractor = stringify(mouseWithExtractor)
</script>

<template>
  <div ref="demoContainer">
    <p>Basic Usage</p>
    <pre lang="yaml">{{ mouseDefault }}</pre>
    <p>Extractor Usage</p>
    <pre lang="yaml">{{ mouseWithExtractor }}</pre>
  </div>
</template>
