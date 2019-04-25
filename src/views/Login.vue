<template>
  <BgPic class="bgpic">
    <template #content>
      <input type="text" v-model="mobile_phone" class="mobile" placeholder="请输入手机号">
      <div class="pass_box">
        <input type="password" v-model="password" class="pass" placeholder="请输入密码">
        <router-link to class="forget_pass">忘记密码?</router-link>
      </div>
    </template>
    <template #btn_group>
      <button class="submit_btn" @click="submit">登&nbsp;&nbsp;录</button>
      <div class="submit_bottom">
        <router-link to class="link">联系客服</router-link>
        <router-link to="/register" class="register">立即注册</router-link>
      </div>
    </template>
  </BgPic>
</template>

<script>
import api from "../api";
import BgPic from "../components/BgPic.vue";
import { callback1 } from "../util";
import store from "../store";
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
          callback1(res, res => {
            let message = {
              userid: res.data.result.id,
              sessionid: res.data.result.sessionid
            };
            store.commit("SET_MESSAGE", message);
            this.$router.replace("/tab");
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less">
.bgpic {
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
  .submit_btn {
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
  .submit_bottom {
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
}
</style>
