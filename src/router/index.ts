import { createWebHistory, createRouter } from "vue-router";

import Intro from "@/views/Intro.vue";

const routes = [
  { path: "/", redirect: "/intro" },
  {
    path: "/intro",
    component: Intro,
    meta: { transition: "long-fade" },
  },
  {
    path: "/tutorial",
    component: () => import("@/views/Tutorial.vue"),
  },
  {
    path: "/home",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        id: 0,
        path: "main",
        component: () => import("@/views/homeViews/Main.vue"),
      },
      {
        id: 1,
        path: "battles",
        component: () => import("@/views/homeViews/Battles.vue"),
      },
      {
        id: 2,
        path: "friends",
        component: () => import("@/views/homeViews/Friends.vue"),
      },
      {
        id: 3,
        path: "options",
        component: () => import("@/views/homeViews/Options.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
