<script lang="ts" setup>
import Button from "@/components/WebPage/Main/Button.vue";
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
</script>

<template>
  <div class="error">
    <h1>404</h1>
    <p>Oops! You enter a unknown place.</p>
    <ResponsiveWatcher v-slot="rw">

      <Button v-if="rw.less400" link="/" text="Back"
              style="font-family: 'JetBrains Mono',sans-serif;letter-spacing: 2px;
                     width: 80%;
                     margin:30px;" link-props=""/>

      <Button v-else-if="rw.less600" link="/" text="Back"
              style="font-family: 'JetBrains Mono',sans-serif; letter-spacing: 2px; width: 250px;
                     margin:30px" link-props=""/>

      <Button v-else link="/" text="Back"
              style="font-family: 'JetBrains Mono',sans-serif; letter-spacing: 2px; width: 250px" link-props=""/>

    </ResponsiveWatcher>
  </div>
</template>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

h1 {
  font-family: Impact, "JetBrains Mono", sans-serif;
  font-size: 5rem;
  color: var(--main-white-color);
  padding-bottom: 50px;
}

p {
  font-family: "JetBrains Mono", sans-serif;
  font-size: 0.9rem;
  color: var(--main-white-color);
}
</style>
