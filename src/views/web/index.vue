<template>
  <div class="index_view">
    <div class="banner" :style="{ background: activeBannerColor }">
      <div class="head">
        <div class="banner_logo">
          <img src="https://skyao.io/learning-go/images/logo.png" alt="" />
        </div>
        <h1 class="banner_h1">
          <a href="javascript:void(0)">
            <strong>GopherDocs</strong>
          </a>
        </h1>
        <ul class="banner_desc">
          <li>
            <strong>个人知识库</strong
            >，旨在记录一些学习笔记、读书笔记、视频笔记等
          </li>
          <li>
            网站从设计上借鉴了
            <a href="https://docsify.js.org/#/">docsify</a
            >，是一个前后端分离的项目
          </li>
          <li>
            前端使用 <strong>Vue3</strong> 框架，后端采用 Go 语言
            <strong>Gin</strong> 框架
          </li>
          <li>分为前台、后台、后端、移动端共四个部分</li>
          <li>
            👉
            <a href="https://github.com/qweijiaq/gin-vue-docs-fe">源码地址</a>
          </li>
        </ul>
        <div class="banner_images"></div>
        <a-modal
          width="600px"
          v-model:visible="visible"
          :footer="false"
          modal-class="login_modal"
        >
          <div class="left"></div>
          <div class="right">
            <div class="head">
              <h2>登录知识库</h2>
              <div class="close">X</div>
            </div>
            <div class="body">
              <a-form
                :model="form"
                :label-col-props="{ span: 0, offset: 0 }"
                :wrapper-col-props="{ span: 24, offset: 0 }"
              >
                <a-form-item field="username">
                  <a-input v-model="form.username" placeholder="用户名" />
                </a-form-item>
                <a-form-item field="password">
                  <a-input
                    v-model="form.password"
                    type="password"
                    placeholder="密码"
                  />
                </a-form-item>
                <a-form-item>
                  <a-button type="primary" style="width: 100%">登录</a-button>
                </a-form-item>
                <a-form-item>
                  <span class="desc">说明</span>
                </a-form-item>
                <a-form-item>
                  <div class="desc_content">
                    <div><strong>首次登录将自动创建账号</strong></div>
                    <div>有任何问题请联系：2112025700(QQ)</div>
                  </div>
                </a-form-item>
              </a-form>
            </div>
          </div>
        </a-modal>
        <div class="banner_btns">
          <a href="javascript:void (0)" class="banner_go_btn">Go</a>
          <a
            href="javascript:void (0)"
            class="banner_login_btn"
            @click="visible = true"
            >登录</a
          >
        </div>
        <div class="banner_btn_login"><icon-double-down /></div>
      </div>
    </div>

    <div class="docs_view"></div>

    <gvd-fixed-theme />
  </div>
</template>

<script setup lang="ts">
import { IconDoubleDown } from "@arco-design/web-vue/es/icon";
import GvdFixedTheme from "@/components/web/fixed_menu.vue";
import { useStore } from "@/stores";
import { watch } from "vue";
import { ref } from "vue";
import { Random } from "mockjs";

const store = useStore();

interface BannerColorType {
  "": string[];
  dark: string[];
}

const bannerColor: BannerColorType = {
  "": [
    "linear-gradient(to left bottom, #CCDAEE 0%, #D0F0CF 100%)",
    "linear-gradient(to left bottom, rgb(173,240,255) 0%, rgb(246,255,189)  100%)",
    "linear-gradient(to left bottom, rgb(194,244,255) 0%, rgb(173,177,255)  100%)",
  ],
  dark: [
    "linear-gradient(25deg, #2a2455, #403a72, #585190, #7069b0)",
    "linear-gradient(21deg, #1f0e6a, #38198f, #5224b6, #6c30df)",
    "linear-gradient(25deg, #482d5c, #4b547d, #447c9f, #23a5c2)",
    "linear-gradient(25deg, #07203f, #1c464c, #257057, #259c61)",
  ],
};

const activeBannerColor = ref(
  "linear-gradient(to left bottom, #CCDAEE 0%, #D0F0CF 100%)"
);

const visible = ref(false);

const form = ref({
  username: "",
  password: "",
});

watch(
  () => store.theme,
  () => {
    activeBannerColor.value = Random.pick(
      bannerColor[store.theme as keyof BannerColorType]
    );
  },
  { immediate: true }
);
</script>

<style lang="scss">
.index_view {
  font-family: "Adobe Source Sans Pro", sans-serif;
  .banner {
    width: 100%;
    height: 100vh;
    position: relative;

    .head {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      .banner_logo {
        text-align: center;
        img {
          width: 160px;
          height: 160px;
          border-radius: 50%;
        }
      }

      .banner_h1 {
        text-align: center;
        font-size: 38px;
        margin: 20px 0;
        > a {
          color: var(--index_color);
        }
      }

      .banner_desc {
        list-style: none;
        padding: 0;
        line-height: 1.5rem;
        color: var(--index_text_color);
        li {
          text-align: center;
        }
      }

      .banner_btns {
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;

        > a {
          height: 50px;
          width: 100px;
          border: 1px solid var(--index_color);
          border-radius: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--index_color);
          font-size: 14px;
        }

        .banner_login_btn {
          background-color: var(--index_color);
          color: var(--bg);
        }
      }

      .banner_btn_login {
        text-align: center;
        margin-top: 20px;

        svg {
          font-size: 25px;
          color: var(--index_color);
          cursor: pointer;
        }
      }
    }
  }

  .docs_view {
    min-height: 100vh;
    width: 100%;
  }
}

.login_modal {
  .arco-modal-header {
    display: none;
  }

  .arco-modal-body {
    display: flex;
    padding: 0;
    height: 380px;

    .left {
      width: 50%;
      height: 100%;
      border-right: 1px solid var(--bg);
    }

    .right {
      width: 50%;
      height: 100%;

      .head {
        display: flex;
        justify-content: center;
        position: relative;
        border-bottom: 1px solid var(--bg);

        h2 {
          margin: 10px 0;
          font-size: 20px;
          color: var(--color-text-1);
        }

        .close {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 20px;
        }
      }

      .body {
        margin: 10px 0;
        padding: 20px;

        .desc {
          width: 100%;
          font-size: 12px;
          color: var(--color-text-2);
          display: flex;
          align-items: center;
          text-align: center;

          &::before {
            width: 45%;
            height: 1px;
            background-color: var(--bg);
            content: "";
            display: inline-block;
          }

          &::after {
            width: 45%;
            height: 1px;
            background-color: var(--bg);
            content: "";
            display: inline-block;
          }
        }

        .desc_content {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
      }
    }
  }
}
</style>
