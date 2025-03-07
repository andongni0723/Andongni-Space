<script setup lang="ts">
import { useStore } from 'vuex';

interface Props
{
  link: string;
  text: string;
  style: Record<string, string>;
  linkProps: string; // ex. 'name/...'
}

const store = useStore();

const handleButtonClick = () => {
  store.commit('SET_BUTTON_CLICKED', true);
};

const props: Props = defineProps<Props>();
</script>

<template>
  <router-link :to="{path: link + '/' + linkProps}"
               class="border-solid border border-black-light rounded-4xl text-white-main bg-transparent decoration-[none]
               w-[150px] mx-[50px] my-[30px] p-[15px] flex align-center justify-center gap-10 transition duration-200
               font-bold text-sm tracking-widest" :style="style" @click="handleButtonClick">
  <!--<router-link :to="{path: '/project/dd', params: {data: 'hi'} }" class="go-button" :style="style" @click="handleButtonClick">-->
    {{text}}
    <i class="fa-thin fa-arrow-right-long"></i>
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
