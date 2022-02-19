/*
 * @Description: 角色内容配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-10 16:09:43
 * @LastEditTime: 2021-09-12 14:55:54
 * @LastEditors: 安知鱼
 */
export const contentTableConfig = {
  title: '角色列表',
  headerHandler: {
    increase: '新建角色',
    removeAll: '批量删除'
  },
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100', slotName: 'name' },
    {
      prop: 'intro',
      label: '权限介绍',
      minWidth: '100',
      slotName: 'intro'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
