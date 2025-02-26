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
