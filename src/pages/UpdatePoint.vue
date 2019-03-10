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
            <textarea v-if="getEndpointRequest[0].type==='body'"
              class="form-control textbody"
              rows="10"
              v-model="getEndpointRequest[0].content"
            ></textarea>
            <textarea v-if="getEndpointRequest[0].type==='param'"
              class="form-control textbody"
              rows="10"
              v-model="requestBody"
            ></textarea>
            <br>
            <div
              class="row"
              id="paramInputs"
              v-for="response in getEndpointRequest"
              :key="response.id"
            >
              <div v-if="response.type==='param'" class="col-md-6">
                <div class="form-group">
                  <input type="text" placeholder="key" class="form-control key" :value="response.content">
                </div>
              </div>
              <div v-if="response.type==='param'" class="col-md-6">
                <div class="form-group">
                  <select class="form-control required" placeholder="required?">
                    <option v-if="response.requestParamRequired==false" :value="response.requestParamRequired" selected="selected">False</option>
                    <option v-if="response.requestParamRequired==true" :value="response.requestParamRequired" selected="selected">True</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-10">
              <label>Add more params</label>
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
            <button v-if="getEndpointRequest[0].published===false" type="button" class="btn btn-info" @click="publish">Publish</button>
          </div>
        </div>
        <div class="col-md-6 response">
          <div class="form-group">
            <h2 class="heading">Response</h2>
            <button type="button" class="btn btn-info pull-right" @click="addResponse">Save Response</button>
            <br>
            <label>Paste Response Body</label>
            <textarea class="form-control textbody" rows="10" v-model="getEndpointResponse"></textarea>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script src="./js/update-point.js"></script>

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
