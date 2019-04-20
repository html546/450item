<template>
  <div class="login">
    <div class="logo"></div>
    <div class="login_panel">
      <slot name="content"/>
    </div>
    <slot name="btn_group"></slot>
  </div>
</template>

<script>
export default {
  name: "",

  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.login {
  background: url("../assets/login_bg.png") no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .logo {
    background: url("../assets/logo.png") no-repeat center center;
    background-size: cover;
    width: 108px;
    height: 33px;
    margin: 140px auto 125px;
  }
  .login_panel {
    width: 335px;
    margin: 0 auto;
  }
}
</style>