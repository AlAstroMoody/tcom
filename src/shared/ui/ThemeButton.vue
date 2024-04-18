<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(true)
const toggleDark = () => {
  isDark.value = !isDark.value
  document.querySelector('html')?.classList.toggle('dark')
}
</script>
<template>
  <div class="flex gap-1 rounded-2xl dark:bg-dark-3 bg-white text-light-3 p-1 relative">
    <button
      :key="btn"
      class="px-4 py-2 rounded-xl text-sm transition-all relative z-10"
      :class="{ 'text-white': isDark || btn === 'Light' }"
      @click="toggleDark()"
      v-for="btn in ['Light', 'Dark']"
    >
      {{ btn }}
    </button>
    <div
      class="bg-light-3 w-16 absolute h-9 rounded-xl z-1 transition-all duration-500 translate-x-0"
      :class="isDark ? 'translate-x-16' : ''"
    />
  </div>
</template>
