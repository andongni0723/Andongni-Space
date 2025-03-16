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
  <section class="bg-black-dark overflow-hidden max-sm:w-[80dvw]">
    <!-- 項目展示區 -->
    <FadeInObserver>
      <article class="flex max-sm:flex-col pt-[30px] pb-[30px] min-w-auto sm:gap-[80px] max-sm:gap-[2rem]" :class="projectStyle">
        <div class="sm:ml-[8%] sm:mr-[8%]" :class="indexStyle">
          <h1 class="font-impact text-white-main sm:text-5xl max-sm:text-4xl">{{ index }}</h1>
        </div>
        <div class="sm:w-full w-fit overflow-hidden">
          <img class="object-cover max-sm:w-screen sm:h-[632px] max-sm:h-auto rounded-2xl" :src="imgSrc" :class="imgStyle" alt="project-img" />
        </div>
      </article>
    </FadeInObserver>

    <!-- 項目介紹區 -->
    <FadeInObserver>
      <aside class="mx-auto px-5  sm:max-w-[680px] w-auto">
        <div class="flex sm:justify-items-start justify-between items-center w-auto sm:py-32 py-20 sm:px-52 px-0">
          <h1 class="font-impact text-white-main sm:text-7xl/[auto] xs:text-[12vw] text-[14vw]">{{ title }}</h1>
          <Button class="max-sm:!my-0 max-sm:mx-0 max-sm:w-[130px] h-fit" link="/project" text="查看" text-disappear-width="480" :link-props="projectProps" />
        </div>
        <div class="text-white-main font-bai-jamjuree sm:text-lg max-sm:text-sm font-normal leading-28 whitespace-pre-wrap sm:pl-[50px] sm:max-w-[600px] max-sm:w-auto max-sm:p-0 ">
          <p v-html="introFormat" />
        </div>
      </aside>
    </FadeInObserver>

    <hr class="text-white-main w-screen mt-[100px]" />
  </section>
</template>
