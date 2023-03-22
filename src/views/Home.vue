<script setup>
import Nav from "../components/Nav.vue";
import image from "../assets/images.png";
</script>

<template>
  <div class="left_content">
    <div class="profile_image">
      <img :src="image" alt="profile" />
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
  width: 50vw;
  background-color: rgba(19, 133, 226, 0.888);
  display: flex;
  justify-content: center;
  align-items: center;
}

.right_content {
  height: 100vh;
  width: 50vw;
  background-color: rgba(202, 41, 41, 0.856);
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile_image {
  margin-right: 50px;
}

.box_content {
  width: 700px;
  height: 500px;
  background-color: white;
  box-shadow: -10px 1px 1px rgba(0, 0, 0, 0.299);
  border-radius: 10px;
}
</style>
