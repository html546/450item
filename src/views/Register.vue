<template>
  <BgPic>
    <template slot="content">
      <h1>我是注册</h1>
    </template>
    <template slot="btn_group">
      <h2>我是按钮组</h2>
    </template>
  </BgPic>
</template>

<script>
import api from "../api";
import axios from "axios";
import BgPic from "../components/BgPic.vue";
export default {
  name: "",
  components: {
    BgPic
  },
  data() {
    return {};
  },
  created() {
    this.getPage();
  },
  methods: {
    getPage() {
      this.axios
        .post(api.register)
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