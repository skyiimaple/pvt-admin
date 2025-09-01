<template>
  <el-drawer v-model="visible" title="设置">
    <div>
      <div>布局设置</div>
      <el-radio-group v-model="layout">
        <el-radio :label="LayoutEnum.DEFAULT">默认</el-radio>
        <el-radio :label="LayoutEnum.CLASSIC">经典</el-radio>
        <el-radio :label="LayoutEnum.DOUBLE">双栏</el-radio>
        <el-radio :label="LayoutEnum.LINE">单栏</el-radio>
      </el-radio-group>
    </div>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">取消</el-button>
        <el-button type="primary" @click="confirmClick">确定</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/stores/config'
import { LayoutEnum, type Layout } from '@/types/layout'
import { ref } from 'vue'

const configStore = useConfigStore()
const layout = ref<Layout>(configStore.layout.layoutMode)
const visible = defineModel('visible', { default: false })

const confirmClick = () => {
  configStore.setLayoutMode(layout.value)
  visible.value = false
}
const cancelClick = () => {
  visible.value = false
}
</script>

<style lang="scss" scoped></style>
