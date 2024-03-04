<script setup lang="ts">
defineProps<{
  title: string
  active: boolean
}>()
</script>
<template>
  <button
    class="px-2 hover:text-green-950 hover:bg-white rounded text-base"
    :class="active ? 'text-green-950 bg-white' : 'text-[rgba(235, 235, 235, 0.64)] bg-gray-700'"
  >
    {{ title }}
  </button>
</template>
