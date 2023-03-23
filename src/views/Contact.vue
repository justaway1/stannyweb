<script setup>
import Nav from "../components/Nav.vue";
import image from "../assets/profile.png";
import logo from "../assets/logo.png";
</script>

<template>
  <div class="left_content">
    <img :src="logo" alt="logo" class="logo_brand" />
    <div class="profile_image">
      <img :src="image" alt="profile" class="myImage" />
    </div>
  </div>
  <div class="right_content">
    <div class="box_content">
      <Nav />
      <h1>CONTACT ME BELOW!</h1>
    </div>
  </div>
</template>

<style scoped></style>
