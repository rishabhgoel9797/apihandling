export default {
  data () {
    return {
      userId: localStorage.getItem('userId'),
      userName: localStorage.getItem('name')
    }
  },
  methods: {
    signup () {
      this.$router.push('/registration')
    },
    login () {
      this.$router.push('/login')
    },
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    gohome () {
      this.$router.push('/')
    },
    org () {
      this.$router.push('/organization')
    }
  }
}
