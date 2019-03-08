import commonApi from '@/api/index.js'

const apiPath = {
  create_org: '/organisation/addOrganisation'
}

const orgService = {
  createOrg (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.create_org, userObj, callback, errHandler)
  }
}

export default orgService
