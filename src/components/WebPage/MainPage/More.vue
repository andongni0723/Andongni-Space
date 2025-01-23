<script setup lang="ts">
import Button from "@/components/WebPage/Main/Button.vue";
import FadeInObserver from "@/components/Func/FadeInObserver.vue";
</script>

<template>
  <FadeInObserver>
    <div class="more">
      <div class="text-and-button">
        <h1 class="title-text">VIEW ALL PROJECT</h1>
        <Button class="go-button" style="" link="/all-project" text="所有專案" link-props=""/>
      </div>
      <div class="text-and-button reverse">
        <h1 class="title-text">ABOUT ME</h1>
        <Button class="go-button" style="" link="/about" text="關於我" link-props=""/>
      </div>
    </div>
  </FadeInObserver>
</template>



<style scoped>
.more {
  overflow: hidden;
}

.text-and-button {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 0;
}

.reverse{
  flex-direction: row-reverse;
}

.title-text {
  font-family: "Impact", "JetBrains Mono NL",serif;
  font-style: italic;
  font-size: 5rem;
  color: var(--main-white-color);
  margin-bottom: 30px;
  padding-top: 30px;
}

.button-text-left {
  font-family:  "bai jamjuree", "JetBrains Mono NL", sans-serif;
  padding-left: 10px;
}

.button-text-right{
  font-family:  "bai jamjuree", "JetBrains Mono NL", sans-serif;
  padding-right: 10px;
}

.go-button {
  border: var(--main-light-black-color) solid 1px;
  border-radius: 50px;
  color: var(--main-light-black-color);
  background-color: var(--main-white-color);
  width: 220px;
  margin: 30px 50px;
  padding: 15px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  transition: 0.2s;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 5px;
}

.go-button:hover {
  background-color: var(--main-drak-black-color);
  color: var(--main-white-color);
}

@media (max-width: 900px) {
  .text-and-button {
    flex-direction: column;
    align-items: center;
  }
}


@media (max-width: 600px) {
  .title-text {
    font-size: 3rem;
  }

}

</style>
