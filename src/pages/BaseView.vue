<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
const route = useRoute()
const links = [
  { title: 'Артефакты', href: '/' },
  // { title: 'Трофеи', href: '/trophies' },
]
</script>
<template>
  <div class="w-full h-full">
    <header class="w-full mb-4">
      <RouterLink
        :to="link.href"
        :class="
          route.path === link.href
            ? 'text-purple-950 bg-white'
            : 'text-white bg-purple-950  hover:text-purple-950 hover:bg-white'
        "
        v-for="link of links"
        :key="link.href"
        class="px-4 py-2 text-lg transition-all"
      >
        {{ link.title }}
      </RouterLink>
    </header>
    <RouterView />
  </div>
</template>
