<script setup lang="ts">
import Logo from "@/Icon/AndongniGame-Icon.vue"
import Icon from "@/Icon/Icon.vue";
import ResponsiveWatcher from "@/components/Func/ResponsiveWatcher.vue";
import {ref} from "vue";

</script>

<template>
  <div class="footer">
    <Logo class="logo"/>
    <div class="context">
      <div class="text">
        <p>Website made with <a class="fa-brands fa-vuejs vue-icon" href="https://cn.vuejs.org/"/></p>
      </div>
      <div class="github-group">
        <ResponsiveWatcher v-slot="rw">
          <div v-if="rw.width >= 600" class="icon">
            <i class="fa-brands fa-github fa-xl" style="color: #ffffff;"></i></div>
          <div v-else >
            <i class="fa-brands fa-github fa" style="color: #ffffff;"></i></div>
        </ResponsiveWatcher>
        <a class="github-link" href="https://github.com/andongni0723/Andongni-Space" target="_blank" rel="noopener noreferrer">andongni0723/Andongni-Space</a>
      </div>
    </div>
    <ResponsiveWatcher v-slot="rw">
      <div v-if="rw.width >= 600" class="icon">
        <Icon icon-src="fa-brands fa-facebook fa-xl" link="https://www.facebook.com/profile.php?id=100015788080240"/>
        <Icon icon-src="fa-brands fa-bilibili fa-xl" link="https://space.bilibili.com/543329750"/>
        <Icon icon-src="fa-brands fa-github fa-xl"   link="https://github.com/andongni0723"/>
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

.context {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text {
  color: var(--main-white-color);
  display: flex;
  font-family: "JetBrains Mono NL",sans-serif;
}

.github-group {
  margin-top: 20px;
  display: flex;
  gap: 5px;
  align-items: center;
}


.github-link {
  font-family: "JetBrains Mono NL", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: var(--main-white-color);
  text-decoration: underline;
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

  .github-link {
    font-size: 0.7rem;
    color: var(--main-white-color);
    text-decoration: underline;
  }
}
</style>
