<script setup lang="ts">
import AndongniGameIcon from "@/Icon/AndongniGame-Icon.vue";
import {onMounted, ref, defineProps} from "vue";

interface Props {
  durationSecond: number
}

const props = defineProps<Props>();

let cssVars = function() {
  return {
    '--duration': props.durationSecond + 's',
    '--duration-fill': props.durationSecond - 0.5 + 's'
  }
}

onMounted(() => {
  loading(props.durationSecond);
});

const isLoading = ref(true);
const loading = (_duration: number) => {
  setTimeout(() => {
    isLoading.value = false;
  }, _duration * 1000);
}
</script>

<template>
<div v-if="isLoading" class="panel" :style="cssVars">
  <div class="progress-container" :style="cssVars">
    <div class="progress-bar" :style="cssVars">
      <div class="progress-bar__filler" :style="cssVars"></div>
      <div class="progress-bar__overlay" :style="cssVars"></div>
      <AndongniGameIcon style="
      scale: 1;
      color: var(--main-white-color);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;"/>
    </div>
  </div>
</div>
</template>

<style scoped>
.panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--main-drak-black-color);
  opacity: 1;
  animation: fadeOut 3s forwards;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  scale: 2;
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

/* Loading Bar */
.progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  position: relative;
}

.progress-bar {
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
}

.progress-bar__filler {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(to right, var(--main-white-color) 0%, var(--main-white-color) 100%);
  clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      0% 100%
  );
  transform: scaleX(0);
  transform-origin: left;
  animation: fill-border 2.5s forwards;
}

.progress-bar__overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 98%; /* 相对于容器宽度的90% */
  height: 94%; /* 相对于容器高度的80% */
  border-radius: 50px;
  background-color: var(--main-drak-black-color);
  z-index: 10;
}

@keyframes fill-border {
  to {
    transform: scaleX(1);
  }
}
</style>
