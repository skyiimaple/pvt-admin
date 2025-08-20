<template>
  <el-container>
    <el-aside width="200px">
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <el-main> <slot></slot></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import LayoutAside from '@/layouts/aside/layout-aside.vue'
import LayoutHeader from '@/layouts/header/layout-header.vue'
</script>

<style lang="scss" scoped></style>
