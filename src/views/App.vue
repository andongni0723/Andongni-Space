<script setup lang="ts">
import Nav from "@/components/WebPage/Main/Nav.vue";
</script>

<template>
  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css">
  <link rel="stylesheet" href="/src/assets/styles/main.css">
  <Nav/>
  <router-view/>
</template>

<style scoped>
body {
  background-color: black;
}
</style>
