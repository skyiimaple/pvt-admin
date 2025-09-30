<template>
  <div class="tw:flex tw:items-center tw:h-full the-tab-container">
    <vxe-tag
      v-for="item in tabStore.tabs"
      :key="item.name"
      :status="item.isActive ? 'primary' : 'info'"
      :closable="tabStore.tabs.length > 1"
      size="large"
      :class="[
        'the-tab',
        configStore.getClassByModule('the-tab'),
        item.isActive ? 'the-tab-active' : 'the-tab-unactive',
      ]"
      @click="handleClick(item)"
      @close="tabStore.removeTab(item)"
    >
      <span>{{ item.title }}</span>
    </vxe-tag>
  </div>
</template>

<script setup lang="ts">
import { useTabStore } from '@/stores/tab'
import type { Menu } from '@/types/menus/menu'
import { useRouter } from 'vue-router'
import { useConfigStore } from '@/stores/config'
const router = useRouter()
const tabStore = useTabStore()
const configStore = useConfigStore()
const handleClick = (item: Menu) => {
  router.push({
    name: item.routerLink?.name,
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
      &.the-tab-unactive {
        background-color: #fff;
      }
      & + .the-tab {
        margin-left: 8px;
      }
    }
    &-classic {
      border: 0;
      border-radius: 0;
      & + .the-tab {
        margin-left: 0px;
      }
      &.the-tab-unactive {
        background-color: #fff;
      }
    }
    &:hover {
      span {
        color: var(--vxe-ui-font-primary-color);
      }
    }
  }
}
</style>
