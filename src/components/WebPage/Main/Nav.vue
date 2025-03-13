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
<div class="fixed m-0 t-0 w-screen bg-transparent transition-colors duration-500 flex flex-col justify-between z-[1000]" :class="{'!bg-black': isScroll}">
  <div class="py-[1rem] px-30 sm:px-80 flex justify-around items-center">
    <div class="w-[50%]"><Logo/></div>
    <ResponsiveWatcher v-slot="rw">
      <!-- Normal Size Nav -->
      <div v-if="rw.width >= 600" class="w-[50%] flex justify-end items-center gap-16">
        <button @click="navigateTo('/about')" class="font-jetbrains text-lg text-white outline-0 bg-transparent no-underline">ABOUT</button>
        <button @click="navigateTo('/all-project')" class="font-jetbrains text-lg text-white outline-0 bg-transparent no-underline">PROJECT</button>
        <a href="https://www.facebook.com/profile.php?id=100015788080240" class="fa-brands fa-facebook fa-xl text-white"></a>
        <a href="https://space.bilibili.com/543329750" class="fa-brands fa-bilibili fa-xl text-white"></a>
        <a href="https://github.com/andongni0723" class="fa-brands fa-github fa-xl text-white"></a>
        <a href="mailto:0723@andongni.me" class="fa-solid fa-envelope fa-xl text-white"></a>
      </div>
      <!-- Mobile Size Nav-->
      <div v-else class="w-[50%] flex justify-end align-center gap-16">
        <a class="fa-solid fa-list fa-xl text-white" @click="listPanel"></a>
      </div>
    </ResponsiveWatcher>
  </div>
  <hr v-show="isScroll" class="text-white-main m-0">

  <!-- Right Nav Bar (Mobile)-->
  <div v-if="isShowPanel" class="fixed w-screen h-dvh bg-linear-to-r from-transparent to-black-dark to-80% backdrop-blur-sm transition animate-fade-in"  :class="isShowPanel? 'animate-fade-in' : 'animate-fade-out'">
    <div class="flex flex-col items-end gap-[50px] pt-30 pr-30">
      <a class="fa-solid fa-xmark fa-2xl text-white" @click="listPanel"></a>
      <router-link @click="listPanel" class="font-impact text-2xl tracking-wider text-white outline-0 bg-transparent no-underline" to="/about">ABOUT</router-link>
      <router-link @click="listPanel" class="font-impact text-2xl tracking-wider text-white outline-0 bg-transparent no-underline" to="/all-project" >Project</router-link>
      <div class="flex flex-col items-end gap-[50px] pr-5">
        <!--<Icon @click="listPanel" icon-src="fa-brands fa-facebook fa-xl" link="https://www.facebook.com/profile.php?id=100015788080240"/>-->
        <!--<Icon @click="listPanel" icon-src="fa-brands fa-bilibili fa-xl" link="https://space.bilibili.com/543329750"/>-->
        <!--<Icon @click="listPanel" icon-src="fa-brands fa-github fa-xl"   link="https://github.com/andongni0723"/>-->
        <!--<Icon icon-src="fa-solid fa-envelope fa-xl" link="mailto:0723@andongni.me"/>-->
        <a @click="listPanel" href="https://www.facebook.com/profile.php?id=100015788080240" class="fa-brands fa-facebook fa-xl text-white"></a>
        <a @click="listPanel" href="https://space.bilibili.com/543329750" class="fa-brands fa-bilibili fa-xl text-white"></a>
        <a @click="listPanel" href="https://github.com/andongni0723" class="fa-brands fa-github fa-xl text-white"></a>
        <a @click="listPanel" href="mailto:0723@andongni.me" class="fa-solid fa-envelope fa-xl text-white"></a>
      </div>
    </div>
  </div>
</div>
</template>
