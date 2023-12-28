<template>
  <div @click="setTheme">
    <icon-moon-fill v-if="store.theme === ''" />
    <icon-sun-fill v-if="store.theme === 'dark'" />
  </div>
</template>

<script setup lang="ts">
import { IconSunFill, IconMoonFill } from "@arco-design/web-vue/es/icon";
import { useStore } from "@/stores";

const store = useStore();

// setTheme 主题切换
function setTheme() {
  if (document.body.hasAttribute("arco-theme")) {
    store.setTheme("");
    document.body.removeAttribute("arco-theme");
    return;
  }
  store.setTheme("dark");
  document.body.setAttribute("arco-theme", "dark");
}
</script>

<style lang="scss" scoped></style>
