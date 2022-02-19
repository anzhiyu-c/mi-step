/*
 * @Description: 定义类型
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-07 13:51:46
 * @LastEditTime: 2021-09-22 14:31:22
 * @LastEditors: 安知鱼
 */
export interface ISystemState {
  usersList: any[]
  usersCount: number
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
