<template>
  <div :class="'layout-logo ' + configStore.getClassByModule('layout-logo')">
    <div class="tw:flex tw:items-center tw:flex-1" v-if="!configStore.layout.isCollapse">
      <img class="logo-img" src="@/assets/image/fly.svg" alt="logo" />
      <div class="logo-text">PVT Admin</div>
    </div>
    <vxe-button @click="handleCollapse" status="primary" plain circle v-if="showFold">
      <vxe-icon :name="configStore.layout.isCollapse ? 'menu-unfold' : 'menu-fold'"></vxe-icon>
    </vxe-button>
  </div>
</template>

<script setup lang="ts">
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
  background-color: var(--vxe-ui-font-primary-color);
  .logo-img {
    font-size: 18px;
    height: 34px;
    width: 34px;
  }
  .logo-text {
    display: block;
    padding-left: 4px;
    font-size: 20px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
  }
}
</style>
