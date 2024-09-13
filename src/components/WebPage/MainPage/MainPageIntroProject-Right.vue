<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import PageComponent from "@/components/WebPage/MainPage/MainPageIntroProject-Component.vue";

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
// const imgSrcRequire : string = require(props.imgSrc);
</script>


<template>
  <PageComponent class="component" :index="index" :title="title" :imgSrc="imgSrc" :intro="introFormat" :link="link" img-style=""
                 :project-props="linkProps"/>
</template>
