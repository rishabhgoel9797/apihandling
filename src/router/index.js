import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Project from '@/pages/Projects'
import EndPoints from '@/pages/EndPoints'
import CreatePoint from '@/pages/CreatePoint'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/projects',
      component: Project
    },
    {
      path: '/endpoints',
      component: EndPoints
    },
    {
      path: '/createEndPoint',
      component: CreatePoint
    }
  ],
  mode: 'history'
})
