<script setup lang="ts">
import {ref, onMounted, onUnmounted, onUpdated} from 'vue';

const less1400 = ref(false);
const less768 = ref(false);
const less600 = ref(false);
const less500 = ref(false);
const less400 = ref(false);

const checkMobile = () => {
  less1400.value = window.innerWidth <= 1400;
  less768.value = window.innerWidth <= 768;
  less600.value = window.innerWidth <= 600;
  less500.value = window.innerWidth <= 500;
  less400.value = window.innerWidth <= 400;

};

onMounted(() => {
  checkMobile(); // 初次載入時檢查一次視窗大小
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});

defineExpose({
  less1400, less768, less500, less600, less400
});
</script>

<template>
  <slot :less1400="less1400" :less768="less768" :less500="less500" :less600="less600" :less400="less400"></slot>
</template>
