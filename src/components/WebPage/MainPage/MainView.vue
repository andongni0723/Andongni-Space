<script setup lang="ts">
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
import ScrollingPicture from "@/components/WebPage/ScrollingPicture.vue";
import {onMounted} from "vue";

onMounted(() => {
  const video = document.querySelector('.background-video') as HTMLVideoElement;
  if (video) {
    video.muted = true;
    video.play().catch((error: any) => {
      console.error('Video playback error:', error);
    });
  } else console.warn('Video element not found.');
});
</script>

<template>
<div class="relative h-[calc(100vh-3rem)] h-dvh overflow-hidden">

  <div class="absolute top-0 left-0 h-full w-screen overflow-hidden z-[-1]">
    <video autoplay muted loop playsinline class="background-video absolute top-0 left-0 w-screen h-full
           bg-black-dark opacity-50 object-cover z-[-1] filter saturate-0">
      <source src="https://r2.andongni.me/Andongni-space-main.webm" type="video/mp4">
      <source src="https://r2.andongni.me/Andongni-space-main-mp4.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <ResponsiveWatcher v-slot="rw">
    <div v-if="rw.width >= 750" class="absolute top-[8vh] p-80 pl-20 flex flex-col overflow-hidden z-[5]">
      <h1 class="font-impact text-4xl text-white-main pb-20 opacity-50">WELCOME TO</h1>
      <h1 class="font-impact text-nowrap lg:text-9xl max-lg:text-8xl text-white-main pb-20 opacity-50">ANDONGNI'S SPACE</h1>
    </div>
    <div v-else class="absolute top-[8vh] p-80 pl-20 flex flex-col overflow-hidden z-[5]">
      <h1 class="font-impact text-4xl text-white-main pb-20 opacity-50">WELCOME TO</h1>
      <h1 class="font-impact xs:text-8xl max-xs:text-7xl text-white-main pb-20 opacity-50">ANDONGNI'S</h1>
      <h1 class="font-impact xs:text-6xl max-sm:text-5xl text-white-main pb-20 opacity-50">SPACE</h1>
    </div>
  </ResponsiveWatcher>
  <ScrollingPicture class="mt-[50vh] opacity-80 hover:opacity-50 z-10 transition-opacity duration-300"/>
</div>
</template>
