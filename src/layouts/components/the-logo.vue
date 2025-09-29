<template>
  <div :class="'layout-logo ' + configStore.getClassByModule('layout-logo')">
    <div class="tw:flex tw:items-center" v-if="!configStore.layout.isCollapse">
      <img class="logo-img" src="@/assets/logo.png" alt="logo" />
      <div class="logo-text">PVT Admin</div>
    </div>
    <el-button @click="handleCollapse" circle v-if="showFold">
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
withDefaults(
  defineProps<{
    showFold?: boolean
  }>(),
  {
    showFold: true,
  },
)
const configStore = useConfigStore()
function handleCollapse() {
  configStore.setIsCollapse(!configStore.layout.isCollapse)
}
</script>

<style lang="scss" scoped>
.layout-logo {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding: 10px;
  background-color: var(--el-fill-color-extra-light);
  &-line,
  &-double {
    background: var(--el-bg-color);
  }
  .logo-img {
    font-size: 18px;
    height: 34px;
    width: 34px;
  }
  .logo-text {
    display: block;
    width: 174px;
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
