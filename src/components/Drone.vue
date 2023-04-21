<template>
  <img src="../assets/images/hero-drone.webp" class="drone absolute top-0 z-10 right-0 w-1/4">
</template>

<style scoped>
.drone {
  aspect-ratio: auto 500/ 326;
  animation: 10s ease infinite float-y;
}

@keyframes float-y {
  0%,100% { transform:translateY(0) }
  50% { transform:translateY(-10px)} 
}
</style>