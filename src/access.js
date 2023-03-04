import store from "@/store";
import router from "./router";
import { get_token } from "@/utils/auth";


const hasToken = get_token();
router.beforeEach(async (to, from, next) => {
  if (hasToken) {
    if (to.path === "/login" || to.path === "/register") {
      next({ path: "/" });
    } else {
      await store.dispatch("user/info");
      next();
    }
  }
  next();
});