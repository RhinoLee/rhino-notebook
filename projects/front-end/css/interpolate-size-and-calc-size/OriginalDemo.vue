<template>
  <nav>
    <ul>
      <li value="reply">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" class="icon">
            <path d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z" />
          </svg>
          <span class="text">Reply</span>
        </a>
      </li>
      <li value="reply-all">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path d="M320-280 80-520l240-240 57 56-184 184 184 184-57 56Zm480 80v-160q0-50-35-85t-85-35H433l144 144-57 56-240-240 240-240 57 56-144 144h247q83 0 141.5 58.5T880-360v160h-80Z" />
          </svg>
          <span class="text">Reply all</span>
        </a>
      </li>
      <li value="forward">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path d="m640-280-57-56 184-184-184-184 57-56 240 240-240 240ZM80-200v-160q0-83 58.5-141.5T280-560h247L383-704l57-56 240 240-240 240-57-56 144-144H280q-50 0-85 35t-35 85v160H80Z" />
          </svg>
          <span class="text">Forward</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
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

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  display: grid;
  place-content: center;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;

  border: none;
  padding: 0.5rem 0;
  overflow-x: visible;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 4.5rem;
  padding: 1rem;
}

nav ul {
  a {
    display: grid;
    grid-template-columns: 1.5rem auto;
    gap: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
    transition-duration: 0.25s;
    align-items: center;
    background: #eaeaea;
    border-radius: 0.5rem;
    color: #5f6368;
    text-decoration: none;

    &:hover,
    &:focus-visible {
      background: lightgray;
      color: #333;
    }
  }
}

.text {
  padding-right: 0.75rem;
  font-family: 'Open Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
}
</style>
