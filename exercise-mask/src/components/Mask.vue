<template>
  <div class="map">
    <!-- 選擇所在區域 -->
    <div class="mask">
      <!-- 顯示藥局位置 -->
      <div class="col-sm-9">
        <div id="map"></div>
      </div>

      <div class="city">
        <select id="cityName" class="form-select" v-model="select.city">
          <option value="">請選擇縣市</option>
          <option
            v-for="(item, index) in cityName"
            :key="index"
            :value="item.CityName"
          >
            {{ item.CityName }}
          </option>
        </select>
      </div>

      <div class="area">
        <select id="area" class="form-select" v-model="select.area">
          <option value="" selected>請選擇地區</option>
          <option
            v-for="(item, index) in area"
            :key="index"
            :value="item.AreaName"
          >
            {{ item.AreaName }}
          </option>
        </select>
      </div>
    </div>
    <div id="mapid"></div>
  </div>
</template>

<script>
import cityName from "../assets/data.json";
import { getData } from "@/network/home.js";

import L from "leaflet";

let OSM = {};

export default {
  name: "Mak",
  data() {
    return {
      cityName,
      select: {},
      area: [],
      hospital: [],
      showData: [],
    };
  },
  methods: {
    findArea() {
      let nowPlace = this.select.city;
      cityName.filter((city) => {
        if (city.CityName === nowPlace) {
          this.area = city.AreaList;
          // console.log(this.area);
        }
      });
    },
    mymap() {
      OSM = L.map("mapid").setView([25.042474, 121.513729], 8);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        minZoom: 8,
        maxZoom: 16,
      }).addTo(OSM);
    },
    updateMap() {
      OSM.eachLayer(function (layer) {
        if (layer instanceof L.Marker) {
          OSM.removeLayer(layer);
        }
      });

      this.pharmacies.filter((pharmacy) => {
        L.marker([
          pharmacy.geometry.coordinates[1],
          pharmacy.geometry.coordinates[0],
        ]).addTo(OSM)
          .bindPopup(`<p style="font-size: 20px;">${pharmacy.properties.name}</p>
          <strong style="font-size:16px; color:#e45345 ">口罩剩餘：成人${pharmacy.properties.mask_adult}個 / 兒童${pharmacy.properties.mask_child}個</strong><br>
          <span style="line-height: 30px ">地址:${pharmacy.properties.address}</span><br>
          <span style="line-height: 30px ">電話:${pharmacy.properties.phone}</span><br>
          <span style="line-height: 30px ">最後更新時間:${pharmacy.properties.updated}</span>
          `);
      });
    },
  },
  mounted() {
    getData().then((res) => {
      this.hospital = res.features;
    });
    this.mymap();
  },
  computed: {
    pharmacies() {
      return this.hospital
        .filter((pharmacy) => {
          if (this.select.area) {
            return pharmacy.properties.county === this.select.city;
          }
        })
        .filter((usertown) => usertown.properties.town === this.select.area);
    },
  },
  watch: {
    "select.city"() {
      this.findArea();
    },
    // "select.area"() {
    //   this.pharmacies();
    // },
    pharmacies() {
      this.updateMap();
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  display: flex;
  align-items: center;
  justify-content: center;
  .mask {
    width: 30vw;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
  }
  #mapid {
    width: 70vw;
    height: 100vh;
  }
}
</style>