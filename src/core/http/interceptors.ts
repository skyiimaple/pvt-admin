import type { AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'
import { Message } from '../utils/message'

export default function interceptors(http: AxiosInstance) {
  // 添加请求拦截器
  http.interceptors.request.use(
    (config) => {
      // 这里添加统一请求头信息
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )
  // 添加响应拦截器
  http.interceptors.response.use(handleSuccess, handleError)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleSuccess(response: AxiosResponse<any, any>) {
  console.log('Request success', response)
  const data = response.data
  // 请求错误统一在这里处理
  if (data.msgType === 'error' && data.msg) Message.error(data.msg)
  if (data.msgType === 'warning' && data.msg) Message.warning(data.msg)

  // 直接返回Response.data减少一层调用（如：res.data.data可简写为res.data），需要声明文件的支持（axios.d.ts）
  return data
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleError(error: any) {
  console.log('Request error', error.message)
  if (axios.isCancel(error)) {
    console.log('Request canceled', error.message)
  } else {
    // 处理错误
    const { status } = error.response
    // 服务器错误统一在这里处理
    switch (status) {
      case 500:
        Message.error('服务器出错')
        break
      case 404:
        Message.error('找不到资源')
        break
      case 403:
        Message.error('没有权限')
        break
      case 401:
        Message.error('未登录')
        break
      default:
        Message.error('请求失败')
    }
    return Promise.reject(error)
  }
  return { error }
}
