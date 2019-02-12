import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const resolve = path => () => import(`@/views/${path}`)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {title: '登录'},
      component: resolve('Login')
    },
    {
      path: '/admin',
      component: resolve('Home'),
      children: [{
        path: 'user',
        name: 'UserIndex',
        component: resolve('User')
      }]
    }
  ]
})

router.afterEach(to => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

export default router