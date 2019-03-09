<template>
  <div class="container">
    <div class="projectName">
      Blibli
      <button type="button" class="btn btn-primary pull-right" @click="createEndPoint($route.params.projectId)">
        <i class="fa fa-plus add" aria-hidden="true"></i>
        Create Endpoint
      </button>
    </div>
    <div class="endpoints_container">
      <div class="endpoints alert alert-info">
        <span class="endpoint_type">GET</span>/blibli/getProducts
      </div>
      <div class="endpoints alert alert-success">
        <span class="endpoint_type">POST</span>/blibli/postProducts
      </div>
      <div class="endpoints alert alert-warning">
        <span class="endpoint_type">PUT</span>/blibli/editProducts
      </div>
      <div class="endpoints alert alert-danger">
        <span class="endpoint_type">DELETE</span>/blibli/deleteProducts
      </div>
      <div class="endpoints alert alert-info">
        <span class="endpoint_type">GET</span>
        /blibli/getProduct/{productId}
      </div>
    </div>
    <!-- EndPoint Modal -->
    <div id="endpointModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create New Endpoint</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" name="projectName">
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea type="text" class="form-control" rows="5" name="projectDescription"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Create</button>
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
</style>
