<script setup lang="ts">
import { store, Item, ItemInfo } from 'entities/item'
import { BaseModal, ItemButton } from 'shared'
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useVirtualList } from '@vueuse/core'
import { ItemsGraph } from 'widgets'

const router = useRouter()
const route = useRoute()

const items = computed((): Item[] => store.items)

const name = ref('')
const boss = ref('')

const filteredItems = computed((): Item[] => {
  let result = items.value
  if (name.value) {
    result = result.filter((item) => {
      if (item.name.includes('амень'))
        console.log(item.name.toLowerCase(), name.value.toLowerCase())
      return item.name.toLowerCase().includes(name.value.toLowerCase())
    })
  }
  // if (boss.value) {
  //   result = result.filter((item) =>
  //     item.loot?.toLowerCase().includes(boss.value.toLocaleLowerCase())
  //   )
  // }
  return result
  // .sort((a, b) => {
  //   if (a.craft?.length < b.craft?.length) return 1
  //   if (a.craft?.length > b.craft?.length) return -1
  //   return 0
  // })
})

const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(filteredItems, {
  itemHeight: 22,
})

const activeItem = ref<Item | null>(null)

onMounted(async () => {
  await store.setItems()
})
watch(items, () => {
  if (route.query.item) setActiveItem(+route.query.item)
  console.log(items.value.map((i) => i.id))
})

const main = ref<HTMLElement>()
const setActiveItem = (id: number) => {
  router.push({ query: { item: id } })
  activeItem.value = items.value.find((item) => item.id === id) || activeItem.value
  if (main.value && main.value?.clientWidth < 768) modal.value?.open()
}

watch(
  () => route.query.item,
  async (newId) => {
    if (newId) {
      activeItem.value = items.value.find((item) => item.id === +newId) || activeItem.value
    }
  }
)

const useTree = ref(false)
const showTree = (id: number) => {
  useTree.value = true
  setActiveItem(id)
}

const modal = ref<InstanceType<typeof BaseModal> | null>(null)
const itemsList = ref<HTMLElement>()

const changeSearch = (itemName: string, bossName: string) => {
  name.value = itemName
  boss.value = bossName
  scrollTo(0)
}
</script>

<template>
  <main class="w-full md:px-8 px-2 flex relative flex-wrap md:flex-col flex-col-reverse" ref="main">
    <!-- <ItemsGraph v-if="useTree && activeItem" :activeItem="activeItem" :items="items" /> -->
    <BaseModal ref="modal" class="md:hidden md:pointer-events-none">
      <ItemInfo class="w-full" :activeItem="activeItem" v-if="activeItem" @search="changeSearch" />
    </BaseModal>
    <div class="md:w-1/2 w-full">
      <div
        v-bind="containerProps"
        style="height: calc(100vh - 100px)"
        class="w-full md:w-96 scrollbar-custom overflow-y-scroll"
      >
        <div v-bind="wrapperProps">
          <div
            v-for="item in list"
            :key="item.index"
            style="height: 32px"
            class="mb-2 flex gap-2 w-fit"
          >
            <!-- <img :src="item.art.replace('blp', 'png')" /> -->
            <!-- <button @click="showTree(item.data.id)">?</button> -->
            <ItemButton
              :title="item.data.name"
              @click="setActiveItem(item.data.id)"
              :active="item.data.id === activeItem?.id"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="w-1/2 max-w-3xl min-w-96 right-8 mx-2 md:fixed">
      <div class="hidden md:flex gap-2 flex-wrap px-2 py-2">
        <label class="flex items-center">
          <div class="w-16">Поиск:</div>
          <input v-model="name" class="bg-purple-200 border-2 rounded p-2 text-purple-950" />
        </label>

        <label class="flex items-center">
          <div class="w-16">Босс:</div>
          <input v-model="boss" class="bg-purple-200 border-2 rounded p-2 text-purple-950" />
        </label>
      </div>
      <ItemInfo
        :activeItem="activeItem"
        v-if="activeItem"
        @search="changeSearch"
        v-model:name="name"
        v-model:boss="boss"
        class="md:block hidden"
      />
    </div>
  </main>
</template>
