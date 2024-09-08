<script setup lang="ts">
import Logo from '../../../Icon/AndongniGame-Icon.vue';
import Icon from "@/Icon/Icon.vue"
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
</script>

<template>
<div class="nav">
  <div class="nav-item">
    <div class="logo"><Logo/></div>
    <ResponsiveWatcher v-slot="{isMobile}">
      <div v-if="isMobile" class="right-side">
        <Icon icon-src="fa-solid fa-list fa-2xl" link=""/>
      </div>
      <div v-else class="right-side">
        <!--<a class="nav-button" href="">ABOUT</a>-->
        <router-link to="/about" class="nav-button">ABOUT</router-link>
        <a class="nav-button" href="">PROJECTS</a>
        <Icon icon-src="fa-brands fa-facebook fa-2xl" link="https://www.facebook.com/profile.php?id=100015788080240"/>
        <Icon icon-src="fa-brands fa-bilibili fa-2xl" link="https://space.bilibili.com/543329750"/>
        <Icon icon-src="fa-brands fa-github fa-2xl"   link="https://github.com/andongni0723"/>
      </div>
    </ResponsiveWatcher>
  </div>
  <hr class="line">
</div>
</template>

<style scoped>
.nav {
  position: sticky;
  margin: 0;
  top: 0;
  max-width: 100vw;
  height: 15vh;
  background-color: black;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-item {
  //margin-top: 1vh;
  padding: 35px 35px 0 35px;

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
  font-size: 1.3rem;
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
</style>
