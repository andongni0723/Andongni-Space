<script setup lang="ts">
import { marked } from 'marked'
import { ref, computed, onMounted, defineProps} from 'vue'
import FadeInObserver from "@/components/Func/FadeInObserver.vue";

interface Props {
  markdownPath: string
}

const props: Props = defineProps<Props>()

const data = ref("");

onMounted(async () => {
  try {
    const response = await fetch(props.markdownPath);
    if (!response.ok)
      throw new Error("無法讀取 Markdown 文件");

    data.value = await response.text(); // 轉為字串

  } catch (error) {
    console.error("讀取失敗:", error);
  }
});

const output = computed(() => marked(data.value))
</script>

<template>
  <div class="front"></div>
  <FadeInObserver>
    <div class="markdown-body" v-html="output"></div>
  </FadeInObserver>
</template>

<style>
/*
code {
  color: #f66;
}


.output {
  color: white;
  font-family: "JetBrains Mono NL", sans-serif;
  height: 100%;
  margin-left: max(0px, calc((100% - 980px) * 0.5));
}

.output h1 {
  font-size: 2.5rem;
  margin: 20px 0;
}

.output h2 {
  font-size: 2rem;
  margin: 20px 0;
}

.output h3 {
  font-size: 1.5rem;
  margin: 20px 0;
}

.output img{
  width: 50%;
  margin: 20px 0;
}

*/
</style>
