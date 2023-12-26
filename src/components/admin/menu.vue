<template>
  <div class="menu">
    <a-menu>
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
          <a-menu-item v-for="child in item.children" :key="child.key">
            <template #icon>
              <component :is="child.icon"></component>
            </template>
            {{ child.title }}
          </a-menu-item>
        </a-sub-menu>
      </template>

      <!-- <a-sub-menu key="1">
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
      </a-sub-menu> -->
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

interface MenuType {
  key: string;
  title: string;
  icon?: Component;
  name?: string;
  children?: MenuType[];
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
    name: "home",
    children: [
      {
        key: "2_1",
        title: "个人信息",
        icon: IconInfo,
        name: "home",
        children: [],
      },
      {
        key: "2_2",
        title: "收藏列表",
        icon: IconStar,
        name: "home",
        children: [],
      },
    ],
  },
  {
    key: "3",
    title: "权限管理",
    icon: IconSafe,
    name: "home",
    children: [
      {
        key: "3_1",
        title: "用户列表",
        icon: IconUserGroup,
        name: "home",
        children: [],
      },
      {
        key: "3_2",
        title: "角色列表",
        icon: IconRobot,
        name: "home",
        children: [],
      },
      {
        key: "3_3",
        title: "图片列表",
        icon: IconImage,
        name: "home",
        children: [],
      },
    ],
  },
  {
    key: "4",
    title: "网站管理",
    icon: IconSettings,
    name: "home",
    children: [
      {
        key: "4_1",
        title: "日志列表",
        icon: IconBook,
        name: "home",
        children: [],
      },
      {
        key: "4_2",
        title: "站点配置",
        icon: IconTool,
        name: "home",
        children: [],
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
