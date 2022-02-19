/*
 * @Description: 配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-23 17:03:21
 * @LastEditTime: 2021-09-23 17:21:48
 * @LastEditors: 安知鱼
 */

import { IForm } from '@/base-ui/form'

export const passwordFormConfig: IForm = {
  labelWidth: '100px',
  itemStyle: {},
  colLayout: {
    span: 24
  },
  formItems: [
    {
      field: 'oldPassword',
      type: 'input',
      label: '旧密码',
      placeholder: '请输入旧密码',
      rules: [
        {
          required: true,
          message: '请输入您的旧密码',
          trigger: 'blur'
        },
        {
          min: 6,
          max: 20,
          message: '长度在 6 到 20 个字符',
          trigger: 'blur'
        }
      ]
    },
    {
      field: 'newPassword',
      type: 'input',
      label: '设置新密码',
      placeholder: '请输入您的新密码',
      rules: [
        {
          required: true,
          message: '请输入您的新密码',
          trigger: 'blur'
        },
        {
          min: 6,
          max: 20,
          message: '长度在 6 到 20 个字符',
          trigger: 'blur'
        }
      ]
    },
    {
      field: 'verifyPassword',
      type: 'input',
      label: '确认密码',
      placeholder: '请再次输入密码',
      rules: [
        {
          required: true,
          message: '请再次输入您的密码',
          trigger: 'blur'
        },
        {
          min: 6,
          max: 20,
          message: '长度在 6 到 20 个字符',
          trigger: 'blur'
        }
      ]
    }
  ]
}
