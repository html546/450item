<template>
  <div class="guess">
    <van-nav-bar
      title="竞猜"
      right-text="我的竞猜"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="navbar"
      :border="false"
    ></van-nav-bar>
    <div class="price_content">
      <van-row type="flex">
        <van-col span="6">
          <div class="price_left">
            <select name id @change="handleChange">
              <option value="spot/candle60s:BTC-USDT">BCT</option>
              <option value="spot/candle60s:ETH-USDT">ETH</option>
              <option value="spot/candle60s:LTC-USDT">LTC</option>
            </select>
            <span>{{last}}</span>
            <span>≈34087.36CNY</span>
          </div>
        </van-col>
        <van-col span="14" :offset="2">
          <div class="price_right">
            <van-row type="flex" justify="center">
              <van-col span="4" class="price_right_content">
                <span>竞猜</span>
                <span class="up">1.93%</span>
              </van-col>
              <van-col span="16" class="price_right_content">
                <span>24小时量</span>
                <span>{{quote_volume_24h}}</span>
              </van-col>
              <van-col span="4" class="price_right_content">
                <span>最高价</span>
                <span>{{high_24h}}</span>
              </van-col>
            </van-row>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="time_slot">
      <van-row>
        <van-col span="3">
          <button :class="{active:shows==1}" @click="OneShow('spot/candle60s')">1分</button>
        </van-col>
        <van-col span="3">
          <button :class="{active:shows==2}" @click="ThreeShow('spot/candle180s')">3分</button>
        </van-col>
        <van-col span="3">
          <button :class="{active:shows==3}" @click="fiveShow('spot/candle300s')">5分</button>
        </van-col>
        <van-col span="3">
          <button :class="{active:shows==4}" @click="fifShow('spot/candle900s')">15分</button>
        </van-col>
        <van-col span="3">
          <button :class="{active:shows==5}" @click="thiryShow('spot/candle1800s')">30分</button>
        </van-col>
        <van-col span="3">
          <button :class="{active:shows==6}" @click="OnehourShow('spot/candle3600s')">1小时</button>
        </van-col>
        <van-col span="3">
          <button :class="{active:shows==7}" @click="dayShow('spot/candle86400s')">日线</button>
        </van-col>
        <van-col span="3">
          <button :class="{active:shows==8}" @click="weekShow('spot/candle604800s')">周线</button>
        </van-col>
      </van-row>
    </div>
    <div>
      <ve-candle :data="chartData" width="100%" :settings="chartSettings"></ve-candle>
    </div>
    <div class="btn_group">
      <van-row type="flex" justify="center" :gutter="10">
        <van-col>
          <button class="btn_rise" @click="CheckRise">看涨</button>
        </van-col>
        <van-col>
          <button class="btn_fail">看跌</button>
        </van-col>
      </van-row>
    </div>
    <van-popup v-model="show" position="bottom" :overlay="false">
      <div class="rise_content">
        <img src="../assets/close.png" class="close_icon" alt @click="handleClose">
      </div>
    </van-popup>
  </div>
</template>

<script>
import { NavBar, Toast, Row, Col, Popup } from "vant";
import VeCandle from "v-charts/lib/candle.common";
import "v-charts/lib/style.css";
function timeToLocal(time) {
  let date = new Date(time);
  let year = date.getFullYear();
  let month = format(date.getMonth() + 1);
  let day = format(date.getDay());
  let hour = format(date.getHours());
  let minute = format(date.getMinutes());
  let second = format(date.getSeconds());
  return (
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
  );
}
function format(val) {
  if (val < 10) {
    return `0${val}`;
  } else {
    return val;
  }
}
export default {
  name: "",
  data() {
    return {
      chartSettings: {
        showMA: true,
        showVol: true,
        showDataZoom: true
      },
      shows: 1,
      conn: "",
      coin: "spot/candle60s:BTC-USDT",
      chartData: {
        columns: [
          "日期",
          "open",
          "highest",
          "lowest",
          "close",
          "vol",
          "instrument_id"
        ],
        rows: []
      },
      quote_volume_24h: "",
      high_24h: "",
      last: "",
      show: false
    };
  },
  components: {
    "van-nav-bar": NavBar,
    "van-row": Row,
    "van-col": Col,
    "van-popup": Popup,
    VeCandle
  },
  created() {
    var that = this;
    if (window["WebSocket"]) {
      this.conn = new WebSocket("ws://47.52.168.164:8080/ws");
      this.conn.onclose = function(evt) {};
      this.conn.onopen = function(evt) {
        that.conn.send("spot/candle60s:BTC-USDT");
      };
      this.conn.onmessage = function(evt) {
        var messages = evt.data.split("\n");
        console.log(JSON.parse(messages));
        if (messages[0] == "errorRequest") {
          alert("请求错误");
          return;
        }
        let message = JSON.parse(messages);
        if (message.type == 0) {
          for (var i = 0; i < message.data.length; i++) {
            message.data[i][0] = timeToLocal(message.data[i][0]);
            message.data[i][1] = Number(message.data[i][1]);
            message.data[i][2] = Number(message.data[i][2]);
            message.data[i][3] = Number(message.data[i][3]);
            message.data[i][4] = Number(message.data[i][4]);
            message.data[i][5] = Number(message.data[i][5]);
          }
          that.chartData.rows = message.data.reverse();
          // console.log(that.chartData.rows);
        } else if (message.type == 1) {
          that.quote_volume_24h = message.data.quote_volume_24h;
          that.high_24h = message.data.high_24h;
          that.last = message.data.last;
        }
      };
    } else {
      console.log("Your browser does not support WebSockets.");
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("我的竞猜");
    },
    OneShow(val) {
      this.shows = 1;
      this.changeCoin(val);
    },
    changeCoin(val) {
      this.coin = this.coin.split(":");
      this.coin[0] = val;
      this.coin = this.coin.join(":");
      this.conn.send(this.coin);
    },
    ThreeShow(val) {
      this.shows = 2;
      this.changeCoin(val);
    },
    fiveShow(val) {
      this.shows = 3;
      this.changeCoin(val);
    },
    fifShow(val) {
      this.shows = 4;
      this.changeCoin(val);
    },
    thiryShow(val) {
      this.shows = 5;
      this.changeCoin(val);
    },
    OnehourShow(val) {
      this.shows = 6;
      this.changeCoin(val);
    },
    dayShow(val) {
      this.shows = 7;
      this.changeCoin(val);
    },
    weekShow(val) {
      this.shows = 8;
      this.changeCoin(val);
    },
    handleChange(e) {
      console.log(e);
      this.conn.send(e.target.value);
      this.coin = e.target.value;
    },
    CheckRise() {
      this.show = true;
    },
    handleClose() {
      this.show = false;
    }
  }
};
</script>

<style lang="less" scoped>
.guess {
  width: 100%;
  height: 100%;
  background: #181b2c;
  .navbar {
    background: #151828;
    color: #fff;
  }
}
.van-nav-bar__text:active {
  background-color: #151828;
}
.price_content {
  color: #fff;
  font-size: 12px;
  .price_left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 10px;
    select {
      background: none;
      color: #fff;
      outline: nonoe;
      border: none;
      text-align: center;
      option {
        color: #333;
      }
    }
    span {
      &:first-child {
        color: #43b67b;
      }
      &:last-child {
        color: #66698a;
      }
    }
  }
  .price_right {
    .price_right_content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .up {
        color: #43b67b;
      }
    }
  }
}
.time_slot {
  width: calc(100% - 55px);
  margin-top: 12px;
  button {
    background: none;
    outline: none;
    border: none;
    color: #636888;
    width: 100%;
    text-align: center;
    padding: 9px 0;
    &.active {
      background: #1d2236;
    }
  }
}
.btn_group {
  button {
    width: 171px;
    height: 43px;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
    &.btn_rise {
      background: #71cd8c;
    }
    &.btn_fail {
      background: #dc6976;
    }
  }
}
.rise_content {
  width: 100%;
  height: 371px;
  background: #fff;
  padding: 0 14px;
  box-sizing: border-box;
  .close_icon {
    position: fixed;
    top: 10px;
    right: 14px;
    width: 11px;
    height: 11px;
  }
}
</style>