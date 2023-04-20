<script setup>
import LinePageSection from './LinePageSection.vue'
</script>

<template>

  <LinePageSection
    class="collaboration-section"
    icon="PartnershipIcon"
    color="#ffa28b"
    firstGradient="linear-gradient(#ffd6cc, #ec6547, #ec6547, #0d1117)"
    secondGradient="linear-gradient(#0d1117, #ea6045, #ea6045, #0d1117)"
    endingGradient="linear-gradient(#0d1117, #797ef9, #abb4ff)"
    branches="lines-1"
    starsType="2"
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