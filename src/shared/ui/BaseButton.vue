<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<template>
  <button class="px-4 py-2 text-lg text-white bg-purple-950 hover:text-purple-950 hover:bg-white">
    {{ title }}
  </button>
</template>
