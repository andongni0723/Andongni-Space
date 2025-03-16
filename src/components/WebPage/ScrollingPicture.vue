<script setup lang="ts">
import MainViewPicture from "@/components/WebPage/MainViewPicture.vue";

const imagePaths: string[] = [
  "/scrolling-img/scrolling4.webp",
  "/scrolling-img/scrolling5.webp",
  "/scrolling-img/scrolling3.webp",
  "/scrolling-img/scrolling8.webp",
  "/scrolling-img/scrolling10.webp",
  "/scrolling-img/scrolling2.webp",
  "/scrolling-img/scrolling1.webp",
  "/scrolling-img/scrolling11.webp",
  "/scrolling-img/scrolling7.webp",
  "/scrolling-img/scrolling9.webp",
  "/scrolling-img/scrolling12.webp",
  "/scrolling-img/scrolling6.webp",
];

const reverseIndexes = Array.from({ length: 12 }, (_, i) => 12 - i);
</script>

<template>
  <div class="flex flex-col absolute t-0 l-0">
    <div class="flex gap-10 py-5 animate-scrolling-right ">
      <MainViewPicture
          v-for="(path, index) in imagePaths"
          :key="index"
          :link="path"
      />
    </div>
    <div class="flex gap-10 py-5 pl-[120px] animate-scrolling-left">
      <MainViewPicture
          v-for="(path, index) in imagePaths"
          :key="index"
          :link="path"
      />
    </div>
    <div class="flex gap-10 py-5 pl-[90px] sm:pl-[120px] animate-scrolling-right">
      <MainViewPicture
          v-for="index in reverseIndexes"
          :key="index"
          :link="imagePaths[index - 1]" />
    </div>
  </div>
</template>
