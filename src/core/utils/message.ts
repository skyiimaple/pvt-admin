import { VxeUI } from 'vxe-pc-ui'

export class Message {
  static success(msg: string) {
    VxeUI.modal.message({ status: 'success', content: msg })
  }
  static error(content: string) {
    VxeUI.modal.message({ status: 'error', content })
  }
  static warning(content: string) {
    VxeUI.modal.message({ status: 'warning', content })
  }
  static info(content: string) {
    VxeUI.modal.message({ status: 'info', content })
  }
}
