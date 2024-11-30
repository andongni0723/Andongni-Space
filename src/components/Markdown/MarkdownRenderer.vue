<template>
  <div class="markdown-body" v-html="renderedMarkdown"></div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // 高亮樣式

export default defineComponent({
  name: "MarkdownRenderer",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // 定義高亮處理
    // marked.use({
    //   renderer: {
    //     // code(code: string, lang: string, _escaped: boolean) {
    //     code(code: string, lang: string) {
    //       const validLang = lang && hljs.getLanguage(lang);
    //       const highlighted = validLang
    //           ? hljs.highlight(code, { language: lang }).value
    //           : hljs.highlightAuto(code).value;
    //
    //       return `<pre><code class="hljs ${lang}">${highlighted}</code></pre>`;
    //     },
    //   },
    // });

    // 轉換 Markdown
    const renderedMarkdown = computed(() => marked(props.content));

    return {
      renderedMarkdown,
    };
  },
});
</script>

<style scoped>
/* 自定義主題樣式 */
.markdown-body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.markdown-body h1 {
  color: #2c3e50;
  border-bottom: 2px solid #e74c3c;
}

</style>
