<template>
  <BgPic class="bgpic">
    <template #content>
      <div v-for="(val,key) in regdatasets" :key="key">
        <input
          :type="val.input"
          v-if="val.input!=='hidden'&&val.input!=='select'"
          :placeholder="val.name"
          :value="val.default"
          :class="[key==='introduce'?'mobile':'',key==='service_center_uplevel'?'pass':'']"
        >
        <select
          v-else-if="val.input!=='hidden'&&val.input!=='text'"
          class="select"
          v-model="val.default"
        >
          <!-- <option disabled value="">请选择{{val.name}}</option> -->
          <option value disabled>请选择{{val.name}}</option>
          <option :value="key1" v-for="(val1,key1) in val.select" :key="key1">{{val1}}</option>
        </select>
      </div>
    </template>
    <template #btn_group>
      <button class="submit_btn" @click="submit">注&nbsp;&nbsp;册</button>
    </template>
  </BgPic>
</template>

<script>
import api from "../api";
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
  computed: {
    ismobile() {
      return;
    }
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

<style lang="less">
.select {
  width: 100%;
  height: 30px;
  background: none;
  outline: none;
  border: none;
  margin-bottom: 25px;
  border-bottom: 2px solid #fff;
  color: #fff;
  option {
    color: #333;
  }
}
</style>
