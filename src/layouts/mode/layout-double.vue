<template>
  <vxe-container direction="vertical" class="tw:w-full tw:h-full">
    <layout-header></layout-header>
    <vxe-container>
      <layout-aside></layout-aside>
      <layout-main>
        <slot></slot>
      </layout-main>
    </vxe-container>
  </vxe-container>
</template>

<script setup lang="ts">
import LayoutAside from '@/layouts/base/layout-aside.vue'
import LayoutHeader from '@/layouts/base/layout-header.vue'
import LayoutMain from '@/layouts/base/layout-main.vue'
</script>

<style lang="scss" scoped></style>
