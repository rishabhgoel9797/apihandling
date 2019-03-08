<template>
  <div class="container">
    <div class="panel panel-success">
      <div class="panel-heading">Login</div>
      <div class="panel-body">
        <form class="form-horizontal">
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Email:</label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                v-model="emailId"
              >
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="pwd">Password:</label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pwd"
                v-model="password"
              >
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button @click="login" type="button" class="btn btn-success">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./js/login.js"></script>

<style>
.container {
  margin-top: 100px;
}
</style>
