import commonApi from '@/api/index.js'

const apiPath = {
  register_user: '/users/signUp'
}

const userService = {
  addNewUser (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.register_user, userObj, callback, errHandler)
  }
}

export default userService
