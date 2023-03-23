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
    <div class="contact_info">
      <code>stannyweb@gmail.com</code>
    </div>
  </div>
  <div class="right_content">
    <div class="box_content">
      <Nav />
      <div class="social_media">
        <div class="icon">
          <a href="https://www.linkedin.com/in/stan-angelov/" target="_blank">
            <font-awesome-icon
              icon="fa-brands fa-linkedin"
              fade
              size="10x"
              style="color: #5139ec"
            />
          </a>
        </div>
        <div class="icon">
          <a href="https://github.com/justaway1" target="_blank">
            <font-awesome-icon
              icon="fa-brands fa-github"
              fade
              size="10x"
              style="color: #5139ec"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.social_media {
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: rgba(53, 52, 52, 0.095);
  width: 80%;
  border-radius: 5px;
}

.icon {
  margin-left: 50px;
}
</style>
