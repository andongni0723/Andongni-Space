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

// window.onload = () => {
//   console.log('All resources on the page have been loaded. AllProject.vue');
//   // 你的操作邏輯
// };
window.addEventListener('load', () => {
  console.log('All resources on the page have been loaded. AllProject.vue');
}, false);
</script>

<template>
  <div class="all-project">
    <div class="project-picture-grid">
      <div class="img-and-name" v-for="(project, index) in AllProject">
        <img  class="project-picture" :src="project.projectImg[0]" @click="ClickProject(project.projectID)" :key="index" alt="" >
        <p class="project-name">{{project.projectName}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.all-project {
  padding: 50px 0;
}
.project-picture-grid
{
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 2%;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.img-and-name {
  margin: 4%;
  transition: 0.3s;
}

.img-and-name:hover {
  transform: scale(1.1);
}


.project-picture {
  width: 92%;
  //height: 300px;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  border : 2px solid var(--main-light-black-color);
}

.project-name {
  font-family: "Impact", "JetBrains Mono NL", "bai jamjuree", sans-serif;
  font-size: 2rem;
  letter-spacing: 0.02em;
  color: var(--main-white-color);
  padding-top: 20px;
}


@media (max-width: 600px) {
  .project-picture-grid
  {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }

  .project-picture-grid
  {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 5%;
  }

  .img-and-name, .project-picture {
    width: 92%;
    //max-width: 300px;
    height: auto;
    border-radius: 20px;
  }

  .project-picture {
    border-radius: 10px;
  }
}
</style>
