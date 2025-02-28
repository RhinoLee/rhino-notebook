# Nuxt Directory Structure

## Auto Import

### 只針對特定資料夾做自動引入

```js
// nuxt.config.ts
export default defineNuxtConfig({
  components: {
    dirs: [
      {
        path: '~/components/global',
        global: true
      }
    ]
  }
})
```

以上設定會自動引入 `~/components/global` 資料夾下的所有元件，並且可以在所有頁面使用。

## Plugins

開一個 plugins 資料夾，裡面放置所有的 plugins，Nuxt 會自動引入這些 plugins。
有 `provide`、`inject`、`use` 三種方式。

### Plugins - provide

```js
// plugins/doSomething.js
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      doSomething: msg => `do something, ${msg}!`,
    },
  }
})
```

```vue
<script setup>
const { $doSomething } = useNuxtApp()
</script>

<template>
  <p>{{ $doSomething('Rhino') }}</p>
</template>
```

### Plugins - inject

```js
// plugins/priceFormat.js
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('priceformat', {
    mounted(el, binding) {
      // EX：20000 -> 20,000
      el.textContent = Number(binding.value).toLocaleString()
    },
  })
})
```

```vue
<script setup>
const { $doSomething } = useNuxtApp()
</script>

<template>
  <p v-priceformat="20000" />
</template>
```

### Plugins - use

如果遇到沒有 Nuxt 版本的 Vue plugin，可以使用 `use`。
source: https://nuxt.com/docs/guide/directory-structure/plugins#vue-plugins
