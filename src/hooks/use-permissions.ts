/*
 * @Description: 获取页面按钮权限
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-12 12:43:47
 * @LastEditTime: 2021-09-12 12:49:33
 * @LastEditors: 安知鱼
 */

import { useStore } from '@/store'

export function usePermission(pageName: string, hanldeName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${hanldeName}`
  return !!permissions.find((item) => item === verifyPermission)
}
