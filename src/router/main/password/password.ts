const password = () => import('@/views/main/password/password.vue')
export default {
  path: '/main/password',
  name: 'password',
  meta: {
    title: '修改密码'
  },
  component: password,
  children: []
}
