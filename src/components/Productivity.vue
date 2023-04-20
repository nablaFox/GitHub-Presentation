<script setup>
import LinePageSection from './LinePageSection.vue'
</script>

<template>

  <LinePageSection
    class="productivity-section"
    icon="PartnershipIcon"
    color="#7ee787"
    firstGradient="linear-gradient(#56d364, #2ea043, #0d1117)"
    secondGradient="linear-gradient(#0d1117, #2ea043, #2ea043, #0d1117)"
    endingGradient="linear-gradient(#0d1117, #ea6045, #ffa28b)"
    branches="lines-3"
    starsType="1"
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