import axios from 'axios'

import type { InternalAxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios'

// สร้าง axios instance พร้อมตั้งค่าพื้นฐาน
const instance: AxiosInstance = axios.create({
  timeout: 30000,
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json; charset=utf-8',
  },
})

// Request interceptor
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const customConfig = config as InternalAxiosRequestConfig & { overrideHeader?: Record<string, string> | null }
    if (customConfig.overrideHeader) {
      if (customConfig.headers && typeof customConfig.headers.set === 'function') {
        Object.entries(customConfig.overrideHeader).forEach(([key, value]) => {
          customConfig.headers.set(key, value)
        })
      } else if (customConfig.headers) {
        Object.assign(customConfig.headers, customConfig.overrideHeader)
      }
    }
    return customConfig
  },
  (error: any) => Promise.reject(error)
)

// Response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const status = error.response?.status
    if (status === 401) {
      return Promise.reject(new Error('401 - Unauthorized'))
    } else if (status === 403) {
      return Promise.reject(
        new Error('403 - Forbidden: The web app you have attempted to reach has blocked your access.')
      )
    }

    // นำ message ที่เหมาะสมที่สุด
    const message = error.message || error.response?.data?.message || JSON.stringify(error.response?.data)
    return Promise.reject(new Error(message))
  }
)

export default instance
