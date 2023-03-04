import request from "@/utils/request";
import { auth } from "@/helpers/auth.js";

export default {
    login(data) {
        return request({
            url: "/user/login",
            method: "post",
            data
        });
    },
    register(data) {
        return request({
            url: "/user/register",
            method: "post",
            data
        });
    },
    info() {
        return request({
            url: "/user/info",
            method: "get",
            headers: auth(),
        });
    },
}