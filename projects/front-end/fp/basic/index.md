# Functional Programming Chapter 1 ~ 5

## Source

書籍：簡約的軟體開發思維：用 Functional Programming 重構程式 - 以 JavaScript 為例

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

### 範例 5.9 擷取『寫入時複製』模式

修改前：

```javascript
function add_item(cart, item) {
  const new_cart = cart.slice()
  new_cart.push(item)
  return new_cart
}
```

名稱普適化後：

```javascript
function add_element_last(array, elem) {
  const new_array = array.slice()
  new_array.push(elem)
  return new_array
}

function add_item(cart, item) {
  return add_element_last(cart, item)
}
```

`add_element_last` 就變成一個可以處理任何陣列與元素的通用 function。

### 練習 5-2

將以下 function 拆解成多個 function，使得每個 function 只做一種操作

```javascript
function update_shipping_icons(cart) {
  const buy_buttons = get_buy_buttons_dom()
  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i]
    const item = button.item
    const new_cart = add_item(cart, item)
    if (gets_free_shipping(new_cart))
      button.show_free_shipping_icon()
    else
      button.hide_free_shipping_icon()
  }
}
```

拆解後，把『按鈕操作』與『購物車/商品操作』分開。：

```javascript
function gets_free_shipping_with_item(cart, item) {
  const new_cart = add_item(cart, item)
  return gets_free_shipping(new_cart)
}

function set_free_shipping_icon(button, isShown) {
  if (isShown)
    button.show_free_shipping_icon()
  else
    button.hide_free_shipping_icon()
}

function update_shipping_icons(cart) {
  const buy_buttons = get_buy_buttons_dom()
  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i]
    const item = button.item
    const hasFreeShipping = gets_free_shipping_with_item(cart, item)

    set_free_shipping_icon(hasFreeShipping)
  }
}
```
