<template>
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#" @click="gohome">Api Mgmt. Sys.</a>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li v-if="userId==null"><a href="#" @click="signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li v-if="userId==null"><a href="#" @click="login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      <li v-if="userId!=null"><a href="#" @click="org"><span class="glyphicon glyphicon-user"></span> Organizations</a></li>
      <li v-if="userId!=null"><a href="#" @click="logout"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
      <li v-if="userId!=null"><a href="#"><span class="glyphicon glyphicon-user"></span> Hi !, {{userName}}</a></li>
    </ul>
  </div>
</nav>
</template>

<script src="./js/navbar.js"></script>

<style>

</style>
