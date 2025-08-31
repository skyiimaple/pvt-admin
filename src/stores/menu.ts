import type { Menu } from '@/types/menus/menu'
import { ref } from 'vue'
import { STORE_MENUS } from './constants/cache-key'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore(
  'menu',
  () => {
    const menus = ref<Menu[]>([
      {
        id: '1',
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'el-House',
        },
      },
      {
        id: '2',
        path: '/info',
        name: 'info',
        meta: {
          title: '关于',
          icon: 'el-Postcard',
        },
      },
      {
        id: '3',
        path: '/system',
        name: 'system',
        meta: {
          title: '系统设置',
          icon: 'el-Setting',
        },
        children: [
          {
            id: '3-1',
            path: '/system/role',
            name: 'role',
            meta: {
              title: '角色管理',
              icon: 'el-User',
            },
          },
          {
            id: '3-2',
            path: '/system/user',
            name: 'user',
            meta: {
              title: '用户管理',
              icon: 'el-User',
            },
          },
          {
            id: '3-3',
            path: '/system/menu',
            name: 'menu',
            meta: {
              title: '菜单管理',
              icon: 'el-User',
            },
          },
        ],
      },
    ])
    const setMenus = (menuList: Menu[]) => {
      menus.value = menuList
    }
    const activeMenu = ref('')
    const setActiveMenu = (menu: Menu) => {
      activeMenu.value = menu.id
    }
    return { menus, setMenus, activeMenu, setActiveMenu }
  },
  {
    persist: { key: STORE_MENUS },
  },
)
