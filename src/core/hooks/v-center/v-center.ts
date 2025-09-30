import type { Directive } from 'vue'

/**
 * 垂直居中指令 v-center
 * 使用方法：v-center 或 v-center="options"
 * options 可选参数：
 * - flex: 使用flex布局居中（默认）
 * - absolute: 使用绝对定位居中
 * - transform: 使用transform居中
 * - parent: 在父元素中居中
 */
export const vCenter: Directive = {
  mounted(el, binding) {
    const mode = binding.value || 'flex'
    applyVerticalCenter(el, mode)

    // 保存原始样式，用于后续恢复
    el.__originalPosition__ = el.style.position
    el.__originalTransform__ = el.style.transform
    el.__originalDisplay__ = el.style.display
    el.__originalAlignItems__ = el.style.alignItems
    el.__originalJustifyContent__ = el.style.justifyContent
    el.__originalTop__ = el.style.top
    el.__originalLeft__ = el.style.left
  },

  updated(el, binding) {
    const mode = binding.value || 'flex'
    applyVerticalCenter(el, mode)
  },

  beforeUnmount(el) {
    // 恢复原始样式
    if (el.__originalPosition__ !== undefined) {
      el.style.position = el.__originalPosition__
    }
    if (el.__originalTransform__ !== undefined) {
      el.style.transform = el.__originalTransform__
    }
    if (el.__originalDisplay__ !== undefined) {
      el.style.display = el.__originalDisplay__
    }
    if (el.__originalAlignItems__ !== undefined) {
      el.style.alignItems = el.__originalAlignItems__
    }
    if (el.__originalJustifyContent__ !== undefined) {
      el.style.justifyContent = el.__originalJustifyContent__
    }
    if (el.__originalTop__ !== undefined) {
      el.style.top = el.__originalTop__
    }
    if (el.__originalLeft__ !== undefined) {
      el.style.left = el.__originalLeft__
    }

    delete el.__originalPosition__
    delete el.__originalTransform__
    delete el.__originalDisplay__
    delete el.__originalAlignItems__
    delete el.__originalJustifyContent__
    delete el.__originalTop__
    delete el.__originalLeft__
  },
}

/**
 * 应用垂直居中样式
 */
function applyVerticalCenter(el: HTMLElement, mode: string) {
  switch (mode) {
    case 'flex':
      // Flex布局居中
      el.style.display = 'flex'
      el.style.alignItems = 'center'
      el.style.justifyContent = 'center'
      el.style.flexDirection = 'column'
      break

    case 'absolute':
      // 绝对定位居中
      el.style.position = 'absolute'
      el.style.top = '50%'
      el.style.left = '50%'
      el.style.transform = 'translate(-50%, -50%)'
      break

    case 'transform':
      // Transform居中（相对定位）
      el.style.position = 'relative'
      el.style.top = '50%'
      el.style.transform = 'translateY(-50%)'
      break

    case 'parent':
      // 在父元素中垂直居中
      const parent = el.parentElement
      if (parent) {
        parent.style.position = 'relative'
        el.style.position = 'absolute'
        el.style.top = '50%'
        el.style.transform = 'translateY(-50%)'
      }
      break

    default:
      // 默认使用flex布局
      el.style.display = 'flex'
      el.style.alignItems = 'center'
      el.style.justifyContent = 'center'
      el.style.flexDirection = 'column'
  }
}
