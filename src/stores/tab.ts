import { defineStore } from 'pinia'
import type { TabMenu } from '@/types/menus/menu'
import { ref } from 'vue'
import { useRouter, type RouteLocationNormalized } from 'vue-router'
import { useMenuStore } from './menu'

export const useTabStore = defineStore(
  'tab',
  () => {
    const tabs = ref<TabMenu[]>([])
    const setTabs = (menus: TabMenu[]) => {
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
          tabs.value.push(menu as TabMenu)
          return
        }
      }
    }
    const router = useRouter()
    const removeTab = (tab: TabMenu) => {
      const index = tabs.value.findIndex((item) => item.id === tab.id)
      tabs.value = tabs.value.filter((item) => item.id !== tab.id)
      try {
        const preRouter =
          tabs.value.find((item) => item.id === tab.preActive) || tabs.value[index - 1]
        router.push(preRouter.path)
      } catch {
        router.push('/')
      }
    }
    const removeAllTabs = () => {
      tabs.value = []
    }
    const setTabByRouter = (to: RouteLocationNormalized) => {
      const tab = tabs.value.find((item) => item.name === to.name)
      if (tab) {
        setTabActive(tab)
        menuStore.setActiveMenu(tab)
        return
      }
      //   return tabs.value
    }
    const setTabActive = (tab: TabMenu) => {
      const preActive = tabs.value.find((item) => item.isActive)
      if (preActive) {
        tab.preActive = preActive.id
      }
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
  //   {
  //     persist: { key: STORE_TABS },
  //   },
)
