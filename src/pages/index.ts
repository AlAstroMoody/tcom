import { RouteRecordRaw } from 'vue-router'

import Routing from './BaseView.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    components: {
      default: () => import('pages/HomeView.vue'),
    },
  },
  {
    path: '/trophies',
    name: 'trophies',
    components: {
      default: () => import('pages/TrophiesView.vue'),
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    components: {
      default: () => import('pages/HomeView.vue'),
    },
  },
]

export { Routing }
