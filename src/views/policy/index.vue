<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <div class="card-header">Chính sách 2023</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item policy" @click="menu(1)">
              Chính sách bảo hành 2023
            </li>
            <li class="list-group-item policy" @click="menu(2)">
              Chính sách bảo mật thông tin 2023
            </li>
            <li class="list-group-item policy" @click="menu(3)">
              Chính sách giao nhận và cài đặt 2023
            </li>
            <li class="list-group-item policy" @click="menu(4)">
              Hình thức thanh toán 2023
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-9">
        <WarrantyPolicy v-if="data_show == 1" />
        <ProtectPolicy v-if="data_show == 2" />
        <TranferInstallPolicy v-if="data_show == 3" />
        <Payment v-if="data_show == 4" />
        <div v-else></div>
      </div>
    </div>
  </div>
</template>

<script>
import WarrantyPolicy from "./components/warranty_policy.vue";
import ProtectPolicy from "./components/protect_policy.vue";
import TranferInstallPolicy from "./components/tranfer_install_policy.vue";
import Payment from "./components/payment.vue";

export default {
  data() {
    return {
      data_show: 0,
    };
  },
  components: {
    WarrantyPolicy,
    ProtectPolicy,
    TranferInstallPolicy,
    Payment,
  },
  methods: {
    menu(num) {
      this.data_show = num;
    },
  },
};
</script>

<style scoped>
.policy {
  cursor: pointer;
}
</style>
