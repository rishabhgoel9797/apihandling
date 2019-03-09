import {mapGetters} from 'vuex'

export default {
  name: 'Organization',
  data () {
    return {
      organizationsCount: 4,
      name: ''
    }
  },
  created () {
    this.allOrganizations()
  },
  computed: {
    ...mapGetters(['getUser', 'getAllOrganizations'])
  },
  methods: {
    organization () {
      let request = {request: {createdBy: {userId: localStorage.getItem('userId')}, organisationName: this.name}}
      console.log('request is ', request)
      this.$store.dispatch('createOrg', {request})
    },
    allOrganizations () {
      let request = {request: {userId: localStorage.getItem('userId')}}
      this.$store.dispatch('allOrganizations', {request})
    },
    getProjects (orgId) {
      this.$router.push('/projects/' + orgId)
    }
  }
}
