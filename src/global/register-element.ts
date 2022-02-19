/*
 * @Description:ElmentUi注册
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-28 13:10:15
 * @LastEditTime: 2022-02-18 16:54:41
 * @LastEditors: 安知鱼
 */

import { App } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default (app: App): void => {
  app.use(ElementPlus)
}
