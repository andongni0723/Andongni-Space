<script lang="ts" setup>
// import {RightArrowIcon} from "@/Icon/RightArrow-Icon.vue";
import PageComponent from "@/components/WebPage/Main/MainPageIntroProject-Component.vue";
import { defineProps, computed } from 'vue';

interface Props
{
  index: string;
  title: string;
  imgSrc: string;
  intro: string;
}

const props = defineProps<Props>();

const introFormat = props.intro;
</script>


<template>
  <PageComponent class="component" :index="index" :title="title" :imgSrc="imgSrc" :intro="introFormat"/>
</template>

<style scoped>
.component:deep(.project){
  flex-direction: row-reverse;
}

.component:deep(.index) {
  margin-left: 0;
  margin-right: max(0px, calc((100% - 980px) * 0.5));
}

.component:deep(.detail-img){
  display: inline;
  float: right;
}

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
