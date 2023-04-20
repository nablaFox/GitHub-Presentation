<template>
  <div class="header-wrapper">
    <header>
      <div class="container">
        <div class="brand">
          <img src="../assets/logo.svg" alt="Github Logo" width="32" height="32">
          <div class="name"> Github </div>
        </div>
        <a href=""> See more </a>
      </div>
    </header>
  </div>
</template>

<style scoped>
header {
  padding: 16px 0;
  color: white;
  position: absolute;
  right: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: auto;
  padding: 0 16px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 16px;
  user-select: none;
  line-height: 0;
}

a {
  padding: 4px 8px;
  border: 1px solid white;
  border-radius: 6px;
}
</style>