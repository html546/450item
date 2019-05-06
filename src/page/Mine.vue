<template>
  <div class="mine">
    <van-nav-bar class="mine_bar" title="我的" :border="false"></van-nav-bar>
    <router-link to>
      <div class="mine_message">
        <img class="avatar" src="../assets/avatar.png" width="56" height="56" alt>
        <div class="mine_content">
          <p>我是昵称/手机号</p>
          <p>UID：1234567890</p>
        </div>
        <van-icon name="arrow" class="my_icon"></van-icon>
      </div>
    </router-link>
    <div class="my_wallet">
      <van-row class="my_wallet_content" type="flex" justify="space-around" align="center">
        <van-col span="8" class="my_wallet_tag">
          <p class="price">100.20</p>
          <p>我的钱包</p>
        </van-col>
        <van-col span="8" class="my_wallet_tag">
          <p class="price">0.00</p>
          <p>C2C资产</p>
        </van-col>
        <van-col span="8" class="my_wallet_tag">
          <p class="price">110.10</p>
          <p>合约资产</p>
        </van-col>
      </van-row>
    </div>
    <div class="cell_group1">
      <van-cell-group>
        <van-cell title="邀请推广" is-link>
          <van-icon slot="icon" name="exchange" size="20px"></van-icon>
        </van-cell>
        <van-cell title="充提币记录" is-link>
          <van-icon slot="icon" name="upgrade" size="20px"></van-icon>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { NavBar, Cell, CellGroup, Icon, Row, Col } from "vant";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    "van-nav-bar": NavBar,
    "van-cell": Cell,
    "van-cell-group": CellGroup,
    "van-icon": Icon,
    "van-row": Row,
    "van-col": Col
  }
};
</script>

<style lang="less" scoped>
.mine {
  width: 100%;
  height: 100%;
  background: #000f26;
  .mine_bar {
    background: #0b1a3b;
  }
  .mine_message {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    background: #0b1a3b;
    .avatar {
    }
    .mine_content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 13px;
      p {
        color: #fff;
        font-size: 14px;
        &:first-child {
          margin-bottom: 12px;
        }
        &:last-child {
          color: #a3a6ad;
        }
      }
    }
    .my_icon {
      position: absolute;
      right: 20px;
      color: #b6c0d9;
    }
  }
  .my_wallet {
    background: #0b1a3b;
    height: 85px;
    margin: 20px 0;
    .my_wallet_content {
      padding: 21px 0;
      box-sizing: content-box;
      .my_wallet_tag {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #1c2b49;
        &:last-child {
          border: none;
        }
        p {
          color: #fff;
          font-size: 14px;
          &:first-child {
            margin-bottom: 16px;
          }
          &:last-child {
            color: #979aa3;
          }
        }
      }
    }
  }
}
</style>