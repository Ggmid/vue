import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'
import Child from '@/components/page/Child'
import Home from '@/components/common/Home'
import Choice from '@/components/page/Choice'
import Song from '@/components/page/Song'
import Singer from '@/components/page/Singer'
import Rank from '@/components/page/Rank'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
    	path: '/home',
    	component: Home,
    	children: [
    		{
    			path: '/',
    			component: Choice
    		},
    		{
    			path: '/choice',
    			component: Choice
    		},
    		{
    			path: '/song',
    			component: Song
    		},
    		{
    			path: '/singer',
    			component: Singer
    		},
    		{
    			path: '/rank',
    			component: Rank
    		}
    	]
    },
    {
    	path: '/login',
    	component: Login
    }
  ]
})
