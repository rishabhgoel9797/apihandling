export default {
  data () {
    return {
      params: 0,
      projectId: this.$route.params.projectId,
      requestType: '',
      url: '',
      key: '',
      required: '',
      paramsObject: {},
      requestBody: '',
      response: ''
    }
  },
  methods: {
    createParams () {
      let paramsDiv = document.getElementById('paramInputs')
      paramsDiv.innerHTML = ''
      for (let i = 0; i < this.params; i++) {
        paramsDiv.innerHTML = paramsDiv.innerHTML + '<div class="col-md-6"><div class="form-group"><input type="text" placeholder="key" class="form-control key"></div></div><div class="col-md-6"><div class="form-group"><select class="form-control required" placeholder="required?"><option value="">--Attribute Required?--</option><option value="true">True</option><option value="false">False</option></select></div></div>'
      }
      // console.log()
    },
    paramsValue () {
      let keyClass = document.getElementsByClassName('key')
      let requiredClass = document.getElementsByClassName('required')
      let obj = {}
      for (var i = 0, j = 0; i < keyClass.length && j < requiredClass.length; i++, j++) {
        this.key = keyClass[i].value
        this.required = requiredClass[j].value
        obj[this.key] = this.required
      }
      console.log('params are', obj)
      let request = {request: obj}
      let paramsType = 'param'
      let endpointId = '3fa79838-11a9-4d51-99e1-0e94c0cd0be3'
      this.$store.dispatch('createRequest', {request, paramsType, endpointId})
    },
    requestBodyFunction () {
      let jsonObj = JSON.parse(this.requestBody)
      let paramsType = 'body'
      let request = {request: jsonObj}
      let endpointId = '3fa79838-11a9-4d51-99e1-0e94c0cd0be3'
      this.$store.dispatch('createRequest', {request, paramsType, endpointId})
    },
    addEndpoint () {
      let request = {request: {createdBy: {userId: localStorage.getItem('userId')}, createdTimestamp: 3423846327, endpointPath: this.url, project: {projectId: this.projectId}, requestMethod: this.requestType, updatedBy: {userId: localStorage.getItem('userId')}, updatedTimestamp: 512368274}}
      this.$store.dispatch('createEndPoint', {request})
    },
    addResponse () {
      let request = {request: this.response}
      let endpointId = '3fa79838-11a9-4d51-99e1-0e94c0cd0be3'
      this.$store.dispatch('createResponse', {request, endpointId})
    }
  }
}
