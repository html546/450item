<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="white" :height="164">
      <van-swipe-item>
        <img src="../assets/Carousel.png" style="width:100%;" alt>
      </van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import api from "../api";
import store from "../store";
import { Swipe, SwipeItem } from "vant";
export default {
  name: "",
  data() {
    return {};
  },
  created() {
    this.getAd();
  },
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem
  },
  methods: {
    getAd() {
      let { userid, sessionid } = store.state.message;
      this.axios
        .post(api.getad, {
          userid,
          sessionid
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
</style>