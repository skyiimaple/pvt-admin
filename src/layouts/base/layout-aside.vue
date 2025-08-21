<template>
  <el-aside :width="configStore.layout.sidebarWidth + 'px'" class="layout-aside">
    <div v-if="LayoutEnum.DEFAULT === configStore.layout.layoutMode">
      <div>
        <the-logo></the-logo>
      </div>
      <the-menu></the-menu>
    </div>
  </el-aside>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/stores/config'
import { LayoutEnum } from '@/types/layout'
import TheMenu from '@/layouts/components/the-menu.vue'
import TheLogo from '@/layouts/components/logo-view.vue'

const configStore = useConfigStore()
</script>

<style lang="scss" scoped>
.layout-aside {
  background: var(--ba-bg-color-overlay);
  transition: width 0.3s ease;
}
</style>
