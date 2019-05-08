<template>
  <div class="wechat">
    <van-nav-bar
      title="添加支付宝"
      :border="false"
      class="wechat_bar"
      left-arrow
      @click-left="onClickLeft"
    ></van-nav-bar>
    <van-cell-group :border="false" title="姓名">
      <van-field v-model="username" :readonly="true"></van-field>
    </van-cell-group>
    <van-cell-group :border="false" title="支付宝账号">
      <van-field v-model="wechat_number" placeholder="请输入支付宝账号"></van-field>
    </van-cell-group>
    <van-cell-group :border="false" title="收款码" style="text-align:center;">
      <div class="upload">
        <van-uploader>
          <van-icon class-prefix="iconfont" name="plus" size="85px" color="#414d66"></van-icon>
        </van-uploader>
      </div>
    </van-cell-group>
    <BottomBtn>保存</BottomBtn>
  </div>
</template>

<script>
import { NavBar, Field, CellGroup, Uploader, Icon } from "vant";
import BottomBtn from "../components/BottomBtn";
export default {
  name: "",
  data() {
    return {
      username: "张三",
      wechat_number: ""
    };
  },
  components: {
    "van-nav-bar": NavBar,
    "van-field": Field,
    "van-cell-group": CellGroup,
    "van-uploader": Uploader,
    "van-icon": Icon,
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
.wechat {
  background: @drawColor;
  width: 100%;
  height: 100%;
  .wechat_bar {
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
  .upload {
    width: 344px;
    height: 225px;
    background: @fieldColor;
    margin: 0 auto;
    .van-uploader {
      margin-top: 62px;
      .iconfont-plus {
        margin-right: 0;
        &::before {
          content: "\e600";
        }
      }
    }
  }
}
</style>
