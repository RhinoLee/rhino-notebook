# Chapter 6 - Immutability

## Source

書籍：簡約的軟體開發思維：用 Functional Programming 重構程式 - 以 JavaScript 為例

## FP 基本的重要概念

- 在變動的程式中，讓資料保持不變

### copy-on-write

1. 產生副本
2. 修改副本
3. return 副本

```javascript
function add_element_last(array, el) {
  // 產生副本
  const new_array = array.slice()
  // 修改副本
  new_array.push(el)
  // return 副本
  return new_array
}
```

上面程式不會修改既有的資料，只會建立新的資料並回傳。
證明了一個『寫入』的操作能藉由寫入時複製（copy-on-write）變成『讀取』操作。

#### 巢狀結構

關於巢狀結構使用『淺拷貝』與『結構共享』達成寫入時複製的特性，可參考 page 6-34。
