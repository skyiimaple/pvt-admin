import { useTabStore } from '@/stores/tab'
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
          path: '/info',
          name: 'info',
          component: () => import('@/views/pages/about/about-me.vue'),
        },
        {
          path: '/system',
          name: 'system',
          children: [
            {
              path: 'role',
              name: 'role',
              component: () => import('@/views/pages/role/role-manage.page.vue'),
            },
            {
              path: 'menu',
              name: 'menu',
              component: () => import('@/views/pages/menu/menu-manage.page.vue'),
            },
          ],
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
    // {
    //   path: '/404',
    //   name: '404',
    //   component: () => import('@/views/common/not-found.page.vue'),
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   redirect: '/404',
    // },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !localStorage.getItem('token')) {
    next({ name: 'login' })
  } else {
    next()
    const tabStore = useTabStore()
    if (to.name !== 'login') {
      tabStore.addTab(to)
    }
    tabStore.setTabByRouter(to)
  }
})

export default router
