<template>
  <el-menu
    :default-active="menuStore.activeMenu"
    :collapse="mode === 'vertical' ? configStore.layout.isCollapse : false"
    :collapse-transition="false"
    :mode="mode"
    class="tw:border-r-0! tw:w-full"
  >
    <template v-for="item in menuStore.menus" :key="item.id">
      <el-sub-menu :index="item.id" v-if="item.children?.length">
        <template #title>
          <app-icon :name="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </template>
        <template v-for="child in item.children" :key="child.id">
          <el-menu-item :index="child.id" @click="onClickMenu(child)">
            <app-icon :name="child.meta.icon" />
            <template #title>
              <span>{{ child.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-sub-menu>
      <el-menu-item :index="item.id" v-else @click="onClickMenu(item)">
        <app-icon :name="item.meta.icon" />
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { useConfigStore } from '@/stores/config'
import { useMenuStore } from '@/stores/menu'
import type { Menu } from '@/types/menus/menu'
import AppIcon from '@/components/app-icon.vue'
import { useRouter } from 'vue-router'
interface MenuProps {
  mode?: 'horizontal' | 'vertical'
}
withDefaults(defineProps<MenuProps>(), {
  mode: 'vertical',
})
const configStore = useConfigStore()
const menuStore = useMenuStore()
const router = useRouter()
const onClickMenu = (item: Menu) => {
  router.push({
    path: item.path,
  })
}
</script>

<style>
.el-menu-item .el-icon {
  margin-right: 5px;
  width: var(--el-menu-icon-width);
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
}
</style>
