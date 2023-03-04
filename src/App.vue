<template>
  <div class="page-wrapper">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header";
import { RouterView } from "vue-router";
import Footer from "./components/footer";

export default {
  components: {
    Header,
    RouterView,
    Footer,
  },
};
</script>
