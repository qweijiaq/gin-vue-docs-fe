<template>
  <div class="admin">
    <aside>
      <div class="logo">LOGO</div>
      <gvd-menu />
    </aside>
    <div class="main">
      <header>
        <div class="left">
          <gvd-bread />
        </div>
        <div class="right">
          <icon-home @click="goHome" />
          <gvd-theme />
          <gvd-user-info />
        </div>
      </header>
      <gvd-tabs />
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import GvdMenu from "@/components/admin/menu.vue";
import GvdBread from "@/components/admin/bread.vue";
import GvdTheme from "@/components/admin/theme.vue";
import GvdUserInfo from "@/components/admin/user_info.vue";
import GvdTabs from "@/components/admin/tabs.vue";

import { IconHome } from "@arco-design/web-vue/es/icon";

// goHome 去首页
function goHome() {
  router.push({ name: "index" });
}
</script>

<style lang="scss">
.admin {
  display: flex;
}

aside {
  background-color: var(--color-bg-1);
  width: 240px;
  border-right: 1px solid var(--bg);

  > .logo {
    color: rgb(var(--arcoblue-6));
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
        color: var(--color-text-1);
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
      color: var(--color-text-1);
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
