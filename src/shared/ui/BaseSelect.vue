<script setup lang="ts" generic="T">
import { onMounted, ref } from 'vue'

defineProps<{ list: string[] }>()
const value = defineModel<T>()
const baseValue = ref<T>()
onMounted(() => {
  baseValue.value = value.value
})
</script>
<template>
  <select
    v-model="value"
    id="countries"
    class="dark:bg-dark-3 bg-light-2 text-dark-1 dark:text-light-1 border border-light-3 text-sm rounded-lg block w-full p-2.5"
  >
    <option selected>{{ baseValue }}</option>
    <option :value="item" v-for="item in list">{{ item }}</option>
  </select>
</template>
