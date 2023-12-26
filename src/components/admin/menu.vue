<template>
  <div class="menu">
    <a-menu>
      <a-sub-menu key="1">
        <template #icon><icon-home /></template>
        <template #title>首页</template>
      </a-sub-menu>
      <a-sub-menu key="2">
        <template #icon><icon-user /></template>
        <template #title>个人中心</template>
        <a-menu-item key="2_1"
          ><template #icon><icon-info /></template>个人信息</a-menu-item
        >
        <a-menu-item key="2_2"
          ><template #icon><icon-star /></template>收藏列表</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="3">
        <template #icon><icon-safe /></template>
        <template #title>权限管理</template>
        <a-menu-item key="3_1"
          ><template #icon><icon-user-group /></template>用户列表</a-menu-item
        >
        <a-menu-item key="3_2"
          ><template #icon><icon-robot /></template>角色列表</a-menu-item
        >
        <a-menu-item key="3_3"
          ><template #icon><icon-image /></template>图片列表</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="4">
        <template #icon><icon-settings /></template>
        <template #title>网站管理</template>
        <a-menu-item key="4_1"
          ><template #icon><icon-book /></template>日志列表</a-menu-item
        >
        <a-menu-item key="4_2"
          ><template #icon><icon-tool /></template>站点配置</a-menu-item
        >
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import {
  IconHome,
  IconUser,
  IconSettings,
  IconSafe,
  IconUserGroup,
  IconRobot,
  IconImage,
  IconInfo,
  IconStar,
  IconBook,
  IconTool,
} from "@arco-design/web-vue/es/icon";
</script>

<style lang="scss" scoped></style>
