<script setup lang="ts">
defineProps<{ placeholder: string; position?: 'left' | 'right' }>()
const value = defineModel('value')
</script>
<template>
  <label class="relative">
    <input
      v-model="value"
      class="py-3 px-4 text-sm text-light-3 border w-full"
      :class="[
        { 'rounded-l-2xl': position === 'left' },
        { 'rounded-r-2xl': position === 'right' },
        { 'rounded-2xl': !position },
      ]"
    />
    <span
      class="absolute text-light-3 inset-3 ml-1 transition-all pointer-events-none text-sm truncate"
      :class="{ 'text-xs top-0': value }"
    >
      {{ placeholder }}
    </span>
  </label>
</template>
