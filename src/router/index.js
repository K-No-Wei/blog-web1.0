import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      keepAlive: false,
    },
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "/friend",
        name: "friend",
        component: () => import("@/views/friend"),
      },
      {
        path: "/article",
        name: "/article",
        component: () => import("@/views/article"),
      },
      {
        path: '/category',
        name: 'category',
        component: () => import("@/views/category")
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
