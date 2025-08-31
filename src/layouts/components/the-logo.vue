<template>
  <div class="layout-logo">
    <div class="tw:flex tw:items-center" v-if="!configStore.layout.isCollapse">
      <img class="logo-img" src="@/assets/logo.png" alt="logo" />
      <div class="logo-text">PVT Admin</div>
    </div>
    <el-button @click="handleCollapse" circle>
      <app-icon
        :name="'el-' + (configStore.layout.isCollapse ? 'Expand' : 'Fold')"
        color="var(--el-color-primary)"
      ></app-icon>
    </el-button>
  </div>
</template>

<script setup lang="ts">
import AppIcon from '@/components/app-icon.vue'
import { useConfigStore } from '@/stores/config'
const configStore = useConfigStore()
function handleCollapse() {
  configStore.setIsCollapse(!configStore.layout.isCollapse)
}
</script>

<style lang="scss" scoped>
.layout-logo {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding: 10px;
  background-color: var(--el-fill-color-extra-light);
  .logo-img {
    font-size: 18px;
    height: 34px;
    width: 34px;
  }
  .logo-text {
    display: block;
    width: 180px;
    padding-left: 4px;
    font-size: var(--el-font-size-extra-large);
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--el-color-primary);
  }
}
</style>
