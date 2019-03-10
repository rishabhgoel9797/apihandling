import { mapGetters } from 'vuex'
import router from '../../router'

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
  created () {
    this.getEndpoints()
  },
  computed: {
    ...mapGetters(['getAllEndPoints'])
  },
  methods: {
    addEndpoint () {
      let request = {request: {createdBy: {userId: localStorage.getItem('userId')}, createdTimestamp: 3423846327, endpointPath: this.url, project: {projectId: this.projectId}, requestMethod: this.requestType, updatedBy: {userId: localStorage.getItem('userId')}, updatedTimestamp: 512368274}}
      this.$store.dispatch('createEndPoint', {request})
    },
    getEndpoints () {
      let request = {tokenId: localStorage.getItem('userId')}
      console.log('my request is ', request)
      let projectId = this.projectId
      this.$store.dispatch('allEndpoints', {request, projectId})
    },
    singleEndPoint (endpointId, author) {
      if (author === true) {
        router.push('/updateEndPoint/' + endpointId)
      } else {
        router.push('/favourites/' + endpointId)
      }
    },
    subscribe (id) {
      let request = {request: {endPointId: id, subscriberId: localStorage.getItem('userId')}, tokenId: localStorage.getItem('emailId')}
      this.$store.dispatch('addSubscription', {request})
    },
    Unsubscribe (id) {
      let request = {request: {endPointId: id, subscriberId: localStorage.getItem('userId')}, tokenId: localStorage.getItem('emailId')}
      this.$store.dispatch('unSubscription', {request})
    },
    swaggerImport () {
      let request = {request: {projectId: this.projectId, url: this.url, userId: localStorage.getItem('userId')}, tokenId: localStorage.getItem('userId')}
      this.$store.dispatch('swagger', {request})
    }
  }
}
