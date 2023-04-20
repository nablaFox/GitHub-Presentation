<template>
  <img src="../assets/images/hero-drone.webp" class="drone">
</template>

<style scoped>
.drone {
  position: absolute;
  top: 0px;
  z-index: 10;
  right: 0px;
  width: 25%;
  aspect-ratio: auto 500/ 326;
  animation: 10s ease infinite float-y;
}

@keyframes float-y {
  0%,100% { transform:translateY(0) }
  50% { transform:translateY(-10px)} 
}
</style>