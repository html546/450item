import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Tab from './views/Tab.vue'
import Home from './views/Home.vue'
import Contract from './views/Contract.vue'
import Future from './views/Future.vue'
import Option from './views/Option.vue'
import Mine from './views/Mine.vue'

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
      path: '/Tab',
      name: 'Tab',
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
