/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Directive } from 'vue'

/**
 * 全屏指令 v-screen
 * 使用方法：v-screen 或 v-screen="options"
 * options 可选参数：
 * - toggle: 切换全屏状态
 * - enter: 进入全屏
 * - exit: 退出全屏
 */
export const vScreen: Directive = {
  mounted(el, binding) {
    const handler = () => {
      const value = binding.value
      const ele = window.document.getElementById('app') as HTMLElement
      if (value === 'exit') {
        exitFullscreen()
      } else if (value === 'enter') {
        enterFullscreen(ele)
      } else {
        toggleFullscreen(ele)
      }
    }

    el.__screenHandler__ = handler
    el.addEventListener('click', handler)
  },

  beforeUnmount(el) {
    el.removeEventListener('click', el.__screenHandler__)
    delete el.__screenHandler__
  },
}

// 进入全屏
function enterFullscreen(element: HTMLElement) {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if ((element as any).webkitRequestFullscreen) {
    ;(element as any).webkitRequestFullscreen()
  } else if ((element as any).mozRequestFullScreen) {
    ;(element as any).mozRequestFullScreen()
  } else if ((element as any).msRequestFullscreen) {
    ;(element as any).msRequestFullscreen()
  }
}

// 退出全屏
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if ((document as any).webkitExitFullscreen) {
    ;(document as any).webkitExitFullscreen()
  } else if ((document as any).mozCancelFullScreen) {
    ;(document as any).mozCancelFullScreen()
  } else if ((document as any).msExitFullscreen) {
    ;(document as any).msExitFullscreen()
  }
}

// 切换全屏状态
function toggleFullscreen(element: HTMLElement) {
  if (
    !document.fullscreenElement &&
    !(document as any).webkitFullscreenElement &&
    !(document as any).mozFullScreenElement &&
    !(document as any).msFullscreenElement
  ) {
    enterFullscreen(element)
  } else {
    exitFullscreen()
  }
}
