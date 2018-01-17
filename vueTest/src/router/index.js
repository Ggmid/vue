import Vue from 'vue'
import Router from 'vue-router'
import Found from '@/components/Found'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      components: {
        default: Login,
        hello: Hello,
        found: Found
      }
    }
  ]
})
