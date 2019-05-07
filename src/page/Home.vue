<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="white" :height="164">
      <van-swipe-item>
        <img src="../assets/Carousel.png" style="width:100%;" alt>
      </van-swipe-item>
    </van-swipe>
    <div class="home_link">
      <van-row type="flex" justify="center" align="center">
        <van-col span="6" class="home_link_item">
          <img src="../assets/ind01.png" alt>
          <span>金融资讯</span>
        </van-col>
        <van-col span="6" class="home_link_item">
          <img src="../assets/ind02.png" alt>
          <span>进阶必备</span>
        </van-col>
        <van-col span="6" class="home_link_item">
          <img src="../assets/ind03.png" alt>
          <span>推荐好友</span>
        </van-col>
        <van-col span="6" class="home_link_item">
          <img src="../assets/ind04.png" alt>
          <span>帮助中心</span>
        </van-col>
      </van-row>
    </div>
    <div class="guess">
      <router-link to="/guess">
        <img src="../assets/guess.png" alt>
      </router-link>
    </div>
    <div class="coin_content">
      <van-row type="flex" justify="center">
        <van-col :span="8">
          <span>交易品种</span>
        </van-col>
        <van-col :span="8">
          <span>价格</span>
        </van-col>
        <van-col :span="8">
          <span>涨跌幅</span>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import api from "../api";
import store from "../store";
import { Swipe, SwipeItem, Row, Col } from "vant";
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
    "van-swipe-item": SwipeItem,
    "van-row": Row,
    "van-col": Col
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
.home {
  background: #000f26;
  width: 100%;
  height: 100%;
}
.home_link {
  margin-top: 32px;
  .home_link_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    img {
      width: 24px;
      height: 24px;
    }
    span {
      margin-top: 10px;
      text-align: center;
      color: #fff;
      font-size: 12px;
    }
  }
}
.guess {
  width: 100%;
  text-align: center;
  img {
    width: 345px;
    height: 79px;
    margin: 28px auto 34px;
  }
}
.coin_content {
  padding: 0 17px;
  text-align: center;
  span {
    color: #fff;
  }
}
</style>
