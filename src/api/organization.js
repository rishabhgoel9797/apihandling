import commonApi from '@/api/index.js'

const apiPath = {
  create_org: '/organisation/addOrganisation',
  get_orgs: '/organisation/getUserOrganisation',
  get_users: '/organisation/getAllUserByOrganization/',
  add_colab: '/organisation/addUserToOrganisation'
}

const orgService = {
  createOrg (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.create_org, userObj, callback, errHandler)
  },
  getOrganizations (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.get_orgs, userObj, callback, errHandler)
  },
  getAllUsers (callback, errHandler, userObj, orgId) {
    commonApi.postDataViaApi(apiPath.get_users + orgId, userObj, callback, errHandler)
  },
  addColab (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.add_colab, userObj, callback, errHandler)
  }
}

export default orgService
