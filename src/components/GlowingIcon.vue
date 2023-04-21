<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  color: String
})

const component = defineAsyncComponent(() => import(`./icons/${props.icon}.vue` /* @vite-ignore */))
</script>

<template>
  <div class="glowing-icon">
    <div class="wrapper">
      <component :is="component" class="icon" fill="white" />
      <span class="glow"></span>
    </div>
  </div>
</template>

<style scoped>
.glowing-icon { margin: 16px auto }

.wrapper { display: inline-block }

.glow {
  background-color: v-bind(color);
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(17px);
  z-index: -1;
  left: 0;
  top: 0;
}
</style>