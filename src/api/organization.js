import commonApi from '@/api/index.js'

const apiPath = {
  create_org: '/organisation/addOrganisation',
  get_orgs: '/organisation/getUserOrganisation'
}

const orgService = {
  createOrg (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.create_org, userObj, callback, errHandler)
  },
  getOrganizations (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.get_orgs, userObj, callback, errHandler)
  }
}

export default orgService
