<template>
  <div class="container">
    <search></search>
    <div class="row">
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
            <p class="card-p-text strToLong">
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
      <ul class="pagination">
        <li
          class="page-item"
          @click.prevent="previousBtn"
          v-show="!previousPage"
        >
          <a class="page-link" href="#"> 上一頁 </a>
        </li>
        <li
          class="page-item"
          v-for="(item, index) in btnTotal"
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
import { getData } from "@/network/home";

import Search from "./Search.vue";
export default {
  name: "mypage",
  components: {
    Search,
  },
  data() {
    return {
      getData: [],
      btnTotal: 0,
      currentPage: 0,
      getNowWebData: [],
    };
  },
  created() {
    getData().then((res) => {
      this.getData = res.result.records;
    });
  },
  computed: {
    previousPage() {
      return this.currentPage === 1;
    },
    nextPage() {
      return this.currentPage === this.btnTotal;
    },
  },
  methods: {
    showNowPage(current = Number(1)) {
      // 獲得數據
      let data = this.getData;
      // 數據總共有多少筆
      let dataTotal = data.length;
      // 要讓當前的頁面呈現多少筆資料
      let prepage = 6;
      // 當前頁數
      let currentPage = current;
      // 按鈕的總數
      let btnTotal = Math.ceil(dataTotal / prepage);
      // 獲得數據最小數 (當前頁數 * 頁面呈現多少筆資料) - 頁面呈現多少筆資料 + 1 = (1 * 6 ) - 6 + 1 = 1
      let minData = currentPage * prepage - prepage + 1;
      // 獲得數據最大數 (當前頁數 * 頁面呈現多少筆資料)
      let maxData = currentPage * prepage;
      //
      let nowData = [];
      data.forEach((item, index) => {
        // 因為array 從 0 開始 ， 但是 currentPage 是從 1 開始 ， 所以必須讓index + 1
        let num = index + 1;
        // 1 2 3 4 5 6 , 7 8 9 10 11 12
        // 0 1 2 3 4 5 , 6 7 8 9 10 11
        if (num >= minData && num <= maxData) {
          nowData.push(item);
        }
      });
      this.getNowWebData = nowData;
      this.btnTotal = btnTotal;
      this.currentPage = currentPage;
    },
    change(e, index) {
      // localName = 屬性名稱
      // innerText = value
      let currentpage = parseInt(e.target.innerText);
      // 因為是獲取迴圈的index 所以從 0 開始必須+1
      let nowIndex = index + 1;

      if (nowIndex === currentpage) {
        this.showNowPage(currentpage);
      }
    },
    // 上一頁
    previousBtn() {
      let nowPage = this.currentPage;
      this.showNowPage(nowPage - 1);
    },
    // 下一頁
    nextBtn() {
      let nowPage = this.currentPage;
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