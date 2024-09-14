<script lang="ts" setup>
import Button from "@/components/WebPage/Main/Button.vue";
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
</script>

<template>
  <div class="error">
    <div class="bg">
      <video autoplay muted loop playsinline class="background-video">
        <source src="https://r2.andongni.me/Andongni-space-main.webm" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="text">
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
  </div>
</template>

<style scoped>
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}


.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: saturate(0%) ;
  opacity: 50%;
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
