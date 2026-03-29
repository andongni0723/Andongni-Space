<script setup lang="ts">
import BigTitle from "@/components/WebPage/Main/BigTitle.vue";
import {AllSkillDataList, ExperienceEventDataList, SpecialEventDataList} from "../../public/data/AboutDataManager";
import FadeInObserver from "@/components/Func/FadeInObserver.vue";

const skillTypeColors = ["#7dd3fc", "#f9a8d4", "#fcd34d", "#86efac"];

const getSkillTypeColor = (index: number): string => {
  return skillTypeColors[index % skillTypeColors.length];
};

const getSkillTypeDotStyle = (index: number): { backgroundColor: string; boxShadow: string } => {
  const color = getSkillTypeColor(index);

  return {
    backgroundColor: color,
    boxShadow: `0 0 18px ${color}`
  };
};
</script>

<template>
  <div class="pt-[100px] overflow-hidden w-full h-full bg-black-dark">
    <BigTitle title="ABOUT ME" class="overflow-hidden"/>

    <FadeInObserver>
      <div
          class="flex max-md:flex-row-reverse flex-nowrap md:justify-between justify-around  items-center py-[5%] px-[8%] h-[40%]">
        <div class="flex flex-col md:w-[40%] w-[60%] md:max-w-[500px] max-w-[200px] gap-32">
          <p class="small-title">個人簡介</p>
          <p class="small-text">我是沈奕瑋 (Andongni)，目前就讀於中原大學資工系。擁有深厚的遊戲開發底子，並持續將技術觸角延伸至全端開發、AIoT
            與深度學習領域。過去累積了豐富的獨立開發經驗，近期則積極投入團隊協作，享受與團隊共同打磨產品架構並解決實際問題的過程。平時做事重視邏輯與條理規劃，熱衷於探索新技術並將其落地應用。</p>
        </div>
        <img src="/logo.png" alt="my-photo"
             class="w-[30%] max-w-[300px] rounded-2xl brightness-50 border-2 border-solid border-black-light">

      </div>
    </FadeInObserver>

    <hr class="text-white-main mx-[8%]">

    <div class="flex flex-col flex-nowrap items-start pt-0 px-[8%] pb-[5%]">
      <div class="event-description">
        <p class="small-title">特殊事蹟</p>
        <div class="flex justify-between flex-wrap items-center"
             v-for="(data, index) in SpecialEventDataList">
          <FadeInObserver>
            <div ref="fadeText" :key="index" class="name small-text fade-in ">{{ data.title }}</div>
          </FadeInObserver>
          <FadeInObserver>
            <div ref="fadeText" :key="index" class="result small-text bold fade-in">{{ data.result }}</div>
          </FadeInObserver>
        </div>
        <div style="height: 50px"></div>
        <p class="small-title">經歷</p>
        <div class="flex justify-between flex-wrap items-center"
             v-for="(data, index) in ExperienceEventDataList">
          <FadeInObserver>
            <div :key="index" class="name small-text"><p>{{ data.title }}</p></div>
          </FadeInObserver>
          <FadeInObserver>
            <div :key="index" class="result small-text bold"><p>{{ data.result }}</p></div>
          </FadeInObserver>
        </div>
      </div>
      <hr class="w-full  text-white-main">
      <div class="event-description">
        <p class="small-title">技能</p>
        <FadeInObserver v-for="(dataList, index) in AllSkillDataList" :key="dataList.groupName">
          <div class="skill-group">
            <div class="skill-group-header">
              <span class="skill-type-dot" :style="getSkillTypeDotStyle(index)"></span>
              <p class="small-title !pb-0">{{ dataList.groupName }}</p>
            </div>
            <div class="skill-chip-list">
              <div
                  v-for="(data, skillIndex) in dataList.skillDataList"
                  :key="`${dataList.groupName}-${data.skillName}-${skillIndex}`"
                  class="skill-chip"
              >
                <span class="skill-chip-dot" :style="{ backgroundColor: getSkillTypeColor(index) }"></span>
                <p class="small-text !text-[0.95rem] !leading-none">{{ data.skillName }}</p>
              </div>
            </div>
          </div>
        </FadeInObserver>
      </div>
    </div>

    <FadeInObserver>
      <div class="flex flex-wrap w-screen pb-[100px] gap-32 justify-center items-center">
        <p class="text-white-main font-jetbrains text-xl xs:!text-2xl md:!text-3xl">Contact me by email</p>
        <a class="text-blue-link  font-jetbrains text-xl xs:!text-2xl md:!text-3xl underline"
           href="mailto:dev@andongni.me">dev@andongni.me</a>
      </div>
    </FadeInObserver>
  </div>

</template>

<style>
@import "@/assets/styles/main.css";

.small-title {
  @apply font-bai-jamjuree font-semibold text-xl text-white-main pb-20;
}

.small-text {
  @apply font-bai-jamjuree font-light text-base max-[900px]:text-sm text-white-main tracking-[0.5px] leading-[1.3];
}

.event-description {
  @apply flex flex-col w-full gap-32 pt-[50px] pb-[100px];
}

.bold {
  @apply font-medium text-base;
}

.skill-group {
  @apply flex flex-col gap-20;
}

.skill-group-header {
  @apply flex items-center gap-12;
}

.skill-type-dot {
  @apply inline-block rounded-full w-12 h-12 shrink-0;
}

.skill-chip-list {
  @apply flex flex-wrap gap-16;
}

.skill-chip {
  @apply flex items-center gap-12 rounded-full border border-solid border-black-light px-16 py-10;
  background-color: #151515;
}

.skill-chip-dot {
  @apply inline-block rounded-full w-8 h-8 shrink-0;
}
</style>
