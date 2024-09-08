<script setup lang="ts">
import Logo from "@/Icon/AndongniGame-Icon.vue"
import Icon from "@/Icon/Icon.vue";
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
import {ref} from "vue";

</script>

<template>
  <div class="footer">
    <Logo class="logo"/>
    <div class="text">
      <p>Website made with <a class="fa-brands fa-vuejs vue-icon" href="https://cn.vuejs.org/"/></p>
    </div>
    <ResponsiveWatcher v-slot="isMobile">
      <div v-if="!isMobile" class="icon">
        <Icon icon-src="fa-brands fa-facebook fa-2xl" link="https://www.facebook.com/profile.php?id=100015788080240"/>
        <Icon icon-src="fa-brands fa-bilibili fa-2xl" link="https://space.bilibili.com/543329750"/>
        <Icon icon-src="fa-brands fa-github fa-2xl"   link="https://github.com/andongni0723"/>
      </div>
    </ResponsiveWatcher>
  </div>
</template>

<style scoped>

.footer{
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0;
  gap: 1rem;
}
.text {
  color: var(--main-white-color);
  display: flex;
  font-family: "JetBrains Mono NL",sans-serif;
}


.vue-icon {
  color: #53d0b1;
  text-decoration: none;
}

.icon {
  display: flex;
  gap: 1rem;
}

@media (max-width: 600px) {
  .footer {
    flex-direction: column;
  }

  .text {
    font-size: 0.7rem;
  }
}
</style>
