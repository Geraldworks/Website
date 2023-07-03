import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        el: to.hash,
        top: 100,
        behavior: "smooth",
      };
    }
  },
});

export default router;
