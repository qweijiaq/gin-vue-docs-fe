import router from '../../router/index';
<template>
  <div class="menu">
    <a-menu
      @menu-item-click="clickMenu"
      :defaultSelectedKeys="defaultSelectedKeys"
      :defaultOpenKeys="defaultOpenKeys"
    >
      <template v-for="item in menus" :key="item.key">
        <a-menu-item :key="item.name" v-if="item.children.length === 0">
          <template #icon>
            <component :is="item.icon" />
          </template>
          {{ item.title }}
        </a-menu-item>

        <a-sub-menu :key="item.name" v-if="item.children.length !== 0">
          <template #icon>
            <component :is="item.icon"></component>
          </template>
          <template #title>{{ item.title }}</template>
          <a-menu-item v-for="child in item.children" :key="child.name">
            <template #icon>
              <component :is="child.icon"></component>
            </template>
            {{ child.title }}
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
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
import { ref, type Component } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

interface MenuType {
  key: string;
  title: string;
  icon?: Component;
  name?: string;
  children: MenuType[];
}

const menus: MenuType[] = [
  {
    key: "1",
    title: "首页",
    icon: IconHome,
    name: "home",
    children: [],
  },
  {
    key: "2",
    title: "个人中心",
    icon: IconUser,
    name: "center",
    children: [
      {
        key: "2_1",
        title: "个人信息",
        icon: IconInfo,
        name: "info",
        children: [],
      },
      {
        key: "2_2",
        title: "收藏列表",
        icon: IconStar,
        name: "collection",
        children: [],
      },
    ],
  },
  {
    key: "3",
    title: "权限管理",
    icon: IconSafe,
    name: "permission",
    children: [
      {
        key: "3_1",
        title: "用户列表",
        icon: IconUserGroup,
        name: "users",
        children: [],
      },
      {
        key: "3_2",
        title: "角色列表",
        icon: IconRobot,
        name: "roles",
        children: [],
      },
      {
        key: "3_3",
        title: "图片列表",
        icon: IconImage,
        name: "images",
        children: [],
      },
    ],
  },
  {
    key: "4",
    title: "网站管理",
    icon: IconSettings,
    name: "site",
    children: [
      {
        key: "4_1",
        title: "日志列表",
        icon: IconBook,
        name: "logs",
        children: [],
      },
      {
        key: "4_2",
        title: "站点配置",
        icon: IconTool,
        name: "config",
        children: [],
      },
    ],
  },
];

// clickMenu 点击侧边栏跳转路由
function clickMenu(key: string) {
  router.push({ name: key });
}

const defaultSelectedKeys = ref([route.name]);
const defaultOpenKeys = ref(route.matched[1].name);
</script>

<style lang="scss" scoped></style>
