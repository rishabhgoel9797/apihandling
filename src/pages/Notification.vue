<template>
  <div class="container">
    <div class="notification_container" v-for="notification in getAllNotifications" :key="notification.notifyId">
      <div class="notification alert alert-info hover">
        <span class="notification_type">{{notification.notificationType}}</span>{{notification.notifyMessage}}
      </div>
    </div>
  </div>
</template>

<script src="./js/user-notification.js"></script>

<style>
.container {
  margin-top: 40px;
}
.projectName {
  color: #039be5;
  font-size: 40px;
}
.notification {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
}
.notification_type {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
}
.hover {
  cursor: pointer;
}
</style>
