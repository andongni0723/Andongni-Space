<script setup lang="ts">
import {AllProject} from "../../public/data/ProjectDataManager";
import {useRouter} from "vue-router";
import { useStore } from 'vuex';
import LoadingPanel from "@/components/WebPage/Main/LoadingPanel.vue";

const store = useStore();
const router = useRouter();

const ClickProject = (projectName: string) => {
  store.commit('SET_BUTTON_CLICKED', true);
  router.push(`/project/${projectName}/all-project`);
}

window.addEventListener('load', () => {
  console.log('All resources on the page have been loaded. AllProject.vue');
}, false);
</script>

<template>
  <div class="py-[50px]">
    <div class="sm:grid sm:grid-cols-2 flex flex-col gap-20 p-[5%] sm:p-[2%] justify-center items-center mb-[50px]">
      <div class="h-auto flex flex-col justify-center items-center rounded-3xl m-[4%] duration-300 hover:scale-110" v-for="(project, index) in AllProject">
        <div class="p-16">
          <img  class=" h-auto rounded-lg sm:rounded-3xl object-cover border-solid border-2 border-black-light" :src="project.projectImg[0]" @click="ClickProject(project.projectID)" :key="index" alt="" >
          <p class="font-impact text-3xl text-white-main pt-20">{{project.projectName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
