import { createRouter, createWebHistory } from "vue-router";

import publicRoutes from "./public";

const routes = [...publicRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.afterEach((to) => {
//   console.log("After navigation to:", to.fullPath);
//   const title = to.meta.title ? `${to.meta.title} | woorkroom` : "woorkroom";
//   document.title = title;
//   // nprogress.done();
// });

// router.onError((error) => {
//   console.error("Router error:", error);
//   // nprogress.done();
// });

export default router;
