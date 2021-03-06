import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Tab from './views/Tab.vue'
import Home from './page/Home.vue'
import Contract from './page/Contract.vue'
import Future from './page/Future.vue'
import Option from './page/Option.vue'
import Mine from './page/Mine.vue'
import Guess from './page/Guess.vue'
import Record from './page/Record'
import Draw from './page/Draw'
import RealName from './page/RealName'
import Safe from './page/Safe'
import Account from './page/Account'
import AddBank from './page/AddBank'
import WeChat from './page/WeChat'
import Alipay from './page/Alipay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/tab',
      component: Tab,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'contract',
          name: 'contract',
          component: Contract
        },
        {
          path: 'future',
          name: 'future',
          component: Future
        },
        {
          path: 'option',
          name: 'option',
          component: Option
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine
        }
      ]
    },
    {
      path: '/guess',
      name: 'guess',
      component: Guess
    },
    {
      path: '/record',
      name: 'record',
      component: Record
    },
    {
      path: '/draw',
      name: 'draw',
      component: Draw
    },
    {
      path: '/realname',
      name: 'realname',
      component: RealName
    },
    {
      path: '/safe',
      name: 'safe',
      component: Safe
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/addbank',
      name: 'addbank',
      component: AddBank
    },
    {
      path: '/wechat',
      name: 'wechat',
      component: WeChat
    },
    {
      path: '/alipay',
      name: 'alipay',
      component: Alipay
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
