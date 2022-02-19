/*
 * @Description: 登录请求
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-30 12:58:50
 * @LastEditTime: 2021-09-23 12:32:57
 * @LastEditors: 安知鱼
 */
import anRequest from '../index'

import { IAccount, IPhone, ILoginResult, IResetPassword } from './type'
import { IDataType } from '../types'

enum LoginAPI {
  AccountLogin = '/login',
  PhoneLogin = '/phone',
  GetPhoneCode = 'getCode',
  LoginUserInfo = '/users/',
  UserMenus = '/role/',
  ResetPassword = '/ResetPassword'
}

/**
 * @Description: 账户登录请求
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {IAccount} account
 */
export function accountLoginRequest(account: IAccount) {
  return anRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
    showLoading: true
  })
}

/**
 * @Description: 根据id请求用户信息
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {number} id
 */
export function requestUserInfoById(id: number) {
  return anRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

/**
 * @Description: 根据用户Id获取菜单
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {number} id
 */
export function requestUserMenusById(id: number) {
  return anRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}

/**
 * @Description: 获取手机验证码请求
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {IPhone} phone
 */
export function getPhoneCodeRequest(phone: string) {
  return anRequest.post<IDataType>({
    url: LoginAPI.GetPhoneCode,
    data: phone,
    showLoading: true
  })
}

/**
 * @Description: 手机登录请求
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {IPhone} phone
 */
export function phoneLoginRequest(phone: IPhone) {
  return anRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.PhoneLogin,
    data: phone,
    showLoading: true
  })
}

/**
 * @Description: 重置密码请求
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {IPhone} phone
 */
export function resetPasswordRequest(phone: IResetPassword) {
  return anRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.PhoneLogin,
    data: phone
  })
}
