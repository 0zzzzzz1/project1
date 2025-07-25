import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/index', name: 'index', component: () => import('../views/Index.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
