import commonApi from '@/api/index.js'

const apiPath = {
  create_project: '/project/addProject',
  get_projects: '/project/getProjectByOrganisation',
  add_colab: '/project/addUserToProject'
}

const projectService = {
  createProject (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.create_project, userObj, callback, errHandler)
  },
  getProjects (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.get_projects, userObj, callback, errHandler)
  },
  addColab (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.add_colab, userObj, callback, errHandler)
  }
}

export default projectService
