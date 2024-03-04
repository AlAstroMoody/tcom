<script setup lang="ts">
import { Item, store } from 'entities/item'
import { useRouter, useRoute } from 'vue-router'
import { ref, computed } from 'vue'

const { activeItem } = defineProps<{ activeItem: Item }>()
const name = defineModel('name')
const boss = defineModel('boss')
// const emit = defineEmits<{ search: [name: string, boss: string] }>()

const router = useRouter()

const items = computed((): Item[] => store.items)

const activeItemChild = computed(() =>
  items.value.filter((item) =>
    item.craft?.some((el) => el.items.find((i) => i.id === activeItem.id))
  )
)
const activeItemGems = computed(() =>
  items.value.filter((item) => item.gems?.find((i) => i.id === activeItem.id))
)

const setActiveItem = (id: number) => {
  router.push({ query: { item: id } })
}

// const useSearch = () => emit('search', name.value, boss.value)
</script>
<template>
  <div>
    <div
      v-if="activeItem"
      class="bg-gray-700 rounded w-full p-4 overflow-auto md:h-full mt-10 md:mt-0 h-full"
    >
      <div class="flex justify-between">
        <div class="text-green-500 text-lg gradient-text">{{ activeItem.name }}</div>
        <button
          @click="router.back"
          class="text-red-300 text-4xl cursor-pointer"
          v-if="String(router.options.history.state.back).startsWith('/?item=')"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="transform scale-75"
          >
            <rect width="48" height="48" fill="white" fill-opacity="0.01" />
            <path
              d="M12.3638 8L5.99981 14.364L12.3638 20.7279"
              class="stroke-gray-800"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 14.364L28.6722 14.364C35.557 14.364 41.2122 19.8028 41.4805 26.6824V26.6824C41.7641 33.952 35.9474 40 28.6722 40H12"
              class="stroke-gray-800"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        class="md:px-4 md:max-h-[calc(100vh_-_200px)] max-h-[calc(100vh_-_120px)] overflow-y-auto scrollbar-thin scrollbar-custom"
      >
        <article class="mb-2" v-html="activeItem.description" />
        <div v-if="activeItem.loot" class="my-4">
          Где достать: <span class="text-purple-500">{{ activeItem.loot }}</span>
        </div>
        <div class="md:px-2 flex flex-col gap-2">
          <div v-if="activeItem.craft?.length">
            <span class="uppercase text-red-600">Из чего скрафтить:</span>

            <article>
              <ul v-for="(subItem, index) in activeItem.craft" :key="subItem.id" class="w-full">
                <li
                  v-for="(item, index) in subItem.items"
                  :key="item.id"
                  class="text-purple-500 cursor-pointer w-full flex justify-between"
                >
                  <button @click="setActiveItem(item.id)" class="text-left">
                    {{ item.name }}
                  </button>
                  <!-- <span>{{ index < subItem.items.length - 1 ? ', ' : ';' }}</span> -->

                  <span class="text-green-400 ml-2 text-right">({{ item.loot }})</span>
                </li>
                <span v-if="index + 1 < activeItem.craft.length">или</span>
              </ul>
            </article>
          </div>
          <div v-if="activeItem.gems?.length">
            <span class="uppercase text-red-600">Создается из</span>
            <article>
              <ul v-for="gem in activeItem.gems" :key="gem.id" class="w-full">
                <li class="text-purple-500 cursor-pointer w-full flex justify-between">
                  <button @click="setActiveItem(gem.id)" class="text-left">
                    {{ gem.name }}
                  </button>
                  <span class="text-green-400 ml-2 text-right">({{ gem.loot || '?' }})</span>
                </li>
              </ul>
            </article>
          </div>
          <div v-if="activeItemChild.length">
            <span class="uppercase text-red-600">Используется в:</span>
            <article>
              <ul v-for="item in activeItemChild" :key="item.id" class="w-full">
                <li class="w-full flex justify-between">
                  <button
                    @click="setActiveItem(item.id)"
                    class="cursor-pointer text-left text-purple-500"
                  >
                    {{ item.name }}
                  </button>
                  <span class="text-green-400 ml-2 text-right">({{ item.loot || '?' }})</span>
                </li>
              </ul>
            </article>
          </div>
          <div v-if="activeItemGems.length">
            <span class="uppercase text-red-600">Можно апнуть в кузнице в:</span>
            <article>
              <ul v-for="item in activeItemGems" :key="item.id" class="w-full">
                <li class="w-full flex justify-between">
                  <button
                    @click="setActiveItem(item.id)"
                    class="cursor-pointer text-purple-500 text-left"
                  >
                    {{ item.name }}
                  </button>
                  <span class="text-green-400 ml-2 text-right">({{ item.loot || '?' }})</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
article {
  -webkit-border-before: var(--border-size-1) solid var(--surface-3);
  border-block-start: var(--border-size-1) solid var(--surface-3);
  overflow-y: auto;
  max-block-size: 100%;
  overscroll-behavior-y: contain;
  display: grid;
  justify-items: flex-start;
  gap: var(--size-3);
  box-shadow: var(--shadow-2);
  z-index: var(--layer-1);
  padding-inline: var(--size-3);
  padding-block: var(--size-3);
}
.gradient-text {
  background: linear-gradient(to right, #ff0000, #00ff00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
</style>
