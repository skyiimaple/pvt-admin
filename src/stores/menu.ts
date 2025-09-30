import type { Menu } from '@/types/menus/menu'
import { ref } from 'vue'
// import { STORE_MENUS } from './constants/cache-key'
import { defineStore } from 'pinia'
import type { VxeMenuPropTypes } from 'vxe-pc-ui'

export const useMenuStore = defineStore(
  'menu',
  () => {
    const menus = ref<VxeMenuPropTypes.Options>([
      { name: 'home', title: '首页', icon: 'vxe-icon-home', routerLink: { name: 'home' } },
      {
        name: 'person',
        title: '个人中心',
        icon: 'vxe-icon-github-fill',
        children: [
          {
            name: 'user',
            title: '修改密码',
            icon: 'vxe-icon-goods',
            routerLink: { name: 'user' },
          },
        ],
      },
      {
        name: 'group',
        title: '商品分类',
        icon: 'vxe-icon-cloud-download',
        children: [
          {
            name: 'computerOffice',
            title: '电脑办公',
            icon: 'vxe-icon-chart-pie',
            children: [
              { name: 'notebook', title: '笔记本', icon: 'vxe-icon-bell' },
              { name: 'keyboard', title: '键盘', icon: 'vxe-icon-heavy-rain' },
            ],
          },
          {
            name: 'mobile',
            title: '手机',
            icon: 'vxe-icon-company',
            children: [
              { name: 'xiaomi', title: '小米', icon: 'vxe-icon-chart-bar-x' },
              { name: 'huawei', title: '华为', icon: 'vxe-icon-sunny' },
              { name: 'oppo', title: 'OPPO', icon: 'vxe-icon-custom-column' },
            ],
          },
          {
            name: 'homeAppliances',
            title: '家电',
            icon: 'vxe-icon-flag-fill',
            children: [
              { name: 'washingMachine', title: '洗衣机', icon: 'vxe-icon-microphone-fill' },
              { name: 'fridge', title: '冰箱', icon: 'vxe-icon-envelope-open-fill' },
            ],
          },
        ],
      },
      {
        name: 'system',
        title: '系统设置',
        icon: 'vxe-icon-rmb',
        children: [
          {
            name: 'menu',
            title: '菜单配置',
            icon: 'vxe-icon-setting',
            routerLink: { name: 'menu' },
          },
          {
            name: 'permission',
            title: '权限配置',
            icon: 'vxe-icon-question-circle',
            // routerLink: { name: 'permission' },
          },
          {
            name: 'role',
            title: '角色配置',
            icon: 'vxe-icon-question-circle',
            routerLink: { name: 'role' },
          },
        ],
      },
    ])
    const setMenus = (menuList: Menu[]) => {
      menus.value = menuList
    }
    const activeMenu = ref('')
    const setActiveMenu = (menu: Menu) => {
      activeMenu.value = menu.name || ''
    }
    return { menus, setMenus, activeMenu, setActiveMenu }
  },
  // {
  //   persist: { key: STORE_MENUS },
  // },
)
