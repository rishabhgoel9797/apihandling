export default {
  data () {
    return {
      apis: [
        'blibli/getProducts',
        'blibli/postProducts'
      ]
    }
  },
  methods: {
    createEndPoint (projectId) {
      this.$router.push('/createEndPoint/' + projectId)
    }
  }
}
