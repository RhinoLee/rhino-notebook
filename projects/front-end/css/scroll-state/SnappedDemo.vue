<template>
  <section>
    <article>
      <h1>Introducing</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et consequuntur dolor similique.</p>
    </article>
    <article>
      <h1><code>container-type: scroll-state</code></h1>
      <p>Et consequuntur dolor similique, ab reiciendis rerum distinctio! Impedit dolorem autem quidem, laborum laudantium aut magnam magni dolores velit eos nulla assumenda.</p>
    </article>
    <article>
      <h1><code>@container scroll-state(snapped: inline)</code></h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, laborum laudantium aut magnam magni dolores velit eos nulla assumenda.</p>
    </article>
    <article>
      <h1>Opacity transitions to 1 when snapped</h1>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </article>
    <article>
      <h1>Achieved via a state container query</h1>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </article>
  </section>
</template>

<style scoped>
section {
  overflow: auto hidden;
  scroll-snap-type: x mandatory;

  > article {
    container-type: scroll-state;
    scroll-snap-align: center;

    @supports (container-type: scroll-state) {
      > * {
        transition: opacity 0.5s ease;

        @container not scroll-state(snapped: x) {
          opacity: 0.25;
        }
      }
    }
  }
}

@layer demo.support {
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    block-size: 100%;
    color-scheme: dark light;
  }

  body {
    min-block-size: 100%;
    font-family: system-ui, sans-serif;

    display: grid;
    place-content: center;
  }

  section {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 50ch;
    gap: 5ch;
    padding-inline: 5ch;
    scroll-padding-inline: 5ch;
    padding-block-end: 20px; /* room for scrollbar */

    &::before,
    &::after {
      content: '';
      display: block;
      inline-size: 50vw;
    }
  }

  article {
    display: grid;
    align-content: start;
    gap: 1ch;
  }

  p {
    font-size: 1.25rem;
    font-weight: 200;
    line-height: 1.5;
  }
}
</style>
