<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import Button from "@/components/WebPage/Main/Button.vue";

interface Props
{
  index: string;
  title: string;
  imgSrc: string;
  intro: string;
  link: string;
  projectStyle: Record<string, string>;
  indexStyle: Record<string, string>;
  imgStyle: Record<string, string>;
  projectProps: string;
}
const props = defineProps<Props>();
const introFormat = props.intro;

</script>


<template>
  <div class="project-show">
    <div class="project" :style="projectStyle">
      <div class="index" :style="indexStyle">
        <h1 class="title" >{{index}}</h1>
      </div>
      <div class="details">
        <img class="detail-img" :src="imgSrc" :style="imgStyle" alt="project-img" >
      </div>
    </div>
    <div class="intro">
      <div class="name-and-button" >
        <h1 class="big-title" >{{title}}</h1>
        <Button style="" link="/project" text="查看" :link-props="projectProps"/>
      </div>
      <div class="text">
        <p v-html="introFormat"/>
      </div>
    </div>
  </div>
  <hr class="line">
</template>



<style scoped>
.project-show {
  background-color: var(--main-drak-black-color);
  overflow: hidden;
}

.project{
  padding: 30px 0;
  min-width: auto;
  display: flex;
  gap: 80px;
}

.index {
  margin-left: max(0px, calc((100% - 980px) * 0.5));
}

.title {
  font-family: "Impact","JetBrains Mono NL",serif;
  color: var(--main-white-color);
  font-size: 3rem;
}

.big-title {
  font-family: "Impact","JetBrains Mono NL",serif;
  color: var(--main-white-color);
  font-size: 4rem;
}

.details {
  width: 100%;
  overflow: hidden;
}

.detail-img {
  object-fit: cover;
  height: 632px;
  border-radius: 20px;
}

.intro
{
  padding-left: max(20px, calc((100% - 680px)* 0.5));
}

.line {
  color: var(--main-white-color);
  max-width: 100vw;
  margin: 100px 0 0 0;
}

.name-and-button {
  display: flex;
  //flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  padding: 30px 50px;
}

.go-button {
  border: var(--main-light-black-color) solid 1px;
  border-radius: 30px;
  color: var(--main-white-color);
  background-color: var(--main-drak-black-color);
  text-decoration: none;
  width: 150px;
  margin: 30px 50px;
  padding: 15px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: 0.2s;
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 0.2rem;
}

.go-button:hover {
  background-color: var(--main-white-color);
  color: var(--main-light-black-color);
  text-decoration: none;
}

.button-text {
  width: 40px;
  font-family:  "bai jamjuree", "JetBrains Mono NL", sans-serif;
}
.text {
  color: var(--main-white-color);
  font-family:  "bai jamjuree", "JetBrains Mono NL", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 28px;
  white-space: pre-wrap;
  padding: 0 0 0 50px;
  max-width: 600px;
}


@media (max-width: 1200px) {
  .text {
    font-size: 1.2rem;
  }
}

@media (max-width: 900px) {
  .text {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .project {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .project-show {
    padding-left: 30px;
  }

  .intro {
    padding: 0;
  }
  .name-and-button {
    padding: 20px 0;
  }

  .detail-img {
    width: 340px;
    height: auto;
  }

  .title {
    font-size: 2.5rem;
  }
  .big-title {
    font-size: 3rem;
  }

  .name-and-button {
    width: 340px;
  }

  .go-button {
    margin: 0 0 0 30px;
    width: 130px;
  }

  .text {
    padding: 0;
    font-size: 0.8rem; /* 當視窗寬度小於600px時，最小字體大小 */
    //width: 340px;
    max-width: 340px;
  }
}

@media (max-width: 400px) {
  .name-and-button {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    gap: 10px;
    //width: 500px;
    //padding: 30px 50px;
  }

  .go-button {
    margin-left: 0;
    width: 100px;
    height: 30px;
    padding: 5px;
    //border-radius: 20px;
  }
}


</style>
