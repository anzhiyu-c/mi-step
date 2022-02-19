/*
 * @Description: 登录请求 定义类型
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-30 13:01:03
 * @LastEditTime: 2021-09-22 10:50:14
 * @LastEditors: 安知鱼
 */

export interface IAccount {
  name: string
  password: string
}

export interface IPhone {
  phoneNum: number
  code: string
}

export interface IRegister {
  phoneNum: number
  name: string
  password: string
  code: string
}

export interface IResetPassword {
  phoneNum: number
  code: string
  newPassword: string
  verifyPassword: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}
