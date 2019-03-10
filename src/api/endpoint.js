import commonApi from '@/api/index.js'

const apiPath = {
  create_point: '/endpoint/',
  all_points: '/endpoint/getByProjectId/',
  swagger_import: '/swaggerPlugin/import'
}

const endPointService = {
  createPoint (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.create_point, userObj, callback, errHandler)
  },
  getAllEndpoints (callback, errHandler, userObj, projectId) {
    console.log('request and payload is ', userObj, projectId)
    commonApi.postDataViaApi(apiPath.all_points + projectId, userObj, callback, errHandler)
  },
  swagger (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.swagger_import, userObj, callback, errHandler)
  }
}

export default endPointService
