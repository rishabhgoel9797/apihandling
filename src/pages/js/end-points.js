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
    createEndPoint () {
      this.$router.push('createEndPoint')
    }
  }
}
