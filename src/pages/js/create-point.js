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
      let endpointId = this.$route.params.endpointId
      this.$store.dispatch('createRequest', {request, paramsType, endpointId})
    },
    requestBodyFunction () {
      let jsonObj = JSON.parse(this.requestBody)
      let paramsType = 'body'
      let request = {request: jsonObj}
      let endpointId = this.$route.params.endpointId
      this.$store.dispatch('createRequest', {request, paramsType, endpointId})
    },
    addResponse () {
      let request = {request: this.response}
      let endpointId = this.$route.params.endpointId
      this.$store.dispatch('createResponse', {request, endpointId})
    }
  }
}
