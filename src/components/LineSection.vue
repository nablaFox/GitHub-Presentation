<script setup>
import GlowingIcon from './icons/GlowingIcon.vue'
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
    class="container"
    :style="{ height: ending ? '160px' : '1000px' }"
  >
    <div class="column">
      <img 
        class="branches"
        v-if="branches" 
        :src="branchesURL"
        v-animate
      >
      <GlowingIcon 
        ref="iconTarget" 
        v-if="icon"
        :icon="icon"
        v-animate
        :style="{ transitionDelay: iconDelay }"
      />
      <div
        class="line" 
        ref="lineTarget"
        :style="{ 
          background: gradient, 
          transitionDelay: lineDelay
        }"
        v-animate
      />
    </div>
    <div class="content" v-if="$slots.default">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  max-width: var(--section-max-width);
  margin: auto;
}

.content { width: 91% }

.column {
  width: 8.3333%;
  display: flex; 
  flex-direction: column;
}

.line {
  width: 3px;
  height: 100%;
  margin: 0 auto;
  border-radius: 6px;
  transform: scaleY(0);
  transform-origin: 0 0;
  transition: transform .7s cubic-bezier(0.16, 1, 0.3, 1);
}

.line.animate {
  transform: scaleY(1);
}

.glowing-icon {
  transition: opacity .7s cubic-bezier(0.16, 1, 0.3, 1),
    transform .7s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  transform-origin: 0 0;
  transform: scale(0);
}

.branches {
  transition: opacity .7s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  position: absolute;
  left: calc(50% - 2px);
  bottom: 100px;
}

.branches.animate { opacity: 1; }
.glowing-icon.animate { opacity: 1; transform: scale(1) }
</style>