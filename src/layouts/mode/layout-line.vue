<template>
  <el-container direction="vertical" class="tw:w-full tw:h-full">
    <layout-header></layout-header>
    <layout-main>
      <slot></slot>
    </layout-main>
  </el-container>
</template>

<script setup lang="ts">
import LayoutHeader from '@/layouts/base/layout-header.vue'
import LayoutMain from '@/layouts/base/layout-main.vue'
</script>

<style lang="scss" scoped></style>
