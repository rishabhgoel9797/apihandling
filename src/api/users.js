import commonApi from '@/api/index.js'

const apiPath = {
  register_user: '/users/signUp',
  login_user: '/users/login'
}

const userService = {
  addNewUser (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.register_user, userObj, callback, errHandler)
  },
  checkLogin (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.login_user, userObj, callback, errHandler)
  }
}

export default userService
