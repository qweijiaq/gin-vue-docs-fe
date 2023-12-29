import { defineStore } from "pinia";
import type { themeType } from "@/type/type";
import { parseToken } from "@/utils/jwt";

export interface userInfoType {
  exp: number; // 过期时间
  iss: string;
  nickName: string; // 昵称
  roleID: number; // 角色 id
  userID: number; // 用户 id
  userName: string; // 用户名
  token: string;
}

const userInfo: userInfoType = {
  exp: 0,
  iss: "",
  nickName: "",
  roleID: 2,
  userID: 0,
  userName: "",
  token: "",
};

export const useStore = defineStore("useStore", {
  state() {
    return {
      theme: "", // 主题
      userInfo,
    };
  },

  actions: {
    setTheme(val: themeType) {
      this.theme = val;
      if (val === "dark") {
        document.documentElement.style.colorScheme = "dark";
        document.body.setAttribute("arco-theme", "dark");
      } else {
        document.documentElement.style.colorScheme = "light";
        document.body.removeAttribute("arco-theme");
      }
      localStorage.setItem("theme", val.toString());
    },

    setToken(token: string) {
      this.userInfo = parseToken(token);
      this.userInfo.token = token;
      // 持久化
      localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
    },

    loadToken() {
      const val: string | null = localStorage.getItem("userInfo");
      if (val === null) {
        return;
      }
      let payload = userInfo;
      try {
        payload = JSON.parse(val);
      } catch (e) {
        return;
      }
      // 判断是否过期
      let exp = Number(payload.exp) * 1000;
      let now = new Date().getTime();
      if (exp - now < 0) {
        return;
      }
      this.userInfo = payload;
    },
  },

  getters: {
    // 是否登录
    isLogin(): boolean {
      return this.userInfo.userID !== 0;
    },
  },
});
