<script setup lang="ts">
import MainPageIntroProjectRight from "@/components/WebPage/MainPage/MainPageIntroProject-Right.vue";
import MainPageIntroProjectLeft from "@/components/WebPage/MainPage/MainPageIntroProject-Left.vue";
import BigTitle from "@/components/WebPage/Main/BigTitle.vue";
import MainView from "@/components/WebPage/MainPage/MainView.vue";
import More from "@/components/WebPage/MainPage/More.vue";

import crossingYAML from "../../public/data/view-crossing.yaml";
import gunshootYAML from "../../public/data/view-gunshoot.yaml";
import wingwarYAML from "../../public/data/view-wingwar.yaml";
import cubemixerYAML from "../../public/data/view-cubemixer.yaml";

import projectCrossingYAML from "../../public/data/project-crossing.yaml";
import LoadingPanel from "@/components/WebPage/Main/LoadingPanel.vue";
import {ref} from "vue";
interface MainPageYAML {
  index: string;
  title: string;
  imgSrc: string;
  intro: string;
  link: string;
}

const crossingData: MainPageYAML = crossingYAML;
const gunshootData: MainPageYAML = gunshootYAML;
const wingwarData: MainPageYAML = wingwarYAML;
const cubemixerData: MainPageYAML = cubemixerYAML;
</script>

<template>
  <MainView/>
  <BigTitle title="PROJECT" style=""/>
  <MainPageIntroProjectRight index="01" :title="cubemixerData.title" :img-src="cubemixerData.imgSrc" :intro="cubemixerData.intro" :link="cubemixerData.link" link-props="cubemixer/home"/>
  <MainPageIntroProjectLeft index="02" :title="crossingData.title" :img-src="crossingData.imgSrc" :intro="crossingData.intro" :link="crossingData.link" link-props="crossing/home"/>
  <MainPageIntroProjectRight index="03" :title="gunshootData.title" :img-src="gunshootData.imgSrc" :intro="gunshootData.intro" :link="gunshootData.link" link-props="gunshoot/home"/>
  <MainPageIntroProjectLeft index="04" :title="wingwarData.title" :img-src="wingwarData.imgSrc" :intro="wingwarData.intro" :link="wingwarData.link" link-props="wingwar/home"/>
  <More/>
</template>

<style scoped>

</style>
