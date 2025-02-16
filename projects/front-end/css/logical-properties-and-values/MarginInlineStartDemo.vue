<template>
  <div>
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 16H2C0.89543 16 0 15.1046 0 14V1.913C0.0466084 0.842548 0.928533 -0.00101238 2 9.11911e-07H18C19.1046 9.11911e-07 20 0.895432 20 2V14C20 15.1046 19.1046 16 18 16ZM2 3.868V14H18V3.868L10 9.2L2 3.868ZM2.8 2L10 6.8L17.2 2H2.8Z" fill="#2E3A59" />
    </svg>
    <p>Mail</p>
  </div>

  <div dir="rtl">
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 16H2C0.89543 16 0 15.1046 0 14V1.913C0.0466084 0.842548 0.928533 -0.00101238 2 9.11911e-07H18C19.1046 9.11911e-07 20 0.895432 20 2V14C20 15.1046 19.1046 16 18 16ZM2 3.868V14H18V3.868L10 9.2L2 3.868ZM2.8 2L10 6.8L17.2 2H2.8Z" fill="#2E3A59" />
    </svg>
    <p>بريد</p>
  </div>
</template>

<style scoped>
body {
  font-size: 18px;
  font-family: system-ui;
  display: flex;
  height: 100vh;
  align-items: center;
  gap: 24px;
  justify-content: center;
  background-color: #4a90e2;
}

div {
  display: flex;
  align-items: center;
  border: solid 2px;
  padding: 8px 16px;
  width: fit-content;
  background-color: white;
}

p {
  margin-inline-start: 12px;
}

[dir='rtl'] {
  font-family: 'Tajawal', sans-serif;
}
</style>
