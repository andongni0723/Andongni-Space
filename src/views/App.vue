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
    // 路由开始加载时，可以执行一些初始化操作
    console.log('路由开始加载')
  }
})

// 监听资源完全加载状态
watch(isResourceFullyLoaded, (newValue) => {
  if (newValue) {
    console.log('资源已完全加载')
    // 可以在这里执行一些资源加载完成后的操作
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
