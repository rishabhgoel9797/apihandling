import commonApi from '@/api/index.js'

const apiPath = {
  create_project: '/project/addProject',
  get_projects: '/project/getProjectByOrganisation'
}

const projectService = {
  createProject (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.create_project, userObj, callback, errHandler)
  },
  getProjects (callback, errHandler, userObj) {
    commonApi.postDataViaApi(apiPath.get_projects, userObj, callback, errHandler)
  }
}

export default projectService
