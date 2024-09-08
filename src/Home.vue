<script setup lang="ts">
import Footer from "@/components/WebPage/Common/Footer.vue";
import MainPageIntroProjectRight from "@/components/WebPage/Main/MainPageIntroProject-Right.vue";
import MainPageIntroProjectLeft from "@/components/WebPage/Main/MainPageIntroProject-Left.vue";
import BigTitle from "@/components/WebPage/Common/BigTitle.vue";
import MainView from "@/components/WebPage/Main/MainView.vue";
import More from "@/components/WebPage/Main/More.vue";

import crossingYAML from "@/assets/data/project-crossing.yaml";
import gunshootYAML from "@/assets/data/project-gunshoot.yaml";
import wingwarYAML from "@/assets/data/project-wingwar.yaml";
import cubemixerYAML from "@/assets/data/project-cubemixer.yaml"
interface yamlFile {
  index: string;
  title: string;
  imgSrc: string;
  intro: string;
  link: string;
}

const crossingData: yamlFile = crossingYAML;
const gunshootData: yamlFile = gunshootYAML;
const wingwarData: yamlFile = wingwarYAML;
const cubemixerData: yamlFile = cubemixerYAML;
</script>

<template>
  <MainView/>
  <BigTitle title="PROJECT"/>
  <MainPageIntroProjectRight index="01" :title="cubemixerData.title" :img-src="cubemixerData.imgSrc" :intro="cubemixerData.intro" :link="cubemixerData.link"/>
  <MainPageIntroProjectLeft index="02" :title="crossingData.title" :img-src="crossingData.imgSrc" :intro="crossingData.intro" :link="crossingData.link"/>
  <MainPageIntroProjectRight index="03" :title="gunshootData.title" :img-src="gunshootData.imgSrc" :intro="gunshootData.intro" :link="gunshootData.link"/>
  <MainPageIntroProjectLeft index="04" :title="wingwarData.title" :img-src="wingwarData.imgSrc" :intro="wingwarData.intro" :link="wingwarData.link"/>
  <More/>
  <Footer/>
</template>

<style scoped>

</style>
