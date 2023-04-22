<script setup>
import LineSection from './LineSection.vue'
import Stars from './Stars.vue'

defineProps({
  icon: String,
  headline: String,
  color: String,
  branches: String,
  firstGradient: String,
  secondGradient: String,
  endingGradient: String,
  starsType: String,
  funFact: String,
})

const fade = (direction, delay) => ({
  initial: {
    opacity: 0,
    x: direction === 'left' ? -15 : 15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay }
  },
  style: {
    transition: 'transform .6s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

const fadeLeft1 = fade('left', 300)
const fadeLeft2 = fade('left', 400)
const fadeLeft3 = fade('left', 600)
const fadeRight1 = fade('right', 0)
</script>

<template>
  <div
    class="page-section section pt-6"
    :style="{ '--color-accent-primary': color }"
  >
    <LineSection
      :icon="icon"
      :gradient="firstGradient"
    >
      <div class="w-[76%] font-medium">
        <h2 
          class="text-2xl mb-6"
          v-bind="fadeLeft1"
          v-motion
        > 
          {{ headline }} 
        </h2>
        <h3 
          class="head text-5xl mb-6"
          v-bind="fadeLeft2"
          v-motion
        >
          <slot name="head" />
        </h3>
      </div>
    </LineSection>

    <slot name="center" />

    <LineSection
      :gradient="secondGradient"
      :branches="branches"
      :line-delay="0"
    >
      <div class="ml-10">
        <div class="flex mt-16 mb-44">
          <h2 
            class="prose font-medium text-grey text-2xl w-1/2"
            v-bind="fadeRight1"
            v-motion
          >
            <slot name="prose" />
          </h2>
          <div>
            <slot name="prose-asset" />
          </div>
        </div>

        <div 
          class="mb-24"
          v-bind="fadeLeft3"
          v-motion
        >
          <div 
            class="border rounded-full px-2 tip inline-block text-xs leading-5 text-gradient-accent font-semibold"
            :style="{ borderColor: color }"
          > 
            Did you know? 
          </div>
          <h3 
            class="text-6xl font-medium mt-4 mb-2"
            :style="{ color }"
          > 
            {{ funFact }}
          </h3>
          <p class="max-w-[560px] text-xl"> 
            <slot name="fun-fact" />
          </p>
        </div>
      </div>

      <Stars :type="starsType" />
    </LineSection>

    <slot name="body" />

    <LineSection
      v-if="endingGradient"
      :gradient="endingGradient"
      :line-delay="0"
      ending
    />
  </div>
</template>

<style scoped>
.head :deep(span) {
  color: var(--color-accent-primary);
  font-weight: inherit;
}

.prose :deep(span) {
  color: var(--color-scale-white-0);
}
</style>