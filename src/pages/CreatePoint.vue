<template>
  <div class="container">
    <form>
    <div class="row">
      <div class="col-md-4">
        <div class="form-group">
          <label>Request Type</label>
          <select class="form-control" v-model="requestType">
            <option value="">--Select Option--</option>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>URL</label>
          <input type="text" class="form-control" placeholder="Enter URL" v-model="url">
        </div>
      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-info subURL" @click="addEndpoint">Submit EndPoint</button>
      </div>
    </div>
    <div class="row request_response_Container">
      <div class="col-md-6 request">
        <div class="form-group">
          <h2 class="heading">Request</h2>
          <button type="button" class="btn btn-info pull-right">Save Request</button><br>
          <label>Paste Request Body</label>
          <textarea class="form-control textbody" rows="10"></textarea>
          <br>
          <div class="col-md-10">
          <label>Number of Params Required</label>
          <input type="number" class="form-control" v-model="params"
            id="numberParams" placeholder="enter the number of params to add">
          </div>
          <div class="col-md-2">
            <button type="button" class="btn btn-primary createParams"
            @click="createParams">Create</button>
          </div>
          <br>
          <div class="row" id="paramInputs">

          </div>
        </div>
      </div>
      <div class="col-md-6 response">
        <div class="form-group">
          <h2 class="heading">Response</h2>
          <button type="button" class="btn btn-info pull-right">Save Response</button><br>
          <label>Paste Response Body</label>
          <textarea class="form-control textbody" rows="10"></textarea>
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
.textbody{
  background-color: lightgray;
  color: #fff;
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
