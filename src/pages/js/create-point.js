export default {
  data () {
    return {
      params: 0
    }
  },
  methods: {
    createParams () {
      let paramsDiv = document.getElementById('paramInputs')
      paramsDiv.innerHTML = ''
      for (let i = 0; i < this.params; i++) {
        paramsDiv.innerHTML = paramsDiv.innerHTML + '<div class="col-md-4"><div class="form-group"><input type="text" placeholder="key" class="form-control"></div></div><div class="col-md-4"><div class="form-group"><input type="text" placeholder="value" class="form-control"></div></div><div class="col-md-4"><div class="form-group"><select class="form-control" placeholder="required?"><option value="">--Attribute Required?--</option><option value="true">True</option><option value="false">False</option></select></div></div>'
      }
    }
  }
}
