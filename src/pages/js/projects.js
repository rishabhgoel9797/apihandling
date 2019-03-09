import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      projectsCount: 4,
      name: '',
      description: '',
      orgId: this.$route.params.orgId
    }
  },
  created () {
    this.getProjects()
  },
  computed: {
    ...mapGetters(['getAllProjects'])
  },
  methods: {
    createProject () {
      let request = {request: {createdBy: {userId: localStorage.getItem('userId')}, organisation: {organisationId: this.orgId}, projectName: this.name, projectDescription: this.description}}
      console.log(request)
      this.$store.dispatch('addProject', {
        request
      })
    },
    getProjects () {
      let request = {request: {createdBy: {userId: localStorage.getItem('userId')}, organisationId: this.orgId}}
      this.$store.dispatch('allProjects', {request})
    },
    endpoints (projectId) {
      this.$router.push('/endpoints/' + projectId)
    }
  }
}
