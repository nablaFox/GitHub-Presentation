<script setup>
import LineSection from './LineSection.vue'
import Drone from './Drone.vue'
import ProfileBanner from './ProfileBanner.vue'   

const vParagraph = {
  mounted: el => {
    el.classList.add('text-grey', 'text-3xl', 'mt-12', 'max-w-[80%]')
  }
}
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
      icon="Code"
      branches="lines-hero"
      gradient="linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)"
      :animate="false"
    >
      <Drone />
      <div class="pt-64"> 
        <ProfileBanner class="mt-16"/>
        <h1 class="text-7xl mt-10 font-semibold"> Social coding platform </h1>
        <p v-paragraph class="mt-6"> 
          GitHub is not a real social network, but you have a profile to customize and its goal is the collaboration between developers. It's differently social.
        </p>

        <p v-paragraph>
          At its core, is a code hosting platform. Developers can use it to store and manage code repositories, <span class="text-purple"> collaborate </span> with others, and track changes to code over time. 
        </p>

        <p v-paragraph>
          GitHub is used by some of the biggest tech companies in the world, including Google, Facebook, and Amazon.
        </p>        

        <div class="flex justify-between items-center gap-10 w-[91%] mt-24 mb-8">
          <img src="../assets/images/stripe.svg" >
          <img src="../assets/images/pinterest.svg">
          <img src="../assets/images/mercedes.svg" class="h-12">
          <img src="../assets/images/apple.svg" class="h-12">
          <img src="../assets/images/amazon.svg" class="h-12">
          <img src="../assets/images/facebook.svg" class="h-12">
        </div>
      </div>
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

:deep(.glowing-icon) { margin: 16px auto }
</style>