import axios from "axios";
import store from "@/store";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 100000,
});

service.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = config.headers["Content-Type"] || "application/json";
    return config;
  },
  (error) => {
    console.log(error);
  }
);
service.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    console.log(error);
  }
);
export default service;
