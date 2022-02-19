/*
 * @Description:类型定义文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-30 10:32:18
 * @LastEditTime: 2022-02-18 18:03:36
 * @LastEditors: 安知鱼
 */

export interface ILoginState {
  token: string
  userMenus: any
  permissions: string[]
  code: string
  userInfo: []
}
