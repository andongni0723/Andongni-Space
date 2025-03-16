<script setup lang="ts">
import Logo from "@/Icon/AndongniGame-Icon.vue"
import Icon from "@/Icon/Icon.vue";
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
import {tailwindCSSIconPath} from "../../../../public/data/SvgPaths";
import {ref} from "vue";

</script>

<template>
  <div class="flex sm:flex-row flex-col flex-wrap bg-black justify-around align-center items-center py-[50px] gap1">
    <Logo class="max-sm:pb-20"/>
    <div class="flex flex-col justify-center items-center">
      <div class="font-jetbrains max-sm:text-xs text-white-main flex items-center gap-10">
        <p>Website made with</p>
        <a class="fa-brands fa-vuejs vue-icon text-[#4FC08D]" href="https://vuejs.org/"/>
        <a href="https://tailwindcss.com/">
          <svg role="img" viewBox="0 0 24 24" height="1.2em" xmlns="http://www.w3.org/2000/svg"><path :d="tailwindCSSIconPath" fill="#06B6D4"/></svg>
        </a>
      </div>
      <div class="mt-20 flex gap-5 items-center">
        <ResponsiveWatcher v-slot="rw">
          <div v-if="rw.width >= 640" class="flex gap-16">
            <i class="fa-brands fa-github fa-xl text-white"></i></div>
          <div v-else >
            <i class="fa-brands fa-github fa text-white"></i></div>
        </ResponsiveWatcher>
        <a class="font-jetbrains font-medium text-sm sm:text-lg text-white-main underline" href="https://github.com/andongni0723/Andongni-Space" target="_blank" rel="noopener noreferrer">andongni0723/Andongni-Space</a>
      </div>
    </div>
    <ResponsiveWatcher v-slot="rw">
      <div v-if="rw.width >= 640" class="flex items-center gap-16">
        <a href="https://www.facebook.com/profile.php?id=100015788080240" class="fa-brands fa-facebook fa-xl text-white"></a>
        <a href="https://space.bilibili.com/543329750" class="fa-brands fa-bilibili fa-xl text-white"></a>
        <a href="https://github.com/andongni0723" class="fa-brands fa-github fa-xl text-white"></a>
      </div>
    </ResponsiveWatcher>
  </div>
</template>
