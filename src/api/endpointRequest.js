import commonApi from '@/api/index.js'

const apiPath = {
  create_endpointrequest: '/endpointRequest/'
}

const endPointRequestService = {
  createRequest (callback, errHandler, userObj, paramsType, endpointId) {
    console.log('param', paramsType)
    commonApi.postDataViaApi(apiPath.create_endpointrequest + endpointId + '/' + paramsType, userObj, callback, errHandler)
  }
}

export default endPointRequestService
