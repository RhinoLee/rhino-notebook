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

### Plugins - 指定 client 或 server

可以透過副檔名來指定 plugin 要在 client 或 server 被執行。

EX：`doSomething.client.js`、`doSomething.server.js`

## Middleware

在切換路由前執行的程式碼，可以用來做驗證等等。

有以下三種定義方式：

- Anonymous (or inline) middleware
- Named middleware
- Global middleware

**執行順序：Global Middleware -> Page defined middleware order**

### Middleware - Anonymous (or inline) route middleware

```vue
<script setup>
// pages/user.vue
definePageMeta({
  middleware: (to, from) => {
    console.log('user page middleware', to, from)
  },
})
</script>
```

### Middleware - Named route middleware

```js
// middleware/user.js
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('user middleware', to, from)
})
```

```vue
<script setup>
// pages/user.vue
definePageMeta({
  middleware: ['user'],
})
</script>
```

### Middleware - Global route middleware

可以透過副檔名來指定 middleware 為全域。

EX：`testMiddleware.global.js`

## Server

### API

註冊 API handler，可以透過 `defineEventHandler` 來定義 API handler。

```js
// server/api/test.js
export default defineEventHandler((event) => {
  const data = {
    list: [
      { id: 1, name: 'Rhino' },
      { id: 2, name: 'Elephant' },
    ],
  }

  return { data }
})
```

url：`http://localhost:3000/api/hello`

```json
{
  "data": {
    "list": [
      { "id": 1, "name": "Rhino" },
      { "id": 2, "name": "Elephant" }
    ]
  }
}
```

### Routes

寫法基本上跟 API 一樣，只是路由少了 /api。

```js
// server/routes/test.js
export default defineEventHandler((event) => {
  const data = {
    list: [
      { id: 1, name: 'Rhino' },
      { id: 2, name: 'Elephant' },
    ],
  }

  return { data }
})
```

url：`http://localhost:3000/hello`

```json
{
  "data": {
    "list": [
      { "id": 1, "name": "Rhino" },
      { "id": 2, "name": "Elephant" }
    ]
  }
}
```

### Middleware

server 的 middleware 跟 client 的 middleware 不同，server 的 middleware 是在每個 request 前執行。

:::warning
只能攔截站內的 request，無法攔截外部 request。
:::

```js
// server/middleware/test.js
export default defineEventHandler((event) => {
  console.log('取得 request 資料', event.node.req)
})
```
