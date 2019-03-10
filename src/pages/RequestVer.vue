<template>
  <div>
    <div class="row">
      <div class="col-md-6">
    <div class="form-group">
      <label>Current Version</label>
      <textarea class="form-control prev_version" rows="10" >{{getVersions.currentVersion}}</textarea>
      </div>
      </div>
      <div class="col-md-6">
      <div class="form-group">
        <label>Subscribed Version</label>
      <textarea class="form-control prev_version" rows="10" >{{getVersions.subscribedVersion}}</textarea>
    </div>
      </div>
      </div>
  </div>
</template>

<script src="./js/request-ver.js"></script>

<style>
.prev_version {
  max-width: 900px;
  border-right: 1px solid #ccc;
  color: #000;
  background-color: #ccc;
}
</style>
