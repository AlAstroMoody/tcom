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
    <header
      class="md:mb-6 md:mt-10 my-2 bg-light-1 dark:bg-dark-2 w-fit py-5 px-3 md:px-7 mx-auto border-light-4 dark:border-dark-3 border-2 rounded-3xl sticky top-3 z-10 flex gap-3"
    >
      <a class="relative w-32" ref="logo" href="https://discord.gg/KbyW6hsaTv" target="_blank">
        <img
          src="/images/logo.png"
          class="transition-all absolute duration-500"
          :class="{ '[transform:rotateY(90deg)]': isRotate, 'delay-200': !isHoveredLogo }"
        />

        <span
          class="font-warcraft text-6xl text-warcraft drop-shadow-md transition-all absolute -m-1 duration-500"
          :class="{ '[transform:rotateY(-90deg)]': !isRotate, 'delay-200': isHoveredLogo }"
        >
          TCOM
        </span>
      </a>

      <div class="lg:flex hidden gap-2">
        <RouterLink
          :to="link.href"
          :class="{ 'text-dark-2 dark:text-light-2': route.path === link.href }"
          v-for="link of links"
          :key="link.href"
          class="py-2 text-lg transition-all hover:text-dark-1 dark:text-white hover:dark:text-light-3 hover:scale-110"
        >
          {{ link.title }}
        </RouterLink>
      </div>
      <ThemeButton />
      <!-- <div class="bg-dark-3 h-10 w-10 lg:hidden block"></div> -->
      <div class="menu md:hidden">
        <input type="checkbox" class="burger-checkbox" id="burger-checkbox" v-model="burgerValue" />
        <label
          for="burger-checkbox"
          class="burger dark:after:bg-light-1 dark:before:bg-light-1 after:bg-dark-3 before:bg-dark-3 mt-2"
        />
        <ul class="menu-list dark:bg-dark-3 bg-light-2 rounded-bl-xl" ref="burgerMenu">
          <div class="mt-6 text-dark-3 dark:text-light-1 flex gap-2 flex-col px-4">
            <li v-for="link in links" @click="burgerValue = false">
              <router-link :to="link.href" class="menu-item block">
                {{ link.title }}
              </router-link>
            </li>
          </div>
        </ul>
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
