<script setup lang="ts">
import { ThemeButton } from 'shared/ui'
import { RouterView, useRoute } from 'vue-router'
import { useElementHover, onClickOutside } from '@vueuse/core'
import { ref, watch } from 'vue'

const burgerMenu = ref(null)
onClickOutside(burgerMenu, (event) => {
  const target = event.target as Element
  if (target.classList) {
    if (!target.classList.contains('burger')) {
      burgerValue.value = false
    }
  }
})

const route = useRoute()
const links = [
  { title: 'Артефакты', href: '/' },
  // { title: 'Трофеи', href: '/trophies' },
  // { title: 'Талисманы', href: '/trophies' },
  // { title: 'Таланты', href: '/trophies' },
]

const logo = ref()

const isHoveredLogo = useElementHover(logo)
const isRotate = ref(false)

watch(isHoveredLogo, () => (isRotate.value = !isRotate.value))

const burgerValue = ref(false)
</script>
<template>
  <div class="w-full">
    <header class="flex mb-2 relative h-5.25">
      <div
        class="bg-gradient-to-r dark:from-dark-1 dark:to-dark-2 from-light-1 to-light-2 w-fit py-5 px-3 md:px-7 mr-auto border-light-4 dark:border-dark-3 border-none border-t-0 border-l-0 rounded-br-3xl fixed top-0 z-10 flex gap-3 h-5.25"
      >
        <a class="relative w-32" ref="logo" href="https://discord.gg/KbyW6hsaTv" target="_blank">
          <img
            src="/images/logo.png"
            class="transition-all absolute duration-500"
            :class="{ '[transform:rotateY(90deg)]': isRotate, 'delay-200': !isHoveredLogo }"
          />

          <span
            class="font-warcraft text-warcraft transition-all absolute -mt-3 duration-500 drop-shadow-logo"
            :class="{ '[transform:rotateY(-90deg)]': !isRotate, 'delay-200': isHoveredLogo }"
          >
            <p class="text-5xl h-9">TCOM</p>
            <p class="text-3xl -mt-1">1.26 final</p>
          </span>
        </a>
      </div>

      <div
        class="bg-gradient-to-r dark:from-dark-2 dark:to-dark-1 from-light-2 to-light-1 w-fit py-5 px-3 md:px-7 ml-auto border-light-4 dark:border-dark-3 border-none border-t-0 border-r-0 rounded-bl-3xl fixed top-0 right-0 z-10 flex gap-3"
      >
        <ThemeButton />
      </div>
    </header>
    <RouterView class="dark:text-light-1 text-dark-1" />
  </div>
</template>

<style>
.burger-checkbox {
  position: absolute;
  visibility: hidden;
}
.burger {
  position: relative;
  z-index: 1;
  display: block;
  position: relative;
  border: none;
  background: transparent;
  width: 40px;
  height: 26px;
}
.burger::before,
.burger::after {
  content: '';
  left: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 10px;
}
.dark .burger::before {
  box-shadow: 0 11px 0 #def0ff;
}
.burger::before {
  top: 0;
  box-shadow: 0 11px 0 #1b266b;
  transition:
    box-shadow 0.3s 0.15s,
    top 0.3s 0.15s,
    transform 0.3s;
}
.burger::after {
  bottom: 0;
  transition:
    bottom 0.3s 0.15s,
    transform 0.3s;
}
.burger-checkbox:checked + .burger::before {
  top: 11px;
  transform: rotate(45deg);
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
  transition:
    box-shadow 0.15s,
    top 0.3s,
    transform 0.3s 0.15s;
}
.burger-checkbox:checked + .burger::after {
  bottom: 11px;
  transform: rotate(-45deg);
  transition:
    bottom 0.3s,
    transform 0.3s 0.15s;
}
.menu-list {
  top: -84px;
  right: -21px;
  position: absolute;
  display: grid;
  gap: 12px;
  padding: 42px 0;
  margin: 0;
  list-style-type: none;
  transform: translateY(-100%);
  transition: 0.3s;
  width: 200px;
}
.menu-item {
  text-decoration: none;
}
.burger-checkbox:checked ~ .menu-list {
  transform: translateY(50px);
}
</style>
