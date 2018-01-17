import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Child from '@/components/Child'
import Parent from '@/components/Parent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      components: {
        default: Login,
        hello: Child,
        found: Parent
      }
    }
  ]
})
