import auth from '@/utils/auth'

export default {
  path: 'login',
  component: resolve => require(['@/pages/Login'], resolve),
  beforeEnter (to, from, next) {
    console.log(1, to)
    if (auth.loggedIn()) {
      next('/')
    } else {
      next()
    }
  }
}
