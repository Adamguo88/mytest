<template>
  <pagination></pagination>
</template>

<script>
import Pagination from "./common/pagination/Pagination";

export default {
  name: "mypage",
  components: {
    Pagination,
  },
};
</script>

<style lang="scss" scoped>
.strToLong {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.active {
  background-color: red;
}
.isShow {
  display: none;
}
</style>