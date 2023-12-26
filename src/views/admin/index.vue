<template>
    <div class="admin">
        <aside>
            <div class="logo">LOGO</div>
            <div class="menu"></div>
        </aside>
        <div class="main">
            <header>
                <div class="left"></div>
                <div class="right"></div>
            </header>
            <div class="tabs"></div>
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

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