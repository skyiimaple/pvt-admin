<template>
  <vxe-layout-header :class="['layout-header', configStore.getClassByModule('layout-header')]">
    <the-tab></the-tab>
    <div class="layout-header-control">
      <the-control></the-control>
    </div>
  </vxe-layout-header>
</template>

<script setup lang="ts">
import TheTab from '@/layouts/components/the-tab.vue'
import TheControl from '@/layouts/components/the-control/the-control.vue'
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()
</script>

<style lang="scss" scoped>
.layout-header {
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-default {
    background-color: #f5f5f5;
  }
}
</style>
