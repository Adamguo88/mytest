<template>
  <user-pagination :searchData="userSearch"></user-pagination>
</template>

<script>
import UserPagination from "./common/searchPagination/UserPagination.vue";
export default {
  name: "SearchData",
  components: { UserPagination },
  data() {
    return {
      userSearch: "",
    };
  },
  created() {
    this.userSearch = this.$route.params.id;
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>