<script setup lang="ts">
import BigTitle from "@/components/WebPage/Main/BigTitle.vue";
import {AllSkillDataList, ExperienceEventDataList, SpecialEventDataList} from "../../public/data/AboutDataManager";
import FadeInObserver from "@/components/Func/FadeInObserver.vue";
</script>

<template>
  <div class="pt-[100px] overflow-hidden w-full h-full bg-black-dark">
    <BigTitle title="ABOUT ME" class="overflow-hidden"/>

    <FadeInObserver>
      <div class="flex max-md:flex-row-reverse flex-nowrap md:justify-between justify-around  items-center py-[5%] px-[8%] h-[40%]">
        <div class="flex flex-col md:w-[40%] w-[60%] md:max-w-[500px] max-w-[200px] gap-32">
          <p class="small-title">個人簡介</p>
          <p class="small-text">我是沈奕瑋，興趣和專長是程式設計、遊戲開發，在面對自己擅長的話題時會踴躍發言，
            反之則會因為缺乏自信心而少說話。平時對自己的日常有規劃，如果遇到意外會讓心情變差。</p>
        </div>
        <img src="/logo.png" alt="my-photo" class="w-[30%] max-w-[300px] rounded-2xl brightness-50 border-2 border-solid border-black-light">

      </div>
    </FadeInObserver>

    <hr class="text-white-main mx-[8%]">

    <div class="flex flex-col flex-nowrap items-start pt-0 px-[8%] pb-[5%]">
      <div class="event-description">
        <p class="small-title">特殊事蹟</p>
        <div class="flex justify-between flex-wrap items-center"
             v-for="(data, index) in SpecialEventDataList">
          <FadeInObserver><div ref="fadeText" :key="index" class="name small-text fade-in ">{{data.title}}</div></FadeInObserver>
          <FadeInObserver><div ref="fadeText" :key="index" class="result small-text bold fade-in">{{data.result}}</div></FadeInObserver>
        </div>
        <div style="height: 50px"></div>
        <p class="small-title">經歷</p>
        <div class="flex justify-between flex-wrap items-center"
             v-for="(data, index) in ExperienceEventDataList">
          <FadeInObserver><div :key="index" class="name small-text"><p>{{data.title}}</p></div></FadeInObserver>
          <FadeInObserver><div :key="index" class="result small-text bold"><p>{{data.result}}</p></div></FadeInObserver>
        </div>
      </div>
      <hr class="w-full  text-white-main">
      <div class="event-description">
        <p class="small-title">技能樹</p>
        <div class="flex gap-[5%]" v-for="dataList in AllSkillDataList">
          <div class="flex flex-col items-center h-auto">
            <i class="fa-regular fa-circle-dot" style="color: #ffffff;"></i>
            <hr class="h-full w-[0.2vw] text-white-main m-0 bg-white-main">
          </div>
          <FadeInObserver>
            <div class="skill">
              <p class="small-title">{{dataList.groupName}}</p>
              <div class="flex items-center pt-20 gap-20"
                   v-for="(data, index) in dataList.skillDataList">
                <div class="skill-icon">
                  <svg v-if="data.iconPath != '' " class="fade-in" role="img"
                       viewBox="0 0 24 24" height="1.5em" xmlns="http://www.w3.org/2000/svg">
                    <path :d="data.iconPath" fill="white"/>
                  </svg>
                  <i v-else class="fa-solid fa-code fa-xl" style="color: #ffffff;"></i>
                </div>
                <div :key="index" class="name small-text "><p>{{data.skillName}}</p></div>
              </div>
            </div>
          </FadeInObserver>

        </div>
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
</style>
