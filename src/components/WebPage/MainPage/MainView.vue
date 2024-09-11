<script setup lang="ts">
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
import ScrollingPicture from "@/components/WebPage/ScrollingPicture.vue";
// import video from "/public/background.mov"

// const videoLink = "https://9e63f79e0f405cb3063048fc5025a0b8.r2.cloudflarestorage.com/andongni-space-website/Andongni-space-main.mov";

// 定義接口來描述 API 響應的結構
interface FileResponse {
  url: string;
}

// 設置變數類型
// const bucketName: string = 'your-bucket-name';
// const fileName: string = 'your-video-file.mp4';
// const cloudflareAccountId: string = 'your-account-id';
// const cloudflareApiToken: string = '9e63f79e0f405cb3063048fc5025a0b8';

const options = {
  method: 'GET',
  mode: 'no-cors',
  headers: {'Content-Type': 'application/json', Authorization: 'Bearer cfOCqJZkbPI2JViMfELzHNxn0_uFgil7zQUcglJo',}
};

// const file: FileResponse;
fetch('https://api.cloudflare.com/client/v4/accounts/9e63f79e0f405cb3063048fc5025a0b8/r2/andongni-space-website', options)
    .then(response => console.log(response))
    .catch(err => console.error(err));

// async function getFileUrl(): Promise<void> {
//   try {
//     const response = await fetch(`https://r2.cloudflarestorage.com/andongni-space-website/Andongni-space-main.mov`, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${cloudflareApiToken}`,
//         'Content-Type': 'application/json'
//       }
//     });
//
//     if (response.ok) {
//       const data: FileResponse = await response.json();
//       console.log(`File URL: ${data.url}`);
//     } else {
//       console.error('Failed to fetch file URL');
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }
//
// getFileUrl();

</script>

<template>
<div class="main-view">
  <!--<div class="bg"></div>-->
  <div class="bg">
    <video autoplay muted loop playsinline class="background-video">
      <source src="https://pub-7b9b4f91e31343e7995a6999a1b601b9.r2.dev/Andongni-space-main.mov" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="view">
    <h1 class="space-text size2">WELCOME TO</h1>
    <h1 class="space-text size4">ANDONGNI'S SPACE</h1>
    <!--<p><span class="self">我是<span class="self name">沈奕瑋</span>這裡是我的個人網站</span></p>-->
    <!--<p class="self">我是沈奕瑋 這裡是我的個人網站 </p>-->
    <!--<p><h3 class="self">正在學習遊戲開發</h3></p>-->

    <!--<ResponsiveWatcher v-slot="event">-->
    <!--  <div v-if="!event.isPhone" class="show-project">-->
    <!--    <img class="show-project-img" src="../../../../public/main-view-img/crossing-show.jpeg" alt="">-->
    <!--    <div class="project-details">-->
    <!--      <p><h3 class="details-title">作品</h3></p>-->
    <!--      <hr class="line">-->
    <!--      <p class="details-text">2D俯視射擊遊戲</p>-->
    <!--      <p class="details-text">小遊戲</p>-->
    <!--      <p class="details-text">PC / Mobile</p>-->
    <!--    </div>-->
    <!--  </div>-->
    <!--</ResponsiveWatcher>-->
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

/*
.bg {
  position: relative;
  height: calc(100vh - 3rem);
  width: 100vw;
  background-repeat: no-repeat;
  //background-image: url("../../../../public/main-view-img/main_background_high.png");
  //background-color: #6b6562;
  background: #0f0c29;
  background: -webkit-linear-gradient(to bottom, #24243e, #302b63, var(--main-drak-black-color));
  background: linear-gradient(to bottom, #24243e, #302b63,var(--main-drak-black-color));

  background-position: 80% 100%;
  background-size: 200vw auto;
  opacity: 70%;
}
*/

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
  filter: saturate(20%) ;
  opacity: 50%;
}

.view {
  position: absolute;
  top: 10vh;
  left: 0;
  padding: 80px 0 0 80px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 20;
}

.space-text {
  font-family: Impact, "JetBrains Mono", sans-serif;
  //font-style: italic;
  font-size: 2rem;
  color: white;
  padding-bottom: 20px;
  //text-shadow: #433d3a 0.1em 0.1em 0;
}

p {
  padding-bottom: 10px;
}

.self {
  font-family: "Apple Braille",sans-serif;
  color: #a6a6a6;
}

.picture {
  margin-top: 40vh;
  opacity: 80%;
  z-index: 1;
  transition: opacity 0.3s ease;
}

.picture:hover {
  opacity: 50%;
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
  font-size: 5rem;
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
