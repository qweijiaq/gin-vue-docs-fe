<template>
  <div class="admin">
    <aside :class="{ isCollapsed: isCollapsed }">
      <div class="logo">LOGO</div>
      <gvd-menu @collapse="onCollapse" />
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
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
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

const isCollapsed = ref(false);

function onCollapse(value: boolean) {
  // true 代表折叠
  // false 代表展开
  isCollapsed.value = value;
}
</script>

<style lang="scss">
.admin {
  display: flex;
  height: 100vh;

  aside {
    background-color: var(--color-bg-1);
    width: 240px;
    border-right: 1px solid var(--bg);
    transition: all 0.3s;
    height: 100vh;
    overflow-y: auto;

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

      .arco-menu {
        position: static;
      }

      .arco-menu-collapse-button {
        opacity: 0;
        transition: all 0.3s;
        position: absolute;
        left: 240px;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &:hover {
      .arco-menu-collapse-button {
        opacity: 1;
      }
    }
  }

  aside.isCollapsed {
    width: 48px;

    .arco-menu-collapse-button {
      left: 48px;
    }

    ~ .main {
      width: calc(100vw - 48px);
    }
  }

  .main {
    overflow-y: auto;
    width: calc(100vw - 240px);
    transition: all 0.3s;
    overflow-x: hidden;

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

    > main {
      min-height: calc(100vh - 90px);
      background-color: var(--bg);
      padding: 20px;

      .view {
        background-color: var(--color-bg-1);
        padding: 20px;
        border-radius: 5px;
        min-height: calc(100vh - 130px);
        color: var(--color-text-1);
      }
    }
  }
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-enter-active {
  transform: translateX(-30px);
  opacity: 0;
}

.fade-enter-to {
  transform: translateX(0px);
  opacity: 1;
}

.fade-leave-active,
.fade-enter-active {
  transition: all 0.3s ease-out;
}
</style>
