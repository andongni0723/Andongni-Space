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
import NewConvertMarkdown from "@/components/Markdown/NewConvertMarkdown.vue";
import FadeInObserver from "@/components/Func/FadeInObserver.vue";

const router = useRouter();

interface Props
{
  dataID: string // YAML src
  from: string
}

const props: Props = defineProps<Props>();
let data: ProjectData = {
  projectGitHubName: "", projectGithubLink: "", description: "", madeData: "", readmePath: "", projectImg: [], projectName: "",projectID: "", projectStudyImg: [], type: ""
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
<div class="w-full h-full pt-[100px] overflow-hidden">

  <!-- Project Title / Game Name -->
  <div>
    <div class="max-w-[980px] w-[80%] flex flex-col items-start justify-between flex-wrap sm:!mx-auto mx-[10%] pb-[50px]">
      <h1 class="font-impact text-6xl sm:text-7xl text-white-main pt-[30px]">{{data.projectName}}</h1>

      <!-- Project Github Path ( icon and text ) -->
      <div class="flex gap-10 items-center mt-[50px] mb-8">
        <ResponsiveWatcher v-slot="rw">
          <div v-if="rw.width >= 600">
            <i class="fa-brands fa-github fa-2xl text-white"></i></div>
          <div v-else>
            <i class="fa-brands fa-github fa-xl text-white"></i></div>
        </ResponsiveWatcher>
        <a class="font-jetbrains text-white-main text-sm sm:text-2xl under" :href="data.projectGithubLink" target="_blank" rel="noopener noreferrer">
          andongni0723/{{data.projectGitHubName}}</a>
      </div>
    </div>
    <hr class="w-screen text-white">
  </div>

  <!-- Project Introduction -->
  <FadeInObserver>
    <div class="flex sm:flex-row flex-col flex-nowrap justify-center items-center sm:py-[50px] p-0">
      <div class="py-[10%] w-[80%] sm:w-[40%] max-w-[500px] sm:pr-[3%]">
        <p class="font-bai-jamjuree text-lg text-white-main pb-20">描述</p>
        <p class="font-bai-jamjuree text-sm text-white-main tracking-wide">{{data.description}}</p>
      </div>
      <ResponsiveWatcher v-slot="rw">
        <hr v-if="rw.width >= 640" class=" w-1 h-[200px] text-white m-0 border-[0.5px]">
        <hr v-else class="max-w-[500px] w-[80%]">
      </ResponsiveWatcher>

      <div class="flex flex-col gap-44 py-[10%] w-[80%] sm:w-[40%] max-w-[500px] sm:pl-[3%]">
        <div>
          <p class="font-bai-jamjuree text-lg text-white-main pb-20">類型</p>
          <p class="font-bai-jamjuree text-sm text-white-main tracking-wide">{{data.type}}</p>
        </div>
        <div>
          <p class="font-bai-jamjuree text-lg text-white-main pb-20">製作日期</p>
          <p class="font-bai-jamjuree text-sm text-white-main tracking-wide">{{data.madeData}}</p>
        </div>
      </div>
    </div>
  </FadeInObserver>

  <ResponsiveWatcher v-slot="rw">
    <hr v-if="rw.width >= 640" class="text-white w-screen">
  </ResponsiveWatcher>

  <!-- Project Github Readme (markdown) -->
  <NewConvertMarkdown :markdown-path="data.readmePath"/>

  <!-- Game Photo-->
  <div class="flex sm:grid sm: grid-cols-2 flex-col justify-center items-center mb-[50px] p-[5%] ">
    <img v-for="(path, index) in data.projectImg" class="w-[90%] h-auto m-[4%] rounded-lg sm:rounded-3xl" :src="path" :key="index" alt="" >
  </div>

  <BigTitle title="Learning Process"/>

  <!-- Learning Process Photo -->
  <div class="flex flex-col sm:p-[2%] p-[5%]">
    <img v-for="(path, index) in data.projectStudyImg" class="w-[90%] h-auto m-[4%] sm:rounded-3xl rounded-lg" :src="path" :key="index" alt="" >
  </div>

  <!-- Back Button -->
  <div class="flex justify-center items-center pb-[50px]">
  <Button style="" @click="router.go(-1)" text="返回" link-props=""/>
  </div>
</div>
</template>
