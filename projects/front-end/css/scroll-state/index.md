# scroll-state()

source：https://developer.chrome.com/blog/css-scroll-state-queries

目標：Pure CSS，隨著捲動的變化，動態調整樣式

::: warning
Chrome 133 以上支援，目前需要先使用 Chrome Beta。
:::

## Stuck Demo

卡住狀態：當元素卡在邊緣時，觸發樣式變更。

<script setup>
import Demo from './Demo.vue'
</script>

<DemoContainer>
  <Demo />
</DemoContainer>

<!-- ## Snapped Demo

固定狀態：當元素在軸線上對齊時，觸發樣式變更。

<DemoContainer>
  <Demo />
</DemoContainer>

## Scrollable Demo

可捲動狀態：在元素溢出時觸發樣式變更。

<DemoContainer>
  <Demo />
</DemoContainer> -->
