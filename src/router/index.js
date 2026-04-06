import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'loginView',
    meta: { layout: 'login-layout' },
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'homeView',
    meta: { layout: 'standart-layout' },
    component: () => import('../views/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
