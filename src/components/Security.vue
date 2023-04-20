<script setup>
import LinePageSection from './LinePageSection.vue'
</script>

<template>

  <LinePageSection
    class="security-section"
    icon="LockIcon"
    color="#939aff"
    firstGradient="linear-gradient(#abb4ff, #797ef9, #0d1117)"
    secondGradient="linear-gradient(#0d1117, #797ef9, #797ef9, #0d1117)"
    branches="lines-2"
    starsType="3"
  >
    <template #first>
      <h1> Test </h1>
    </template>

    <template #second>
      <h1> Test </h1>
    </template>
  </LinePageSection>

</template>

<style scoped>


</style>