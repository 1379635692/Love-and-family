import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from  '../pages/login/login'
import homePage from  '../pages/index/homePage'
import MailList from  '../pages/Mail-list/MailList'
import Peoplenearby from '../pages/Mail-list/Peoplenearby'
import Privatechat from '../pages/Mail-list/Privatechat'
import PersonalLnformation from '../pages/Mail-list/PersonalLnformation'
import CircleFriends from '../pages/Mail-list/CircleFriends'
import setting from '../pages/Mail-list/setting'
import Backgroundmap from '../pages/Mail-list/Backgroundmap'
import nearby from '../pages/People_nearby/nearby'
import Newstart from '../pages/People_nearby/Newstart'
import addFriends from '../pages/communications/addFriends'
import phonefriends from '../pages/communications/phonefriends'
import newfriends from '../pages/communications/newfriends'
import group from '../pages/communications/group'
import GroupSetting from '../pages/communications/GroupSetting'
import message from '../pages/communications/message'


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
    },
    {
      path: '/PersonalLnformation',
      name: 'PersonalLnformation',
      component: PersonalLnformation
    },
    {
      path: '/CircleFriends',
      name: 'CircleFriends',
      component: CircleFriends
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/Backgroundmap',
      name: 'Backgroundmap',
      component: Backgroundmap
    },
    {
      path: '/nearby',
       name: 'nearby',
       component: nearby
     },
     {
      path: '/Newstart',
       name: 'Newstart',
       component: Newstart
     },
    {
      path: '/addFriends',
      name: 'addFriends',
      component: addFriends
    },
    {
      path: '/phonefriends',
      name: 'phonefriends',
      component: phonefriends
    },
    {
      path: '/newfriends',
      name: 'newfriends',
      component: newfriends
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/GroupSetting',
      name: 'GroupSetting',
      component: GroupSetting
    },
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})
