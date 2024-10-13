---
category: Sensors
---

# useMouse

Reactive mouse position

## Demo

<script setup>
import Demo from './demo.vue'
</script>

This is a .md using a custom component

<Demo />

## Basic Usage

```js twoslash
import { useMouse } from './'

const { x, y, sourceType } = useMouse()
```

Touch is enabled by default. To only detect mouse changes, set `touch` to `false`.
The `dragover` event is used to track mouse position while dragging.

```js twoslash
import { useMouse } from './'
// ---cut---
const { x, y } = useMouse({ touch: false })
```

## Custom Extractor

It's also possible to provide a custom extractor function to get the position from the event.

```js twoslash
import { useMouse, useParentElement } from '@vueuse/core'

const parentEl = useParentElement()

function extractor(event) {
  return event instanceof Touch
    ? null
    : [event.offsetX, event.offsetY]
}

const { x, y, sourceType } = useMouse({ target: parentEl, type: extractor })
```
