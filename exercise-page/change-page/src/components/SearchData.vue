<template>
  <div class="container">
    <h1 v-if="notFind">搜尋結果：{{ userSearch }}</h1>
    <h1 v-else>找不到請再嘗試一遍，2秒後即將返回上個頁面</h1>
    <div class="row" ref="content">
      <div
        class="col-md-6 py-2 px-1"
        v-for="(item, index) in showData"
        :key="index"
      >
        <div class="card">
          <div class="card bg-dark text-white text-left">
            <div
              style="height: 155px; width: 100%"
              class="d-flex align-items-center justify-content-center"
            >
              測試
            </div>
            <div
              class="
                card-img-overlay
                d-flex
                justify-content-between
                align-items-end
                p-0
                px-3
              "
              style="background-color: rgba(0, 0, 0, 0.2)"
            >
              <h5 class="card-img-title-lg">{{ item.Name }}</h5>
              <h5 class="card-img-title-sm">{{ item.Zone }}</h5>
            </div>
          </div>
          <div class="card-body text-left">
            <p class="card-p-text">
              <i class="far fa-clock fa-clock-time"></i>{{ item.Opentime }}
            </p>
            <p class="card-p-text">
              <i class="fas fa-map-marker-alt fa-map-gps"></i>{{ item.Add }}
            </p>
            <div class="d-flex justify-content-between align-items-end">
              <p class="card-p-text">
                <i class="fas fa-mobile-alt fa-mobile"></i>{{ item.Tel }}
              </p>
              <p class="card-p-text">
                <i class="fas fa-tags text-warning"></i>{{ item.Ticketinfo }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getData } from "../network/home";
export default {
  name: "SearchData",
  data() {
    return {
      userSearch: "",
      getData: {},
      showData: [],
      notFind: true,
    };
  },
  created() {
    this.userSearch = this.$route.params.id;

    getData().then((res) => {
      this.getData = res.result.records;
    });
  },
  methods: {
    showWebData() {
      this.getData.filter((item) => {
        if (item.Name.match(this.userSearch)) {
          this.showData.push(item);
        }
      });
      if (this.showData.length == 0) this.notFind = false;
    },
  },
  watch: {
    getData() {
      this.showWebData();
    },
    notFind() {
      if (this.notFind === false) {
        setTimeout(() => {
          this.$router.go(-1);
        }, 2000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>