<script setup lang="ts">
import MainViewPicture from "@/components/WebPage/MainViewPicture.vue";

interface ScrollingYAML {
  list: string[]
}

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
    <div class="flex gap-10">
      <MainViewPicture
          v-for="(path, index) in imagePaths"
          :key="index"
          :link="path"
      />
    </div>
    <div class="picture-wall left">
      <MainViewPicture
          v-for="(path, index) in imagePaths"
          :key="index"
          :link="path"
      />
    </div>
    <div class="picture-wall mid">
      <MainViewPicture
          v-for="index in reverseIndexes"
          :key="index"
          :link="imagePaths[index - 1]" />
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
}

.picture-wall {
  display: flex;
  gap: 10px;
  padding: 5px 0;
  animation: scrolling 90s linear infinite;
}
.left {
  padding-left: 120px;
  animation: scrolling-left 60s linear infinite;
}

.mid {
  padding-left: 120px;
}

@keyframes scrolling {
  0% {
    transform: translateX(-1300px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes scrolling-right {
  from { transform: translateX(-1300px); }
  to { transform: translateX(0); }
}

@keyframes scrolling-left {
  from { transform: translateX(-200px); }
  to { transform: translateX(-1300px); }
}

@media (max-width: 500px) {
  .mid {
    padding-left: 90px;
  }
}
</style>
