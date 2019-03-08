import Vue from 'vue'
import Vuex from 'vuex'
import userService from '@/api/users'

Vue.use(Vuex)
const state = {
  user: {}
}
const getters = {
  getUser (state) {
    return state.user
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
  }
}
const mutations = {
  setUser (state, {data}) {
    state.user = data
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
