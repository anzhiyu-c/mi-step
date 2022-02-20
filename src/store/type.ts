/*
 * @Description: store类型定义文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-30 10:32:57
 * @LastEditTime: 2022-02-20 11:23:25
 * @LastEditors: 安知鱼
 */
import { ILoginState } from './login/type'
import { ISystemState } from './main/system/types'
import { IAccountState } from './main/account/types'
import { IStepState } from './main/step/types'

// vue-x根模块类型
export interface IRootStore {
  name: string
  age: number
  isFold: boolean
  queryInfo: any
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

// vue-x中子模块类型
export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  account: IAccountState
  step: IStepState
}

// 自定义的Store类型
export type IStoreType = IRootStore & IRootWithModule
