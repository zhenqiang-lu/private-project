import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/login.vue'
import Nav from '@/components/menu.vue'
import indexPage from '@/pages/index/indexPage.vue'

Vue.use(Router)

const routes = [
  {
      path: '/',
      component: Login
  },
  {
      path: '/login',
      name: 'login',
      component: Login
  },
  {
    path: '/nav',
    component: Nav,
    children: [
      {
        path: '/',
        component: indexPage,
        meta: {
            keepAlive: true // 需要被缓存
        }
      },
      {
        path: '/nav/index',
        component: indexPage,
        meta: {
            keepAlive: true // 需要被缓存
        }
      }
    ]
  }
];

export default new Router({
  // mode: 'history', 
  scrollBehavior: () => ({
    y: 0
  }),
  routes
})
