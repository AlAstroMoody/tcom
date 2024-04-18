<script setup lang="ts">
import { store, Item, ItemInfo } from 'entities/item'
import { BaseModal, ItemButton, BaseInput, BaseToggle, BaseSelect } from 'shared/ui'
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useVirtualList } from '@vueuse/core'
import { ItemsGraph } from 'widgets'

const router = useRouter()
const route = useRoute()

const items = computed((): Item[] => store.items)

const name = ref('')
const boss = ref('')
const isOverwhelmingCrit = ref(false)
const isSkillCrit = ref(false)
const isEvadeItem = ref(false)
const isMagicDefenceItem = ref(false)

const itemType = ref('Тип предмета')

const itemExtract = ref('Экстракты')
const extracts = [
  {
    name: 'Все экстракты',
    value: 'ко всем Экcтpaктам',
    alternatives: ['ко всем Экстрактам', 'ко всем Экстрактам'],
  },
  { name: 'Экстракт Защиты', value: 'Экстракту Защиты', alternatives: [] },
  { name: 'Экстракт Магии', value: 'Экстракту Магии', alternatives: [] },
  { name: 'Экстракт Жизни', value: 'Экстракту Жизни', alternatives: [] },
  { name: 'Экстракт Разрушения', value: 'Экстракту Разрушения', alternatives: [] },
  { name: 'Экстракт Силы', value: 'Экстракту Силы', alternatives: [] },
  { name: 'Экстракт Энергии', value: 'Экстракту Энергии', alternatives: ['Экстракту Помощи'] },
]

const filteredItems = computed((): Item[] => {
  let result = items.value
  if (name.value) {
    result = result.filter((item) => item.name.toLowerCase().includes(name.value.toLowerCase()))
  }
  if (boss.value) {
    result = result.filter((item) =>
      item.loot?.toLowerCase().includes(boss.value.toLocaleLowerCase())
    )
  }
  if (isOverwhelmingCrit.value) {
    result = result.filter((item) => item.description.includes('одавляющ'))
  }
  if (isEvadeItem.value) {
    result = result.filter((item) => item.description.includes('клонени'))
  }
  if (isMagicDefenceItem.value) {
    result = result.filter((item) => item.description.includes('от магии'))
  }
  if (isSkillCrit.value) {
    result = result.filter(
      (item) =>
        item.description.includes('крит навыкам') || item.description.includes('крита навыкам')
    )
  }
  if (itemType.value && itemType.value !== 'Тип предмета') {
    if (itemType.value === 'Реликвия') {
      result = result.filter((item) => item.name.includes(itemType.value))
    } else result = result.filter((item) => item.category === itemType.value)
  }

  if (itemExtract.value && itemExtract.value !== 'Экстракты') {
    const activeExtract = extracts.find(
      (e) => e.name.toLowerCase() === itemExtract.value.toLowerCase()
    )

    if (activeExtract)
      result = result.filter((item) => {
        const desc = item.description.toLowerCase().replaceAll(/ {2,}/g, ' ')
        return (
          desc.includes(activeExtract.value.toLowerCase()) ||
          desc.includes(activeExtract.alternatives[0]?.toLowerCase())
        )
      })
  }

  return result.sort((a, b) => a.name.localeCompare(b.name))
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

const changeSearch = (itemName: string, bossName: string) => {
  name.value = itemName
  boss.value = bossName
  scrollTo(0)
}

const isShowFilter = ref(false)
</script>

<template>
  <main
    class="flex relative flex-wrap md:flex-row flex-col-reverse lg:mx-4 gap-2 overflow-x-hidden"
    ref="main"
  >
    <ItemsGraph v-if="useTree && activeItem" :activeItem="activeItem" :items="items" />
    <BaseModal ref="modal" class="md:hidden md:pointer-events-none">
      <ItemInfo
        class="w-11/12"
        :activeItem="activeItem"
        v-if="activeItem"
        @search="changeSearch"
        @setBoss="boss = $event"
      />
    </BaseModal>
    <div
      class="lg:w-fit w-full block-gradient px-4 rounded-3xl md:max-w-[380px]"
      :key="filteredItems.length"
    >
      <div v-if="!filteredItems.length">Предметов не найдено</div>
      <div
        v-bind="containerProps"
        class="w-full md:w-[340px] scrollbar-custom overflow-y-scroll md:h-[calc(100vh-116px)] h-[calc(100vh-96px)] mb-4"
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
              class="w max-w-80"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="w-1/2 lg:min-w-96 lg:mx-2 mb-4" v-if="activeItem">
      <ItemInfo
        :activeItem="activeItem"
        @search="changeSearch"
        @setBoss="boss = $event"
        v-model:name="name"
        v-model:boss="boss"
        class="md:block hidden block-gradient md:p-8 px-2 rounded-3xl"
      />
    </div>

    <div
      class="md:block dark:bg-dark-2 bg-light-2 mb-5 rounded-3xl w-fit md:p-8 p-6 ml-auto h-fit fixed top-36 right-0 transition-all border-2 border-light-3 z-10"
      :class="{ 'translate-x-full mr-4': !isShowFilter }"
    >
      <button
        class="absolute top-0 bottom-0 w-10"
        @click="isShowFilter = !isShowFilter"
        :class="isShowFilter ? '-left-3' : '-left-[29px]'"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 129 129"
          class="fill-light-3"
          :class="isShowFilter ? '' : 'rotate-180'"
        >
          <g>
            <path
              d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"
            />
          </g>
        </svg>
      </button>
      <div class="flex flex-wrap mb-2">
        <BaseInput
          v-model:value="name"
          placeholder="Поиск по названию"
          position="left"
          class="md:max-w-40 max-w-36"
        />
        <BaseInput
          v-model:value="boss"
          placeholder="Поиск по боссу"
          position="right"
          class="md:max-w-40 max-w-36"
        />
      </div>

      <div class="flex flex-col gap-2">
        <BaseToggle v-model="isOverwhelmingCrit" label="Подавляющий крит" />
        <BaseToggle v-model="isSkillCrit" label="Крит навыками" />
        <BaseToggle v-model="isEvadeItem" label="Уклонение" />
        <BaseToggle v-model="isMagicDefenceItem" label="Защита от магии" />
        <BaseSelect
          class="w-fit"
          v-model="itemType"
          :list="[
            'Граальный артефакт',
            'Реликвия',
            'Сокровище',
            'Bloody Item',
            'Black Item',
            'Aqua',
            'Жертвенный',
            'Материал',
          ]"
        />
        <BaseSelect class="w-fit" v-model="itemExtract" :list="extracts.map((e) => e.name)" />
      </div>
    </div>
  </main>
</template>
