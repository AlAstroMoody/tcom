<script setup lang="ts">
import { Item, store } from 'entities/item'
import { useRouter, useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { emit } from 'process'

const { activeItem } = defineProps<{ activeItem: Item }>()
const name = defineModel('name')
const boss = defineModel('boss')
const emit = defineEmits<{ setBoss: [name: string] }>()

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

const setBoss = (name: string) => emit('setBoss', name)
</script>
<template>
  <div class="dark:bg-dark-2 bg-light-2 mx-4 lg:mx-0">
    <div v-if="activeItem" class="rounded w-full overflow-auto md:h-full pt-10 md:mt-0 h-full px-2">
      <div class="flex justify-between items-center">
        <div class="text-lg gradient-text">{{ activeItem.name }}</div>
        <button
          @click="router.back"
          class="text-4xl cursor-pointer"
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
            <rect width="48" height="48" />
            <path
              d="M12.3638 8L5.99981 14.364L12.3638 20.7279"
              class="stroke-light-3"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 14.364L28.6722 14.364C35.557 14.364 41.2122 19.8028 41.4805 26.6824V26.6824C41.7641 33.952 35.9474 40 28.6722 40H12"
              class="stroke-light-3"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        class="md:px-4 scrollbar-thin scrollbar-custom md:py-4 lg:h-auto h-[calc(100vh-128px)] lg:overflow-auto overflow-y-auto"
      >
        <article class="mb-2" v-html="activeItem.description" />
        <div v-if="activeItem.loot" class="my-4 text-dark-1 dark:text-light-1">
          Где достать:
          <button
            class="text-warcraft hover:scale-110 transition-all ml-1"
            @click="setBoss(activeItem.loot)"
          >
            {{ activeItem.loot }}
          </button>
        </div>
        <div class="md:px-2 flex flex-col gap-2">
          <div v-if="activeItem.craft?.length">
            <span class="uppercase text-light-3">Из чего скрафтить:</span>

            <article>
              <ul v-for="(subItem, index) in activeItem.craft" :key="subItem.id" class="w-full">
                <li
                  v-for="(item, index) in subItem.items"
                  :key="item.id"
                  class="cursor-pointer w-full flex justify-between"
                >
                  <button
                    @click="setActiveItem(item.id)"
                    class="text-left text-warcraft hover:scale-110 transition-all"
                  >
                    {{ item.name }}
                  </button>
                  <span class="ml-2 text-right">({{ item.loot }})</span>
                </li>
                <span v-if="index + 1 < activeItem.craft.length">или</span>
              </ul>
            </article>
          </div>
          <div v-if="activeItem.gems?.length">
            <span class="uppercase text-light-3">Создается из</span>
            <article>
              <ul v-for="gem in activeItem.gems" :key="gem.id" class="w-full">
                <li class="text-warcraft cursor-pointer w-full flex justify-between">
                  <button
                    @click="setActiveItem(gem.id)"
                    class="text-left hover:scale-110 transition-all"
                  >
                    {{ gem.name }}
                  </button>
                  <span class="ml-2 text-right">({{ gem.loot || '?' }})</span>
                </li>
              </ul>
            </article>
          </div>
          <div v-if="activeItemChild.length">
            <span class="uppercase text-light-3">Используется в:</span>
            <article>
              <ul v-for="item in activeItemChild" :key="item.id" class="w-full">
                <li class="w-full flex justify-between">
                  <button
                    @click="setActiveItem(item.id)"
                    class="cursor-pointer text-left text-warcraft hover:scale-110 transition-all"
                  >
                    {{ item.name }}
                  </button>
                  <span class="ml-2 text-right"> ({{ item.loot || '?' }}) </span>
                </li>
              </ul>
            </article>
          </div>
          <div v-if="activeItemGems.length">
            <span class="uppercase text-light-3">Можно апнуть в кузнице в:</span>
            <article>
              <ul v-for="item in activeItemGems" :key="item.id" class="w-full">
                <li class="w-full flex justify-between">
                  <button
                    @click="setActiveItem(item.id)"
                    class="cursor-pointer text-warcraft text-left hover:scale-110 transition-all"
                  >
                    {{ item.name }}
                  </button>
                  <span class="ml-2 text-right"> ({{ item.loot || '?' }}) </span>
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
  display: grid;
  justify-items: flex-start;
  gap: 8px;
  box-shadow:
    0 3px 5px -2px hsl(220 40% 2% / calc(25% + 3%)),
    0 7px 14px -5px hsl(220 40% 2% / calc(25% + 5%));
  z-index: 1;
  padding-inline: 1rem;
  padding-block: 1rem;
}
.gradient-text {
  background: linear-gradient(to right, #ff0000, #00ff00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
</style>
