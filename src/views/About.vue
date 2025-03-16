<script setup lang="ts">
import BigTitle from "@/components/WebPage/Main/BigTitle.vue";
import scrollingPathData from '../../public/data/scrolling-path.yaml'
import {AllSkillDataList, ExperienceEventDataList, SpecialEventDataList} from "../../public/data/AboutDataManager";
import FadeInObserver from "@/components/Func/FadeInObserver.vue";
// import {ref, onMounted} from "vue";

interface ScrollingYAML {
  list: string[]
}

const jsonString = JSON.stringify(scrollingPathData, null, 2);
const parsedJson = JSON.parse(jsonString) as ScrollingYAML;
const paths: string[] = parsedJson.list;
</script>

<template>
  <div class="about">
    <BigTitle title="ABOUT ME" style="overflow:hidden;"/>

    <FadeInObserver>
      <div class="intro">
        <div class="description">
          <p class="small-title">個人簡介</p>
          <p class="small-text">我是沈奕瑋，興趣和專長是程式設計、遊戲開發，在面對自己擅長的話題時會踴躍發言，反之則會因為缺乏自信心而少說話。平時對自己的日常有規劃，如果遇到意外會讓心情變差。</p>
        </div>
        <img src="/logo.png" alt="my-photo" class="my-photo">

      </div>
    </FadeInObserver>

    <hr class="line">

    <div class="event-intro">
      <div class="event-description">
        <p class="small-title">特殊事蹟</p>
        <div class="thing" v-for="(data, index) in SpecialEventDataList">
          <FadeInObserver><div ref="fadeText" :key="index" class="name small-text fade-in ">{{data.title}}</div></FadeInObserver>
          <FadeInObserver><div ref="fadeText" :key="index" class="result small-text bold fade-in">{{data.result}}</div></FadeInObserver>
        </div>
        <div style="height: 50px"></div>
        <p class="small-title">經歷</p>
        <div class="thing" v-for="(data, index) in ExperienceEventDataList">
          <FadeInObserver><div :key="index" class="name small-text"><p>{{data.title}}</p></div></FadeInObserver>
          <FadeInObserver><div :key="index" class="result small-text bold"><p>{{data.result}}</p></div></FadeInObserver>
        </div>
      </div>
      <hr class="short-line">
      <div class="event-description">
        <p class="small-title">技能樹</p>
        <div class="skill-group" v-for="dataList in AllSkillDataList">
          <div class="line">
            <i class="fa-regular fa-circle-dot" style="color: #ffffff;"></i>
            <hr class="vertical">
          </div>
          <FadeInObserver>
            <div class="skill">
              <p class="small-title">{{dataList.groupName}}</p>
              <div class="skill-content" v-for="(data, index) in dataList.skillDataList">
                <div class="skill-icon">
                  <svg v-if="data.iconPath != '' " class="fade-in" role="img" viewBox="0 0 24 24" height="1.5em" xmlns="http://www.w3.org/2000/svg"><title></title><path :d="data.iconPath" fill="white"/></svg>
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
      <div class="contact">
        <p class="contact-text">Contact me by email </p>
        <a class="email underline" href="mailto:dev@andongni.me">dev@andongni.me</a>
      </div>
    </FadeInObserver>
  </div>

</template>

<style scoped>
.about {
  padding-top: 100px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: var(--main-drak-black-color);
}

.intro {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  //padding: 50px 0;
  padding: 5% 8%;
  height: 40%;
}

.event-intro {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  padding: 0 8% 5%;
  //gap: 20vh;
}

.description{
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 500px;
  gap: 2rem;
}

.event-description {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  padding: 50px 0 100px 0;
}

.thing {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.small-title {
  font-family: "bai jamjuree", sans-serif;
  font-weight: 600;
  font-size: 1.3rem;
  color: var(--main-white-color);
  padding-bottom: 20px;
  //padding-top: 50px;
}

.small-text {
  font-family: "bai jamjuree", sans-serif;
  color: var(--main-white-color);
  font-weight: 300;
  letter-spacing: 0.375pt;
  font-size: 1rem;
  line-height: 1.3;
}

.bold {
  font-weight: 500;
  font-size: 1.1rem;
}

.my-photo {
  width: 30%;
  max-width: 300px;
  border-radius: 10%;
  filter: brightness(50%);
  border: var(--main-light-black-color) solid 1px;
}

.short-line {
  width: 100%;
  height: auto;
}

.vertical {
  height: 100%;
  width: 0.2vw;
  color: var(--main-white-color);
  margin: 0;
  border-width:0;
  background-color: var(--main-white-color);
}

.line {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
}

.skill-group {
  display: flex;
  flex-direction: row;
  gap: 5%;
}

.skill-content {
  display: flex;
  align-items: center;
  padding-top: 20px;
  gap: 20px;
}

.contact {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  padding-bottom: 100px;
  gap: 2rem;
  justify-content: center;
  align-items: center;

}

.contact-text {
  color: var(--main-white-color);
  font-family: "JetBrains Mono NL", sans-serif;
  font-size: 1.5rem;

}

.email {
  color: var(--link-color);
  font-family: "JetBrains Mono NL", sans-serif;
  font-size: 1.5rem;
}

@media (max-width: 900px) {
  .intro {
    flex-direction: row-reverse;
    justify-content: space-around;
    padding: 0;
  }

  .profile {
    flex-direction: column;
    padding: 5% 8%;
  }

  .description {
    padding: 10% 0;
    width: 80%;
    max-width: 200px;
  }

  .small-text {
    font-size: 0.8rem;
  }
}

@media (max-width: 400px) {
  .intro {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 8%;
  }

  .description {
    padding: 10% 0;
    max-width: 100%;
    width: 100%;
    gap: 0;
  }

  .contact-text {
    font-size: 1rem;

  }

  .email {
    font-size: 1rem;
  }
}
</style>
