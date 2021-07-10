<template>
  <div id="app">
    <my-mask></my-mask>
  </div>
</template>

<script>
import MyMask from "./components/Mask.vue";
export default {
  name: "App",
  components: {
    MyMask,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>
