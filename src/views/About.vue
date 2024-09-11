<script setup lang="ts">
import Nav from "@/components/WebPage/Main/Nav.vue";
import BigTitle from "@/components/WebPage/Main/BigTitle.vue";
import MainViewPicture from "@/components/WebPage/MainViewPicture.vue";
import scrollingPathData from '../assets/data/scrolling-path.yaml'
import yamljs from 'js-yaml'
import {ref} from "vue";
import ScrollingPicture from "@/components/WebPage/ScrollingPicture.vue";

interface ScrollingYAML {
  list: string[]
}

const jsonString = JSON.stringify(scrollingPathData, null, 2);
const parsedJson = JSON.parse(jsonString) as ScrollingYAML;
const paths: string[] = parsedJson.list;
const pathsRef = ref(paths);
const reverseIndexes = Array.from({ length: 12 }, (_, i) => 12 - i);
</script>

<template>
  <div class="scrolling-picture">
    <BigTitle title="沈奕瑋"/>
  </div>
</template>

<style scoped>
.scrolling-picture {
  //background-color: #360053;
  overflow: hidden;
}

.picture-wall {
  display: flex;
  gap: 10px;
  padding: 5px 0;
  animation: scrolling 30s linear infinite;
  //width: 1300px;
}
.left {
  padding-left: 120px;
  animation: scrolling-left 30s linear infinite;
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
    transform: translateX(0)
  }

  100% {
    transform: translateX(-1300px);
  }
}
</style>
