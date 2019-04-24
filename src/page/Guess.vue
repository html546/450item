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
            <span>5095.27</span>
            <span>≈34087.36CNY</span>
          </div>
        </van-col>
        <van-col span="14" :offset="2">
          <div class="price_right">
            <van-row type="flex" justify="center">
              <van-col span="7" class="price_right_content">
                <span>竞猜</span>
                <span class="up">1.93%</span>
              </van-col>
              <van-col span="10" class="price_right_content">
                <span>24小时量</span>
                <span>23321</span>
              </van-col>
              <van-col span="7" class="price_right_content">
                <span>最高价</span>
                <span>5200</span>
              </van-col>
            </van-row>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="time_slot">
      <van-row>
        <van-col span="3">
          <button :class="{active:shows==1}" @click="OneShow">1分</button>
        </van-col>
        <van-col span="3">
          <button :class="{active:shows==2}" @click="ThreeShow">3分</button>
        </van-col>
        <van-col span="3">
          <button :class="{active:shows==3}" @click="fiveShow">5分</button>
        </van-col>
        <van-col span="3">
          <button :class="{active:shows==4}" @click="fifShow">15分</button>
        </van-col>
        <van-col span="3">
          <button :class="{active:shows==5}" @click="thiryShow">30分</button>
        </van-col>
        <van-col span="3">
          <button :class="{active:shows==6}" @click="OnehourShow">1小时</button>
        </van-col>
        <van-col span="3">
          <button :class="{active:shows==7}" @click="dayShow">日线</button>
        </van-col>
        <van-col span="3">
          <button :class="{active:shows==8}" @click="weekShow">周线</button>
        </van-col>
      </van-row>
    </div>

    <div>
      <ve-line :data="chartData"></ve-line>
    </div>
  </div>
</template>

<script>
import { NavBar, Toast, Row, Col } from "vant";
import VeLine from "v-charts/lib/line.common";
function timeToLocal(time) {
  date = new Date(time);
  month = date.getMonth() + 1;
  day = date.getDay();
  hour = date.getHours();
  minute = date.getMinutes();

  return month + "-" + day + " " + hour + ":" + minute;
}
export default {
  name: "",
  data() {
    return {
      shows: 1,
      conn: "",
      chartData: {
        column: [
          "日期",
          "open",
          "highest",
          "lowest",
          "close",
          "vol",
          "instrument_id"
        ],
        rows: []
      }
    };
  },
  components: {
    "van-nav-bar": NavBar,
    "van-row": Row,
    "van-col": Col,
    VeLine
  },
  created() {
    if (window["WebSocket"]) {
      this.conn = new WebSocket("ws://47.52.168.164:8080/ws");
      this.conn.onclose = function(evt) {
        let content = "<b>Connection closed.</b>";
      };
      this.conn.onmessage = function(evt) {
        var messages = evt.data.split("\n");
        // console.log(JSON.parse(messages));
        if (messages[0] == "errorRequest") {
          alert("请求错误");
          return;
        }
        let message = JSON.parse(messages);
        if (message.type == 0) {
          for (var i = 0; i > message.data.length; i++) {
            message.data[i][0] = timeToLocal(message.data[i][0]);
          }
          this.chartData.rows = message.data;
          console.log(this.chartData.rows);
        }

        /* for (var i = 0; i < messages.length; i++) {
          let data = JSON.parse(messages[i]);
          let html = "";
          if (data.type == 1) {
            html =
              "<div style='background-color:#5cb85c'>" +
              "<p>类型:实时价格</p><p>交易对:" +
              data.topic +
              "</p><p>数据内容: " +
              getPriceShow(data.data) +
              "</p>" +
              "</div><br/>";
            setPrice(data.data);
          } else {
            html =
              "<div style='background-color:#337ab7'>" +
              "<p>类型:k线数据</p><p>交易对时间k线:" +
              data.topic +
              "</p><p>数据内容:" +
              JSON.stringify(data.data) +
              "</p>" +
              "</div><br/>";
          }
        } */
      };
    } else {
      var item = document.createElement("div");
      item.innerHTML = "<b>Your browser does not support WebSockets.</b>";
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("我的竞猜");
    },
    OneShow() {
      this.shows = 1;
    },
    ThreeShow() {
      this.shows = 2;
    },
    fiveShow() {
      this.shows = 3;
    },
    fifShow() {
      this.shows = 4;
    },
    thiryShow() {
      this.shows = 5;
    },
    OnehourShow() {
      this.shows = 6;
    },
    dayShow() {
      this.shows = 7;
    },
    weekShow() {
      this.shows = 8;
    },
    handleChange(e) {
      console.log(e);
      this.conn.send(e.target.value);
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
</style>