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
        color: HighlightText;
        box-shadow: var(--shadow-5);
      }
    }
  }
}
</style>
