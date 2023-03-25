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
      <div class="about_me">
        <p>
          <span>Hi</span> there! My name is <span>Stan</span>, and I'm a
          <span>passionate</span> web developer with some years of experience in
          the field. I have a <span>strong</span> foundation in web development
          technologies, including HTML5, CSS3, JavaScript, and various web
          frameworks like React and Vue.js.
        </p>
        <p>
          I have worked on various web development projects, ranging from
          <span>simple</span> landing pages to <span>complex</span> web
          applications, and I <span>enjoy</span> the process of taking a concept
          and turning it into a functional and beautiful website that meets the
          client's needs.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
<<<<<<< HEAD
.about_me {
  background-color: var(--background);
  padding: 30px;
  width: 70%;
  margin: 50px auto;
  border-radius: 5px;
  color: white;
  font-size: 1.9rem;
  border-left: 10px solid var(--secondary);
  box-shadow: -5px 1px 0 rgba(0, 0, 0, 0.204);
  text-align: left;
}

.about_me p:first-of-type {
  margin-bottom: 20px;
}

p span {
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: bold;
=======
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
>>>>>>> 97be8fc (Updates)
}
</style>
