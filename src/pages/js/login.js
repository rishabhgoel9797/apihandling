export default {
  name: 'Login',
  data () {
    return {
      emailId: '',
      password: '',
      request: {}
    }
  },
  methods: {
    login () {
      let userObj = {emailId: this.emailId, password: this.password}
      let object = {request: userObj}
      console.log('object is ', object)
      this.$store.dispatch('doLogin', {
        object
      })
    }
  }
}
