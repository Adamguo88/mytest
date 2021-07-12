<template>
  <div class="serach d-flex justify-content-end">
    <input
      type="text"
      v-model="search"
      placeholder="搜尋"
      class="search-btn"
      @keyup.enter="enterSearch"
    />
    <button @click="pushArg" class="search-lable">搜尋</button>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    pushArg() {
      if (this.search != "") {
        this.$router.push({ name: "searchdata", params: { id: this.search } });
      } else {
        alert("請輸入搜尋資料");
      }
    },
    enterSearch() {
      if (this.search != "") {
        this.$router.push({ name: "searchdata", params: { id: this.search } });
      } else {
        alert("請輸入搜尋資料");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-btn {
  border-radius: 10px;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
}
.search-lable {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  padding: 10px 5px;
  border-radius: 10px;
}
</style>