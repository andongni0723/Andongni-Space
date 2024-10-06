<script setup lang="ts">
import BigTitle from "@/components/WebPage/Main/BigTitle.vue";
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
import Button from "@/components/WebPage/Main/Button.vue";
import {useRouter} from "vue-router";
import {
  crossingData,
  cubemixerData,
  docardData,
  gunshootData,
  ProjectData,
  wingwar
} from "../../public/data/ProjectDataManager";

const router = useRouter();

interface Props
{
  dataID: string // YAML src
  from: string
}

const props: Props = defineProps<Props>();
let data: ProjectData = {
  projectGitHubName: "", projectGithubLink: "", description: "", madeData: "", projectImg: [], projectName: "",projectID: "", projectStudyImg: [], type: ""
}

switch (props.dataID)
{
  case "cubemixer":
    data = cubemixerData;
    break;

  case "crossing":
    data = crossingData;
    break;

  case "gunshoot":
    data = gunshootData;
    break;

  case "wingwar":
    data = wingwar;
    break;

  case "docard":
    data = docardData;
    break;

  default:
    router.push('/404');
    //...
}

const BackButtonToPath = () =>
{
  switch (props.from)
  {
    case "home":
      return "/";
    case "all-project":
      return "/all-project";
    default:
      return "/";
  }
}

console.log(props);
</script>

<template>
<div class="project">
  <!--<ResponsiveWatcher v-slot="rw">-->
  <!--  <BigTitle v-if="rw.less600" :title="data.projectName" style="font-style: normal"/>-->
  <!--  <BigTitle v-else :title="data.projectName" style="font-style: normal; padding-left: 2%;"/>-->
  <!--</ResponsiveWatcher>-->
  <div class="big-title">
    <div class="title-group">
      <h1 class="title-text">{{data.projectName}}</h1>
      <div class="github-group">
        <i class="fa-brands fa-github fa-2xl" style="color: #ffffff;"></i>
        <a class="github-link" :href="data.projectGithubLink" target="_blank" rel="noopener noreferrer">
          andongni0723/{{data.projectGitHubName}}
        </a>
      </div>
    </div>
    <hr class="line">
  </div>

  <div class="intro">
    <div class="description">
      <p class="small-title">描述</p>
      <p class="small-text">{{data.description}}</p>
    </div>
    <ResponsiveWatcher v-slot="rw">
      <hr v-if="rw.less600" class="short-line">
      <hr v-else class="vertical">
    </ResponsiveWatcher>
    <div class="type-and-date-flex">
      <div class="type-and-date">
        <p class="small-title">類型</p>
        <p class="small-text">{{data.type}}</p>
      </div>
      <div class="type-and-date">
        <p class="small-title">製作日期</p>
        <p class="small-text">{{data.madeData}}</p>
      </div>
    </div>
  </div>

  <ResponsiveWatcher v-slot="rw">
    <hr v-if="rw.less600" class="short-line">
    <hr v-else class="line">
  </ResponsiveWatcher>

  <div class="project-picture-grid">
    <img v-for="(path, index) in data.projectImg" class="project-picture" :src="path" :key="index" alt="" >
  </div>

  <ResponsiveWatcher v-slot="rw">
    <BigTitle v-if="rw.less600" title="Learning Process" />
    <BigTitle v-else title="Learning Process" style="padding-left: 2%;"/>
  </ResponsiveWatcher>

  <div class="project-study-flex">
    <img v-for="(path, index) in data.projectStudyImg" class="project-picture" :src="path" :key="index" alt="" >
  </div>

  <div class="back-button-group">
  <Button style="" @click="router.go(-1)" text="返回" link-props=""/>
  </div>
</div>
</template>

<style scoped>
.project {
  padding-top: 100px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.title-group {
  display: flex;
  //align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 11% 50px 11%;
}

.title-text {
  font-family: "Impact", "JetBrains Mono NL", "bai jamjuree", sans-serif;
  font-style: normal;
  font-size: 5rem;
  color: var(--main-white-color);
  padding-top: 30px;
  margin-left: max(0px, calc((100% - 980px) * 0.5));
}

.intro {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}


.github-group {
  //margin: 25px max(0px, calc((100% - 980px) * 0.5)) 25px 0;
  margin-top: 50px;
  margin-bottom: 8px;
}

.github-link {
  font-family: "JetBrains Mono NL", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  color: var(--main-white-color);
  text-decoration: none;
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

.project-picture {
  width: 92%;
  //max-width: 300px;
  height: auto;
  margin: 4%;
  border-radius: 20px;
}

.project-study-flex {
  display: flex;
  flex-direction: column;
  padding: 2%;
}

.description{
  display: flex;
  flex-direction: column;
  width: 30%;
  max-width: 300px;
  padding: 0 11%;
}

.type-and-date-flex
{
  display: flex;
  flex-direction: column;
  width: 30%;
  max-width: 300px;
  padding: 0 11%;
  gap: 45px;
}

.small-title {
  font-family: "bai jamjuree", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--main-white-color);
  padding-bottom: 20px;
}

.small-text {
  font-family: "bai jamjuree", sans-serif;
  color: var(--main-white-color);
  font-weight: 300;
  letter-spacing: 0.375pt;
  font-size: 0.8rem;
  line-height: 1.3;
}

.line {
  color: white;
  width: 100vw;
  margin: 0;
}

.short-line {
  max-width: 500px;
  width: 80%;
}

.vertical {
  height: 200px;
  width: 0.2vw;
  color: var(--main-white-color);
  margin: 0;
  border-width:0;
  background-color: var(--main-white-color);
}

.back-button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
}

@media (max-width: 600px) {
  .intro {
    flex-direction: column;
    padding: 0;
  }

  .title-text {
    font-size: 4rem;
  }

  .github-link {
    font-size: 1rem;
  }

  .description {
    padding: 10% 0;
    width: 80%;
    max-width: 500px;
  }

  .type-and-date-flex {
    padding: 10% 0;
    width: 80%;
    max-width: 500px;
  }

  .project-picture-grid
  {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }

  .project-picture {
    border-radius: 10px;
  }

  .project-study-flex {
    padding: 5%;
  }
}
</style>
