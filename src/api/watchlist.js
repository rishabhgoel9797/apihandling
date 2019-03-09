import commonApi from '@/api/index.js'

const apiPath = {
  add_bulk: '/watchlist/addbulk'
}

const watchService = {
  subscribe (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.add_bulk, userObj, callback, errHandler)
  }
}

export default watchService
