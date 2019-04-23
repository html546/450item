<template>
  <div class="tab">
    <router-view class="page"></router-view>
    <van-tabbar v-model="active" class="tabbar" fixed>
      <van-tabbar-item to="/tab">
        <span>首页</span>
        <img slot="icon" slot-scope="props" :src="props.active?home.active:home.normal" alt>
      </van-tabbar-item>
      <van-tabbar-item to="/tab/contract">
        <span>合约</span>
        <img slot="icon" slot-scope="props" :src="props.active?contract.active:contract.normal" alt>
      </van-tabbar-item>
      <van-tabbar-item to="/tab/future">
        <span>期货</span>
        <img slot="icon" slot-scope="props" :src="props.active?futures.active:futures.normal" alt>
      </van-tabbar-item>
      <van-tabbar-item to="/tab/option">
        <span>期权</span>
        <img slot="icon" slot-scope="props" :src="props.active?Option.active:Option.normal" alt>
      </van-tabbar-item>
      <van-tabbar-item to="/tab/mine">
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active?mine.active:mine.normal" alt>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "home",
  data() {
    return {
      active: 0,
      home: {
        normal: require("../assets/nav01.png"),
        active: require("../assets/nav01s.png")
      },
      contract: {
        normal: require("../assets/nav02.png"),
        active: require("../assets/nav02s.png")
      },
      futures: {
        normal: require("../assets/nav03.png"),
        active: require("../assets/nav03s.png")
      },
      Option: {
        normal: require("../assets/nav04.png"),
        active: require("../assets/nav04s.png")
      },
      mine: {
        normal: require("../assets/nav05.png"),
        active: require("../assets/nav05s.png")
      }
    };
  },
  components: {
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem
  }
};
</script>

<style lang="less">
.tabbar {
  background: #132043;
  .van-tabbar-item--active {
    span {
      color: #30a3de;
    }
  }
  span {
    color: #5568b3;
  }
}
.tab {
  height: 100%;
  .page {
    height: calc(100% - 1.33333rem);
  }
}
</style>
