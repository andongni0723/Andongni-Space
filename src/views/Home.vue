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
import tankwarYAML from "../../public/data/view-tankwar.yaml";
import lexicardioYAML from "../../public/data/view-lexicardio.yaml";

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
const tankwarData: MainPageYAML = tankwarYAML;
const lexicardioData: MainPageYAML = lexicardioYAML;
</script>

<template>
  <MainView/>
  <BigTitle title="PROJECT" style=""/>
  <div class="w-screen flex flex-col items-center">
    <MainPageIntroProjectRight index="01" :title="lexicardioData.title" :img-src="lexicardioData.imgSrc" :intro="lexicardioData.intro" :link="lexicardioData.link" link-props="lexicardio/home"/>
    <MainPageIntroProjectLeft index="02" :title="tankwarData.title" :img-src="tankwarData.imgSrc" :intro="tankwarData.intro" :link="tankwarData.link" link-props="tankwar/home"/>
    <MainPageIntroProjectRight index="03" :title="crossingData.title" :img-src="crossingData.imgSrc" :intro="crossingData.intro" :link="crossingData.link" link-props="crossing/home"/>
    <MainPageIntroProjectLeft index="04" :title="gunshootData.title" :img-src="gunshootData.imgSrc" :intro="gunshootData.intro" :link="gunshootData.link" link-props="gunshoot/home"/>
  </div>

  <More/>
</template>

<style scoped>

</style>
