<template>
  <div v-if="LayoutEnum.DEFAULT === config.layout.layoutMode">
    <menu-view></menu-view>
  </div>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/stores/config'
import { LayoutEnum } from '@/types/layout'
import MenuView from '@/layouts/components/menu-view.vue'

const config = useConfigStore()
</script>

<style lang="scss" scoped></style>
