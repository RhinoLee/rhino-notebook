# Web Components

## Source

書籍：決戰！微前端架構

## 簡介

Web Components 是一個總稱，底下涵蓋三種 API：

- Custom Elements
- Shadow DOM
- HTML Templates

## Custom Elements - 定義一個自訂元素

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

## Shadow DOM

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

## 使用者介面溝通

### 主頁面對頁面區塊

情境：在主頁面商品中切換商品版本，要能向下傳遞到頁面區塊（此處為購買按鈕），區塊才能更新狀態（改變購買按鈕上的顯示售價）。

- 決策團隊：負責主頁面商品
- 結帳團隊：負責購買按鈕

結帳團隊爲購買按鈕加入 edition 屬性：

```html
<checkout-buy sku="fendt" edition="standard"></checkout-buy>
```

決策團隊會實作一個 checkbox 讓 user 決定是否升級版本（standard | platinum），並監聽 change 事件把對應的值更新到 edition 屬性上。

#### 隨著屬性改變作更新

接著結帳團隊要讓 checkout-buy 這個 Web Component 可以隨著屬性改變作更新。

**attributeChangeCallback(name, oldValue, newValue) 方法：當自定義元素有變更，這個方法就會被觸發。**

```javascript
// ...
class CheckoutBuy extends HTMLElement {
  static get observedAttributes() { // 監聽 sku, edition 屬性變更
    return ['sku', 'edition']
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {
    const sku = this.getAttribute('sku')
    const edition = this.getAttribute('edition') || 'standard'
    this.innerHTML = `<button>...略</button>`
  }
}
```

### 頁面區塊對主頁面

情境：在點擊購買按鈕後，主頁面會跳出「成功加入購物車」的動畫。

- 結帳團隊：負責購買按鈕按下後通知主頁面。
- 決策團隊：負責在收到通知時，讓主頁面跳出「成功加入購物車」動畫。

#### 傳遞自定義事件

目標：在購買按鈕被點擊時，像外傳遞 checkout:item_added 自定義事件。

**使用瀏覽器原生的 CustomEvents API**

```javascript
class CheckoutBuy extends HTMLElement {
  // ...

  render() {
    // ...
    this.innerHTML = `<button>...略</button>`

    this.querySelector('button').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('checkout:item_added'))
    })
  }
}
```

以上是結帳團隊負責的部分，接下來換決策團隊要來監聽這個事件，並觸發「成功加入購物車」動畫。

```javascript
// 產品頁
const buyButton = document.querySelector('checkout-buy')
const animationElement = document.querySelector('animation-element')

buyButton.addEventListener('checkout:item_added', (e) => {
  animationElement.classList.add('active')
})
```

### 頁面區塊對頁面區塊

情境：結帳團隊要開發一個迷你購物籃區塊，讓決策團隊可以嵌入到產品頁底部。
當客戶按下購買按鈕，在購物籃中加入新商品時，迷你購物籃也需要收到通知。

也就是說要讓頁面區塊 A 裡面（checkout-buy）的事件來觸發頁面區塊 B （迷你購物籃區塊）的更新。

目標：使用 broadcasting 的方式，透過發布/訂閱機制，讓迷你購物籃訂閱購買按鈕要發布的通知，且產品頁完全不需要知道他們之間的溝通。

有兩種方式可以達成 broadcasting 的功能：

- 透過 DOM 達成 broadcasting 效果
- 使用瀏覽器 Broadcast Channel API

#### 透過 DOM 達成 broadcasting 效果

```javascript
class CheckoutBuy extends HTMLElement {
  // ...

  render() {
    // ...
    this.innerHTML = `<button>...略</button>`

    this.querySelector('button').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('checkout:item_added', {
        bubbles: true, // 因為要讓事件往上傳到 window，要把事件冒泡打開
        detail: { sku, edition }, // 要透過事件傳出去的 payload
      }))
    })
  }
}
```

```javascript
class CheckoutMiniCart extends HTMLElement {
  connectedCallback() {
    this.items = [] // 初始化區域變數，記錄購物籃內的商品
    window.addEventListener('checkout:item_added', (e) => {
      this.items.push(e.detail) // 讀取事件 payload，更新到購物籃內
      this.render() // 更新畫面
    })

    this.render()
  }

  render() {
    // 透過 items render 迷你購物籃
    this.innerHTML = `...略`
  }
}
```

概念是把 CustomEvent 的 bubbles option 打開，讓區塊事件可以一路往上傳到 window，其他區塊透過 window.addEventListener 來接收通知。

:::tip
範例中是使用 this.dispatchEvent，也可以換成 window.dispatchEvent，直接在 window 物件上發送事件，但缺點是找不到事件的源頭。
:::

#### 使用 Broadcast Channel API 達成 broadcasting 效果

讓同一個網域下的頁籤、視窗、iframe 都可以互相溝通

- 連接頻道：`const bc = new BroadcastChannel("test_channel");`
- 發送訊息：`bc.postMessage("test message");`
- 接收訊息：

  ```javascript
  bc.onmessage = (event) => {
    console.log(event)
  }
  ```
