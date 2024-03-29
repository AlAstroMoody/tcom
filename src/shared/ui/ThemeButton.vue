<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
  <div class="flex gap-1 rounded-2xl dark:bg-dark-3 bg-white text-light-3 p-1">
    <button
      class="px-4 py-2 rounded-xl text-sm"
      :class="isDark ? 'text-light-3' : 'text-white bg-light-3 '"
      @click="toggleDark()"
    >
      Light
    </button>
    <button
      class="px-4 py-2 rounded-xl text-sm"
      :class="isDark ? 'text-white bg-light-3 ' : 'text-light-3'"
      @click="toggleDark()"
    >
      Black
    </button>
  </div>
</template>
