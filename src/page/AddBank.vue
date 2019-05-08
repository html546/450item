<template>
  <div class="bank">
    <van-nav-bar
      title="添加银行卡"
      :border="false"
      class="bank_bar"
      left-arrow
      @click-left="onClickLeft"
    ></van-nav-bar>
    <van-cell-group :border="false" title="开户银行">
      <van-field v-model="bankname" placeholder="请输入开户银行"></van-field>
    </van-cell-group>
    <van-cell-group :border="false" title="银行卡号">
      <van-field v-model="banknumber" placeholder="请输入银行卡号"></van-field>
    </van-cell-group>
    <van-cell-group :border="false" title="开户支行">
      <van-field v-model="otherbank" placeholder="请输入开户支行"></van-field>
    </van-cell-group>
    <van-cell-group :border="false" title="持卡人">
      <van-field v-model="username" placeholder="请输入持卡人姓名"></van-field>
    </van-cell-group>
    <BottomBtn>保存</BottomBtn>
  </div>
</template>

<script>
import { NavBar, Field, CellGroup } from "vant";
import BottomBtn from "../components/BottomBtn";
export default {
  name: "",
  data() {
    return {
      bankname: "",
      banknumber: "",
      otherbank: "",
      username: ""
    };
  },
  components: {
    "van-nav-bar": NavBar,
    "van-field": Field,
    "van-cell-group": CellGroup,
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
@drawColor: #0b1a3b;
@fieldColor: #122140;
.bank {
  background: @drawColor;
  width: 100%;
  height: 100%;
  .bank_bar {
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
