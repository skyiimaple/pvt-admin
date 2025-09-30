<template>
  <vxe-layout-container class="tw:w-full tw:h-full tw:p-4 tw:bg-[#f5f5f5]!">
    <layout-aside></layout-aside>
    <vxe-layout-container vertical>
      <layout-header></layout-header>
      <layout-main> </layout-main>
    </vxe-layout-container>
  </vxe-layout-container>
</template>

<script setup lang="ts">
import LayoutAside from '@/layouts/base/layout-aside.vue'
import LayoutHeader from '@/layouts/base/layout-header.vue'
import LayoutMain from '@/layouts/base/layout-main.vue'
</script>
