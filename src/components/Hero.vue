<script setup>
import LineSection from './LineSection.vue'
import Drone from './Drone.vue'
</script>

<template>
  <div class="hero">
    <div class="background-wrapper">
      <img src="../assets/images/hero-bg.webp" alt="Hero background" class="hero-bg" width="4377">
    </div>

    <LineSection
      class="hero-section"
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

.background-wrapper {
  max-width: var(--section-max-width);
  margin: auto;
}

.hero-bg {
  position: absolute;
  top: 0;
  z-index: 9;
  pointer-events: none;
  right: -1050px;
  max-width: calc(230vw + 1670px);
  z-index: -1;
  overflow-clip-margin: content-box;
  overflow: clip;
}

.hero-section {
  padding: 128px 0px;
  padding-bottom: 0;
}

:deep(.branches) {
  aspect-ratio: auto 437 / 637;
  width: 437px;
  height: 643px;
  left: calc(50% - 14px);
  bottom: 0;
  position: relative;
}
</style>