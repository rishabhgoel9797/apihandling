import Vue from 'vue'
import Vuex from 'vuex'
import userService from '@/api/users'
import orgService from '@/api/organization'
import projectService from '@/api/projects'
import router from '../router'

Vue.use(Vuex)
const state = {
  user: {},
  org: {},
  allOrg: [],
  projects: []
}
const getters = {
  getUser (state) {
    return state.user
  },
  getOrganization (state) {
    return state.org
  },
  getAllOrganizations (state) {
    return state.allOrg
  },
  getAllProjects (state) {
    return state.projects
  }
}
const actions = {
  createNewUser ({commit}, {object, success, failure}) {
    console.log('data is ', object)
    userService.addNewUser((response) => {
      success(response)
    }, (error) => {
      failure(error)
    }, object)
  },
  doLogin ({commit}, {object, success, failure}) {
    console.log('data is ', object)
    userService.checkLogin((res) => {
      let data = res.body.response
      console.log('data ', data)
      commit('setUser', {data})
      success(res)
    }, (error) => {
      failure(error)
    }, object)
  },
  createOrg ({commit}, {request, success, failure}) {
    console.log('data is ', request)
    orgService.createOrg((res) => {
      let data = res.body.response
      console.log('data ', data)
      commit('setOrganization', {data})
      success(res)
    }, (error) => {
      failure(error)
    }, request)
  },
  allOrganizations ({commit}, {request, success, failure}) {
    console.log('data is ', request)
    orgService.getOrganizations((res) => {
      let data = res.body.response
      console.log('data ', data)
      commit('setAllOrganizations', {data})
      success(res)
    }, (error) => {
      failure(error)
    }, request)
  },
  addProject ({commit}, {request, success, failure}) {
    console.log('data is ', request)
    projectService.createProject((res) => {
      let data = res.body.response
      console.log('data ', data)
      success(res)
    }, (error) => {
      failure(error)
    }, request)
  },
  allProjects ({commit}, {request, success, failure}) {
    console.log('data is ', request)
    projectService.getProjects((res) => {
      let data = res.body.response
      console.log('data ', data)
      commit('setAllProjects', {data})
      success(res)
    }, (error) => {
      failure(error)
    }, request)
  }
}
const mutations = {
  setUser (state, {data}) {
    state.user = data
    localStorage.setItem('name', data.name)
    localStorage.setItem('userId', data.userId)
    router.push('organization')
  },
  setOrganization (state, {data}) {
    state.org = data
  },
  setAllOrganizations (state, {data}) {
    state.allOrg = data
  },
  setAllProjects (state, {data}) {
    state.projects = data
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
