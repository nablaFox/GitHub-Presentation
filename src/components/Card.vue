<script setup>
defineProps({
  vertical: Boolean,
  single: Boolean
})
</script>


<template>
  <div 
    class="card flex p-16 items-center justify-center rounded-lg border border-grey-3 bg-navie-1 text-2xl text-grey"
    :class="{ 'flex-col': vertical, 'gap-16': !single }"
  >
    <div 
      class="font-medium"
      :class="{ 'w-1/2': !vertical }"
    >
      <slot name="first" />
    </div>
    <div class="font-medium">
      <slot name="second" />
    </div>
  </div>

</template>

<style scoped>
:deep(span) {
  color: var(--color-scale-white-0);
  display: contents;
}

</style>