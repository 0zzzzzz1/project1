<script setup>
import { ref } from 'vue'
const nacActibe = ref(true)
</script>

<template>
  <header>
    <p @click="nacActibe = !nacActibe" >menu</p>
    <h1>project1</h1>
  </header>
  <main>
    <nav v-if="nacActibe">
      <a href="/about">About Me</a>
      <a href="/projects">Projects</a>
      <a href="/skills">Skills</a>
      <a href="/contact">Contact</a>
    </nav>
    <router-view />
  </main>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  padding: 8px 8px 8px 12px;
  border-bottom: 1px solid $gray-200;
  @include display(flex, row, space-between, center);
  .material-symbols-outlined {
    @include font(20, 100, $gray-500);
    cursor: pointer;
  }
  p {
    cursor: pointer;
  }
}
main {
  width: 100%;
  height: 100vh;
  @include display(flex, row nowrap, null, null);
  nav {
    border-right: 1px solid $gray-200;
    width: fit-content;
    min-width: 10vw;
    height: 100vh;
    padding: 8px 8px 8px 12px;
    gap: 4px;
    @include display(flex, column, null, null);
    a {
      display: block;
      @include font(14, 400, $gray-500);
    }
  }
}
</style>
