import {mapGetters} from 'vuex'

export default {
  name: 'Organization',
  data () {
    return {
      organizationsCount: 4,
      name: ''
    }
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
    organization () {
      let request = {request: {createdBy: {userId: localStorage.getItem('userId')}, organisationName: this.name}}
      console.log('request is ', request)
      this.$store.dispatch('createOrg', {request})
    }
  }
}
