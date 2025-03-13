<script setup lang="ts">
import { useStore } from 'vuex';
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
import {onMounted} from "vue";

interface Props
{
  link: string;
  text: string;
  textDisappearWidth: number;
  style: Record<string, string>;
  linkProps: string; // ex. 'name/...'
}

const store = useStore();

const handleButtonClick = () => {
  store.commit('SET_BUTTON_CLICKED', true);
};

// const props: Props = defineProps<Props>();
const props: Props = withDefaults(defineProps<Props>(), {
  textDisappearWidth: 300,
});
</script>

<template>
  <router-link :to="{path: link + '/' + linkProps}"
               class="border-solid border-2 border-black-light hover:bg-white-main hover:text-black-light rounded-4xl max-sm:rounded-full
                text-white-main bg-transparent decoration-[none] w-[150px] max-sm:w-fit mx-[50px] my-[30px] p-[15px] flex
                justify-center items-center gap-10 transition duration-200
               font-bold text-sm tracking-widest" :style="style" @click="handleButtonClick">
    <ResponsiveWatcher v-slot="rw">
      <p v-if="rw.width >= props.textDisappearWidth" class="h-fit">{{text}}</p>
      <i class="fa-thin fa-arrow-right-long "></i>
    </ResponsiveWatcher>
  </router-link>
</template>
