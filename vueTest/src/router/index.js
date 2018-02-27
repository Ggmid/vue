import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Parent from '@/components/Parent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/parent',
      component: Parent
    }
  ]
})
