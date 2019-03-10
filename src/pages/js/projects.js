import {mapGetters} from 'vuex'
import Vue from 'vue'
// import Autocomplete from 'vuejs-auto-complete'

// Vue.use(Autocomplete)
import AutocompleteVue from 'autocomplete-vue'

Vue.component('autocomplete-vue', AutocompleteVue)

export default {
  data () {
    return {
      projectsCount: 4,
      name: '',
      description: '',
      orgId: this.$route.params.orgId,
      search: ''
    }
  },
  components: {
    // Autocomplete
  },
  created () {
    this.getProjects()
    this.getUsersInOrg()
  },
  computed: {
    ...mapGetters(['getAllProjects', 'getOrgUsers'])
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
      let request = {request: {createdBy: {userId: localStorage.getItem('userId')}, organisationId: this.orgId}, tokenId: localStorage.getItem('userId')}
      this.$store.dispatch('allProjects', {request})
    },
    endpoints (projectId, author) {
      localStorage.setItem('author', author)
      this.$router.push('/endpoints/' + projectId)
    },
    getUsersInOrg () {
      let request = {tokenId: localStorage.getItem('emailId')}
      let orgId = this.orgId
      this.$store.dispatch('getUsers', {request, orgId})
    },
    addColab (id) {
      for (var i = 0; i < this.getOrgUsers.length; i++) {
        if (this.getOrgUsers[i].emailId === this.search) {
          let request = {request: {projectId: id, role: 'NORMAL', userId: localStorage.getItem('userId')}, tokenId: localStorage.getItem('emailId')}
          this.$store.dispatch('addColab', {request})
        } else {
          console.log('false')
        }
      }
    }
  }
}
