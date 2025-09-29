<template>
  <el-drawer v-model="visible" title="设置">
    <div class="tw:pb-4">
      <span>布局设置：</span>
    </div>
    <div class="layout-mode-box-style">
      <el-row class="layout-mode-box-style-row" :gutter="10">
        <el-col :span="12">
          <div
            @click="setLayoutMode(LayoutEnum.DEFAULT)"
            class="layout-mode-style default"
            :class="layout === LayoutEnum.DEFAULT ? 'active' : ''"
          >
            <div class="layout-mode-style-box">
              <div class="layout-mode-style-aside"></div>
              <div class="layout-mode-style-container-box">
                <div class="layout-mode-style-header"></div>
                <div class="layout-mode-style-container"></div>
              </div>
            </div>
            <div class="layout-mode-style-name">默认</div>
          </div>
        </el-col>
        <el-col :span="12">
          <div
            @click="setLayoutMode(LayoutEnum.CLASSIC)"
            class="layout-mode-style classic"
            :class="layout === LayoutEnum.CLASSIC ? 'active' : ''"
          >
            <div class="layout-mode-style-box">
              <div class="layout-mode-style-aside"></div>
              <div class="layout-mode-style-container-box">
                <div class="layout-mode-style-header"></div>
                <div class="layout-mode-style-container"></div>
              </div>
            </div>
            <div class="layout-mode-style-name">经典</div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="12">
          <div
            @click="setLayoutMode(LayoutEnum.LINE)"
            class="layout-mode-style streamline"
            :class="layout === LayoutEnum.LINE ? 'active' : ''"
          >
            <div class="layout-mode-style-box">
              <div class="layout-mode-style-container-box">
                <div class="layout-mode-style-header"></div>
                <div class="layout-mode-style-container"></div>
              </div>
            </div>
            <div class="layout-mode-style-name">单栏</div>
          </div>
        </el-col>
      </el-row>
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
const setLayoutMode = (mode: LayoutEnum) => {
  layout.value = mode
}
</script>

<style lang="scss" scoped>
.layout-mode-box-style-row {
  margin-bottom: 15px;
}
.layout-mode-style {
  position: relative;
  height: 100px;
  border: 1px solid var(--el-border-color-light);
  border-radius: var(--el-border-radius-small);
  &:hover,
  &.active {
    border: 1px solid var(--el-color-primary);
  }
  .layout-mode-style-name {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--el-color-primary-light-5);
    border-radius: 50%;
    height: 40px;
    width: 40px;
    border: 1px solid var(--el-color-primary-light-3);
  }
  .layout-mode-style-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  &.default {
    display: flex;
    align-items: center;
    justify-content: center;
    .layout-mode-style-aside {
      width: 18%;
      height: 90%;
      background-color: var(--el-border-color-lighter);
    }
    .layout-mode-style-container-box {
      width: 68%;
      height: 90%;
      margin-left: 4%;
      .layout-mode-style-header {
        width: 100%;
        height: 10%;
        background-color: var(--el-border-color-lighter);
      }
      .layout-mode-style-container {
        width: 100%;
        height: 85%;
        background-color: var(--el-border-color-extra-light);
        margin-top: 5%;
      }
    }
  }
  &.classic {
    display: flex;
    align-items: center;
    justify-content: center;
    .layout-mode-style-aside {
      width: 18%;
      height: 100%;
      background-color: var(--el-border-color-lighter);
    }
    .layout-mode-style-container-box {
      width: 82%;
      height: 100%;
      .layout-mode-style-header {
        width: 100%;
        height: 10%;
        background-color: var(--el-border-color);
      }
      .layout-mode-style-container {
        width: 100%;
        height: 90%;
        background-color: var(--el-border-color-extra-light);
      }
    }
  }
  &.streamline {
    display: flex;
    align-items: center;
    justify-content: center;
    .layout-mode-style-container-box {
      width: 100%;
      height: 100%;
      .layout-mode-style-header {
        width: 100%;
        height: 10%;
        background-color: var(--el-border-color);
      }
      .layout-mode-style-container {
        width: 100%;
        height: 90%;
        background-color: var(--el-border-color-extra-light);
      }
    }
  }
  &.double {
    display: flex;
    align-items: center;
    justify-content: center;
    .layout-mode-style-aside {
      width: 18%;
      height: 100%;
      background-color: var(--el-border-color);
    }
    .layout-mode-style-container-box {
      width: 82%;
      height: 100%;
      .layout-mode-style-header {
        width: 100%;
        height: 10%;
        background-color: var(--el-border-color);
      }
      .layout-mode-style-container {
        width: 100%;
        height: 90%;
        background-color: var(--el-border-color-extra-light);
      }
    }
  }
}
</style>
