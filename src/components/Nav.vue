<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <nav>
      <ul>
        <RouterLink active-class="active" to="/">ABOUT</RouterLink>
        <RouterLink active-class="active" to="/projects">PROJECTS</RouterLink>
        <RouterLink active-class="active" to="/contact">CONTACT</RouterLink>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.active {
  background-color: var(--background);
  color: white;
  padding: 10px;
  border-radius: 5px;
}

nav {
  box-shadow: 0px 2px 10px rgba(110, 106, 106, 0.686);
}

ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

a {
  color: black;
  font-size: 3rem;
  color: var(--textColor);
}

li {
  list-style-type: none;
}
</style>
