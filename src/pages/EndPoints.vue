<template>
  <div class="container">
    <div class="projectName">
      Blibli
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
        <span class="endpoint_type">GET</span>/blibli/getProduct/{productId}
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
