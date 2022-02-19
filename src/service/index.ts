/*
 * @Description: service网络请求统一出口
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-28 15:37:10
 * @LastEditTime: 2022-02-19 22:00:37
 * @LastEditors: 安知鱼
 */

import ANRequest from './request'
import Cache from '@/utils/cache'
import { BASE_URL, TIME_OUT, MI_BASE_URL } from './request/config'

const anRequest = new ANRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config: any) => {
      // 携带token的拦截
      const token = Cache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export const miRequest = new ANRequest({
  baseURL: MI_BASE_URL,
  timeout: 20000,
  interceptors: {
    requestInterceptor: (config: any) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default anRequest
