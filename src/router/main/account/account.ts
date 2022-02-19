const account = () => import('@/views/main/account/account.vue')
export default {
  path: '/main/account',
  name: 'account',
  meta: {
    title: '我的账号'
  },
  component: account,
  children: []
}
