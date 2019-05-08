<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
</script>
<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: "iconfont"; /* project id 1175981 */
  src: url("//at.alicdn.com/t/font_1175981_22g4fn4ji2i.ttf") format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 10px;
}
.van-field__control {
  color: #fff !important;
}
.van-cell:not(:last-child)::after {
  left: 0 !important;
  border-bottom: 0.02667rem solid #1c2b49 !important;
}
</style>
