<script lang="ts" setup>
import {defineProps} from 'vue';

interface Props
{
  title: string
  style: Record<string, string>
}

const props = defineProps<Props>();
</script>

<template>
<div class="bg-black-dark">
  <h1 class="font-impact text-white-main italic text-6xl sm:text-7xl py-[30px] pl-[8%] pl-30px overflow-hidden text-nowrap" :style="style">{{title}}</h1>
  <hr class="text-white max-w-screen m-0">
</div>
</template>

<style scoped>
.big-title {
  background-color: var(--main-drak-black-color);
}

.title-text {
  font-family: "Impact", "JetBrains Mono NL", "bai jamjuree", sans-serif;
  font-style: italic;
  font-size: 5rem;
  color: var(--main-white-color);
  margin-bottom: 30px;
  padding-top: 30px;
  margin-left: max(0px, calc((100% - 980px) * 0.5));
}

.line {
  color: white;
  max-width: 100vw;
  margin: 0;
}

@media (max-width: 600px) {
  .title-text {
    padding-left: 30px;
    font-size: 4rem;
  }
}
</style>
