/*
 * @Description: 我的账户vuex类型
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-23 12:38:25
 * @LastEditTime: 2022-02-19 21:14:24
 * @LastEditors: 安知鱼
 */
export interface IAccountState {
  userInfo: any
}

export interface IPasswordForm {
  oldPassword: string
  newPassword: string
  verifyPassword: string
}

export interface IUpStepForm {
  account: string
  password: string
  step: string
}
