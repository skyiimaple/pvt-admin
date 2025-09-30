<template>
  <vxe-layout-body :class="['layout-body', configStore.getClassByModule('layout-body')]">
    <div :class="['layout-main']">
      <router-view></router-view>
    </div>
  </vxe-layout-body>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()
</script>

<style lang="scss" scoped>
.layout-body {
  background-color: #f5f5f5;
  .layout-main {
    height: 100%;
    overflow: auto;
    border-radius: 8px !important;
    background-color: #fff;
  }
  &-classic {
    padding: 16px;
  }
}
</style>
