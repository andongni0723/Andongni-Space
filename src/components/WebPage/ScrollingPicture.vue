<script setup lang="ts">
import MainViewPicture from "@/components/WebPage/MainViewPicture.vue";

interface ScrollingYAML {
  list: string[]
}

// const imagePaths: string[] = [
//   "https://r2.andongni.me/scrolling-img/scrolling4.png",
//   "https://r2.andongni.me/scrolling-img/scrolling5.png",
//   "https://r2.andongni.me/scrolling-img/scrolling3.png",
//   "https://r2.andongni.me/scrolling-img/scrolling8.png",
//   "https://r2.andongni.me/scrolling-img/scrolling10.png",
//   "https://r2.andongni.me/scrolling-img/scrolling2.png",
//   "https://r2.andongni.me/scrolling-img/scrolling1.png",
//   "https://r2.andongni.me/scrolling-img/scrolling11.png",
//   "https://r2.andongni.me/scrolling-img/scrolling7.png",
//   "https://r2.andongni.me/scrolling-img/scrolling9.png",
//   "https://r2.andongni.me/scrolling-img/scrolling12.png",
//   "https://r2.andongni.me/scrolling-img/scrolling6.png",
// ];

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




// const jsonString = JSON.stringify(scrollingPathData, null, 2);
// const parsedJson = JSON.parse(jsonString) as ScrollingYAML;
// const paths: string[] = parsedJson.list;
// const pathsRef = ref(paths);
const reverseIndexes = Array.from({ length: 12 }, (_, i) => 12 - i);
</script>

<template>
  <div class="about">
    <div class="picture-wall">
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

@keyframes scrolling-left {
  0% {
    transform: translateX(-200px)
  }

  100% {
    transform: translateX(-1300px);
  }
}

@media (max-width: 500px) {
  .mid {
    padding-left: 90px;
  }
}
</style>
