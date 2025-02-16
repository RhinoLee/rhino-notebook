# interpolate-size and calc-size

source：https://css-tricks.com/css-logical-properties-and-values/

目標：不透過 JS，只使用 CSS 實現 height: auto;（及其他內在尺寸關鍵字）的動畫效果。

---

<script setup>
import OriginalDemo from './OriginalDemo.vue'
import InterPolateDemo from './InterPolateDemo.vue'
import CalcSizeDemo from './CalcSizeDemo.vue'
</script>

### Original Demo

<DemoContainer>
  <OriginalDemo />
</DemoContainer>

```CSS
nav a {
  white-space: nowrap;
  width: 2.5rem;
  overflow-x: clip;
  transition: width 0.35s ease;

  &:hover,
  &:focus-visible {
    width: max-content; /* 👈 Doesn't work with transitions */
  }
}
```

即使已經宣告了對 width 屬性進行 transition 效果，並在 :hover 狀態中設定了 width: auto，實際上並不會產生順場的 transition 效果，反而是直接變化。

### interpolate-size: allow-keywords

<DemoContainer>
  <InterPolateDemo />
</DemoContainer>

```CSS
nav a {
  interpolate-size: allow-keywords;
  /* ... */
}
```

只需要加上 `interpolate-size: allow-keywords;`，就可以讓 CSS 屬性的關鍵字（如 auto、max-content、min-content）產生 transition 效果。

::: warning
重要事項：無法在兩個內在尺寸關鍵字之間進行 Interpolation。兩端中至少有一端必須是長度值或百分比。
:::

### calc-size()

<DemoContainer>
  <CalcSizeDemo />
</DemoContainer>

```CSS
nav a {
  /** ... */
  &:hover,
  &:focus-visible {
    width: calc-size(max-content, size);
  }
}
```

在視覺效果上，使用 calc-size() 的結果與 interpolate-size 相同。因此，在這種特定情況下，應該使用 interpolate-size。

calc-size() 真正的優勢在於它能執行計算，這是 interpolate-size 無法做到的。

```Plain
width: calc-size(auto, size - 10px); // = The auto width minus 10 pixels
width: calc-size(min-content, size + 1rem); // = The min-content width plus 1rem
width: calc-size(max-content, size * .5);   // = Half the max-content width
```
