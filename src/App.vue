<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores";

const store = useStore();

store.loadToken();
</script>

<style lang="scss"></style>
