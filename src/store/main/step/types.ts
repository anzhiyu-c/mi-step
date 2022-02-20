/*
 * @Description: 我的账户vuex类型
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-23 12:38:25
 * @LastEditTime: 2022-02-20 11:23:31
 * @LastEditors: 安知鱼
 */
export interface IStepState {
  miAccountList: any[]
  miAccountCount: number
  roleList: any[]
  roleCount: number
  menuList: any[]
  menuCount: number
}

export interface IPagePayload {
  pageName: string
  queryInfo: any
  newData: any
  editData: any
  id?: number
}
