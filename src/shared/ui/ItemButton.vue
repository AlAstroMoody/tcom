<script setup lang="ts">
defineProps<{
  title: string
  active: boolean
}>()
</script>
<template>
  <button
    class="px-5 py-2.5 rounded text-base text-white flex items-center"
    :class="active ? 'bg-dark-2' : 'bg-dark-3 hover:bg-dark-2'"
  >
    <p class="truncate">{{ title }}</p>
  </button>
</template>
