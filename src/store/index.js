import Vue from 'vue'
import Vuex from 'vuex'
import userService from '@/api/users'
import orgService from '@/api/organization'
import projectService from '@/api/projects'
import endPointService from '@/api/endpoint'
import endPointRequestService from '@/api/endpointRequest'
import endPointResponseService from '@/api/endpointResponse'
import notificationService from '@/api/notification'
import router from '../router'

Vue.use(Vuex)
const state = {
  user: {},
  org: {},
  allOrg: [],
  projects: [],
  favourite: '',
  endpoints: [],
  endpointResponse: {},
  endpointRequest: {},
  notification: {}
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
  },
  getFavourite (state) {
    return state.favourite
  },
  getAllEndPoints (state) {
    return state.endpoints
  },
  getEndpointResponse (state) {
    return state.endpointResponse
  },
  getEndpointRequest (state) {
    return state.endpointRequest
  },
  getAllNotifications (state) {
    return state.notification
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
  },
  createEndPoint ({commit}, {request, success, failure}) {
    console.log('data is ', request)
    endPointService.createPoint((res) => {
      let data = res.body.response
      console.log('data ', data)
      router.push('/createEndPoint/' + data.id)
      success(res)
    }, (error) => {
      failure(error)
    }, request)
  },
  createRequest ({commit}, {request, success, failure, paramsType, endpointId}) {
    console.log('data is ', request)
    endPointRequestService.createRequest((res) => {
      let data = res.body.response
      console.log('data ', data)
      success(res)
    }, (error) => {
      failure(error)
    }, request, paramsType, endpointId)
  },
  updateRequest ({commit}, {request, success, failure, paramsType, endpointId}) {
    console.log('data is ', request)
    endPointRequestService.getRequest((res) => {
      let data = res.body.response
      console.log('data ', data)
      success(res)
    }, (error) => {
      failure(error)
    }, request, paramsType, endpointId)
  },
  createResponse ({commit}, {request, success, failure, endpointId}) {
    console.log('data is ', request)
    endPointResponseService.createResponse((res) => {
      let data = res.body.response
      console.log('data ', data)
      success(res)
    }, (error) => {
      failure(error)
    }, request, endpointId)
  },
  getJson ({commit}, {endpointId, success, failure}) {
    console.log('data is ', endpointId)
    endPointResponseService.getResponse((res) => {
      let data = res.body.response
      commit('setJson', {data})
      console.log('data ', data)
      success(res)
    }, (error) => {
      failure(error)
    }, endpointId)
  },
  allEndpoints ({commit}, {request, success, failure, projectId}) {
    endPointService.getAllEndpoints((res) => {
      let data = res.body.response
      console.log('response data k', data)
      commit('setAllEndpoints', {data})
      console.log('data ', data)
      success(res)
    }, (error) => {
      failure(error)
    }, request, projectId)
  },
  getResponse ({commit}, {success, failure, endpointId}) {
    endPointResponseService.getResponse((res) => {
      console.log('response is ', res)
      let data = res.body.response
      console.log('response data k', data)
      commit('setEndpointResponse', {data})
      console.log('data ', data)
      success(res)
    }, (error) => {
      failure(error)
    }, endpointId)
  },
  getRequest ({commit}, {request, success, failure, endpointId}) {
    endPointRequestService.getRequest((res) => {
      console.log('response is ', res)
      let data = res.body.response
      console.log('response data k', data)
      commit('setEndpointRequest', {data})
      console.log('data ', data)
      success(res)
    }, (error) => {
      failure(error)
    }, request, endpointId)
  },
  getNotification ({commit}, {request, success, failure}) {
    console.log('data is ', request)
    notificationService.getNotification((res) => {
      let data = res.body.response
      commit('setNotification', {data})
      console.log('data ', data)
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
  },
  setJson (state, {data}) {
    state.favourite = data
  },
  setAllEndpoints (state, {data}) {
    state.endpoints = data
  },
  setEndpointResponse (state, {data}) {
    var x = JSON.parse(data)
    var convertedData = x['#']
    console.log(convertedData)
    state.endpointResponse = JSON.stringify(convertedData)
    console.log('data is ', data)
    console.log('parsed data is ', JSON.parse(data))
  },
  setEndpointRequest (state, {data}) {
    state.endpointRequest = data
  },
  setNotification (state, {data}) {
    state.notification = data
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
