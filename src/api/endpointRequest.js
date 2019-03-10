import commonApi from '@/api/index.js'

const apiPath = {
  create_endpointrequest: '/endpointRequest/',
  get_endpointrequest: '/endpointRequest/get/',
  update_endpointrequest: '/endpointRequest/',
  publish_request: '/endpointRequest/publish/',
  version: '/endpointRequest/getByUserId/'
}

const endPointRequestService = {
  createRequest (callback, errHandler, userObj, paramsType, endpointId) {
    console.log('param', paramsType)
    commonApi.postDataViaApi(apiPath.create_endpointrequest + endpointId + '/' + paramsType, userObj, callback, errHandler)
  },
  getRequest (callback, errHandler, userObj, endpointId) {
    console.log('getRequest', {userObj, endpointId})
    commonApi.postDataViaApi(apiPath.get_endpointrequest + endpointId, userObj, callback, errHandler)
  },
  updateRequest (callback, errHandler, userObj, paramsType, endpointId) {
    console.log('param', paramsType)
    commonApi.putDataViaApi(apiPath.update_endpointrequest + endpointId + '/' + paramsType, userObj, callback, errHandler)
  },
  publishRequest (callback, errHandler, userObj, endpointId) {
    console.log('publishRequest', {userObj, endpointId})
    commonApi.postDataViaApi(apiPath.publish_request + endpointId, userObj, callback, errHandler)
  },
  versioning (callback, errHandler, userObj, endpointId, userId) {
    commonApi.postDataViaApi(apiPath.version + endpointId + '/' + userId, userObj, callback, errHandler)
  }
}

export default endPointRequestService
