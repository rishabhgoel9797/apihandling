import commonApi from '@/api/index.js'

const apiPath = {
  create_endpointresponse: '/endpoint-response/save',
  get_endpointresponse: '/endpoint-response/fetch'
}

const endPointResponseService = {
  createResponse (callback, errHandler, userObj, endpointId) {
    commonApi.postDataViaApi(apiPath.create_endpointresponse + '?endpointId=' + endpointId, userObj, callback, errHandler)
  },
  getResponse (callback, errHandler, endpointId) {
    commonApi.getDataViaApi(apiPath.get_endpointresponse + '?endpointId=' + endpointId, callback, errHandler)
  }
}

export default endPointResponseService
