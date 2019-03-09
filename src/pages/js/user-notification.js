import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      userId: localStorage.getItem('userId')
    }
  },
  created () {
    this.getNotification()
  },
  computed: {
    ...mapGetters(['getAllNotifications'])
  },
  methods: {
    getNotification () {
      let request = {request: this.userId, tokenId: this.userId}
      this.$store.dispatch('getNotification', {request})
    }
  }
}
