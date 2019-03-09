import commonApi from '@/api/index.js'

const apiPath = {
  subscribe: '/subscribe/new'
}

const subscribeService = {
  createSub (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.subscribe, userObj, callback, errHandler)
  }
}

export default subscribeService
