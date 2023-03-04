<template>
  <div class="container">
    <div class="row register-form">
      <div class="col">
        <div class="box-register">
          <div class="card p-3">
            <form v-on:submit.prevent="onSubmit">
              <div class="form-group p-2" v-if="error.show">
                <div class="alert alert-danger">{{ error.message }}</div>
              </div>
              <div class="form-group p-2">
                <label for="email">Email<small>(*)</small></label>
                <input
                  v-model="post.email"
                  type="email"
                  class="form-control"
                  placeholder="Nhập email"
                />
              </div>
              <div class="form-group p-2">
                <label for="username">Họ và tên<small>(*)</small></label>
                <input
                  v-model="post.name"
                  type="text"
                  class="form-control"
                  placeholder="Nhập họ tên"
                />
              </div>
              <div class="form-group p-2">
                <label for="password">Mật khẩu<small>(*)</small></label>
                <input
                  v-model="post.password"
                  type="password"
                  class="form-control"
                  placeholder="Nhập mật khẩu"
                />
              </div>
              <div class="form-group p-2">
                <label for="password">Nhập lại khẩu<small>(*)</small></label>
                <input
                  v-model="post.retype_password"
                  type="password"
                  class="form-control"
                  placeholder="Nhập lại mật khẩu"
                />
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary">Đăng ký</button>
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
        name: "",
        retype_password: "",
      },
      error: {
        show: false,
        message: "Vui lòng nhập các hàng bắt buộc.",
      },
    };
  },
  methods: {
    onSubmit() {
      let email = this.post.email;
      let password = this.post.password;
      let name = this.post.name;
      let retype_password = this.post.retype_password;

      if (
        email == null ||
        email == "" ||
        password == null ||
        password == "" ||
        name == null ||
        name == "" ||
        retype_password == null ||
        retype_password == ""
      ) {
        this.error.show = true;
        return;
      } else {
        this.error.show = false;
      }

      if (password != retype_password) {
        this.error.show = true;
        this.error.message = "Mật khẩu không khớp.";
        return;
      }

      if (password.length < 6) {
        this.error.show = true;
        this.error.message = "Password required 6 characters";
        return;
      }

      if (password.length < 6 || retype_password.length < 6) {
        this.error.show = true;
        this.error.message = "Password required 6 characters";
        return;
      }

      let data = {
        email: email,
        password: password,
        name: name,
      };
      UserService.register(data).then((res) => {
        if (res.status != 200) {
          this.error.show = true;
          this.error.message = res.message;
        } else {
          this.error.show = false;
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style scoped>
.register-form {
  padding: 3% 20% 3% 20%;
}
.box-register {
  padding: 0 20% 0 20%;
}
.form-group {
  position: relative;
}
.form-group small {
  font-size: 12px;
  color: red;
  top: 0;
}
</style>
