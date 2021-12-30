import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/index.vue')
  },
   // 公共组件
  {
    path: '/elementTable',
    name: 'elementTable',
    component: () => import('@/components/global/elementTable/index.vue')
  },
  {
    path: '/topSearch',
    name: 'topSearch',
    component: () => import('@/components/global/topSearch/index.vue')
  },
  {
    path: '/elPage',
    name: 'elPage',
    component: () => import('@/components/global/elPage/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
