/*
 * @Description: user内容配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-10 15:02:21
 * @LastEditTime: 2021-09-13 09:20:47
 * @LastEditors: 安知鱼
 */

export const contentTableConfig = {
  title: '用户列表',
  headerHandler: {
    increase: '新建用户',
    removeAll: '批量删除'
  },
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100', slotName: 'name' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'cellphone', label: '手机号码', minWidth: '100' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'enable' },
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
