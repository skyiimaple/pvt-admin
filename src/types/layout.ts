// 布局
export enum LayoutEnum {
  DEFAULT = 'DEFAULT',
  CLASSIC = 'CLASSIC',
  DOUBLE = 'DOUBLE',
  LINE = 'LINE',
}
export type Layout = keyof typeof LayoutEnum

//主题
export enum ThemeEnum {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export type Theme = keyof typeof ThemeEnum

// 布局配置
export interface LayoutConfig {
  layoutMode: Layout
  isFullscreen: boolean
  isCollapse: boolean
  theme: Theme
  // 侧边栏宽度
  sidebarWidth: number
  // 侧边栏是否固定
  sidebarFixed: boolean
  // 侧边栏是否显示
  sidebarShow: boolean
}
