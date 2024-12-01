# Web Components

## Source

書籍：決戰！微前端架構

## 簡介

Web Components 是一個總稱，底下涵蓋三種 API：

- Custom Elements
- Shadow DOM
- HTML Templates

### Custom Elements - 定義一個自訂元素

#### 實作購買按鈕：

```javascript
class CheckoutBuy extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<button>buy now</button>'
  }
}
window.customElements.define('checkout-buy', CheckoutBuy)
```

以上實作效果：當 `<checkout-buy>` 被加入到 DOM 時，會自動執行 `connectedCallback`，render 出一個簡單的按鈕。

#### 透過屬性加入元素參數：

```html
<checkout-buy sku="..."></checkout-buy>
```

```javascript
const prices = {
  porche: 66,
  fendt: 54,
  eicher: 58,
}

class CheckoutBuy extends HTMLElement {
  connectedCallback() {
    const sku = this.getAttribute('sku')
    this.innerHTML = `
      <button>buy for $${prices[sku]}</button>
    `
  }
}
```

#### 綁定事件：

```javascript
// ...
this.innerHTML = `
  <button>buy for $${prices[sku]}</button>
`
this.querySelector('button').addEventListener('click', () => {
  alert('Thank you!')
})
// ...
```

::: tip
以上簡易版實作是用 innerHTML、addEventListener 這類標準的 DOM API，實務上可能會用框架來代替。
像是 Vue 中會產生 vDOM，跟實際的 DOM 做 diffing，決定要更新哪些部分。避免 JS 頻繁改寫 DOM 造成效能下降。
:::

### Shadow DOM - 使用 Shadow DOM 做樣式分離

可以讓 DOM 的一部分子樹與頁面的其他部分分離。主要優點是，因為 Shadow DOM 內部樣式不會外洩，同樣外部訂一個 CSS，也不會再 Shadow DOM 內起作用，可以減少樣式污染的狀況。

#### 建立一個 Shadow DOM 的 root

Shadow DOM 不一定要跟 custom elements 一起用，在 JS 中對一個 HTML 元素呼叫 .attachShadow() 就可以在這個元素上新建一個分離的 DOM 子樹。

```javascript
class CheckoutBuy extends HTMLElement {
  connectedCallback() {
    const sku = this.getAttribute('sku')
    this.attachShadow({ mode: 'open' }) // 建立一個 open 模式的 Shadow DOM
    this.shadowRoot.innerHTML = 'buy ...'
  }
}
window.customElements.define('checkout-buy', CheckoutBuy)
```

::: warning
mode: "closed" 模式可以對外部 DOM 隱藏 shadowRoot，進而避免其他 JS 程式對該 Shadow DOM 做更動。
但這也會導致輔助科技（如螢幕閱讀器）和搜尋引擎看不到內容。除非有特殊需求，不然一率建議採用 open 模式。
:::

#### 為樣式設定作用域

```javascript
// ...
this.attachShadow({ mode: 'open' })
this.shadowRoot.innerHTML = `
  <style>
    button {}
    button:hover {}
  </style>
  <button>buy for $${prices[sku]}</button>
`
// ...
```

::: warning
Shadow DOM 在 event bubbling 的行為會有所不同，使用時需注意。
:::
