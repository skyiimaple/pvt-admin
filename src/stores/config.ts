import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { LayoutEnum, ThemeEnum, type LayoutConfig, type Theme } from '@/types/layout'
import { STORE_CONFIG } from './constants/cache-key'

export const useConfigStore = defineStore(
  'config',
  () => {
    const layout = reactive<LayoutConfig>({
      layoutMode: LayoutEnum.DEFAULT,
      isFullscreen: false,
      isCollapse: false,
      theme: ThemeEnum.LIGHT,
    })

    function setFullscreen(isFullscreen: boolean) {
      layout.isFullscreen = isFullscreen
    }

    function setTheme(theme: Theme) {
      layout.theme = theme
    }

    function setLayoutMode(layoutMode: LayoutEnum) {
      layout.layoutMode = layoutMode
    }

    function setIsCollapse(isCollapse: boolean) {
      layout.isCollapse = isCollapse
    }

    return { layout, setFullscreen, setTheme, setLayoutMode, setIsCollapse }
  },
  {
    persist: {
      key: STORE_CONFIG,
    },
  },
)
