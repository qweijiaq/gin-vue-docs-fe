import { defineStore } from "pinia";
import type { themeType } from "@/type/type";

export const useStore = defineStore("useStore", {
  state() {
    return {
      theme: "", // 主题
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
  },
});
