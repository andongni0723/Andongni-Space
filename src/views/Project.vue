<script setup lang="ts">
import BigTitle from "@/components/WebPage/Main/BigTitle.vue";
import ScrollingPicture from "@/components/WebPage/ScrollingPicture.vue";
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
import Button from "@/components/WebPage/Main/Button.vue";
import {decodeBase64} from "../components/Func/base64"
import {load} from "js-yaml"
import {useRoute, useRouter} from "vue-router";
import {crossingData, ProjectData} from "../../public/data/ProjectDataManager";

// const indexArray = Array.from({ length: 5 }, (_, i) => i);
interface Props
{
  dataID: string // YAML src
}


const router = useRouter()

const props: Props = defineProps<Props>();
let data: ProjectData;


console.log(props.dataID)
switch (props.dataID)
{
  case "crossing":
    data = crossingData;
}
</script>

<template>
<div class="project">
  <ResponsiveWatcher v-slot="rw">
    <BigTitle v-if="rw.less600" :title="data.projectName" style="font-style: normal"/>
    <BigTitle v-else :title="data.projectName" style="font-style: normal; padding-left: 2%;"/>
  </ResponsiveWatcher>

  <div class="intro">
    <div class="description">
      <p class="small-title">描述</p>
      <p class="small-text">{{data.description}}</p>
    </div>
    <ResponsiveWatcher v-slot="rw">
      <hr v-if="rw.less600" class="short-line">
      <hr v-else class="vertical">
    </ResponsiveWatcher>
    <div class="type-and-date-flex">
      <div class="type-and-date">
        <p class="small-title">類型</p>
        <p class="small-text">{{data.type}}</p>
      </div>
      <div class="type-and-date">
        <p class="small-title">製作日期</p>
        <p class="small-text">{{data.madeData}}</p>
      </div>
    </div>
  </div>

  <ResponsiveWatcher v-slot="rw">
    <hr v-if="rw.less600" class="short-line">
    <hr v-else class="line">
  </ResponsiveWatcher>

  <div class="project-picture-grid">
    <img v-for="(path, index) in data.projectImg" class="project-picture" :src="path" :key="index" alt="" >
  </div>

  <ResponsiveWatcher v-slot="rw">
    <BigTitle v-if="rw.less600" title="學習歴程" style="font-style: italic; font-family: 'bai jamjuree', 'JetBrains Mono NL', sans-serif; font-weight: 600;"/>
    <BigTitle v-else title="學習歴程" style="font-style: italic; font-family: 'bai jamjuree', 'JetBrains Mono NL', sans-serif; font-weight: 600;
                                            padding-left: 2%;"/>
  </ResponsiveWatcher>

  <div class="project-study-flex">
    <img v-for="(path, index) in data.projectStudyImg" class="project-picture" :src="path" :key="index" alt="" >
  </div>

  <Button style="" link="/" text="返回" link-props=""/>
</div>
</template>

<style scoped>
.project {
  padding-top: 100px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.intro {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}

.project-picture-grid
{
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 2%;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.project-picture {
  width: 92%;
  //max-width: 300px;
  height: auto;
  margin: 4%;
  border-radius: 20px;
}

.project-study-flex {
  display: flex;
  flex-direction: column;
  padding: 2%;
}

.description{
  display: flex;
  flex-direction: column;
  width: 30%;
  max-width: 300px;
  padding: 0 11%;
}

.type-and-date-flex
{
  display: flex;
  flex-direction: column;
  width: 30%;
  max-width: 300px;
  padding: 0 11%;
  gap: 45px;
}

.small-title {
  font-family: "bai jamjuree", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--main-white-color);
  padding-bottom: 20px;
}

.small-text {
  font-family: "bai jamjuree", sans-serif;
  color: var(--main-white-color);
  font-weight: 300;
  letter-spacing: 0.375pt;
  font-size: 0.8rem;
  line-height: 1.3;
}

.line {
  color: white;
  width: 100vw;
  margin: 0;
}

.short-line {
  max-width: 500px;
  width: 80%;
}

.vertical {
  height: 200px;
  width: 0.2vw;
  color: var(--main-white-color);
  margin: 0;
  border-width:0;
  background-color: var(--main-white-color);
}

@media (max-width: 600px) {
  .intro {
    flex-direction: column;
    padding: 0;
  }

  .description {
    padding: 10% 0;
    width: 80%;
    max-width: 500px;
  }

  .type-and-date-flex {
    padding: 10% 0;
    width: 80%;
    max-width: 500px;
  }

  .project-picture-grid
  {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }

  .project-picture {
    border-radius: 10px;
  }

  .project-study-flex {
    padding: 5%;
  }
}
</style>
