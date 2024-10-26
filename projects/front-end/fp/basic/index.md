# Source

簡約的軟體開發思維：用 Functional Programming 重構程式 - 以 JavaScript 為例

## FP 基本的重要概念

- 區分 Actions、Calculations、Data 是基本的重要技能。

### Actions（動作、操作或行為）

- 了解如何將 Actions 拆解成 Calculations、Data 與其他小 Actions。（拆解需要適可而止）。

### Calculations（計算、運算）

> Caculations 就是能將輸入轉換為輸出的運算。只要輸入相同，就一定會給出一樣的答案，無論什麼時候或呼叫幾次。

- Calculations 可能由其他小的 Calculations 與 Data 組成（這部分我想到 Vue 中 store state 跟 getter 的關係）。
- Calculations 容易被忽略，可以換個角度想，決策與計劃所在的地方就可能有 Calculations。

### Data（資料、數據）

### 函式的輸入與

- 隱性輸入：所有非引數的輸入
- 隱性輸出：所有非回傳值的輸出
- Calculations 不能包含隱性輸入/輸出。
- 『盡量避免隱性輸入/輸出』的原則也適用於 Actions。

以上可參考 page 5-5

### 練習 4-2

把 update_tax_dom() 中的 Calculation 截取出來。

截取前：

```javascript
function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.10)
}
```

截取後：

```javascript
function update_tax_dom() {
  const totalWithTax = calcTax(shopping_cart_total)
  set_tax_dom(totalWithTax)
}

function calc_tax(price_without_tax) {
  return priceWithoutTax * 0.10
}
```

截取後，計算 tax 的關鍵算式可以跟 DOM 更新脫鉤，關鍵算式 calcTax 會是一個 pure function。

### 練習 4-4

把 update_shipping_icons() 中的 Calculation 截取出來。

截取前：

```javascript
function update_shipping_icons() {
  const buy_buttons = get_buy_buttons_dom()
  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i]
    const item = button.item
    if (item.price + shopping_cart_total >= 20)
      button.show_free_shipping_icon()
    else
      button.hide_free_shipping_icon()
  }
}
```

截取後：

```javascript
function update_shipping_icons() {
  const buy_buttons = get_buy_buttons_dom()
  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i]
    const item = button.item
    if (get_free_shipping(item.price, shopping_cart_total))
      button.show_free_shipping_icon()
    else
      button.hide_free_shipping_icon()
  }
}

function get_free_shipping(item_price, total) {
  return item_price + total >= 20
}
```
