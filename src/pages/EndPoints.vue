<template>
  <div class="container">
    <div class="projectName">
      {{getAllEndPoints[0].project.projectName}}
      <button
        type="button"
        class="btn btn-primary pull-right"
        data-toggle="modal"
        data-target="#endpointModal"
      >
        <i class="fa fa-plus add" aria-hidden="true"></i>
        Create Endpoint
      </button>
    </div>
    <div class="endpoints_container" v-for="endpoint in getAllEndPoints" :key="endpoint.id">
      <div @click="singleEndPoint(endpoint.id)" class="endpoints alert alert-info hover">
        <span class="endpoint_type">{{endpoint.requestMethod.toUpperCase()}}</span>{{endpoint.endpointPath}}
      </div>
    </div>
    <!-- Endpoint Modal -->
    <div id="endpointModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create New Endpoint</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label>Request Type</label>
                    <select class="form-control" v-model="requestType">
                      <option value>--Select Option--</option>
                      <option value="GET">GET</option>
                      <option value="POST">POST</option>
                      <option value="PUT">PUT</option>
                      <option value="DELETE">DELETE</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="form-group">
                    <label>URL</label>
                    <input type="text" class="form-control" placeholder="Enter URL" v-model="url">
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-info subURL" data-dismiss="modal" @click="addEndpoint">Submit EndPoint</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/end-points.js"></script>

<style>
.container {
  margin-top: 40px;
}
.projectName {
  color: #039be5;
  font-size: 40px;
}
.endpoints {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
}
.endpoint_type {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
}
.hover {
  cursor: pointer;
}
</style>
