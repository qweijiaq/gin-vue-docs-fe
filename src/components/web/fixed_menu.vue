<template>
  <a-trigger
    trigger="click"
    position="top"
    auto-fit-position
    :unmount-on-close="false"
  >
    <div class="fixed_menu">?</div>
    <template #content>
      <div class="fixed_menu_content">
        <div
          class="item"
          :title="item.title"
          @click="clickItem(item)"
          v-for="item in menuList"
        >
          <component :is="item.icon"></component>
        </div>
      </div>
    </template>
  </a-trigger>
</template>

<script setup lang="ts">
import {
  IconDashboard,
  IconUserGroup,
  IconSettings,
  IconExport,
} from "@arco-design/web-vue/es/icon";
import GvdTheme from "@/components/admin/theme.vue";
import type { Component } from "vue";
import type { Ref } from "vue";
import { ref } from "vue";
import router from "@/router";
import { logout } from "@/type/logout";

interface menuType {
  title: string;
  icon: Component;
  name: string;
}

const menuList: Ref<menuType[]> = ref([
  { title: "主题切换", icon: GvdTheme, name: "" },
  { title: "控制台", icon: IconDashboard, name: "home" },
  { title: "用户列表", icon: IconUserGroup, name: "users" },
  { title: "系统配置", icon: IconSettings, name: "config" },
  { title: "注销", icon: IconExport, name: "logout" },
]);

function clickItem(item: menuType) {
  if (item.name === "") return;

  if (item.name === "logout") {
    logout();
    return;
  }

  router.push({
    name: item.name,
  });
}
</script>

<style lang="scss" scoped>
.fixed_menu {
  position: fixed;
  right: 97px;
  bottom: 40px;
  width: 46px;
  height: 46px;
  background-color: var(--index_fixed_menu_bg);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-1);
  font-size: 20px;
  cursor: pointer;
}

.fixed_menu_content {
  background-color: var(--index_fixed_menu_bg);
  border-radius: 5px;
  overflow: hidden;
  width: 32px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .item {
    height: 32px;
    line-height: 32px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    color: var(--color-text-1);

    &:hover {
      background-color: var(--index_fixed_menu_bg_hover);
    }
  }
}
</style>
