<script setup>
import { RouterView } from "vue-router";
import Home from "./views/Home.vue";
import Nav from "./components/Nav.vue";
</script>

<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  overflow: hidden;
}
</style>
