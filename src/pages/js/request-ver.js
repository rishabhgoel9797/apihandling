import { mapGetters } from "vuex";

export default {
  created () {
    this.getReqVer()
  },
  computed: {
    ...mapGetters(['getVersions'])
  },
  methods: {
    getReqVer () {
      let endpointId = this.$route.params.endpointId
      let userId = localStorage.getItem('userId')
      let request = {tokenId: localStorage.getItem('emailId')}
      this.$store.dispatch('showVersions', {request, endpointId, userId})
    }
  }
}
