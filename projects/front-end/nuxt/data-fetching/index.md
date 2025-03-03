# Nuxt Data Fetching

source：https://nuxt.com/docs/getting-started/data-fetching

## `$fetch`

底層是用 ofetch library：https://github.com/unjs/ofetch

直接使用 `$fetch`，在 server & client side 都會觸發 api call，<br>
可以使用 `useFetch`、`useAsyncData` 來避免重複觸發 api call（只會在 server side）。

## `useFetch`

`useAsyncData` + `$fetch`

params：

https://nuxt.com/docs/api/composables/use-fetch#params

interceptors：

跟 ofetch 提供的用法一樣：https://github.com/unjs/ofetch#%EF%B8%8F-interceptors

```js
const { data, status, error, refresh, clear } = await useFetch('/api/auth/login', {
  onRequest({ request, options }) {
    options.headers.set('Authorization', '...')
  },
  onRequestError({ request, options, error }) {
    // Handle the request errors
  },
  onResponse({ request, response, options }) {
    // Process the response data
    localStorage.setItem('token', response._data.token)
  },
  onResponseError({ request, response, options }) {
    // Handle the response errors
  }
})
```

## 在 client side 觸發 `useFetch` or `useAsyncData` call API

### `refresh`

```vue
<script setup>
const { data, status, error, refresh, clear } = await useFetch('/test-api')
</script>

<template>
  <button @click="refresh">
    call api in client side
  </button>
</template>
```

### `refreshNuxtData`：透過 `useAsyncData` 的唯一 key

```vue
<script setup>
const { data } = await useAsyncData('testApi', () => {
  $fetch('/test-api')
})

function refresh() {
  refreshNuxtData('testApi')
}
</script>

<template>
  <button @click="refresh">
    call api in client side
  </button>
</template>
```

### `watch`

source：https://nuxt.com/docs/api/composables/use-async-data#watch-params

```vue
<script setup lang="ts">
const page = ref(1)
const { data: posts } = await useAsyncData(
  'posts',
  () => $fetch('https://fakeApi.com/posts', {
    params: {
      page: page.value
    }
  }),
  {
    watch: [page]
  }
)
</script>
```

在 `page` 改變時，會重新 call api。
