import commonApi from '@/api/index.js'

const apiPath = {
  create_point: '/endpoint/'
}

const endPointService = {
  createPoint (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.create_point, userObj, callback, errHandler)
  }
}

export default endPointService
