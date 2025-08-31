import axios from 'axios'
import interceptors from './interceptors'

// 配置新建一个 axios 实例
const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

// 设置拦截
interceptors(http)
export default http
