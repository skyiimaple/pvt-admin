<template>
  <div>
    <p>布局模式：{{ config.layout.layoutMode }}</p>
    <el-radio-group v-model="config.layout.layoutMode" @change="handleChange">
      <el-radio label="DEFAULT">默认</el-radio>
      <el-radio label="CLASSIC">经典</el-radio>
      <el-radio label="DOUBLE">双列</el-radio>
      <el-radio label="LINE">线性</el-radio>
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/stores/config'
import type { LayoutEnum } from '@/types/layout'
const config = useConfigStore()
const handleChange = (val: string | number | boolean | undefined) => {
  config.setLayoutMode(val as LayoutEnum)
}
</script>

<style lang="scss" scoped></style>
