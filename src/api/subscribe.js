import commonApi from '@/api/index.js'

const apiPath = {
  subscribe: '/subscribe/new',
  unsubscribe: '/subscribe/delete'
}

const subscribeService = {
  createSub (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.subscribe, userObj, callback, errHandler)
  },
  remove (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.unsubscribe, userObj, callback, errHandler)
  }
}

export default subscribeService
