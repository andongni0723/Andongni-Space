<script setup lang="ts">
import MainView from "@/components/WebPage/Main/MainView.vue";
import Nav from "@/components/WebPage/Common/Nav.vue";
import BigTitle from "@/components/WebPage/Common/BigTitle.vue";
import MainPageIntroProjectRight from "@/components/WebPage/Main/MainPageIntroProject-Right.vue";
import MainPageIntroProjectLeft from "@/components/WebPage/Main/MainPageIntroProject-Left.vue";
import More from "@/components/WebPage/Main/More.vue";
import Footer from "@/components/WebPage/Common/Footer.vue"
import crossingYAML from "@/assets/data/project-crossing.yaml";
import gunshootYAML from "@/assets/data/project-gunshoot.yaml";
import wingwarYAML from "@/assets/data/project-wingwar.yaml";
import cubemixerYAML from "@/assets/data/project-cubemixer.yaml"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {computed} from "vue";

interface yamlFile {
  index: string;
  title: string;
  imgSrc: string;
  intro: string;
}

// const crossingData = crossingYAML;
const crossingData: yamlFile = crossingYAML;
const gunshootData: yamlFile = gunshootYAML;
const wingwarData: yamlFile = wingwarYAML;
const cubemixerData: yamlFile = cubemixerYAML;
</script>

<template>
  <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css">
  <link rel="stylesheet" href="/main.css">
  <Nav/>
  <MainView/>
  <BigTitle/>
  <MainPageIntroProjectRight index="01" :title="cubemixerData.title" :img-src="cubemixerData.imgSrc" :intro="cubemixerData.intro"/>
  <MainPageIntroProjectLeft index="02" :title="crossingData.title" :img-src="crossingData.imgSrc" :intro="crossingData.intro"/>
  <MainPageIntroProjectRight index="03" :title="gunshootData.title" :img-src="gunshootData.imgSrc" :intro="gunshootData.intro"/>
  <MainPageIntroProjectLeft index="04" :title="wingwarData.title" :img-src="wingwarData.imgSrc" :intro="wingwarData.intro"/>
  <More/>
  <Footer/>
</template>

<style scoped>
body {
  background-color: black;
}
</style>
