## FP 基本的重要概念

- 區分 Actions、Calculations、Data 是基本的重要技能。

### Actions（動作、操作或行為）

- 了解如何將 Actions 拆解成 Calculations、Data 與其他小 Actions。（拆解需要適可而止）。

### Calculations（計算、運算）

> Caculations 就是能將輸入轉換為輸出的運算。只要輸入相同，就一定會給出一樣的答案，無論什麼時候或呼叫幾次。

- Calculations 可能由其他小的 Calculations 與 Data 組成（這部分我想到 Vue 中 store state 跟 getter 的關係）。
- Calculations 容易被忽略，可以換個角度想，決策與計劃所在的地方就可能有 Calculations。

### Data（資料、數據）

## 利用分層設計降低軟體維護的困難度

可以依照程式碼的變化頻率來分層。
