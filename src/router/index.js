import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Organization from '@/pages/Organization'
import Registration from '@/pages/Registration'
import Login from '@/pages/Login'
import Project from '@/pages/Projects'
import EndPoints from '@/pages/EndPoints'
import CreatePoint from '@/pages/CreatePoint'
import Favourites from '@/pages/Favourites'
import UpdatePoint from '@/pages/UpdatePoint'
import Notification from '@/pages/Notification'
import RequestVer from '@/pages/RequestVer'

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
    },
    {
      path: '/projects/:orgId',
      component: Project
    },
    {
      path: '/endpoints/:projectId',
      component: EndPoints
    },
    {
      path: '/createEndPoint/:endpointId',
      component: CreatePoint
    },
    {
      path: '/favourites/:endpointId',
      component: Favourites
    },
    {
      path: '/notification',
      component: Notification
    },
    {
      path: '/updateEndPoint/:endpointId',
      component: UpdatePoint
    },
    {
      path: '/requestsVer/:endpointId',
      component: RequestVer
    }
  ],
  mode: 'history'
})
