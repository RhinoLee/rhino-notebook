# CSS Logical Properties and Values

source：https://css-tricks.com/css-logical-properties-and-values/

目標：了解 CSS 邏輯屬性

---

不一定只有多語系網站才用的到 CSS 邏輯屬性，以文章中的例子來說，過去在做水平置中的時候很常出現：

```CSS
.thing {
  margin-left: auto;
  margin-right: auto;
}
```

用邏輯屬性只需要一行：

```CSS
.thing {
  margin-inline: auto;
}
```

### 用 inline、block 的方向，取代左右、上下的思考方式

![logical_properties_block_inline.webp](/frontend/css/logical_properties_block_inline.webp)

:::warning
當 writing-mode 改變時，inline、block 的方向可能會對調。
:::
