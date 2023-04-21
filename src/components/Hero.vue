<script setup>
import LineSection from './LineSection.vue'
import Drone from './Drone.vue'
</script>

<template>
  <div class="hero">
    <div class="section">
      <img 
        src="../assets/images/hero-bg.webp" 
        class="right-[-1050px] max-w-[calc(230vw+1670px)] absolute top-0 z-[-1]" 
        width="4377"
      >
    </div>

    <LineSection
      class="pt-32"
      icon="CodeIcon"
      branches="lines-hero"
      gradient="linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)"
      :animate="false"
    >
      <Drone />
    </LineSection>
  </div>
</template>

<style scoped>
.hero {
  overflow: hidden;
  --color-accent-primary: #dd7df7;
}

:deep(.branches) {
  max-width: none;
  aspect-ratio: auto 437 / 637;
  width: 437px;
  height: 643px;
  left: calc(50% - 14px);
  bottom: 0;
  position: relative;
}
</style>