<template>
  <div class="container">
    <form>
      <div class="row request_response_Container">
        <div class="col-md-6 request">
          <div class="form-group">
            <h2 class="heading">Request</h2>
            <button
              type="button"
              class="btn btn-info pull-right"
              @click="requestBodyFunction"
            >Save Request</button>
            <br>
            <label>Paste Request Body</label>
            <textarea class="form-control textbody" rows="10" v-model="requestBody"></textarea>
            <br>
            <div class="col-md-10">
              <label>Number of Params Required</label>
              <input
                type="number"
                class="form-control"
                v-model="params"
                id="numberParams"
                placeholder="enter the number of params to add"
              >
            </div>
            <div class="col-md-2">
              <button
                type="button"
                class="btn btn-primary createParams"
                @click="createParams"
              >Create</button>
            </div>
            <br>
            <div class="row" id="paramInputs"></div>
            <button type="button" class="btn btn-info" @click="paramsValue">Save</button>
          </div>
        </div>
        <div class="col-md-6 response">
          <div class="form-group">
            <h2 class="heading">Response</h2>
            <button type="button" class="btn btn-info pull-right" @click="addResponse">Save Response</button>
            <br>
            <label>Paste Response Body</label>
            <textarea class="form-control textbody" rows="10" v-model="response"></textarea>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script src="./js/create-point.js"></script>

<style>
.container {
  margin-top: 50px;
}
.request_response_Container {
  margin-top: 30px;
}
.request {
  border-right: 1px solid #ccc;
  height: 500px;
}
.textbody {
  background-color: lightgray;
  color: #000;
}
.heading {
  text-align: center;
}
.createParams {
  margin-top: 25px;
}
#numberParams {
  margin-bottom: 20px;
}
.subURL {
  margin-top: 25px;
}
</style>
