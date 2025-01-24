<script setup lang="ts">
// @ts-ignore
import Nav from "@/components/WebPage/Main/Nav.vue";
// @ts-ignore
import Footer from "@/components/WebPage/Main/Footer.vue";
import LoadingPanel from "@/components/WebPage/Main/LoadingPanel.vue";
// @ts-ignore
import {isFistLoadDone} from "@/components/WebPage/Main/Home.vue";
// @ts-ignore
import { isRouteLoading, isResourceFullyLoaded } from "/src/router/index.ts";
import {useRouter} from "vue-router";
import {ref, watch} from "vue";

const router = useRouter();

watch(isRouteLoading, (newValue) => {
  if (newValue) {
    // when route is loading
    console.log('路由開始加載')
  }
})

// listen to the resource loading status
watch(isResourceFullyLoaded, (newValue) => {
  if (newValue) {
    console.log('資源完全加載完成')
  }
})

</script>

<template>
  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css">
  <link rel="stylesheet" href="/src/assets/styles/main.css">
  <LoadingPanel :is-loading="!isResourceFullyLoaded"/>
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
