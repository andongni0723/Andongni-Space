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
      <p v-if="rw.width >= props.textDisappearWidth" class="h-20">{{text}}</p>
      <i class="fa-thin fa-arrow-right-long "></i>
    </ResponsiveWatcher>
  </router-link>
</template>

<style scoped>
.go-button {
  border: var(--main-light-black-color) solid 1px;
  border-radius: 30px;
  color: var(--main-white-color);
  background-color: transparent;
  text-decoration: none;
  width: 150px;
  margin: 30px 50px;
  padding: 15px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: 0.2s;
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 0.2rem;
}

.go-button:hover {
  background-color: var(--main-white-color);
  color: var(--main-light-black-color);
  text-decoration: none;
}

@media (max-width: 600px) {
  .go-button {
    margin: 0 0 0 30px;
    width: 130px;
  }
}

@media (max-width: 400px) {
  .go-button {
    margin-left: 0;
    width: 100px;
    height: 30px;
    padding: 5px;
  }
}
</style>
