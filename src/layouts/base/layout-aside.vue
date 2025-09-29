<template>
  <el-aside
    :width="asideWidth"
    :class="'layout-aside ' + configStore.getClassByModule('layout-aside')"
  >
    <div v-if="showMenu">
      <div>
        <the-logo></the-logo>
      </div>
      <the-menu></the-menu>
    </div>
  </el-aside>
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
  background: var(--el-bg-color);
  &-default {
    margin-right: 16px;
    border-radius: 8px;
  }
}
</style>
