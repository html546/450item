<template>
  <BgPic>
    <template slot="content">
      <input type="text" v-model="mobile_phone" class="mobile" placeholder="请输入手机号">
      <div class="pass_box">
        <input type="password" v-model="password" class="pass" placeholder="请输入密码">
        <router-link to class="forget_pass">忘记密码?</router-link>
      </div>
    </template>
    <template slot="btn_group">
      <button class="login_submit" @click="submit">登&nbsp;&nbsp;录</button>
      <div class="login_bottom">
        <router-link to class="link">联系客服</router-link>
        <router-link to="/register" class="register">立即注册</router-link>
      </div>
    </template>
  </BgPic>
</template>

<script>
import api from "../api";
import { Toast } from "vant";
import BgPic from "../components/BgPic.vue";
export default {
  name: "",
  data() {
    return {
      mobile_phone: "",
      password: "",
      verify_code: ""
    };
  },
  components: {
    BgPic
  },
  created() {},
  methods: {
    submit() {
      this.axios
        .post(api.login, {
          username: this.mobile_phone,
          password: this.password
        })
        .then(res => {
          console.log(res);
          if (res.data.status == 1) {
            Toast.success(res.data.msg);
          } else if (res.data.status == 0) {
            Toast.fail(res.data.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less">
/* .login {
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
  } */
/* .login_panel {
    width: 335px;
    margin: 0 auto; */
.pass_box {
  width: 100%;
  position: relative;
  .forget_pass {
    color: #fff;
    position: absolute;
    right: 0px;
    line-height: 30px;
  }
}
.verify_box {
  width: 100%;
  position: relative;
  .verify_img {
    width: 75px;
    height: 30px;
    position: absolute;
    right: 0px;
  }
}

input {
  width: 100%;
  border: none;
  background: none;
  border-bottom: 2px solid #fff;
  height: 30px;
  color: #fff;
  margin-bottom: 25px;
  position: relative;
  text-indent: 26px;
  outline: none;
  &.mobile {
    background: url("../assets/login_pic01.png") no-repeat left center;
    background-size: 26px 26px;
  }
  &.pass {
    background: url("../assets/login_pic02.png") no-repeat left center;
    background-size: 26px 26px;
  }
  &.verify {
    background: url("../assets/login_pic03.png") no-repeat left center;
    background-size: 26px 26px;
  }
}
// }
.login_submit {
  width: 298px;
  height: 45px;
  background: #354281;
  color: #fff;
  font-size: 13.5px;
  border: none;
  border-radius: 22.5px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  outline: none;
}
.login_bottom {
  width: 298px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 13px;
  justify-content: space-between;
  a {
    color: #fff;
  }
}
// }
</style>