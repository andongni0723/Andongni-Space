<script setup lang="ts">
import { onMounted, ref, defineProps, watch } from "vue";

// Props 介面定義
interface Props {
  isLoading: boolean;
}

const props = defineProps<Props>();

// 狀態管理
const isPanelLoading = ref(true);  // 控制面板載入狀態
const isAnimation = ref(false);     // 控制動畫狀態

/**
 * 處理載入完成後的狀態轉換
 * 1. 延遲 1 秒後開始結束動畫
 * 2. 再延遲 1 秒後結束動畫
 */
const loadingDone = () => {
  setTimeout(() => {
    isPanelLoading.value = false;
    isAnimation.value = true;
    setTimeout(() => {
      isAnimation.value = false;
    }, 1000);
  }, 1000);
};

const initial = () => {
  isPanelLoading.value = true;
  isAnimation.value = false;
};

// 監聽 props.isLoading 的變化
watch(
    () => props.isLoading,
    (newVal) => {
      if(newVal)    // 載入開始時
        initial();
      else          // 載入完成時
      {
        loadingDone();
      }
    }
);



</script>

<template>
  <div v-show="isPanelLoading || isAnimation" :class="{'panel': true, 'panel-close': isAnimation}">
    <div class="loading-content">
      <div class="logo">
        <img class="andongni-logo" src="/andongni_game_white_.svg" alt="andongni logo" />
      </div>
      <div class="loading-bar">
        <img class="spinner" src="/spinner.svg" alt="spinner"/>
      </div>
    </div>
  </div>
</template>

<style scoped>


.panel {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--main-drak-black-color);
  opacity: 1;
  z-index: 1010;
}

.panel-close {
  animation: fadeOut 1s forwards;
}
@keyframes fadeOut {
  from {opacity: 1;}
  to {opacity: 0;}
}

.loading-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  padding-right: 15px;
}

.andongni-logo {
  width: 300px;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}
@keyframes fadeIn {
  to {opacity: 1;}
}


.loading-bar {
  position: absolute;
  bottom: 0;

  margin-bottom: 5vh;
}

.spinner {
  width: 40px;
  animation: rotateSpinner 1s linear infinite;
}

@keyframes rotateSpinner {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
</style>
