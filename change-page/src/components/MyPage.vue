<template>
  <div class="container">
    <search></search>
    <div class="row" ref="content">
      <div
        class="col-md-6 py-2 px-1"
        v-for="(item, index) in getNowWebData"
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
    <nav class="d-flex align-items-center justify-content-center">
      <ul class="pagination" ref="pageid">
        <li
          class="page-item"
          @click.prevent="previousBtn"
          v-show="!previousPage"
        >
          <a class="page-link" href="#"> 上一頁 </a>
        </li>
        <li
          class="page-item"
          v-for="(item, index) in dataRequire.btnTotal"
          :key="index"
          @click.prevent="change($event, index)"
        >
          <a class="page-link" href="#">{{ item }}</a>
        </li>
        <li class="page-item" v-show="!nextPage" @click.prevent="nextBtn">
          <a class="page-link" href="#"> 下一頁 </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { getData } from "../network/home";

import Search from "../components/Search.vue";
export default {
  name: "mypage",
  components: {
    Search,
  },
  data() {
    return {
      getData: [],
      getNowWebData: [],
      dataRequire: {},
    };
  },
  created() {
    getData().then((res) => {
      this.getData = res.result.records;
    });
  },
  computed: {
    previousPage() {
      return this.dataRequire.currentPage === 1;
    },
    nextPage() {
      return this.dataRequire.currentPage === this.dataRequire.btnTotal;
    },
  },
  methods: {
    showNowPage(current = 1) {
      let data = this.getData;
      let dataTotal = data.length;
      let prepage = 6;
      let currentPage = current;
      let btnTotal = Math.ceil(dataTotal / prepage);
      let minData = currentPage * prepage - prepage + 1;
      let maxData = currentPage * prepage;
      let nowData = [];

      data.forEach((item, index) => {
        let num = index + 1;
        if (num >= minData && num <= maxData) {
          nowData.push(item);
        }
      });
      this.getNowWebData = nowData;
      this.dataRequire = {
        data,
        dataTotal,
        prepage,
        currentPage,
        btnTotal,
        minData,
        maxData,
        nowData,
      };
    },
    change(e, index) {
      // localName = 屬性名稱
      // innerText = value
      let currentpage = parseInt(e.target.innerText);
      let nowIndex = index + 1;

      if (nowIndex === currentpage) {
        this.showNowPage(currentpage);
      }
    },
    previousBtn() {
      let nowPage = this.dataRequire.currentPage;
      this.showNowPage(nowPage - 1);
    },
    nextBtn() {
      let nowPage = this.dataRequire.currentPage;
      this.showNowPage(nowPage + 1);
    },
  },
  watch: {
    getData() {
      this.showNowPage();
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-color: red;
}
.isShow {
  display: none;
}
</style>