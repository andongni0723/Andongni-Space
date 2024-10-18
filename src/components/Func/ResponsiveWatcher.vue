<script setup lang="ts">
import {ref, onMounted, onUnmounted, onUpdated} from 'vue';

const width = ref(window.innerWidth);

const UpdateSize = () => {
  width.value = window.innerWidth;
};

onMounted(() => {
  UpdateSize();
  window.addEventListener('resize', UpdateSize);
});

onUnmounted(() => {
  window.addEventListener('resize', UpdateSize);
});

defineExpose({width});
</script>

<template>
  <slot :width="width"></slot>
</template>
