<template>
  <div class="mine">
    <van-nav-bar class="mine_bar" title="我的" :border="false"></van-nav-bar>
    <div class="mine_message">
      <img class="avatar" src="../assets/avatar.png" width="56" height="56" alt>
    </div>
  </div>
</template>

<script>
import { NavBar, Cell, CellGroup } from "vant";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    "van-nav-bar": NavBar,
    "van-cell": Cell,
    "van-cell-group": CellGroup
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
    background: #0b1a3b;
    .avatar {
    }
  }
}
</style>