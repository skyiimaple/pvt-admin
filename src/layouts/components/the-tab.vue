<template>
  <div class="tw:flex tw:items-center tw:h-full tw:cursor-pointer">
    <div
      class="the-tab"
      :class="{ active: item.isActive }"
      v-for="item in tabStore.tabs"
      :key="item.id"
      @click="handleClick(item)"
    >
      <div class="tab-title">{{ item.meta.title }}</div>

      <app-icon
        v-show="item.isActive && tabStore.tabs.length > 1"
        class="tw:ml-1.5"
        name="el-Close"
        size="16"
        color="var(--el-color-primary)"
        @click.stop="tabStore.removeTab(item)"
      ></app-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTabStore } from '@/stores/tab'
import AppIcon from '@/components/app-icon.vue'
import type { Menu } from '@/types/menus/menu'
import { useRouter } from 'vue-router'
const router = useRouter()
const tabStore = useTabStore()
const handleClick = (item: Menu) => {
  router.push({
    path: item.path,
  })
}
</script>

<style lang="scss" scoped>
.the-tab {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  &.active {
    color: var(--el-color-primary);
    background-color: var(--el-bg-color-page);
  }
  .tab-title {
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:hover {
    background-color: var(--el-bg-color-page);
  }
}
</style>
