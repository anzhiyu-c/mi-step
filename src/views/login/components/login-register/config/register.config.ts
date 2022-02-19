/*
 * @Description: 注册配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-20 16:24:12
 * @LastEditTime: 2021-09-22 09:37:20
 * @LastEditors: 安知鱼
 */
import { IForm } from '@/base-ui/form'

export const registerConfig: IForm = {
  formItems: [
    {
      field: 'phoneNum',
      type: 'input',
      label: '手机号',
      placeholder: '请输入手机号',
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
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
      rules: [
        {
          required: true,
          message: '用户名是必传内容~',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: '用户名必须是5~10个字母或者数字~',
          trigger: 'blur'
        }
      ]
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
      rules: [
        {
          required: true,
          message: '密码是必传内容~',
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
      field: 'code',
      type: 'inputAppend',
      label: '验证码',
      placeholder: '请输入验证码',
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
