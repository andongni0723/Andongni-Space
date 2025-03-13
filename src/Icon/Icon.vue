<script setup lang="ts">

interface Props
{
  iconSrc: string
  link: string
}

const props = defineProps<Props>();
</script>

<template>
  <a :class="iconSrc" :href="link"  style="color: #ffffff;"></a>
</template>

<style scoped>
a, a:hover
{
  display: inline-block;
  height: 20px;
  width: 20px;
  text-decoration: none;
}
</style>
