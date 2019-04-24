<template>
  <div class="guess">
    <van-nav-bar
      title="竞猜"
      right-text="我的竞猜"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="navbar"
      :border="false"
    ></van-nav-bar>
    <div class="price_content">
      <van-row type="flex">
        <van-col span="6">
          <div class="price_left">
            <span>5095.27</span>
            <span>≈34087.36CNY</span>
          </div>
        </van-col>
        <van-col span="14" :offset="2">
          <div class="price_right">
            <van-row type="flex" justify="center">
              <van-col span="7" class="price_right_content">
                <span>竞猜</span>
                <span class="up">1.93%</span>
              </van-col>
              <van-col span="10" class="price_right_content">
                <span>24小时量</span>
                <span>23321</span>
              </van-col>
              <van-col span="7" class="price_right_content">
                <span>最高价</span>
                <span>5200</span>
              </van-col>
            </van-row>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="time_slot">
      <van-row>
        <van-col span="4">
          <button :class="{active:shows==1}" @click="hourShow">分时</button>
        </van-col>
        <van-col span="4">
          <button :class="{active:shows==2}" @click="fiveShow">5分</button>
        </van-col>
        <van-col span="4">
          <button :class="{active:shows==3}" @click="fifShow">15分</button>
        </van-col>
        <van-col span="4">
          <button :class="{active:shows==4}" @click="thiryShow">30分</button>
        </van-col>
        <van-col span="4">
          <button :class="{active:shows==5}" @click="OnehourShow">1小时</button>
        </van-col>
        <van-col span="4">
          <button :class="{active:shows==6}" @click="dayShow">日线</button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { NavBar, Toast, Row, Col } from "vant";
export default {
  name: "",
  data() {
    return {
      shows: 1
    };
  },
  components: {
    "van-nav-bar": NavBar,
    "van-row": Row,
    "van-col": Col
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("我的竞猜");
    },
    hourShow() {
      this.shows = 1;
    },
    fiveShow() {
      this.shows = 2;
    },
    fifShow() {
      this.shows = 3;
    },
    thiryShow() {
      this.shows = 4;
    },
    OnehourShow() {
      this.shows = 5;
    },
    dayShow() {
      this.shows = 6;
    }
  }
};
</script>

<style lang="less" scoped>
.guess {
  width: 100%;
  height: 100%;
  background: #181b2c;
  .navbar {
    background: #151828;
    color: #fff;
  }
}
.van-nav-bar__text:active {
  background-color: #151828;
}
.price_content {
  color: #fff;
  font-size: 12px;
  .price_left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 10px;
    span {
      &:first-child {
        color: #43b67b;
      }
      &:last-child {
        color: #66698a;
      }
    }
  }
  .price_right {
    .price_right_content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .up {
        color: #43b67b;
      }
    }
  }
}
.time_slot {
  width: calc(100% - 55px);
  margin-top: 12px;
  button {
    background: none;
    outline: none;
    border: none;
    color: #636888;
    width: 100%;
    text-align: center;
    padding: 9px 0;
    &.active {
      background: #1d2236;
    }
  }
}
</style>