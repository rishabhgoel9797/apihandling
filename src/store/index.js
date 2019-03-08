import Vue from 'vue'
import Vuex from 'vuex'
import userService from '@/api/users'

Vue.use(Vuex)
const state = {

}
const getters = {

}
const actions = {
  createNewUser ({commit}, {object, success, failure}) {
    console.log('data is ', object)
    userService.addNewUser((response) => {
      success(response)
    }, (error) => {
      failure(error)
    }, object)
  }
}
const mutations = {

}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
