<template>
  <div class="record">
    <van-nav-bar
      class="record_bar"
      title="充提币记录"
      left-arrow
      @click-left="onClickLeft"
      :border="false"
    ></van-nav-bar>
    <div class="record_panel">
      <van-row type="flex" justify="center" align="center">
        <van-col span="12">
          <div class="panel_left" :class="{active:isActive}" @click="isActive=true">
            <img src="../assets/jilu01s.png" alt v-show="isActive">
            <img src="../assets/jilu01.png" v-show="!isActive" alt>
            <p>充币记录</p>
          </div>
        </van-col>
        <van-col span="12">
          <div class="panel_right" :class="{active:!isActive}" @click="isActive=false">
            <img src="../assets/jilu02s.png" alt v-show="!isActive">
            <img src="../assets/jilu02.png" alt v-show="isActive">
            <p>提现记录</p>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="record_detail_panel">
      <table :border="0" :cellspacing="0">
        <thead>
          <tr>
            <th>币种</th>
            <th>时间</th>
            <th>数量</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BTC</td>
            <td>2019.04.03 15:30:25</td>
            <td>100</td>
            <td>已完成</td>
          </tr>
          <tr>
            <td>USDT</td>
            <td>2019.04.03 15:30:25</td>
            <td>100</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { NavBar, Row, Col } from "vant";
export default {
  name: "",
  components: {
    "van-nav-bar": NavBar,
    "van-row": Row,
    "van-col": Col
  },
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
@bgColor: #000f26;
@recordColor: #0b1a3b;
@textColor: #a5a8af;
@textActiveColor: #247caf;
@borderColor: #1c2b49;
.record {
  width: 100%;
  height: 100%;
  background: @bgColor;
  .record_bar {
    background: @recordColor;
  }
  .record_panel {
    height: 85px;
    width: 100%;
    margin: 11px auto;
    background: @recordColor;
    .panel_left {
      border-right: 1px solid @borderColor;
    }
    .panel_left,
    .panel_right {
      margin: 15px auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &.active {
        p {
          color: @textActiveColor;
        }
      }
      img {
        width: 30px;
        height: 30px;
        margin-bottom: 8px;
      }
      p {
        color: @textColor;
        font-size: 14px;
      }
    }
  }
  .record_detail_panel {
    background: @recordColor;
    height: 264px;
    width: 100%;
    table {
      width: 100%;
      font-size: 12px;
      thead tr {
        height: 40px;
        width: 100%;
        th {
          border-bottom: 1px solid @borderColor;
          text-align: center;
          color: #fff;
        }
      }
      tbody tr {
        height: 71px;
        width: 100%;
        td {
          border-bottom: 1px solid @borderColor;
          text-align: center;
          color: #fff;
        }
      }
    }
  }
}
</style>