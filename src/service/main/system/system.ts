/*
 * @Description: 系统管理请求
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-07 14:33:55
 * @LastEditTime: 2021-09-14 14:13:13
 * @LastEditors: 安知鱼
 */
import anRequest from '@/service/index'
import { IDataType } from '../../types'

/**
 * @Description: 获取数据接口
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {string} url
 * @param {any} queryInfo
 */
export function getPageListData(url: string, queryInfo: any) {
  return anRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

/**
 * @Description: 删除表格数据接口 url: /users/id
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {string} url /users/id
 */
export function deletePageData(url: string) {
  return anRequest.delete<IDataType>({
    url: url
  })
}

/**
 * @Description: 新建一条表格数据接口
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {string} url
 * @param {any} newData
 */
export function createPageData(url: string, newData: any) {
  return anRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

/**
 * @Description: 编辑数据接口
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {string} url
 * @param {any} editData
 */
export function editPageData(url: string, editData: any) {
  return anRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
