<template>
  <icon-moon-fill v-if="theme === ''" @click="setTheme" />
  <icon-sun-fill v-if="theme === 'dark'" @click="setTheme" />
</template>

<script setup lang="ts">
import { IconSunFill, IconMoonFill } from "@arco-design/web-vue/es/icon";
import type { Ref } from "vue";
import { ref } from "vue";

const theme: Ref<"" | "dark"> = ref("");

// setTheme 主题切换
function setTheme() {
  if (document.body.hasAttribute("arco-theme")) {
    theme.value = "";
    document.body.removeAttribute("arco-theme");
    return;
  }
  theme.value = "dark";
  document.body.setAttribute("arco-theme", "dark");
}
</script>

<style lang="scss" scoped></style>
