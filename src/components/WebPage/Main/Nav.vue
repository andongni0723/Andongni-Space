<script setup lang="ts">
import Logo from '../../../Icon/AndongniGame-Icon.vue';
import Icon from "@/Icon/Icon.vue"
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {useRouter} from "vue-router";

const isScroll = ref(false);
const router = useRouter();

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


//------- Mobile Nav Panel
const isShowPanel = ref(false);
const listPanel = () =>
{
  isShowPanel.value = !isShowPanel.value;
};

// ------- Handle fade-out and navigation
const isFading = ref(false); // 控制淡出動畫
const navigateTo = (path: string) => {
  isFading.value = true; // 觸發淡出動畫
  setTimeout(() => {
    router.push(path); // 動畫完成後跳轉
    isFading.value = false; // 重置狀態
  }, 500); // 時間與淡出動畫的時長一致
};
</script>

<template>
<div class="nav" :class="{'scroll': isScroll}">
  <div v-if="isFading" class="fade-overlay"></div>

  <div class="nav-item">
    <div class="logo"><Logo/></div>
    <ResponsiveWatcher v-slot="rw">

      <div v-if="rw.width >= 600" class="right-side">
        <button @click="navigateTo('/about')" class="nav-button">ABOUT</button>
        <button @click="navigateTo('/all-project')" class="nav-button">PROJECT</button>
        <Icon icon-src="fa-brands fa-facebook fa-xl" link="https://www.facebook.com/profile.php?id=100015788080240"/>
        <Icon icon-src="fa-brands fa-bilibili fa-xl" link="https://space.bilibili.com/543329750"/>
        <Icon icon-src="fa-brands fa-github fa-xl"   link="https://github.com/andongni0723"/>
        <Icon icon-src="fa-solid fa-envelope fa-xl" link="mailto:0723@andongni.me"/>
      </div>

      <div v-else class="right-side">
        <!--<Icon icon-src="fa-solid fa-list fa-xl" link=""/>-->
        <a class="fa-solid fa-list fa-xl " @click="listPanel" style="color: #ffffff;"></a>
      </div>
    </ResponsiveWatcher>
  </div>
  <hr v-show="isScroll" class="line">

  <div v-if="isShowPanel" class="panel"  :class="{'fade-in': isShowPanel, 'fade-out': !isShowPanel}">
    <div class="panel-item">
      <a class="fa-solid fa-xmark fa-2xl" @click="listPanel" style="color: #ffffff;"></a>
      <router-link @click="listPanel" to="/about" class="nav-button panel-text" >ABOUT</router-link>
      <router-link @click="listPanel" to="/all-project" class="nav-button panel-text">Project</router-link>
      <div class="panel-icon">
        <Icon @click="listPanel" icon-src="fa-brands fa-facebook fa-xl" link="https://www.facebook.com/profile.php?id=100015788080240"/>
        <Icon @click="listPanel" icon-src="fa-brands fa-bilibili fa-xl" link="https://space.bilibili.com/543329750"/>
        <Icon @click="listPanel" icon-src="fa-brands fa-github fa-xl"   link="https://github.com/andongni0723"/>
        <Icon icon-src="fa-solid fa-envelope fa-xl" link="mailto:0723@andongni.me"/>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.nav {
  position: fixed;
  margin: 0;
  top: 0;
  width: 100vw;
  background-color: transparent;
  transition: background-color 0.5s ease;
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
  font-family:"JetBrains Mono NL",serif;
  font-size: 1.1rem;
  //font-weight: normal ;
  //margin: 0 20px 0 20px;
  color: white;
  outline: none;
  background-color: transparent;
  text-decoration: none;
  border: none;
}

.line {
  color: var(--main-white-color);
  margin: 0;
}

.panel {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, transparent,var(--main-drak-black-color) 50%);
  //animation: show-in 0.3s ease;
  //animation:  show-out 0.3s ease;
}


.panel-item
{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 50px;
  padding: 30px 20px 0 0;

}

.panel-text {
  font-family: "Impact", "JetBrains Mono NL", "bai jamjuree", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.05em;

}

.panel-icon {
  display: flex;
  gap: 0.8rem;
}

.fade-in {
  animation: fade-in-a 0.5s ease;
}

.fade-out {
  animation: fade-out-a 0.5s ease;
}


.fade-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0;
  animation: fadeOut 0.3s forwards;
  z-index: 999;
}

@keyframes fadeOut {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-a {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
@keyframes fade-out-a {
  0% {opacity: 1;}
  100% {opacity: 0;}
}

@media (max-width: 600px) {
  .nav-item {
    padding: 1rem 20px;
  }
}
</style>
