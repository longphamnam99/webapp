<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand logo">
        <img src="assets/images/logo.png" alt="logo" />
      </router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav menu" @click="log(1)">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">
              Trang chủ
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" to="/">
              Sản phẩm
            </router-link>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/"
                  >Sản phẩm của DTSoft</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="">Dịch vụ hỗ trợ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="">Đối tác</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" to="/">
              Tin tức
            </router-link>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/"
                  >Tin tức về DTSoft</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Tin hoạt động</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Tin tuyển dụng</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/">Tin khác</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" to="/">
              Giới thiệu
            </router-link>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/"
                  >Giới thiệu về DTSoft</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Quá trình thành lập</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Giải thưởng</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Trụ sở & Chi nhánh</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/policy"
                  >Chính sách</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="float-right">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav" v-if="!user_id">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Đăng nhập</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Đăng ký</router-link>
            </li>
          </ul>
          <ul class="navbar-nav menu" v-else>
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" to="/">
                {{ name }}
              </router-link>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" to="/"
                    >Đăng xuất</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <button class="navbar-toggler" type="button" @click="menuMobile">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <Breadcrumb v-if="$route.path != '/'" />
</template>
<script>
import { mapGetters } from "vuex";
import Breadcrumb from "../breadcrumb";

export default {
  components: {
    Breadcrumb,
  },
  computed: {
    ...mapGetters(["token", "name", "user_id"]),
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    menuMobile() {
      console.log(1);
    },
    log(num) {
      console.log(num)
    }
  },
};
</script>
<style scoped>
.logo {
  max-width: 20%;
  max-height: 20%;
}

.logo img {
  height: 100%;
  width: 100%;
}

.navbar-nav .nav-item a {
  font-size: 15px !important;
  color: #274563 !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 600 !important;
}

.menu::after {
  content: "";
  clear: both;
  display: block;
}

.menu a {
  display: block;
  padding: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 20px;
}

.menu li {
  position: relative;
}

.menu > li {
  float: left;
}

.menu,
.menu ul {
  display: inline-block;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.menu ul li + li {
  border-top: 1px solid #fff;
}

.menu ul {
  position: absolute;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.5);
}

.menu > li ul,
.menu ul ul {
  opacity: 0;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  z-index: 999;
  visibility: hidden;
}

.menu > li ul {
  top: 130%;
  left: 0;
}

.menu ul ul {
  left: 130%;
  top: 0;
}

.menu ul a {
  width: 250px;
}

.menu > li:hover > ul {
  top: 100%;
  opacity: 1;
  z-index: 1;
  visibility: visible;
}

.menu ul > li:hover > ul {
  left: 100%;
  opacity: 1;
  z-index: 1;
  visibility: visible;
}

/* todo: add active link  */
</style>
