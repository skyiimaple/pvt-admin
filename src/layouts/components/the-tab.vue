<template>
  <div class="tw:flex tw:items-center tw:h-full the-tab-container">
    <el-tag
      v-for="item in tabStore.tabs"
      :key="item.name"
      :type="item.isActive ? 'primary' : 'info'"
      closable
      size="large"
      :color="
        !item.isActive && configStore.layout.layoutMode === LayoutEnum.CLASSIC ? '#fff' : undefined
      "
      :class="'the-tab ' + configStore.getClassByModule('the-tab')"
      @click="handleClick(item)"
      @close="tabStore.removeTab(item)"
    >
      {{ item.meta.title }}
    </el-tag>
  </div>
</template>

<script setup lang="ts">
import { useTabStore } from '@/stores/tab'
import type { Menu } from '@/types/menus/menu'
import { useRouter } from 'vue-router'
import { useConfigStore } from '@/stores/config'
import { LayoutEnum } from '@/types/layout'
const router = useRouter()
const tabStore = useTabStore()
const configStore = useConfigStore()
const handleClick = (item: Menu) => {
  router.push({
    path: item.path,
  })
}
</script>

<style lang="scss" scoped>
.the-tab-container {
  .the-tab {
    height: 100%;
    font-size: 14px;
    cursor: pointer;
    &-default {
      height: 40px;
      border-radius: 8px;
      & + .the-tab {
        margin-left: 4px;
      }
    }
    &-classic {
      border: 0;
      border-radius: 0;
    }
    &:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>
