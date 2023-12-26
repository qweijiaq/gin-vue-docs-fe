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
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/admin/home/index.vue"),
        },
        {
          path: "center",
          name: "center",
          children: [
            {
              path: "info",
              name: "info",
              component: () => import("@/views/admin/user/user_info.vue"),
            },
            {
              path: "collection",
              name: "collection",
              component: () => import("@/views/admin/user/user_collect.vue"),
            },
          ],
        },
        {
          path: "permission",
          name: "permission",
          children: [
            {
              path: "users",
              name: "users",
              component: () => import("@/views/admin/permission/user_list.vue"),
            },
            {
              path: "roles",
              name: "roles",
              component: () => import("@/views/admin/permission/role_list.vue"),
            },
            {
              path: "images",
              name: "images",
              component: () =>
                import("@/views/admin/permission/image_list.vue"),
            },
          ],
        },
        {
          path: "site",
          name: "site",
          children: [
            {
              path: "logs",
              name: "logs",
              component: () => import("@/views/admin/website/log_list.vue"),
            },
            {
              path: "config",
              name: "config",
              component: () => import("@/views/admin/website/site_config.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
