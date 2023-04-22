<script setup>
import { computed } from 'vue'
const props = defineProps(['type'])

const style = computed(() => {
  if (props.type === '1') return
  if (props.type === '2') 
    return { transform: 'translateX(300px) rotateZ(180deg)' }
  else if (props.type === '3') {
    return { transform: 'translateX(300px) rotateZ(90deg)' }
  }
})
</script>

<template>
  <img 
    src="../assets/images/bg-stars-1.webp" 
    class="absolute right-0 top-0 h-auto w-[120%] aspect-[auto_2712_/_2712] z-[-1]" 
    :style="style"
  >
</template>