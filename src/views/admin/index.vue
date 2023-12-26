<template>
  <div class="admin">
    <aside>
      <div class="logo">LOGO</div>
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
              ><template #icon><icon-user-group /></template
              >用户列表</a-menu-item
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
    </aside>
    <div class="main">
      <header>
        <div class="left">
          <a-breadcrumb>
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <a-breadcrumb-item>个人信息</a-breadcrumb-item>
            <a-breadcrumb-item>用户中心</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="right">
          <icon-home></icon-home>
          <icon-moon-fill></icon-moon-fill>
          <icon-sun-fill></icon-sun-fill>
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
        </div>
      </header>
      <div class="tabs">
        <span class="tab_item active">首页</span>
        <span class="tab_item">用户列表</span>
      </div>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  IconHome,
  IconSunFill,
  IconMoonFill,
  IconDown,
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

<style lang="scss" scoped>
.admin {
  display: flex;
}

aside {
  background-color: var(--color-bg-1);
  width: 240px;
  border-right: 1px solid var(--bg);

  > .logo {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(var(--arcoblue-2));
  }

  > .menu {
    width: 100%;
  }
}

.main {
  overflow-y: auto;
  width: calc(100vw - 240px);

  > header {
    height: 60px;
    background-color: var(--color-bg-1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .right {
      > svg {
        margin-right: 10px;
        cursor: pointer;
        font-size: 16px;
      }
    }
  }

  > .tabs {
    height: 30px;
    background-color: var(--color-bg-1);
    padding: 0 20px;
    border-top: 1px solid var(--bg);
    display: flex;
    align-items: center;

    .tab_item {
      background-color: var(--color-bg-1);
      border: 1px solid var(--bg);
      border-radius: 5px;
      height: 24px;
      display: flex;
      padding: 0 10px;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      cursor: pointer;
      &.active {
        color: white;
        background-color: rgb(var(--arcoblue-6));
      }
    }
  }

  > main {
    min-height: calc(100vh - 90px);
    background-color: var(--bg);
    padding: 20px;
  }
}
</style>
