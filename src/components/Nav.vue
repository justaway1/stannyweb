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

<style scoped></style>
