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
import { logout } from "@/utils/logout";
import { useStore } from "@/stores/index";
import { shallowRef } from "vue";
import { watch } from "vue";

const store = useStore();

interface menuType {
  title: string;
  icon: Component;
  name: string;
}

const menuList: Ref<menuType[]> = ref([
  { title: "主题切换", icon: GvdTheme, name: "" },
]);

function getMenuList() {
  if (store.isLogin) {
    if (store.isAdmin) {
      menuList.value = [
        { title: "主题切换", icon: shallowRef(GvdTheme), name: "" },
        { title: "控制台", icon: shallowRef(IconDashboard), name: "home" },
        { title: "用户列表", icon: shallowRef(IconUserGroup), name: "users" },
        { title: "系统配置", icon: shallowRef(IconSettings), name: "logs" },
        { title: "注销退出", icon: shallowRef(IconExport), name: "logout" },
      ];
      return;
    }
    menuList.value = [
      { title: "主题切换", icon: shallowRef(GvdTheme), name: "" },
      { title: "控制台", icon: shallowRef(IconDashboard), name: "home" },
      { title: "注销退出", icon: shallowRef(IconExport), name: "logout" },
    ];
    return;
  }
  menuList.value = [
    { title: "主题切换", icon: shallowRef(GvdTheme), name: "" },
  ];
  return;
}

watch(
  () => store.userInfo.roleID,
  () => {
    getMenuList();
  },
  { immediate: true }
);

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
@/utils/logout
