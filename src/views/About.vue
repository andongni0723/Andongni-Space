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
  <div class="about">
    <BigTitle title="沈奕瑋" style="font-weight: 800;"/>
  </div>


</template>

<style scoped>
.about {
  padding-top: 100px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

</style>
