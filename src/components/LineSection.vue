<script setup>
import GlowingIcon from './GlowingIcon.vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  icon: String,
  branches: String,
  gradient: String,
  ending: Boolean,
  animate: {
    type: Boolean,
    default: true
  },
  lineDelay: {
    type: String,
    default: '500ms'
  },
  iconDelay: {
    type: String,
    default: '0ms'
  }
})

const branchesURL = new URL(`/src/assets/images/${props.branches}.svg`, import.meta.url)

const vAnimate = {
  mounted: el => {
    el.classList.add('animate')
    props.animate && useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => el.classList.toggle('animate', isIntersecting),
      { immediate: true }
    )
  }
}
</script>

<template>
  <div 
    class="section flex"
    :style="{ height: ending ? '160px' : '1000px' }"
  >
    <div class="w-[8.3%] flex flex-col">
      <img 
        class="branches transition-1 opacity-0 absolute left-[calc(50%-2px)] bottom-32"
        v-if="branches" 
        :src="branchesURL"
        v-animate
      >
      <GlowingIcon 
        ref="iconTarget" 
        v-if="icon"
        :icon="icon"
        :style="{ transitionDelay: iconDelay }"
        color="var(--color-accent-primary)"
        class="transition-1 opacity-0 scale-0 origin-center"
        v-animate
      />
      <div
        class="line w-[3px] h-full mx-auto rounded-md scale-y-0 origin-[0_0] transition-1" 
        ref="lineTarget"
        :style="{ 
          background: gradient, 
          transitionDelay: lineDelay
        }"
        v-animate
      />
    </div>
    <div class="w-[91%]" v-if="$slots.default">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.animate {
  transform: initial!important;
  opacity: 1!important;
}
</style>