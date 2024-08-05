import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";
import Intro from "@/views/Intro.vue";
import Tutorial from "@/views/Tutorial.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/intro",
    component: Intro,
  },
  {
    path: "/tutorial",
    component: Tutorial,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
