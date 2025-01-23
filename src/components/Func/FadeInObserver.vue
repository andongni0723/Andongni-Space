<template>
  <div class="fade-in">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";

// IntersectionObserver 處理淡入效果
const observeFadeIn = () => {
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 當元素進入視口時，添加類名觸發動畫
            entry.target.classList.add("active");
          } else {
            // 當元素離開視口時，移除類名
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1 } // 控制進入和離開的觸發閾值
  );

  // 選擇所有 .fade-in 類名的元素進行監控
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el) => observer.observe(el));
};

onMounted(() => {
  observeFadeIn();
});
</script>

<style scoped>
.fade-in {
  opacity: 0;
  color: white;
  transform: translateY(20px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.fade-in.active {
  opacity: 1;
  transform: translateY(0);
}
</style>
