import { defineStore } from 'pinia'
import type { Menu } from '@/types/menus/menu'
import { ref } from 'vue'
import { type RouteLocationNormalized } from 'vue-router'
import { STORE_TABS } from './constants/cache-key'
import { useMenuStore } from './menu'

export const useTabStore = defineStore(
  'tab',
  () => {
    const tabs = ref<Menu[]>([])
    const setTabs = (menus: Menu[]) => {
      tabs.value = menus
    }
    const menuStore = useMenuStore()
    const addTab = (route: RouteLocationNormalized) => {
      if (route.name) {
        if (tabs.value.find((item) => item.name === route.name)) {
          return
        }
        const menu = menuStore.menus
          .flatMap((item) => item.children || [])
          .concat(menuStore.menus)
          .find((item) => item.name === route.name)
        if (menu) {
          tabs.value.push(menu)
          return
        }
      }
    }
    const removeTab = (menu: Menu) => {
      tabs.value = tabs.value.filter((item) => item.id !== menu.id)
    }
    const removeAllTabs = () => {
      tabs.value = []
    }
    const setTabByRouter = (to: RouteLocationNormalized) => {
      const tab = tabs.value.find((item) => item.name === to.name)
      if (tab) {
        setTabActive(tab)
        return
      }
      //   return tabs.value
    }
    const setTabActive = (tab: Menu) => {
      tabs.value.forEach((item) => {
        item.isActive = false
      })
      tab.isActive = true
    }
    return {
      tabs,
      setTabs,
      addTab,
      removeTab,
      removeAllTabs,
      setTabByRouter,
    }
  },
  {
    persist: { key: STORE_TABS },
  },
)
