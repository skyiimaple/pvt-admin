import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.PROD ? import.meta.env.BASE_URL : '/'),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/common/login-index.page.vue'),
    },
    {
      path: '/',
      name: 'root',
      redirect: '/home',
      component: () => import('@/layouts/layout-index.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/pages/home/home-index.page.vue'),
        },
        {
          path: '/menu',
          name: 'menu',
          component: () => import('@/views/pages/menu/menu-manage.page.vue'),
        },
        {
          path: '/role',
          name: 'role',
          component: () => import('@/views/pages/role/role-manage.page.vue'),
        },
        {
          path: '/404',
          name: '404',
          component: () => import('@/views/common/not-found.page.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          redirect: '/404',
        },
      ],
    },
  ],
})

export default router
