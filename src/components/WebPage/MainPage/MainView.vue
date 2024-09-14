<script setup lang="ts">
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
import ScrollingPicture from "@/components/WebPage/ScrollingPicture.vue";

</script>

<template>
<div class="main-view">
  <!--<div class="bg"></div>-->
  <div class="bg">
    <video autoplay muted loop playsinline class="background-video">
      <source src="https://r2.andongni.me/Andongni-space-main.webm" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="view">
    <h1 class="space-text small-size">WELCOME TO</h1>
    <h1 class="space-text big-size">ANDONGNI'S SPACE</h1>

  </div>
  <ScrollingPicture class="picture"/>

</div>
</template>

<style scoped>
.main-view
{
  position: relative;
  height: calc(100vh - 3rem);
  width: 100vw;
  overflow: hidden;
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

.view {
  position: absolute;
  top: 8vh;
  //left: -5vh;
  padding: 80px 0 0 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 5;
}

.space-text {
  font-family: Impact, "JetBrains Mono", sans-serif;
  //color: var(--view-dark-text-color);
  color: var(--main-white-color);
  padding-bottom: 20px;
  opacity: 50%;
  transition: color 0.3s;
}

.space-text:hover {
  color: var(--main-white-color);
}

p {
  padding-bottom: 10px;
}



.picture {
  margin-top: 40vh;
  opacity: 80%;
  z-index: 10;
  transition: opacity 0.3s ease;
}

.picture:hover {
  opacity: 50%;
}

.small-size {
  font-size: 2rem;
}

.big-size {
  font-size: 8rem;
}


@media (max-width: 1000px){
  .view {
    padding-left: 20px;
  }

  .big-size {
    font-size: 6rem;
  }
}

@media (max-width: 600px){
  .view {
    padding-left: 20px;
    left: 0;
  }

  .big-size {
    font-size: 3rem;
  }
}

@media (max-width: 500px) {
  .view {
    padding: 100px 0 0 0;
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .bg {
    background-size: 300vw auto;
  }

  .space-text, .self{
    display: flex;
    justify-content: center;
    width: 386px;
  }
}

@media (max-width: 400px) {

  .small-size {
    font-size: 1.5rem;
  }
  .big-size {
    font-size: 2.5rem;
  }
}

</style>
