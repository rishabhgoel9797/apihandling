import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource)

const commonApi = {
  getDataViaApi (path, cb, errorHandler) {
    let headerObject = {
      'Content-Type': 'application/json'
    }
    Vue.http.get(path, {headers: headerObject}).then((res) => {
      cb(res)
    }, (error) => {
      errorHandler(error)
    })
  },
  postDataViaApi (path, data, cb, errorHandler) {
    console.log('api path is ', path)
    console.log('api data is ', data)
    Vue.http.post(path, data).then((res) => {
      console.log('response is ', res)
      cb(res)
    }, (error) => {
      errorHandler(error)
    })
  },
  putDataViaApi (path, data, cb, errorHandler) {
    Vue.http.put(path, data).then((res) => {
      cb(res)
    }, (error) => {
      errorHandler(error)
    })
  },
  deleteDataViaApi (path, cb, errorHandler) {
    Vue.http.delete(path).then((res) => {
      cb(res)
    }, (error) => {
      errorHandler(error)
    })
  }
}

export default commonApi
