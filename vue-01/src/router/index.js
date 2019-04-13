import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from  '../pages/login/login'
import homePage from  '../pages/index/homePage'
import MailList from  '../pages/Mail-list/MailList'
import Peoplenearby from '../pages/Mail-list/Peoplenearby'
import Privatechat from '../pages/Mail-list/Privatechat'

//
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homePage'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/MailList',
      name: 'MailList',
      component: MailList
    },
    {
      path: '/Peoplenearby',
      name: 'Peoplenearby',
      component: Peoplenearby
    },
    {
      path: '/Privatechat',
      name: 'Privatechat',
      component: Privatechat
    }

  ]
})
