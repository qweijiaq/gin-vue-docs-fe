import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import("@/views/web/index.vue")
    },
    {
      path: '/document/:id',
      name: 'document',
      component: () => import("@/views/web/document.vue")
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import("@/views/admin/index.vue"),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import("@/views/admin/home/index.vue")
        }
      ]
    },
  ]
})

export default router
