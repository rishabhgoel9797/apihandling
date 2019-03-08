import Vue from 'vue'
import Vuex from 'vuex'
import userService from '@/api/users'
import orgService from '@/api/organization'
import router from '../router'

Vue.use(Vuex)
const state = {
  user: {},
  org: {}
}
const getters = {
  getUser (state) {
    return state.user
  },
  getOrganization (state) {
    return state.org
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
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
