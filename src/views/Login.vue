<template>
  <div class="login">
    <div class="logo"></div>
    <div class="login_panel">

    </div>
    <button class="login_submit">登录</button>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: '',
  components: {
    'van-button': Button
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
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
  .login_submit {
    width: 298px;
    height: 45px;
    background: #354281;
    color: #fff;
    font-size: 13.5px;
    border: none;
  }
}
</style>