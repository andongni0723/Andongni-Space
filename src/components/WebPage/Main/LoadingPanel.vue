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
    }, 300);
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
  <div v-show="isPanelLoading || isAnimation"
       class="fixed flex justify-center items-center w-screen h-dvh bg-black-dark z-[1010]"
       :class="{'animate-fade-out': isAnimation}">
    <div class="flex flex-col justify-center items-center">
      <div class="pr-14">
        <img class="w-[300px] animate-fade-in" src="/andongni_game_white_.svg" alt="andongni logo" />
      </div>
      <div class="absolute bottom-0 mb-[5vh]">
        <img class="w-40 animate-spin" src="/spinner.svg" alt="spinner"/>
      </div>
    </div>
  </div>
</template>
