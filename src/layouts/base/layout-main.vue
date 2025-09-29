<template>
  <el-main :class="['layout-main', configStore.getClassByModule('layout-main')]">
    <div class="tw:w-full tw:h-full tw:overflow-auto tw:bg-white tw:rounded-md">
      <router-view></router-view>
    </div>
  </el-main>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()
</script>

<style lang="scss" scoped>
.layout-main {
  background: var(--el-bg-color-page);
  padding: 0;
  &-default {
    background: var(--el-bg-color-page);
  }
  &-classic,
  &-double {
    padding: 16px;
  }
}
</style>
