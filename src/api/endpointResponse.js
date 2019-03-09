import commonApi from '@/api/index.js'

const apiPath = {
  create_endpointresponse: '/endpoint-response/save'
}

const endPointResponseService = {
  createResponse (callback, errHandler, userObj, endpointId) {
    commonApi.postDataViaApi(apiPath.create_endpointresponse + '?endpointId=' + endpointId, userObj, callback, errHandler)
  }
}

export default endPointResponseService
