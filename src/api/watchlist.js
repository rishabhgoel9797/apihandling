import commonApi from '@/api/index.js'

const apiPath = {
  add_bulk: '/watchlist/addbulk',
  get_list: '/watchlist/get',
  remove: '/watchlist/remove'
}

const watchService = {
  subscribe (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.add_bulk, userObj, callback, errHandler)
  },
  getPaths (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.get_list, userObj, callback, errHandler)
  },
  deletePath (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.remove, userObj, callback, errHandler)
  }
}

export default watchService
