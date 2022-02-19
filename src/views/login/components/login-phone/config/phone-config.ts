/*
 * @Description: 账号登录配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-20 9:49:27
 * @LastEditTime: 2022-02-19 18:51:35
 * @LastEditors: 安知鱼
 */

import { IForm } from '@/base-ui/form'

export const phoneConfig: IForm = {
  formItems: [
    {
      field: 'phoneNum',
      type: 'input',
      label: '手机号',
      placeholder: '请输入手机号',
      itemStyle: { width: '90%' },
      rules: [
        {
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        },
        {
          pattern: /^(13|14|15|16|17|18|19)[0-9]\d{8}$/,
          message: '输入的手机号格式不正确',
          trigger: 'blur'
        }
      ]
    },
    {
      field: 'code',
      type: 'inputAppend',
      label: '验证码',
      placeholder: '请输入验证码',
      itemStyle: { width: '90%' },
      rules: [
        {
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        },
        {
          pattern: /^\d{4}$/,
          message: '验证码只能是4位数字哦',
          trigger: 'blur'
        }
      ]
    }
  ],
  labelWidth: '70px',
  itemStyle: { padding: '0px 0px' },
  colLayout: { span: 24 }
}
