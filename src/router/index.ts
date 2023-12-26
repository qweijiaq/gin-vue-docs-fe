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
      },
      children: [
        {
          path: "",
          name: "home",
          meta: {
            title: "",
          },
          component: () => import("@/views/admin/home/index.vue"),
        },
        {
          path: "center",
          name: "center",
          meta: {
            title: "个人中心",
          },
          children: [
            {
              path: "info",
              name: "info",
              component: () => import("@/views/admin/user/user_info.vue"),
              meta: {
                title: "个人信息",
              },
            },
            {
              path: "collection",
              name: "collection",
              component: () => import("@/views/admin/user/user_collect.vue"),
              meta: {
                title: "收藏列表",
              },
            },
          ],
        },
        {
          path: "permission",
          name: "permission",
          meta: {
            title: "权限管理",
          },
          children: [
            {
              path: "users",
              name: "users",
              component: () => import("@/views/admin/permission/user_list.vue"),
              meta: {
                title: "用户列表",
              },
            },
            {
              path: "roles",
              name: "roles",
              component: () => import("@/views/admin/permission/role_list.vue"),
              meta: {
                title: "角色列表",
              },
            },
            {
              path: "images",
              name: "images",
              component: () =>
                import("@/views/admin/permission/image_list.vue"),
              meta: {
                title: "图片列表",
              },
            },
          ],
        },
        {
          path: "site",
          name: "site",
          meta: {
            title: "网站管理",
          },
          children: [
            {
              path: "logs",
              name: "logs",
              component: () => import("@/views/admin/website/log_list.vue"),
              meta: {
                title: "日志管理",
              },
            },
            {
              path: "config",
              name: "config",
              component: () => import("@/views/admin/website/site_config.vue"),
              meta: {
                title: "站点配置",
              },
            },
          ],
        },
      ],
    },
  ],
});

export default router;
