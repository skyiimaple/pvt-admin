<template>
  <el-header :class="['layout-header', configStore.getClassByModule('layout-header')]">
    <the-tab v-if="showTab"></the-tab>
    <template v-else>
      <div class="layout-header-logo">
        <the-logo :show-fold="false"></the-logo>
      </div>
      <!-- <div class="tw:flex-1"> -->
      <the-menu :mode="mode"></the-menu>
      <!-- </div> -->
    </template>
    <div class="layout-header-control">
      <the-control></the-control>
    </div>
  </el-header>
</template>

<script setup lang="ts">
import TheTab from '@/layouts/components/the-tab.vue'
import TheMenu from '@/layouts/components/the-menu.vue'
import TheLogo from '@/layouts/components/the-logo.vue'
import TheControl from '@/layouts/components/the-control/the-control.vue'
import { useConfigStore } from '@/stores/config'
import { computed } from 'vue'
import { LayoutEnum } from '@/types/layout'

const configStore = useConfigStore()
const showTab = computed(() =>
  [LayoutEnum.DEFAULT, LayoutEnum.CLASSIC].includes(configStore.layout.layoutMode as LayoutEnum),
)
const mode = computed(() => (showTab.value ? 'vertical' : 'horizontal'))
</script>

<style lang="scss" scoped>
.layout-header {
  background: var(--el-bg-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  &-default {
    background: var(--el-bg-color-page);
  }
  &-classic {
    height: 54px;
  }
  &-line,
  &-double {
    .layout-header-logo,
    .layout-header-control {
      transition: width 0.3s ease;
      height: 100%;
      border-bottom: 1px solid var(--el-menu-border-color);
    }
  }
}
</style>
