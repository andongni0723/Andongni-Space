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
a::before, a:hover{
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
}
a, a:hover
{
  text-decoration: none;
}
</style>
