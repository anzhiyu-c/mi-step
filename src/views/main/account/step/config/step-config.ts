/*
 * @Description: 账号登录配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-18 16:49:27
 * @LastEditTime: 2022-02-19 21:04:28
 * @LastEditors: 安知鱼
 */

import { IForm } from '@/base-ui/form'

export const stepConfig: IForm = {
  formItems: [
    {
      field: 'account',
      type: 'input',
      label: '小米运动账号',
      placeholder: '请输入账号（仅支持手机号码）',
      itemStyle: { margin: '20px 0', width: '40%' },
      rules: [
        {
          required: true,
          message: '账号是必传内容~',
          trigger: 'blur'
        }
      ]
    },
    {
      field: 'password',
      type: 'password',
      label: '小米运动密码',
      placeholder: '请输入小米运动密码',
      rules: [
        {
          required: true,
          message: '密码是必传内容~',
          trigger: 'blur'
        }
      ],
      itemStyle: { margin: '0px 0px 0px 0px', width: '40%' }
    },
    {
      field: 'step',
      type: 'input',
      label: '刷取步数',
      placeholder: '请输入步数，建议一次5000以内（0-99999）',
      rules: [
        {
          required: true,
          message: '步数是必传内容~',
          trigger: 'blur'
        },
        {
          pattern: /^\d{1,5}$/,
          message: '请输入范围在0-99999的数字',
          trigger: 'blur'
        }
      ],
      itemStyle: { margin: '20px 0px 20px 0px', width: '40%' }
    }
  ],
  labelWidth: '120px',
  itemStyle: { padding: '0px 0px' },
  colLayout: { span: 24 }
}
