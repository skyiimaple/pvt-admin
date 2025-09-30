<template>
  <vxe-layout-aside
    :width="asideWidth"
    :class="['tw:bg-white', 'layout-aside', configStore.getClassByModule('layout-aside')]"
    :collapsed="configStore.layout.isCollapse"
  >
    <div v-if="showMenu">
      <div>
        <the-logo></the-logo>
      </div>
      <the-menu></the-menu>
    </div>
  </vxe-layout-aside>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/stores/config'
import TheMenu from '@/layouts/components/the-menu.vue'
import TheLogo from '@/layouts/components/the-logo.vue'
import { computed } from 'vue'
import { LayoutEnum } from '@/types/layout'

const configStore = useConfigStore()
const showMenu = computed(() =>
  [LayoutEnum.DEFAULT, LayoutEnum.CLASSIC].includes(configStore.layout.layoutMode as LayoutEnum),
)
const asideWidth = computed(() => {
  return configStore.layout.sidebarWidth + 'px'
})
</script>

<style lang="scss" scoped>
.layout-aside {
  transition: width 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  &-default {
    margin-right: 16px;
    border-radius: 8px;
  }
}
</style>
