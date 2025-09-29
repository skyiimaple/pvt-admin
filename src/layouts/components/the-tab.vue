<template>
  <div class="tw:flex tw:items-center tw:h-full the-tab-container">
    <div
      v-for="item in tabStore.tabs"
      class="the-tab"
      :class="{ active: item.isActive, [configStore.getClassByModule('the-tab')]: true }"
      :key="item.id"
      @click="handleClick(item)"
    >
      <div class="tab-title">{{ item.meta.title }}</div>

      <app-icon
        v-show="tabStore.tabs.length > 1"
        class="tw:ml-1.5"
        name="el-Close"
        size="16"
        :color="item.isActive ? 'var(--el-color-primary)' : 'var(--el-color-text-2)'"
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
import { useConfigStore } from '@/stores/config'
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
    display: flex;
    align-items: center;
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
      .tab-title {
        color: var(--el-color-primary);
      }
    }
    &-default {
      height: 40px;
      padding: 4px 16px;
      border-radius: 8px;
      & + .the-tab {
        margin-left: 4px;
      }
      color: var(--el-text-color-secondary);
      background: var(--el-fill-color-lighter);
      &.active {
        color: var(--el-color-primary);
        background: var(--el-bg-color);
      }
    }
    &-classic {
      &.active {
        color: var(--el-color-primary);
        background-color: var(--el-bg-color-page);
      }
    }

    .tab-title {
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
