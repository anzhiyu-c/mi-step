/*
 * @Description: 类型文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-07 15:01:20
 * @LastEditTime: 2021-09-07 15:01:20
 * @LastEditors: 安知鱼
 */
export interface IDataType<T = any> {
  code: number
  data: T
  showLoding?: boolean
}
