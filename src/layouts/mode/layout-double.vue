<template>
  <el-container class="tw:w-full tw:h-full">
    <layout-aside></layout-aside>
    <el-container>
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <layout-main>
        <slot></slot>
      </layout-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import LayoutAside from '@/layouts/base/layout-aside.vue'
import LayoutHeader from '@/layouts/base/layout-header.vue'
import LayoutMain from '@/layouts/base/layout-main.vue'
</script>

<style lang="scss" scoped></style>
