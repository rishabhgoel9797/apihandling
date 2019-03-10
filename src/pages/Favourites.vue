<template>
  <div class="container">
    {{initilization}}
    <h3>Click on End Point to make it Favourite<i class="fa fa-star favourite-star" aria-hidden="true"></i></h3>
      <button type="button" class="btn btn-primary pull-right" @click="subscribeFunc()">Subscribe</button>
     <div id="favourite"></div>
     <div class="list" v-if="getFavouriteList.length>0">
       <h3>Already Subscribed Attributes </h3><small><b>*(Click to unsubscribe)*</b></small>
       <ul>
         <div v-for="list in getFavouriteList" :key="list.responseId"><a href="#" v-if="list.endPointId===$route.params.endpointId" @click="unsubscribeFav(list.attributePath)">{{list.attributePath}}</a></div>
       </ul>
     </div>
     <div id="points">
     </div>
  </div>
</template>

<script src="./js/favourites.js"></script>

<style>
.container {
  max-width:900px;
  margin: 0 auto;
  margin-top: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
#points {
  margin-top: 20px;
}
li {
  font-size: 20px;
  color: green;
  font-style: italic
}
.tag {
  background-color: #0080FF;
  padding: 10px;
  border-radius: 2px;
  color: white;
  margin-bottom: 40px;
}
.favourite-star {
  margin-left: 10px;
  color: orange;
}
</style>
