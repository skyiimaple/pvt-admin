<template>
  <el-container class="tw:w-full tw:h-full">
    <layout-aside></layout-aside>
    <el-container direction="vertical">
      <layout-header></layout-header>
      <layout-main> </layout-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import LayoutAside from '@/layouts/base/layout-aside.vue'
import LayoutHeader from '@/layouts/base/layout-header.vue'
import LayoutMain from '@/layouts/base/layout-main.vue'
</script>
