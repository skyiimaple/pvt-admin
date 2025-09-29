import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { LayoutEnum, ThemeEnum, type Layout, type LayoutConfig, type Theme } from '@/types/layout'
import { STORE_CONFIG } from './constants/cache-key'

export const useConfigStore = defineStore(
  'config',
  () => {
    const layout = reactive<LayoutConfig>({
      layoutMode: LayoutEnum.DEFAULT,
      isFullscreen: false,
      isCollapse: false,
      theme: ThemeEnum.LIGHT,
      currentMenu: '',

      // 侧边栏宽度
      sidebarWidth: 260,
      // 侧边栏是否固定
      sidebarFixed: true,
      // 侧边栏是否显示
      sidebarShow: true,
    })

    function setFullscreen(isFullscreen: boolean) {
      layout.isFullscreen = isFullscreen
    }

    function setTheme(theme: Theme) {
      layout.theme = theme
    }

    function setLayoutMode(layoutMode: Layout) {
      layout.layoutMode = layoutMode
    }

    function setIsCollapse(isCollapse: boolean) {
      if (isCollapse) {
        setSidebarWidth(64)
      } else {
        setSidebarWidth(260)
      }
      layout.isCollapse = isCollapse
    }

    function setSidebarWidth(sidebarWidth: number) {
      layout.sidebarWidth = sidebarWidth
    }

    function setSidebarFixed(sidebarFixed: boolean) {
      layout.sidebarFixed = sidebarFixed
    }

    function getClassByModule(moduleName: string) {
      return moduleName + '-' + layout.layoutMode.toLocaleLowerCase()
    }

    return {
      layout,
      setFullscreen,
      setTheme,
      setLayoutMode,
      setIsCollapse,
      setSidebarWidth,
      setSidebarFixed,
      getClassByModule,
    }
  },
  {
    persist: {
      key: STORE_CONFIG,
    },
  },
)
