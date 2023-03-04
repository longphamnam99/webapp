<template>
  <div id="breadcrumb">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <!--  -->
          <template v-for="(item, index) in levelList" :key="item.path">
            <li v-if="item.redirect === 'noRedirect' || index == levelList.length - 1" class="breadcrumb-item">
                {{ item.meta.title }}
            </li>
            <li v-else class="breadcrumb-item active">
                <router-link :to="item.path"> {{ item.meta.title }} </router-link>
            </li>
          </template>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageDetail: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      levelList: null,
    };
  },
  watch: {
    $route(route) {
      if (route.path.startsWith("/redirect/")) {
        return;
      }
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );

      const first = matched[0];

      if (!this.isHome(first)) {
        matched = [{ path: "/", meta: { title: "Trang chủ" } }].concat(matched);
      }

      this.levelList = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
      if (this.pageDetail.path) {
        this.levelList.push(this.pageDetail);
      }
    },
    isHome(route) {
      const name = route && route.meta.title;
      if (!name) {
        return false;
      }
      return (
        name.trim().toLocaleLowerCase() === "Trang chủ".toLocaleLowerCase()
      );
    },
  },
};
</script>

<style scoped>
#breadcrumb {
  padding: 10px;
  background: #97b4cf;
}
#breadcrumb a {
  text-decoration: none;
}
.breadcrumb {
  margin-bottom: 0;
}
</style>
