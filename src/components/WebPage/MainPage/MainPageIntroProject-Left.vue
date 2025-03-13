<script lang="ts" setup>
// import {RightArrowIcon} from "@/Icon/RightArrow-Icon.vue";
import PageComponent from "@/components/WebPage/MainPage/MainPageIntroProject-Component.vue";
import { defineProps, computed } from 'vue';
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";

interface Props
{
  index: string;
  title: string;
  imgSrc: string;
  intro: string;
  link: string;
  linkProps: string;
}

const props = defineProps<Props>();

const introFormat = props.intro;
</script>

<template>
  <ResponsiveWatcher v-slot="rw">
    <PageComponent v-if="rw.width >= 600"
                   :index="index" :title="title" :imgSrc="imgSrc" :intro="introFormat" :link="link"
                   project-style="sm:flex-row-reverse"
                   index-style="sm:mr-[8%] sm:ml-0"
                   img-style="sm:float-right"
                   :project-props="linkProps"/>

    <PageComponent v-else
                   :index="index" :title="title" :imgSrc="imgSrc" :intro="introFormat" :link="link"
                   project-style="max-sm:flex-column"
                   index-style="max-sm:m-0"
                   img-style="max-sm:block max-sm:float-none"
                   :project-props="linkProps"/>
  </ResponsiveWatcher>


</template>

<style scoped>


@media (max-width: 600px) {
  .component:deep(.project){
    flex-direction: column;
  }

  .component:deep(.index) {
    margin: 0;
  }

  .component:deep(.detail-img){
    display: block;
    float: none;
  }
}
</style>
