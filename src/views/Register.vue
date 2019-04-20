<template>
  <BgPic>
    <template slot="content">
      <div v-for="(item,index) in regdatasets" :key="index">
        <input
          :type="item.input"
          v-if="item.input!=='hidden'&&item.input!=='select'"
          :placeholder="item.name"
          :value="item.default"
        >
        <select v-else-if="item.input!=='hidden'&&item.input!=='text'">
          <option value :readonly="true" disabled selected>{{item.name}}</option>
          <option value v-for="(val,key) in item.select" :key="key">{{val}}</option>
        </select>
      </div>
    </template>
    <template slot="btn_group">
      <button class="submit_btn" @click="submit">注&nbsp;&nbsp;册</button>
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
    return {
      regdatasets: ""
    };
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
          this.regdatasets = res.data.data.regdatasets;
        })
        .catch(err => {
          console.log(err);
        });
    },
    submit(e) {
      e.preventDefault();
    }
  }
};
</script>

<style lang="less" scoped>
</style>