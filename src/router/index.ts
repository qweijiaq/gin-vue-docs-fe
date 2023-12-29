import { useStore } from "@/stores";
import { Message } from "@arco-design/web-vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "",
      children: [
        {
          path: "",
          name: "index",
          component: () => import("@/views/web/index.vue"),
        },
      ],
    },
    {
      path: "/document/:id",
      name: "document",
      component: () => import("@/views/web/document.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/views/admin/index.vue"),
      meta: {
        title: "首页",
        is_login: true,
      },
      children: [
        {
          path: "",
          name: "home",
          meta: {
            title: "",
            is_login: true,
          },
          component: () => import("@/views/admin/home/index.vue"),
        },
        {
          path: "center",
          name: "center",
          meta: {
            title: "个人中心",
            is_login: true,
          },
          children: [
            {
              path: "info",
              name: "info",
              component: () => import("@/views/admin/user/user_info.vue"),
              meta: {
                title: "个人信息",
                is_login: true,
              },
            },
            {
              path: "collection",
              name: "collection",
              component: () => import("@/views/admin/user/user_collect.vue"),
              meta: {
                title: "收藏列表",
                is_login: true,
              },
            },
          ],
        },
        {
          path: "permission",
          name: "permission",
          meta: {
            title: "权限管理",
            is_login: true,
            is_admin: true,
          },
          children: [
            {
              path: "users",
              name: "users",
              component: () => import("@/views/admin/permission/user_list.vue"),
              meta: {
                title: "用户列表",
                is_login: true,
                is_admin: true,
              },
            },
            {
              path: "roles",
              name: "roles",
              component: () => import("@/views/admin/permission/role_list.vue"),
              meta: {
                title: "角色列表",
                is_login: true,
                is_admin: true,
              },
            },
            {
              path: "images",
              name: "images",
              component: () =>
                import("@/views/admin/permission/image_list.vue"),
              meta: {
                title: "图片列表",
                is_login: true,
                is_admin: true,
              },
            },
          ],
        },
        {
          path: "site",
          name: "site",
          meta: {
            title: "网站管理",
            is_login: true,
            is_admin: true,
          },
          children: [
            {
              path: "logs",
              name: "logs",
              component: () => import("@/views/admin/website/log_list.vue"),
              meta: {
                title: "日志管理",
                is_login: true,
                is_admin: true,
              },
            },
            {
              path: "config",
              name: "config",
              component: () => import("@/views/admin/website/site_config.vue"),
              meta: {
                title: "站点配置",
                is_login: true,
                is_admin: true,
              },
            },
          ],
        },
      ],
    },
  ],
});

// 路由前置导航守卫
// 如果没有这个，普通用户也可以通过直接 URL 导航到管理员界面，不安全
router.beforeEach((to, from, next) => {
  const store = useStore();
  if (to.meta.is_login && !store.isLogin) {
    Message.warning("请先登录");
    router.push({ name: from.name as string });
    return;
  }
  if (to.meta.is_admin && !store.isAdmin) {
    Message.warning("权限不足");
    router.push({ name: from.name as string });
    return;
  }
  next();
});

export default router;
