/*
 * @Description: user内容配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-10 15:02:21
 * @LastEditTime: 2022-02-20 14:34:30
 * @LastEditors: 安知鱼
 */

export const contentTableConfig = {
  title: '用户列表',
  headerHandler: {
    increase: '新建用户',
    removeAll: '批量删除'
  },
  propList: [
    {
      prop: 'account',
      label: '小米运动账号',
      minWidth: '200%',
      slotName: 'name',
      align: 'left'
    },
    { prop: 'step', label: '刷取步数', minWidth: '100' },
    {
      prop: 'enable',
      label: '状态',
      minWidth: '90',
      slotName: 'enable',
      align: 'left'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '130',
      slotName: 'createAt',
      align: 'left'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '130',
      slotName: 'updateAt',
      align: 'left'
    },
    {
      label: '操作',
      minWidth: '180',
      slotName: 'handler'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  isUpStep: true
}
