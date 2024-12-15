<script setup lang="ts">
import Nav from "@/components/WebPage/Main/Nav.vue";
import Footer from "@/components/WebPage/Main/Footer.vue";
</script>

<template>
  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css">
  <link rel="stylesheet" href="/src/assets/styles/main.css">

  <Nav/>
  <transition name="fade-content" mode="out-in">
    <router-view />
  </transition>

  <Footer/>
</template>

<style scoped>

.fade-content-enter-active, .fade-content-leave-active {
  transition: opacity 0.3s ease;
}

.fade-content-enter-from, .fade-content-leave-to {
  opacity: 0;
}
</style>
