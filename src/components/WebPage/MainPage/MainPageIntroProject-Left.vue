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
                   project-style="flex-direction: row-reverse"
                   index-style="margin-right: max(0px, calc((100% - 980px) * 0.5)); margin-left: 0;"
                   img-style=" float: right"
                   :project-props="linkProps"/>

    <PageComponent v-else
                   :index="index" :title="title" :imgSrc="imgSrc" :intro="introFormat" :link="link"
                   project-style="flex-direction: column;"
                   index-style="margin: 0;"
                   img-style="display: block;
                              float: none;"
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
