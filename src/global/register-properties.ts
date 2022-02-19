/*
 * @Description: 注册全局属性
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-10 09:25:44
 * @LastEditTime: 2022-02-18 18:50:48
 * @LastEditors: 安知鱼
 */
import { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'

export default function registerProperties(app: App) {
  /**
   * value: utc格式时间
   * format: 格式化 默认: 'YYYY-MM-DD HH:mm:ss'
   */
  app.config.globalProperties.$filters = {
    formatTimeUtc(value: string, format: string) {
      return formatUtcString(value, format)
    }
  }
}
