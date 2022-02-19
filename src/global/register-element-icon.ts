/*
 * @Description:ElmentUi-icon全部注册(为了方便)
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2022-01-17 17:29:24
 * @LastEditTime: 2022-02-18 16:52:32
 * @LastEditors: 安知鱼
 */

import { App } from 'vue'

import * as ElIcons from '@element-plus/icons-vue'

export default (app: App): void => {
  for (const key in ElIcons) {
    app.component(key, ElIcons[key as keyof typeof ElIcons])
  }
}
