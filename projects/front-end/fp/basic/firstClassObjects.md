# Chapter 10 ~ 11 - first-class objects

## Source

書籍：簡約的軟體開發思維：用 Functional Programming 重構程式 - 以 JavaScript 為例

---

### 什麼是 first-class objects（頭等物件）？

- 可賦值給變數
- 可作為參數傳遞
- 可作為回傳值
- 可存放在資料結構中

### first-class abstraction（頭等抽象化）

在 JS 中，函式可以作為參數傳遞給其他函式，這就是頭等抽象化的一種實現。舉例來說：

```javascript
function applyOperation(a, b, operation) {
  return operation(a, b)
}
const add = (a, b) => a + b
const subtract = (a, b) => a - b

console.log(applyOperation(2, 3, add)) // 5
console.log(applyOperation(2, 3, subtract)) // -1
```

`add` 和 `subtract` 是具體實作邏輯的函式，而 `applyOperation` 是一個抽象化的高階函式，它接受一個函式作為參數。
