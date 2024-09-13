<script setup lang="ts">
import MainViewPicture from "@/components/WebPage/MainViewPicture.vue";

interface ScrollingYAML {
  list: string[]
}

const imagePaths: string[] = [
  "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling4.png",
  "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling5.png",
  "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling3.png",
  "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling8.png",
  "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling10.png",
  "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling2.png",
  "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling1.png",
  "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling11.png",
  "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling7.png",
  "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling9.png",
  "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling12.png",
  "https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/scrolling-img/scrolling6.png"
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
