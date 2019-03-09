import JQuery from 'jquery'
import { mapGetters } from 'vuex'
// import { mapActions } from 'vuex';
let $ = JQuery
export default {
  data () {
    return {
      paths: [],
      jsonObject: {}
    }
  },
  computed: {
    ...mapGetters(['getFavourite'])
  },
  created () {
    this.fetchResponse()
  },
  mounted () {
    this.jsonObject = JSON.parse(this.getFavourite)
    // var response = {
    //   'request': {
    //     'createdBy': {
    //       'userId': '4bbd61e3-d390-463b-bfe3-fc7187135529'
    //     },
    //     'createdTimestamp': 3654364538,
    //     'endpointPath': 'egdveg',
    //     'project': {
    //       'projectId': '89a491eb-faef-4751-bede-be0bdff28f59'
    //     },
    //     'requestMethod': 'skdbnsd',
    //     'updatedBy': {
    //       'userId': '4bbd61e3-d390-463b-bfe3-fc7187135529'
    //     },
    //     'updatedTimestamp': 342423043
    //   }
    // }
    var response = this.jsonObject
    var result = this.json2html(response)
    var ref = this
    var count = 0
    $('#favourite').append(result)
    $('li').click(function (e) {
      var path = []
      var el = $(this)
      do {
        path.unshift(el.attr('id'))
        el = el.parent().closest('li')
      } while (el.length !== 0)
      var attrPath = path.join('/')
      ref.paths.push(attrPath)
      document.getElementById('points').innerHTML += '<div class="col-md-4"><div class="tag">' + ref.paths[count] + '</div></div>'
      console.log(ref.paths)
      alert(path.join('/'))
      count++
      e.stopPropagation()
    })
  },
  methods: {
    json2html (json) {
      var i
      var ret = document.createElement('ul')
      var li
      for (i in json) {
        li = ret.appendChild(document.createElement('li'))
        li.setAttribute('id', i)
        li.appendChild(document.createTextNode(i + ': '))
        if (typeof json[i] === 'object') li.appendChild(this.json2html(json[i]))
        else li.firstChild.nodeValue += json[i]
      }
      console.log(ret)
      return ret
    },
    fetchResponse () {
      let endpointId = this.$route.params.endpointId
      this.$store.dispatch('getJson', {endpointId})
    }
  }
}
