<script setup>
import ArrowIcon from './icons/ArrowIcon.vue'
</script>

<template>
  <a 
    class="profile-banner rounded-full border border-grey-1 inline-flex items-center gap-5 py-4 px-5" 
    href="https://github.com/nablaFox"
  >
    <img 
      src="../assets/images/profile.jpg" 
      class="rounded-full"
      width="44" 
      height="44" 
    >
    <div class="leading-tight">
      <div class="font-semibold"> Visit and explore my profile </div>
      <div class="text-grey-1"> This page is located in a Github repository </div>
    </div>
    <ArrowIcon />
  </a>
</template>

<style scoped>
.profile-banner {
  background: linear-gradient(90deg, rgba(1, 1, 1, 0.6) 0%, rgba(1, 1, 1, 0.461139) 59.76%, rgba(1, 1, 1, 0) 100%)
}

.arrow-symbol {
  transform: translateX(0);
  transition: transform .2s;
}

:deep(.arrow-stem) {
  stroke-dasharray: 10;
  stroke-dashoffset: 10;
  transition: stroke-dashoffset .2s;
}

a:hover :deep(.arrow-stem) { stroke-dashoffset: 0 }
a:hover .arrow-symbol { transform: translateX(4px) }
</style>