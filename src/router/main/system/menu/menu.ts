const menu = () => import('@/views/main/system/menu/menu.vue')
export default {
  path: '/main/system/menu',
  name: 'menu',
  meta: {
    title: '目录管理'
  },
  component: menu,
  children: []
}
