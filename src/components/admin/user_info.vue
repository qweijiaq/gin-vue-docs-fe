<template>
  <a-dropdown :popup-max-height="false">
    <a-button type="text">xxx<icon-down /></a-button>
    <template #content>
      <a-doption>个人信息</a-doption>
      <a-doption>用户列表</a-doption>
      <a-doption>角色列表</a-doption>
      <a-doption>日志列表</a-doption>
      <a-doption>退出登录</a-doption>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import { IconHome, IconDown } from "@arco-design/web-vue/es/icon";
</script>

<style lang="scss" scoped></style>
