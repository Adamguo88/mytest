import { createRouter, createWebHashHistory } from "vue-router";
import MyPage from "../components/MyPage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: MyPage,
  },
  {
    path: "/searchdata/:id",
    name: "searchdata",
    component: () => import("@/components/SearchData.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: history,
});

export default router;
