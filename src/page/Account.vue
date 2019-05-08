<template>
  <div class="safe">
    <van-nav-bar
      title="收款账户设置"
      :border="false"
      class="safe_bar"
      left-arrow
      @click-left="onClickLeft"
    ></van-nav-bar>
    <van-cell-group :border="false">
      <van-cell title="银行卡转账" is-link></van-cell>
      <van-cell title="微信支付" is-link></van-cell>
      <van-cell title="支付宝支付" is-link></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { NavBar, Cell, CellGroup } from "vant";
import BottomBtn from "../components/BottomBtn";
export default {
  name: "",
  data() {
    return {
      address: "",
      name: "",
      IDnumber: ""
    };
  },
  components: {
    "van-nav-bar": NavBar,
    "van-cell-group": CellGroup,
    "van-cell": Cell,
    BottomBtn
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
@drawColor: #000f26;
@safeColor: #0b1a3b;
@fieldColor: #122140;
.safe {
  background: @drawColor;
  width: 100%;
  height: 100%;
  .safe_bar {
    background: @safeColor;
    margin-bottom: 10px;
  }
  .van-cell-group {
    background: none;
    .van-field {
      width: 344px;
      margin: 0 auto;
      background: @fieldColor;
    }
  }
  .text-right {
    text-align: right;
    width: 343px;
    margin: 0 auto;
    color: #596580;
    margin-top: 10px;
    font-size: 12px;
  }
}
</style>
