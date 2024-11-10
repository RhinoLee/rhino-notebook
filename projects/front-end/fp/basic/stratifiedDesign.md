# Chapter 8 - 分層設計

## Source

書籍：簡約的軟體開發思維：用 Functional Programming 重構程式 - 以 JavaScript 為例

## 主要觀念

- 利用底層函式來撰寫上層函式
- 同一層的函式應該服務相同目的，EX：

  - 第一、二層 - 購物車業務規則 (cart_tax)、一般業務規則 (calc_tax)
  - 第三層 - 基本購物車操作（calc_total）
  - 第四層 - 基本商品操作（set_price）
  - 第五層 - 寫入時複製操作（add_element_last）
  - 第六層 - JS 語言元素 (.slice)

    以上呼叫圖參考 page 8-19。

- 在直觀的實作中，所有箭頭的長度應該要一致，如果不一致代表：同一層的函式具有不同的細節程度
