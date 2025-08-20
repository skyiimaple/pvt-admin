<template>
  <el-container>
    <el-container>
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <el-main> <slot></slot></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import LayoutHeader from '@/layouts/header/layout-header.vue'
</script>

<style lang="scss" scoped></style>
