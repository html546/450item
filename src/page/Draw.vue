<template>
  <div class="draw">
    <van-nav-bar title="提币" :border="false" class="draw_bar" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-cell-group :border="false" title="币种">
      <van-field v-model="coin" :readonly="true"></van-field>
    </van-cell-group>
    <van-cell-group :border="false" title="数量">
      <van-field v-model="num" :readonly="true"></van-field>
    </van-cell-group>
    <p class="text-right">注意:提币数量请输入正整数,不要输入小数</p>
    <van-cell-group :border="false" title="提币地址">
      <van-field placeholder="请输入地址"></van-field>
    </van-cell-group>
    <p class="text-right">可提 10.00 USDT</p>
    <van-cell-group :border="false" title="到账数量">
      <van-field v-model="real_num" :readonly="true" type="number"></van-field>
    </van-cell-group>
    <p class="text-right">手续费:100.00</p>
    <van-cell-group :border="false" title="资金密码">
      <van-field v-model="password" placeholder="请输入资金密码" type="password"></van-field>
    </van-cell-group>
  </div>
</template>

<script>
import { NavBar, Field, CellGroup } from "vant";
export default {
  name: "",
  data() {
    return {
      coin: "USDT",
      num: 10000,
      real_num: 100.0,
      password: ""
    };
  },
  components: {
    "van-nav-bar": NavBar,
    "van-field": Field,
    "van-cell-group": CellGroup
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
@drawColor: #0b1a3b;
@fieldColor: #122140;
.draw {
  background: @drawColor;
  width: 100%;
  height: 100%;
  .draw_bar {
    background: none;
    margin-bottom: 6px;
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