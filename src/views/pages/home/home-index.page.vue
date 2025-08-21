<template>
  <div>🚀Welcome to home-index.page page!</div>

  <div>
    <span>侧边栏宽度：{{ configStore.layout.sidebarWidth }}</span>
    <el-input-number v-model="sidebarWidth" :min="200" :max="600" :step="10" />
    <el-button type="primary" @click="setSidebarWidth">设置侧边栏宽度</el-button>
  </div>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/stores/config'
import { ref } from 'vue'
const configStore = useConfigStore()
const sidebarWidth = ref(configStore.layout.sidebarWidth)

function setSidebarWidth() {
  configStore.setSidebarWidth(sidebarWidth.value)
}
</script>

<style lang="scss" scoped></style>
