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
    <div class="cell_group_one">
      <van-cell-group :border="false">
        <van-cell title="邀请推广" is-link>
          <van-icon slot="icon" class-prefix="iconfont" name="share" size="20px"></van-icon>
        </van-cell>
        <van-cell title="充提币记录" is-link to="/record">
          <van-icon slot="icon" class-prefix="iconfont" name="list" size="20px"></van-icon>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="cell_group_two">
      <van-cell-group :border="false">
        <van-cell title="充币" is-link>
          <van-icon slot="icon" class-prefix="iconfont" size="20px" name="recharge"></van-icon>
        </van-cell>
        <van-cell title="提币" is-link to="/draw">
          <van-icon slot="icon" class-prefix="iconfont" size="20px" name="draw"></van-icon>
        </van-cell>
        <van-cell title="划转" is-link>
          <van-icon slot="icon" class-prefix="iconfont" size="20px" name="transfer"></van-icon>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="cell_group_three">
      <van-cell-group :border="false">
        <van-cell title="实名认证" value="去认证" is-link to="/realname">
          <van-icon slot="icon" class-prefix="iconfont" size="20px" name="auth"></van-icon>
        </van-cell>
        <van-cell title="账号安全" is-link to="/safe">
          <van-icon slot="icon" class-prefix="iconfont" size="20px" name="safe"></van-icon>
        </van-cell>
        <van-cell title="收款账户" value="去设置" is-link to="/account">
          <van-icon slot="icon" class-prefix="iconfont" size="20px" name="receive"></van-icon>
        </van-cell>
        <van-cell title="在线客服" is-link>
          <van-icon slot="icon" class-prefix="iconfont" size="20px" name="service"></van-icon>
        </van-cell>
      </van-cell-group>
    </div>
    <BottomBtn @btnEvent="logout">退出登录</BottomBtn>
  </div>
</template>

<script>
import { NavBar, Cell, CellGroup, Icon, Row, Col } from "vant";
import BottomBtn from "../components/BottomBtn";
import store from "../store";
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
    "van-col": Col,
    BottomBtn
  },
  methods: {
    logout() {
      console.log(123);
      store.commit("REMOVE_MESSAGE");
      this.$router.replace("/");
    }
  }
};
</script>

<style lang="less" scoped>
.mine {
  width: 100%;
  height: calc(100%-50px);
  overflow-y: scroll;
  background: #000f26;
  .mine_bar {
    background: #0b1a3b;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
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
    margin: 46px auto 0;
    position: relative;
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
  .cell_group_one {
    background: #0b1a3b;
    margin-bottom: 20px;
    .iconfont-share:before {
      content: "\e61d";
    }
    .iconfont-list:before {
      content: "\e65d";
    }
  }
  .cell_group_two {
    margin-bottom: 20px;
    .iconfont-recharge:before {
      content: "\e645";
    }
    .iconfont-draw:before {
      content: "\e621";
    }
    .iconfont-transfer:before {
      content: "\e63e";
    }
  }
  .cell_group_three {
    .iconfont-auth:before {
      content: "\e711";
    }
    .iconfont-safe:before {
      content: "\e626";
    }
    .iconfont-receive:before {
      content: "\e68e";
    }
    .iconfont-service:before {
      content: "\e602";
    }
  }
}
</style>
