import { type RouteRecordRaw } from "vue-router";

const publicRoute: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "Home",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/project",
    name: "Project.index",
    component: () => import("@/views/project/index.vue"),
  },
];

export default publicRoute;
