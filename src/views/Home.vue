<script setup>
import Nav from "../components/Nav.vue";
import image from "../assets/profile.png";
</script>

<template>
  <div class="left_content">
    <div class="profile_image">
      <img :src="image" alt="profile" class="myImage" />
    </div>
  </div>
  <div class="right_content">
    <div class="box_content">
      <Nav />
    </div>
  </div>
</template>

<style scoped>
.left_content {
  height: 100vh;
  width: 33vw;
  background-color: rgba(248, 249, 250, 0.888);
  display: flex;
  justify-content: center;
  align-items: center;
}

.right_content {
  height: 100vh;
  width: 70vw;
  background-color: rgba(202, 41, 41, 0.856);
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile_image {
  padding: 50px;
}

.myImage {
  background-color: rgba(156, 144, 144, 0.323);
  border-radius: 5px;
}

.box_content {
  width: 800px;
  height: 500px;
  background-color: white;
  box-shadow: -10px 1px 1px rgba(0, 0, 0, 0.299);
  border-radius: 10px;
}
</style>
