<template>
  <vxe-menu :model-value="menuStore.activeMenu" :options="menuStore.menus" size="large"> </vxe-menu>
</template>

<script lang="ts" setup>
import { useMenuStore } from '@/stores/menu'
const menuStore = useMenuStore()
</script>
