<script setup lang="ts">
import { Item } from 'entities/item'
import { onMounted, ref, onUnmounted } from 'vue'
import { vElementSize } from '@vueuse/components'
const { items, activeItem } = defineProps<{ items: Item[]; activeItem: Item }>()
import { useMouse, useEventListener } from '@vueuse/core'

const { x, y, sourceType } = useMouse()
const COLORS = {
  text: 'white',
  craft: 'green',
  dark: '#070B24',
}

const zoom = ref(1)
const canvas = ref<HTMLCanvasElement | null>(null)
const ctx = ref<CanvasRenderingContext2D | null>(null)
const canvasInit = () => {
  if (canvas.value) {
    ctx.value = canvas.value.getContext('2d')
    if (ctx.value) {
      canvas.value.width = canvas.value.clientWidth
      canvas.value.height = canvas.value.clientHeight
      ctx.value.fillStyle = COLORS.dark
      ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height)
    }
  }
}

const onResize = () => {
  clear()
  init()
}

const elems = ref<{ number: [number, number] }>({})

const clear = () => {
  if (canvas.value && ctx.value) {
    ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
    console.log(canvas.value.width, canvas.value.height)
  }
}

const init = () => {
  console.log('init')
  // clear()
  canvasInit()

  if (canvas.value && activeItem) {
    elems.value[activeItem.id] = [canvas.value.width, canvas.value.height]
    const x = canvas.value.width / 2
    const y = 140
    createName(activeItem.id, x - 40, y + 10)
    // createCircle(x, y)
    createChild(activeItem.craft, activeItem.gems, x, y)
  }

  console.log(x.value, y.value)
}

const getItem = (id: number) => items.find((item) => item.id === id)

const createName = (id: number, x: number, y: number) => {
  if (canvas.value && ctx.value) {
    const item = getItem(id)
    console.log(item)
    if (item) {
      ctx.value.fillStyle = item.craft?.length ? COLORS.craft : COLORS.text
      ctx.value.font = '16px serif'
      ctx.value.fillText(item.name, x, y)
      ctx.value.stroke()
    }
  }
}
const createCircle = (x: number, y: number) => {
  if (ctx.value && canvas.value) {
    ctx.value.strokeStyle = COLORS.text
    ctx.value.beginPath()
    ctx.value.arc(x, y, 70 * zoom.value, 0, Math.PI * 2, true)
    ctx.value.stroke()
  }
}

const createChild = (
  craft: { id: number; items: Item[] }[],
  gems: Item[],
  x: number,
  y: number
) => {
  console.log(gems)
  // gems.forEach((gem) => {})
  console.log('craft', craft)
  if (!craft) return
  craft.forEach((elem, elIndex) => {
    console.log('elem', elem)
    const shift = ~~(elem.items.length / 2) * 140
    animate(0)
    function animate(index: number) {
      requestAnimationFrame(() => {
        const width = x - elIndex * 100 + index * 140 - shift
        const height = y + 50
        const randomHeight = Math.floor(Math.random() * 150)
        const randomWidth = Math.floor(Math.random() * 150)
        // console.log(randomHeight)
        createName(elem.items[index].id, randomWidth, randomHeight)
        // createCircle(width, height - 10)
        if (elem.items[index + 1]) {
          animate(index + 1)
        }
        const childItem = getItem(elem.items[index].id)
        if (childItem) {
          // console.log(childItem)
          // createChild(
          //   childItem.craft,
          //   childItem.gems,
          //   x - (index % 2 ? -randomWidth : randomWidth),
          //   y + randomHeight
          // )
        }
      })
    }
  })
}

const click = () => {
  console.log(x.value, y.value)
  // const pixel = ctx.value.getImageData(x.value, y.value, 1, 1)
  console.log(elems.value)
}

onMounted(() => {
  lockBody(true)
  init()
})
onUnmounted(() => {
  lockBody(false)
})

const lockBody = (bool: boolean) => {
  const body = document.querySelector('body')
  if (body) {
    bool ? body.classList.remove('overflow-y-scroll') : body.classList.add('overflow-y-scroll')
    body.classList.toggle('overflow-hidden')
  }
}
</script>
<template>
  <canvas
    ref="canvas"
    class="inset-0 bg-dark-2 fixed z-20 w-dvw h-dvh cursor-pointer"
    v-element-size="onResize"
    @click="click"
  />
</template>
