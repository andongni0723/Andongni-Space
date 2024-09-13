<script setup lang="ts">
import Logo from '../../../Icon/AndongniGame-Icon.vue';
import Icon from "@/Icon/Icon.vue"
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
import {onMounted, onUnmounted, ref} from "vue";

const isScroll = ref(false);

const handleScroll = () =>
{
  isScroll.value = window.scrollY > 50;
}

onMounted(() =>
{
  window.addEventListener('scroll', handleScroll);
})

onUnmounted(() =>
{
  window.removeEventListener('scroll', handleScroll);
})
</script>

<template>
<div class="nav" :class="{'scroll': isScroll}">
  <div class="nav-item">
    <div class="logo"><Logo/></div>
    <ResponsiveWatcher v-slot="rw">
      <div v-if="rw.less600" class="right-side">
        <Icon icon-src="fa-solid fa-list fa-xl" link=""/>
      </div>
      <div v-else class="right-side">
        <!--<a class="nav-button" href="">ABOUT</a>-->
        <router-link to="/about" class="nav-button">ABOUT</router-link>
        <!--<a class="nav-button" href="">PROJECTS</a>-->
        <router-link to="/project" class="nav-button">Project</router-link>

        <Icon icon-src="fa-brands fa-facebook fa-xl" link="https://www.facebook.com/profile.php?id=100015788080240"/>
        <Icon icon-src="fa-brands fa-bilibili fa-xl" link="https://space.bilibili.com/543329750"/>
        <Icon icon-src="fa-brands fa-github fa-xl"   link="https://github.com/andongni0723"/>
      </div>
    </ResponsiveWatcher>
  </div>
  <hr v-show="isScroll" class="line">
</div>
</template>

<style scoped>
.nav {
  position: fixed;
  margin: 0;
  top: 0;
  width: 100vw;
  background-color: transparent;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  z-index: 1000;
}

.nav.scroll
{
  background-color: black;
}

.nav-item {
  //margin-top: 1vh;
  padding: 1rem 80px;

  display: flex;
  justify-content: space-around;
  align-content: center;
}

h1 {
  margin: 0;
  padding: 0;
}

.logo {
  //margin-right: 50%;
  width: 50%;
}
.right-side {
  width: 50%;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 1rem;
}

.nav-button {
  font-family: "JetBrains Mono NL",serif;
  font-size: 1.1rem;
  font-weight: 500;
  //margin: 0 20px 0 20px;
  color: white;
  outline: none;
  text-decoration: none;
}

.line {
  color: var(--main-white-color);
  margin: 0;
}

@media (max-width: 600px) {
  .nav-item {
    padding: 1rem 20px;
  }
}
</style>
