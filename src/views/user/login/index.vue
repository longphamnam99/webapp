<template>
  <div class="container">
    <div class="row login-form">
      <div class="col">
        <div class="login-box">
          <div class="card p-3">
            <form v-on:submit.prevent="onSubmit">
              <div class="form-group p-2" v-if="error.show">
                <div class="alert alert-danger">{{ error.message }}</div>
              </div>
              <div class="form-group p-2">
                <label for="username">Tên đăng nhập</label>
                <input
                  v-model="post.email"
                  type="email"
                  class="form-control"
                  placeholder="Tên đăng nhập"
                />
              </div>
              <div class="form-group p-2">
                <label for="password">Mật khẩu</label>
                <input
                  v-model="post.password"
                  type="password"
                  class="form-control"
                  placeholder="Nhập mật khẩu"
                />
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary">Đăng nhập</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from "@/api/user";

export default {
  data() {
    return {
      post: {
        email: "",
        password: "",
      },
      error: {
        show: false,
        message: "Vui lòng nhập tên đăng nhập hoặc mật khẩu.",
      },
    };
  },
  methods: {
    onSubmit() {
      let email = this.post.email;
      let password = this.post.password;
      if (email == null || password == null || email == "" || password == "") {
        this.error.show = true;
        return;
      } else {
        this.error.show = false;
      }
      let data = {
        email: email.trim(),
        password: password,
      };
      if (password.length < 6) {
        this.error.show = true;
        this.error.message = "Password required 6 characters";
        return;
      }

      UserService.login(data).then((res) => {
        if (res.status != 200) {
          this.error.show = true;
          this.error.message = res.message;
        } else {
          this.error.show = false;
          this.$store.dispatch("user/set_token", res.data.token);
          this.$store.dispatch("user/info");
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style scoped>
.login-form {
  padding: 3% 20% 3% 20%;
}
.login-box {
  padding: 0 20% 0 20%;
}
</style>
