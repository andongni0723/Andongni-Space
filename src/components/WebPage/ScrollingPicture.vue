<script setup lang="ts">
import MainViewPicture from "@/components/WebPage/MainViewPicture.vue";

const scrollingImagePaths: string[] = [
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

const projectHighlightPaths: string[] = [
  "/main-page-img/snapledger.webp",
  "/main-page-img/lexicardio.webp",
  "/main-page-img/tankwar.webp",
  "/main-page-img/crossing.webp",
  "/main-page-img/gunshoot.webp",
  "/main-page-img/cubemixer.webp",
  "/main-page-img/wingwar.webp",
];

const rowOnePaths: string[] = [
  ...scrollingImagePaths.slice(0, 6),
  ...projectHighlightPaths.slice(0, 3),
  ...scrollingImagePaths.slice(6, 9),
];

const rowTwoPaths: string[] = [
  ...projectHighlightPaths.slice(3),
  ...scrollingImagePaths.slice(9),
  ...scrollingImagePaths.slice(2, 7),
  ...projectHighlightPaths.slice(0, 2),
];

const rowThreePaths: string[] = [
  ...scrollingImagePaths.slice().reverse().slice(0, 5),
  ...projectHighlightPaths.slice().reverse(),
  ...scrollingImagePaths.slice(1, 7),
];

const rowFourPaths: string[] = [
  ...projectHighlightPaths,
  ...scrollingImagePaths.slice(4, 10),
  ...projectHighlightPaths.slice(1, 5),
];
</script>

<template>
  <div class="flex flex-col absolute t-0 l-0">
    <div class="flex gap-[10px] py-[5px] animate-scrolling-right">
      <MainViewPicture
          v-for="(path, index) in rowOnePaths"
          :key="`row-one-${index}`"
          :link="path"
      />
    </div>
    <div class="flex gap-[10px] py-[5px] pl-[120px] animate-scrolling-left">
      <MainViewPicture
          v-for="(path, index) in rowTwoPaths"
          :key="`row-two-${index}`"
          :link="path"
      />
    </div>
    <div class="flex gap-[10px] py-[5px] pl-[90px] sm:pl-[120px] animate-scrolling-right">
      <MainViewPicture
          v-for="(path, index) in rowThreePaths"
          :key="`row-three-${index}`"
          :link="path"
      />
    </div>
    <div class="flex gap-[10px] py-[5px] pl-[40px] sm:pl-[80px] animate-scrolling-left">
      <MainViewPicture
          v-for="(path, index) in rowFourPaths"
          :key="`row-four-${index}`"
          :link="path"
      />
    </div>
  </div>
</template>
