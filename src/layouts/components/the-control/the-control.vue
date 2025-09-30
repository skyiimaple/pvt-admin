<template>
  <div class="the-control tw:h-full">
    <vxe-button-group size="medium" circle>
      <!-- 首页 -->
      <vxe-button icon="vxe-icon-pc"> </vxe-button>
      <!-- 控制面板 -->
      <!-- TODO -->
      <!-- 全屏 -->
      <vxe-button title="全屏" v-screen icon="vxe-icon-fullscreen"> </vxe-button>
      <!-- 头像 -->
      <!-- // TODO -->
      <!-- 设置 -->
      <vxe-button title="设置" @click="handleSetting" icon="vxe-icon-setting"> </vxe-button>
    </vxe-button-group>
  </div>
  <part-setting-drawer v-if="settingDrawer" v-model:visible="settingDrawer" />
</template>

<script setup lang="ts">
// import { useConfigStore } from '@/stores/config'
import { ref } from 'vue'
import PartSettingDrawer from './part-setting.drawer.vue'
// const configStore = useConfigStore()

const settingDrawer = ref(false)
const handleSetting = () => {
  settingDrawer.value = true
}
</script>

<style lang="scss" scoped>
.the-control {
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: auto;
  padding: 4px 12px;
  border-radius: 8px;
  background-color: #fff;
}
</style>
