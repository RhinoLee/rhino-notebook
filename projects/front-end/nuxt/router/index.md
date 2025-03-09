# Nuxt Router

## Nuxt Link

source：https://nuxt.com/docs/api/components/nuxt-link

用法的部分看文件就好，這邊只紀錄其他重點。

### External Routing

```vue
<template>
  <NuxtLink to="https://nuxtjs.org">
    Nuxt website
  </NuxtLink>
  <!-- <a href="https://nuxtjs.org" rel="noopener noreferrer">...</a> -->
</template>
```

在使用 exteral routing 時，`NuxtLink` 會自動轉換成 `<a>` 標籤。

**為什麼不直接使用 `<a>` 標籤？**<br>

因為 `NuxtLink` 會自動加上 `rel="noopener noreferrer"`，這是為了防止 tabnabbing 攻擊。

#### `noopener` & `noreferrer`

source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#security_and_privacy

- `noopener`：防止新開的視窗可以透過 `window.opener` 存取原本的視窗。（以下範例由 Claude AI 產出）

  > 想像這個情況：<br>
  > 用戶正在瀏覽你的銀行網站 (例如 mytrustbank.com)<br>
  > 你的網站上有一個外部連結，指向一個看似無害的網站，但該連結使用了 target="\_blank" 而沒有 rel="noopener"<br>
  > 用戶點擊了這個連結，在新標籤頁打開了外部網站<br>
  > 攻擊過程：<br>
  > 當新標籤頁打開後，惡意網站可以執行以下 JavaScript 代碼：<br>
  > javascriptCopyif (window.opener) {<br>
  > // 將原始標籤頁重定向到一個仿冒的銀行登錄頁面<br>
  > window.opener.location = 'https://fake-mytrustbank.com/login';}<br>
  > 後果：<br>
  > 用戶切換回原始標籤頁，發現自己被重定向到了一個看起來幾乎完全相同的「銀行登錄頁面」<br>
  > 由於頁面看起來完全一樣（甚至 URL 也可能只有微小差別），用戶以為是正常的會話過期，需要重新登錄<br>
  > 用戶在仿冒頁面輸入了銀行賬號和密碼<br>
  > 攻擊者獲取了這些敏感信息，可能進一步導致財務損失<br>
  > 為什麼這特別危險？<br><br>
  > 更具欺騙性 - 因為重定向發生在用戶離開原始頁面後，當用戶回到原標籤頁時，他們不會懷疑已經被重定向到了仿冒網站<br>
  > 利用了用戶對原始網站的信任 - 用戶認為他們仍在原始標籤頁中，因此對頁面內容的信任度更高<br>
  > 難以被察覺 - 即使是網絡安全意識較高的用戶也可能沒注意到 URL 的微小變化<br>
  >
  > 這就是為什麼 rel="noopener" 如此重要 - 它切斷了新打開頁面與原始頁面之間的 JavaScript 連接，使得惡意網站無法通過 window.opener 訪問和操作原始頁面。<br>

- `noreferrer`：防止新開的視窗可以透過 `referrer` header 存取原本的視窗。
