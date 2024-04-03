<template>
  <nav class="navbar">
    <router-link to="/contactlist" class="nav-link">Contact List</router-link>
    <router-link to="/registrationform" class="nav-link">Registration Form</router-link>
    <router-link to="/quizzform" class="nav-link">Quizz Form</router-link>
    <router-link to="/editablestyle" class="nav-link">Editable style</router-link>
    <router-link to="/hookcomponent" class="nav-link">Hook Component</router-link>
    <router-link to="/tasklist" class="nav-link">Task List</router-link>
    <router-link to="/productlistparent" class="nav-link">Product List Parent</router-link>
    <router-link to="/barnavigation" class="nav-link">Bar de navigation</router-link>
  </nav>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 10px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
