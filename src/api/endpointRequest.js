import commonApi from '@/api/index.js'

const apiPath = {
  create_endpointrequest: '/endpointRequest/',
  get_endpointrequest: '/endpointRequest/get/',
  update_endpointrequest: '/endpointRequest/'
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
  }
}

export default endPointRequestService
