<script setup lang="ts">
interface Props
{
  link: string;
  text: string;
  style: Record<string, string>;
}

const props: Props = defineProps<Props>();
</script>

<template>
  <router-link :to="link" class="go-button" :style="style">{{text}}</router-link>
</template>

<style scoped>
.go-button {
  border: var(--main-light-black-color) solid 1px;
  border-radius: 30px;
  color: var(--main-white-color);
  background-color: var(--main-drak-black-color);
  text-decoration: none;
  width: 150px;
  margin: 30px 50px;
  padding: 15px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: 0.2s;
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 0.2rem;
}

.go-button:hover {
  background-color: var(--main-white-color);
  color: var(--main-light-black-color);
  text-decoration: none;
}

@media (max-width: 600px) {
  .go-button {
    margin: 0 0 0 30px;
    width: 130px;
  }
}

@media (max-width: 400px) {
  .go-button {
    margin-left: 0;
    width: 100px;
    height: 30px;
    padding: 5px;
  }
}
</style>
