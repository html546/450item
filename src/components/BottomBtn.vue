<template>
  <div class="btn" @click="logout">
    <button class="btn_bottom">
      <slot/>
    </button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$emit('btnEvent');
    }
  },
};
</script>

<style lang="less" scoped>
.btn {
  text-align: center;
  .btn_bottom {
    margin: 20px auto;
    background: #dc6976;
    width: 343px;
    height: 42px;
    border: none;
    outline: none;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
  }
}
</style>
