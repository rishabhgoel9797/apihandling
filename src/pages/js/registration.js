// import { mapActions } from 'vuex'
export default {
  name: 'Registration',
  data () {
    return {
      name: '',
      emailId: '',
      password: '',
      request: {}
    }
  },
  methods: {
    // ...mapActions(['createNewUser'])
    addUser () {
      let userObj = {name: this.name, emailId: this.emailId, password: this.password}
      let object = {request: userObj}
      console.log('object is ', object)
      this.$store.dispatch('createNewUser', {
        object
      })
    }
  }
}
