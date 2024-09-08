<script setup>
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
</script>

<template>
<div class="main-view">
  <div class="view">
    <h1 class="space-text size2">WELCOME TO</h1>
    <h1 class="space-text size4">ANDONGNI'S SPACE</h1>
    <p><span class="self">我是<span class="self name">沈奕瑋</span>這裡是我的個人網站</span></p>
    <p><h3 class="self">正在學習遊戲開發</h3></p>

    <div class="show-project">
      <img class="show-project-img" src="../../../../public/main-view-img/crossing-show.jpeg" alt="">
      <div class="project-details">
        <p><h3 class="details-title">作品</h3></p>
        <hr class="line">
        <p class="details-text">2D俯視射擊遊戲</p>
        <p class="details-text">小遊戲</p>
        <p class="details-text">PC / Mobile</p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.main-view
{
  min-height: 85vh;
  max-width: 100vw;
  background-repeat: no-repeat;
  background-image: url("../../../../public/main-view-img/main_background.png");
  background-color: #6b6562;
  background-position: 80% 100%;
  background-size: 100vw auto;
}

.view {
  padding: 80px 0 0 80px;
  //justify-content: center;

}

.space-text {
  font-family: "Impact","JetBrains Mono NL",serif;
  font-style: italic;
  font-size: 2rem;
  //font-weight: bold;
  color: white;
  padding-bottom: 20px;
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


@media (max-width: 600px){
  .view {
    padding: 20px;
  }
  .show-project {
    padding-top: 5vh;
  }

  .size4 {
    font-size: 3rem;
  }

  .show-project-img {
    //margin-bottom: 20px;
    width: 200px;
    height: 200px;
    object-fit: cover;
    background-position: 60% 60%;
  }
}
</style>
