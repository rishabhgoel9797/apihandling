export default {
  data () {
    return {
      apis: [
        'blibli/getProducts',
        'blibli/postProducts'
      ],
      projectId: this.$route.params.projectId,
      requestType: '',
      url: ''
    }
  },
  methods: {
    // createEndPoint (projectId) {
    //   this.$router.push('/createEndPoint/' + projectId)
    // },
    addEndpoint () {
      let request = {request: {createdBy: {userId: localStorage.getItem('userId')}, createdTimestamp: 3423846327, endpointPath: this.url, project: {projectId: this.projectId}, requestMethod: this.requestType, updatedBy: {userId: localStorage.getItem('userId')}, updatedTimestamp: 512368274}}
      this.$store.dispatch('createEndPoint', {request})
    }
  }
}
