<template>
  <div class="home">
    <h1>我是首页</h1>
  </div>
</template>

<script>
import api from "../api";
import store from "../store";
export default {
  name: "",
  data() {
    return {};
  },
  created() {
    this.getAd();
  },
  methods: {
    getAd() {
      let { userid, sessionid } = store.state.message;
      this.axios
        .post(api.getad, {
          userid,
          sessionid
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
</style>