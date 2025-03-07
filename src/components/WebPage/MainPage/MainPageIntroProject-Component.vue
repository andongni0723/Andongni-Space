<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import Button from "@/components/WebPage/Main/Button.vue";
import FadeInObserver from "@/components/Func/FadeInObserver.vue";

interface Props
{
  index: string;
  title: string;
  imgSrc: string;
  intro: string;
  link: string;
  projectStyle: string;
  indexStyle: string;
  imgStyle: string;
  projectProps: string;
}
const props = defineProps<Props>();
const introFormat = props.intro;

</script>

<template>
  <section class="bg-black-dark overflow-hidden max-sm:pl-32">
    <!-- 項目展示區 -->
    <FadeInObserver>
      <article class="flex max-sm:flex-col pt-[30px] pb-[30px] min-w-auto sm:gap-[80px] max-sm:gap-[2rem]" :class="projectStyle">
        <div class="ml-[max(0px,calc((100%-980px)*0.5))]" :class="indexStyle">
          <h1 class="font-impact text-white-main sm:text-5xl max-sm:text-4xl">{{ index }}</h1>
        </div>
        <div class="w-full overflow-hidden">
          <img class="object-cover max-sm:w-[340px] sm:h-[632px] max-sm:h-auto rounded-2xl" :src="imgSrc" :class="imgStyle" alt="project-img" />
        </div>
      </article>
    </FadeInObserver>

    <!-- 項目介紹區 -->
    <FadeInObserver>
      <aside class="sm:pl-[max(20px,calc((100%-680px)*0.5))] max-sm:ml-0"> <!-- max-sm:p-0 -->
        <div class="flex justify-items-start align-center w-auto max-sm:w-[340px] sm:py-32 max-sm:py-20 sm:px-52 max-sm:px-0">
          <h1 class="font-impact text-white-main sm:text-7xl max-sm:text-5xl">{{ title }}</h1>
          <Button class="max-xs:my-0 max-sm:mx-0 max-sm:!ml-32 max-sm:w-[130px]" link="/project" text="查看" :link-props="projectProps" />
        </div>
        <div class="text-white-main font-bai-jamjuree sm:text-lg max-sm:text-sm font-normal leading-28 whitespace-pre-wrap sm:pl-[50px] sm:max-w-[600px] max-sm:max-w-[340px] max-sm:p-0 ">
          <p v-html="introFormat" />
        </div>
      </aside>
    </FadeInObserver>

    <hr class="text-white-main max-w-screen mt-[100px]" />
  </section>
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
  justify-content: space-between;
  align-items: center;
  width: 500px;
  padding: 30px 50px;
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
  }

  .go-button {
    margin-left: 0;
    width: 100px;
    height: 30px;
    padding: 5px;
  }
}


</style>
