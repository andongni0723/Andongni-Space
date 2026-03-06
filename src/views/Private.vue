<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { marked } from "marked";
import { useRouter } from "vue-router";
import FadeInObserver from "@/components/Func/FadeInObserver.vue";

interface Props {
  projectName: string;
  lang: string;
}

const props = defineProps<Props>();
const router = useRouter();

const markdownRaw = ref("");
const isLoading = ref(false);
const errorMessage = ref("");
const displayedLang = ref("en");
const fallbackToEnglish = ref(false);
const supportedLanguages = [
  { code: "en", label: "English" },
  { code: "cn", label: "中文" },
];

const normalizedProjectName = computed(() => props.projectName.trim());
const normalizedLang = computed(() => {
  const langValue = props.lang.trim().toLowerCase();
  return langValue || "en";
});

const buildMarkdownPath = (projectName: string, lang: string) =>
  `/private/${projectName}/${projectName}-private-${lang}.md`;

const renderedMarkdown = computed(() => marked(markdownRaw.value));

const switchLanguage = async (targetLang: string) => {
  const projectName = normalizedProjectName.value;
  if (!projectName || normalizedLang.value === targetLang) {
    return;
  }

  await router.push({
    name: "Private",
    params: {
      projectName,
      lang: targetLang,
    },
  });
};

const loadPrivatePolicy = async () => {
  const projectName = normalizedProjectName.value;
  const requestLang = normalizedLang.value;

  markdownRaw.value = "";
  errorMessage.value = "";
  fallbackToEnglish.value = false;
  displayedLang.value = requestLang;

  if (!projectName) {
    errorMessage.value = "Invalid project name in route.";
    return;
  }

  isLoading.value = true;
  try {
    const primaryPath = buildMarkdownPath(projectName, requestLang);
    const primaryResponse = await fetch(primaryPath);

    if (primaryResponse.ok) {
      markdownRaw.value = await primaryResponse.text();
      return;
    }

    if (requestLang !== "en") {
      const fallbackPath = buildMarkdownPath(projectName, "en");
      const fallbackResponse = await fetch(fallbackPath);
      if (fallbackResponse.ok) {
        markdownRaw.value = await fallbackResponse.text();
        displayedLang.value = "en";
        fallbackToEnglish.value = true;
        return;
      }
    }

    errorMessage.value = `Privacy policy not found: ${primaryPath}`;
  } catch (error) {
    console.error("Failed to load privacy policy markdown:", error);
    errorMessage.value = "Failed to load privacy policy.";
  } finally {
    isLoading.value = false;
  }
};

watch(
  () => [props.projectName, props.lang],
  () => {
    void loadPrivatePolicy();
  },
  { immediate: true }
);
</script>

<template>
  <div class="w-full min-h-screen bg-black-dark pt-[120px] pb-[80px]">
    <section class="mx-auto w-[90%] max-w-[980px]">
      <header class="mb-[36px]">
        <h1 class="font-impact text-white-main text-4xl sm:text-6xl">Privacy Policy</h1>
        <p class="font-bai-jamjuree text-white-main text-sm sm:text-base mt-[12px]">
          Project: {{ normalizedProjectName }}
        </p>
        <div class="mt-[16px] flex flex-wrap gap-[10px]">
          <button
            v-for="language in supportedLanguages"
            :key="language.code"
            type="button"
            class="font-jetbrains text-xs sm:text-sm px-[14px] py-[8px] rounded-full border transition cursor-pointer"
            :class="displayedLang === language.code
              ? 'border-white-main bg-white-main text-black-dark'
              : 'border-white-main/50 text-white-main hover:border-white-main hover:bg-white-main/10'"
            @click="switchLanguage(language.code)"
          >
            {{ language.label }}
          </button>
        </div>
      </header>

      <div v-if="isLoading" class="font-bai-jamjuree text-white-main text-sm sm:text-base">
        Loading privacy policy...
      </div>

      <div v-else-if="errorMessage" class="font-bai-jamjuree text-white-main text-sm sm:text-base">
        {{ errorMessage }}
      </div>

      <div v-else>
        <p
          v-if="fallbackToEnglish"
          class="font-bai-jamjuree text-white-main text-xs sm:text-sm opacity-80 mb-[20px]"
        >
          The selected language file was not found, English content is shown instead.
        </p>

        <FadeInObserver>
          <article class="markdown-body !m-0" v-html="renderedMarkdown"></article>
        </FadeInObserver>
      </div>
    </section>
  </div>
</template>
