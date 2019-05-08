<template>
  <div class="realname">
    <van-nav-bar
      title="实名认证"
      :border="false"
      class="realname_bar"
      left-arrow
      @click-left="onClickLeft"
    ></van-nav-bar>
    <van-cell-group :border="false" title="身份证住址">
      <van-field v-model="address" placeholder="请输入身份证上的住址"></van-field>
    </van-cell-group>
    <van-cell-group :border="false" title="姓名">
      <van-field v-model="name" placeholder="请输入真实姓名"></van-field>
    </van-cell-group>
    <van-cell-group :border="false" title="身份证号码">
      <van-field v-model="IDnumber" placeholder="请输入身份证号码"></van-field>
    </van-cell-group>
    <BottomBtn>实名认证</BottomBtn>
  </div>
</template>

<script>
import { NavBar, Field, CellGroup } from "vant";
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
.realname {
  background: @drawColor;
  width: 100%;
  height: 100%;
  .realname_bar {
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
