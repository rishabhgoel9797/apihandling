import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Organization from '@/pages/Organization'
import Registration from '@/pages/Registration'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/organization',
      component: Organization
    },
    {
      path: '/registration',
      component: Registration
    },
    {
      path: '/login',
      component: Login
    }
  ],
  mode: 'history'
})
