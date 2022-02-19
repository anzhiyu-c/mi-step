const commodity = () => import('@/views/main/business/commodity/commodity.vue')
export default {
  path: '/main/business/commodity',
  name: 'commodity',
  meta: {
    title: '商品管理'
  },
  component: commodity,
  children: []
}
