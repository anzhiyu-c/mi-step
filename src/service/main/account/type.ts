/*
 * @Description: 类型文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-23 17:28:53
 * @LastEditTime: 2022-02-19 21:56:09
 * @LastEditors: 安知鱼
 */
export interface IPasswordForm {
  oldPassword: string
  newPassword: string
  verifyPassword: string
}

export interface IUpStepForm {
  user: string
  pass: string
  count: string
}
