<template>
  <a-modal
    width="600px"
    :visible="props.visible"
    :footer="false"
    @cancel="close"
    modal-class="login_modal"
  >
    <div class="left">
      <div class="head">欢迎来到文档系统</div>
      <div class="body">
        <ul>
          <li>新增角色管理</li>
          <li>新增黑夜模式</li>
          <li>更便捷的角色 - 文档管理</li>
          <li>更细化的文档访问控制</li>
          <li>更可观的日志管理</li>
          <li>编写文档 - 所见即所得</li>
          <li>前后端完全分离，前端支持 Mock</li>
          <li>......</li>
        </ul>
        <!-- <div class="svg">
          <img src="/images/undraw_new_year_2023_pfnc.svg" alt="" />
        </div> -->
      </div>
    </div>
    <div class="right">
      <div class="head">
        <h2>登录文档系统</h2>
        <div class="close" @click="close">
          <IconClose></IconClose>
        </div>
      </div>
      <div class="body">
        <a-form
          ref="formRef"
          :model="form"
          :label-col-props="{ span: 0, offset: 0 }"
          :wrapper-col-props="{ span: 24, offset: 0 }"
        >
          <a-form-item
            field="userName"
            :rules="[{ required: true, message: '请输入用户名' }]"
            :validate-trigger="['blur']"
          >
            <a-input v-model="form.userName" placeholder="用户名" />
          </a-form-item>
          <a-form-item
            field="password"
            :rules="[{ required: true, message: '请输入密码' }]"
            :validate-trigger="['blur']"
          >
            <a-input
              v-model="form.password"
              type="password"
              placeholder="密码"
            />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" style="width: 100%" @click="login"
              >登录</a-button
            >
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
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { IconClose } from "@arco-design/web-vue/es/icon";
import { loginApi, type LoginRequest } from "@/api/user";
import { Message } from "@arco-design/web-vue";
import { useStore } from '../../stores/index';

const store = useStore();

const form: LoginRequest = reactive({
  userName: "",
  password: "",
});

const props = defineProps(["visible"]);
const emits = defineEmits(["update:visible"]);

function close() {
  emits("update:visible", false);

  formRef.value.resetFields(["userName", "password"]);
  formRef.value.clearValidate(["userName", "password"]);
}

const formRef = ref();

async function login() {
  let _res = await formRef.value.validate();
  if (_res !== undefined) {
    return;
  }
  let res = await loginApi(form);
  if (res.code !== 0) {
    Message.error(res.msg);
    return;
  }
  store.setToken(res.data);
  Message.success("登录成功");
  close();
}
</script>

<style lang="scss">
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
      border-right: 1px solid var(--bg);
      height: 100%;
      position: relative;

      .head {
        font-size: 16px;
        font-weight: 600;
        padding: 25px 20px;
        border-bottom: 1px solid #9f9eaa;
      }

      ul {
        list-style: none;
        padding: 25px 20px;
        color: var(--color-text-2);
        line-height: 1.5rem;
      }

      .svg {
        right: 0;
        top: 10px;
        position: absolute;

        img {
          width: 100%;
          height: 90px;
        }
      }
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
        }

        .close {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }
      }

      .body {
        margin: 10px 0 0 0;
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
