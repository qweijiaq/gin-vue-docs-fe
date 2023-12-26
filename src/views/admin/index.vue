<template>
    <div class="admin">
        <aside>
            <div class="logo">LOGO</div>
            <div class="menu"></div>
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
                        <a-button type="text">xxx<icon-down/></a-button>
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
            <div class="tabs"></div>
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { IconHome, IconSunFill, IconMoonFill, IconDown } from '@arco-design/web-vue/es/icon';
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
        }

        > main {
            min-height: calc(100vh - 90px);
            background-color: var(--bg);
            padding: 20px;
        }
    }
</style>