<script setup>
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
</script>

<template>
<div class="main-view">
  <div class="bg"></div>
  <div class="view">
    <h1 class="space-text size2">WELCOME TO</h1>
    <h1 class="space-text size4">ANDONGNI'S SPACE</h1>
    <!--<p><span class="self">我是<span class="self name">沈奕瑋</span>這裡是我的個人網站</span></p>-->
    <p class="self">我是沈奕瑋 這裡是我的個人網站 </p>
    <p><h3 class="self">正在學習遊戲開發</h3></p>

    <ResponsiveWatcher v-slot="event">
      <div v-if="!event.isPhone" class="show-project">
        <img class="show-project-img" src="../../../../public/main-view-img/crossing-show.jpeg" alt="">
        <div class="project-details">
          <p><h3 class="details-title">作品</h3></p>
          <hr class="line">
          <p class="details-text">2D俯視射擊遊戲</p>
          <p class="details-text">小遊戲</p>
          <p class="details-text">PC / Mobile</p>
        </div>
      </div>
    </ResponsiveWatcher>
  </div>
</div>
</template>

<style scoped>
.main-view
{
  position: relative;
  height: calc(100vh - 3rem);
  width: 100vw;
}

.bg {
  position: relative;
  height: calc(100vh - 3rem);
  width: 100vw;
  background-repeat: no-repeat;
  background-image: url("../../../../public/main-view-img/main_background_high.png");
  background-color: #6b6562;
  background-position: 80% 100%;
  background-size: 200vw auto;
  opacity: 70%;
}

.view {
  position: absolute;
  top: 0;
  left: 0;
  padding: 80px 0 0 80px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.space-text {
  font-family: "Impact","JetBrains Mono NL",serif;
  //font-style: italic;
  font-size: 2rem;
  color: white;
  padding-bottom: 20px;
  text-shadow: #433d3a 0 0.1em 0;
}

p {
  padding-bottom: 10px;
}

.self {
  font-family: "Apple Braille",sans-serif;
  color: #a6a6a6;
}

.name {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 5px 0 5px;
}

.show-project {
  padding-top: 20vh;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.show-project-img {
  width: 370px;
  height: 233px;
  border-radius: 20px;
}


.details-title {
  font-family: "Apple Braille",sans-serif;
  font-weight: bold;
  color: white;
  font-size: 1.3rem;
}

.line
{
  width: 150px;
  margin: 10px  0 20px 0;
  color: white;
}

.details-text {
  font-family: "bai jamjuree",sans-serif;
  color: white;
  letter-spacing: 2px;
  line-height: 25px;
}

.size2 {
  font-size: 2rem;
}

.size4 {
  font-size: 4rem;
}

@media (max-width: 700px) {
  .show-project-img {
    //margin-bottom: 20px;
    width: 200px;
    height: 200px;
    object-fit: cover;
    background-position: 60% 60%;
  }
}

@media (max-width: 600px){
  .view {
    padding-left: 20px;
  }

  .size4 {
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

  .size2 {
    font-size: 1.5rem;
  }
  .size4 {
    font-size: 2.5rem;
  }

  .self {
    font-size: 0.8rem;
  }
}

</style>
