<script setup lang="ts">

import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();

const isFading = ref(false); // 控制淡出動畫
const navigateTo = (path: string) => {
  isFading.value = true; // 觸發淡出動畫

  setTimeout(() => {
    router.push(path); // 動畫完成後跳轉
    isFading.value = false; // 重置狀態
  }, 300); // 時間與淡出動畫的時長一致
};
</script>

<template>
  <button @click="navigateTo('/about')" class="nav-button"></button>
</template>

<style scoped>
.nav-button {
  font-family:"JetBrains Mono NL",serif;
  font-size: 1.1rem;
  //font-weight: normal ;
  //margin: 0 20px 0 20px;
  color: white;
  outline: none;
  background-color: transparent;
  text-decoration: none;
  border: none;
}
</style>
