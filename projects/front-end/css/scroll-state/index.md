# scroll-state()

source：https://developer.chrome.com/blog/css-scroll-state-queries

目標：Pure CSS，隨著捲動的變化，動態調整樣式

::: warning
Chrome 133 以上支援
:::

## Stuck Demo

卡住狀態：當元素卡在邊緣時，觸發樣式變更。

<script setup>
import StuckDemo from './StuckDemo.vue'
import SnappedDemo from './SnappedDemo.vue'
</script>

<DemoContainer>
  <StuckDemo />
</DemoContainer>

```vue
<template>
  <div class="demo-container">
    <div class="demo-content">
      <div class="stuck-top">
        <nav>Nav</nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'https://unpkg.com/open-props' layer(design.system);

.demo-container {
  height: 300px;
  overflow-y: auto;
  .demo-content {
    height: 1200px;
    padding-top: 300px;
    background: LightGray;
  }
}
.stuck-top {
  container-type: scroll-state;
  position: sticky;
  top: 0px;

  @supports (container-type: scroll-state) {
    > nav {
      transition: box-shadow 0.3s ease;
      @container scroll-state(stuck: top) {
        background: #fff;
        color: red;
        box-shadow: var(--shadow-5);
      }
    }
  }
}
</style>
```

## Snapped Demo

固定狀態：當元素在軸線上對齊時，觸發樣式變更。

TODO：研究 SnappedDemo 的 CSS 語法

<DemoContainer>
  <SnappedDemo />
</DemoContainer>

<!-- ## Scrollable Demo

可捲動狀態：在元素溢出時觸發樣式變更。

<DemoContainer>
  <Demo />
</DemoContainer> -->
