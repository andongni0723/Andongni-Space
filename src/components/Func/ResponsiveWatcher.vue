<script setup lang="ts">
import {ref, onMounted, onUnmounted, onUpdated} from 'vue';

const isMobile = ref(false);
const isLess600 = ref(false);
const isPhone = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
  isLess600.value = window.innerWidth <= 600;
  isPhone.value = window.innerWidth <= 500;

};

onMounted(() => {
  checkMobile(); // 初次載入時檢查一次視窗大小
  window.addEventListener('resize', checkMobile);
});

onUpdated(() => {
  checkMobile();
  // window.addEventListener('resize', checkMobile);
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});

defineExpose({
  isMobile, isPhone, isLess600
});
</script>

<template>
  <slot :isMobile="isMobile" :isPhone="isPhone" :isLess600="isLess600"></slot>
</template>
