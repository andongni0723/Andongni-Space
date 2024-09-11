<script setup lang="ts">
import {defineProps} from 'vue';
interface Props
{
  link: string;
}

const props = defineProps<Props>();
</script>

<template>
  <img class="show-project-img" :src="link" alt="">
</template>

<style scoped>
.show-project-img {
  width: 250px;
  height: 150px;
  border-radius: 20px;
  object-fit: cover;
  filter: saturate(10%);
}

@media (max-width: 500px) {
  .show-project-img {
    width: 150px;
    height: 90px;
    border-radius: 10px;
  }

}
</style>
