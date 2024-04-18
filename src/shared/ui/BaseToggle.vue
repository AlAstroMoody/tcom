<script setup lang="ts">
defineProps<{ label: string }>()
const value = defineModel()
</script>
<template>
  <label class="inline-flex items-center cursor-pointer w-fit">
    <input type="checkbox" v-model="value" class="sr-only peer" />
    <div
      class="relative w-11 h-6 dark:bg-dark-3 bg-light-3 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
    />
    <span class="ms-3 text-sm font-medium text-dark-1 dark:text-light-1">{{ label }}</span>
  </label>
</template>
