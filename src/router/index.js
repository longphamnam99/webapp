import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home";
import Login from "@/views/user/login";
import Register from "@/views/user/register";
import Policy from "@/views/policy";
import { nextTick } from 'vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "Trang chủ" },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { title: "Đăng nhập" },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: { title: "Đăng ký" },
    },
    {
      path: "/policy",
      name: "policy",
      component: Policy,
      meta: { title: "Chính sách" },
    },
  ],
});

router.afterEach((to, from) => {
  nextTick(() => {
    if (to.meta.title) {
      document.title = process.env.VUE_APP_TITLE + " | " + to.meta.title || "Phần mềm hiệu quả";
    }
  });
});

export default router;
