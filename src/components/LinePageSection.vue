<script setup>
import LineSection from './LineSection.vue'
import Stars from './Stars.vue'

defineProps({
  icon: String,
  color: String,
  branches: String,
  firstGradient: String,
  secondGradient: String,
  endingGradient: String,
  starsType: String
})
</script>

<template>
  <div
    class="page-section"
    :style="{ '--color-accent-primary': color }"
  >
    <LineSection
      :icon="icon"
      :gradient="firstGradient"
    >
      <slot name="first" />
    </LineSection>

    <LineSection
      :gradient="secondGradient"
      :branches="branches"
    >
      <Stars :type="starsType" />
      <slot name="second" />
    </LineSection>

    <LineSection
      v-if="endingGradient"
      :gradient="endingGradient"
      ending
    />
  </div>
</template>

<style scoped>
/** styling using --color-accent-primary */
</style>