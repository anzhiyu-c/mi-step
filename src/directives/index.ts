/*
 * @Description: 自定义指令出口
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-30 17:46:39
 * @LastEditTime: 2021-09-30 17:59:39
 * @LastEditors: 安知鱼
 */
import { App } from 'vue'
import registerFormatTime from './format-time'

export default function registerDirectives(app: App) {
  registerFormatTime(app)
}
