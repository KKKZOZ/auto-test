<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 h-100" style="background-image: var(--gradient-22);">
      <div class="mt--4 mt-md--8  mb-4 text-right">
        <img src="../assets/start/first.png" v-shared-element:markImage="{ duration: '2s' }" height="100"
          style="text-right">
      </div>
      <b-row class="justify-content-md-center">
        <b-col xl="3" lg="4" md="6" class="mx-2">
          <div class="num-card my-2" style="background-color: var(--gray-0);">
            <b-row>
              <b-col xl="8" md="6" sm="8" cols="6" class="pl-5 py-4">
                <h5 class="mb-0" style="color: var(--grays-1);">2022年全国风电装机容量</h5>
                <animated-number :value=36544 :formatValue="format" :duration="2000" :easing="'easeOutExpo'" :delay=0
                  class="h1" />
                <div style="text-align: left;">万千瓦</div>
              </b-col>
              <b-col xl="4" md="6" sm="4" cols="6" align="right"
                style="display: flex; align-items: center;justify-content:center">
                <img src="../assets/images/iconPark-trend-two.svg" style="width: 65px; height: 65px;" alt="">
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col xl="3" lg="4" md="6" class="mx-2">
          <div class="num-card my-2" style="background-color: var(--gray-0);">
            <b-row>
              <b-col xl="8" md="6" sm="8" cols="6" class="pl-5 py-4">
                <h4 class="mb-0" style="color: var(--grays-1);">2022年风电新增装机</h4>
                <animated-number :value=3763 :formatValue="format" :duration="2000" :easing="'easeOutExpo'" :delay=200
                  class="h1" />
                <div style="text-align: left;">万千瓦</div>
              </b-col>
              <b-col xl="4" md="6" sm="4" cols="6" align="right"
                style="display: flex; align-items: center;justify-content:center">
                <img src="../assets/images/if-chart-histogram-alt.svg" style="width: 65px; height: 65px;" alt="">
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col xl="3" lg="4" md="6" class="mx-2">
          <div class="num-card my-2" style="background-color: var(--gray-0);">
            <b-row>
              <b-col xl="8" md="6" sm="8" cols="6" class="pl-5 py-4">
                <h4 class="mb-0" style="color: var(--grays-1);">2022年风电总发电量</h4>
                <animated-number :value=6867.2 :formatValue="format" :duration="2000" :easing="'easeOutExpo'" :delay=500
                  class="h1" />
                <div style="text-align: left;">亿千瓦时</div>
              </b-col>
              <b-col xl="4" md="6" sm="4" cols="6" align="right"
                style="display: flex; align-items: center;justify-content:center">
                <img src="../assets/images/antOutline-area-chart.svg" style="width: 65px; height: 65px;" alt="">
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <h2 class="pl-4">风力发电相关政策一览</h2>
      </b-row>

      <b-row align-h="center">
        <b-col xl="11" md="11" sm="11" cols="11">
          <div id="demo">
            <div class="px-2 py-2" style="width: 1600px;">
              <b-row align-h="center" style="height: 23rem;">
        <b-col xl="3" md="3" sm="3" cols="3" style="height: 20rem;">
          <div class="xcard new-1">
            <div class="content">
              <h2 class="title" style="color: var(--gray-0);">《能源碳达峰碳中和标准化提升行动计划》的通知</h2>
              <p class="copy">为深入贯彻党中央、国务院关于碳达峰、碳中和的重大战略决策，认真落实...</p>
              <button class="btn" @click="go('http://www.nea.gov.cn/2022-10/09/c_1310668927.htm')">详情</button>
            </div>
          </div>
        </b-col>
        <b-col xl="3" md="3" sm="3" cols="3" style="height: 20rem;">
          <div class="xcard new-2">
            <div class="content">
              <h2 class="title" style="color: var(--gray-0);">《加快电力装备绿色低碳创新发展行动计划》</h2>
              <p class="copy">各省、自治区、直辖市及计划单列市、新疆生产建设兵团工业和信息化、财政...</p>
              <button class="btn" @click="go('https://www.gov.cn/zhengce/zhengceku/2022-08/29/content_5707333.htm')">详情</button>
            </div>
          </div>
        </b-col>
        <b-col xl="3" md="3" sm="3" cols="3" style="height: 20rem;">
          <div class="xcard new-3">
            <div class="content">
              <h2 class="title" style="color: var(--gray-0);">《扩大内需战略规划纲要（2022－2035年）》</h2>
              <p class="copy">新华社北京12月14日电 近日，中共中央、国务院印发了《扩大内需战略规划纲要...</p>
              <button class="btn" @click="go('https://www.gov.cn/zhengce/2022-12/14/content_5732067.htm')">详情</button>
            </div>
          </div>
        </b-col>
        <b-col xl="3" md="3" sm="3" cols="3" style="height: 20rem;">
          <div class="xcard new-4">
            <div class="content">
              <h2 class="title" style="color: var(--gray-0);">《风起初春，风电轴承步入国产化深水区》</h2>
              <p class="copy">风电行业高景气，装机规模有望持续增长。根据GWEC统计，2022-25年全球风电总装机为...</p>
              <button class="btn" @click="go('https://wk.askci.com/details/eca7823771504db1a6e31b98c2eaf30e/')">详情</button>
            </div>
          </div>
        </b-col>
      </b-row>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <h2 class="pl-4">风力发电相关数据一览</h2>
      </b-row>

      <b-row id="draggable" style="height: auto;">
        <b-col xl="5" md="6" sm="12" class="px-2 my-2">
          <div class="data-card pt-2">
            <div id="cc1" style="width:100%;height:400px;"></div>
          </div>
        </b-col>
        <b-col xl="4" md="6" sm="12" class="px-2 my-2">
          <div class="data-card pt-2">
            <div id="cc2" style="width: 100%;height:400px;"></div>
          </div>
        </b-col>
        <b-col xl="3" md="6" sm="12" class="px-2 my-2">
          <div class="data-card pt-2">
            <div id="cc3" style="width: 100%;height:400px;"></div>
          </div>
        </b-col>
        <b-col xl="6" md="6" sm="12" class="px-2 my-2">
          <div class="data-card pt-2">
            <div id="cc4" style="width: 100%;height:400px;"></div>
          </div>
        </b-col>
        <b-col xl="6" md="6" sm="12" class="px-2 my-2" style="height: 400px;">
          <div class="data-card pt-2">
            <div id="cc5" style="width: 100%;height:400px;"></div>
          </div>
        </b-col>
        <b-col xl="12" md="12" sm="12" class="px-2 my-2" style="height: 600px;">
          <div class="data-card pt-2">
            <div id="cc6" style="width: 100%;height:600px;"></div>
          </div>
        </b-col>
      </b-row>

    </base-header>
  </div>
</template>
<script>
import * as echarts from "echarts5.4.0";
import Sortable from "sortablejs";
import { mapJson } from "../assets/china.js";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import AnimatedNumber from "animated-number-vue";

export default {
  components: {
    AnimatedNumber
  },
  methods: {
    go(address) {
      console.log(address);
      window.open(address);
    },
    format(value) {
      return value.toFixed(2);
    }
  },
  mounted() {
    const ps = new PerfectScrollbar("#demo");

    // let cards = document.getElementById("draggable");
    // let sortable = Sortable.create(cards);
    echarts.registerMap("chinaMap", mapJson);
    var myChart1 = echarts.init(document.getElementById("cc1"));
    var myChart2 = echarts.init(document.getElementById("cc2"));
    var myChart3 = echarts.init(document.getElementById("cc3"));
    var myChart4 = echarts.init(document.getElementById("cc4"));
    var myChart5 = echarts.init(document.getElementById("cc5"));
    var myChart6 = echarts.init(document.getElementById("cc6"));
    // 绘制图表
    myChart1.setOption({
      title: {
        text: "2016-2022年中国风力发电累计装机容量统计",
        textStyle: {
          fontSize: 16
        },
        left: "center"
      },
      tooltip: {},
      grid: {
        top: '15%',
        left: '15%',
      },
      xAxis: {
        data: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"]
      },
      yAxis: {
        type: "value",
        name: "万千瓦",
        axisLabel: {
          formatter: "{value}"
        },
        min: 0,
        max: 40000,
        interval: 5000
      },
      visualMap: {
        orient: "horizontal",
        left: "center",
        min: 10000,
        max: 40000,

        // Map the score column to color
        dimension: 1,
        inRange: {
          color: ["#65B581", "#FFCE34", "#FD665F"]
        }
      },
      series: [
        {
          name: "装机量",
          type: "bar",
          data: [14864, 16367, 18426, 23005, 28153, 32848, 36544]
        }
      ]
    });
    myChart2.setOption({
      title: {
        text: "2016-2022年中国风力发电新增装机容量统计",
        textStyle: {
          fontSize: 16
        },
        left: "center"
      },
      tooltip: {},
      grid: {
        left: '15%',
        bottom: '10%',
      },
      xAxis: {
        data: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"]
      },
      yAxis: {
        type: "value",
        name: "万千瓦",
        axisLabel: {
          formatter: "{value}"
        },
        min: 0,
        max: 8000,
        interval: 1000
      },
      series: [
        {
          name: "新增装机量",
          type: "bar",
          data: [1930, 1503, 2059, 2574, 7167, 4577, 3763]
        }
      ]
    });
    myChart3.setOption({
      title: {
        text: "2022年中国风力发电新增装机容量统计",
        textStyle: {
          fontSize: 16
        },
        left: "center"
      },
      tooltip: {
        trigger: "item"
      },
      grid: {
        left: '15%',
        bottom: '5%',
      },
      legend: {
        top: "5%",
        left: "center"
      },
      series: [
        {
          name: "装机量占比",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          color: [
            "#3fb1e3",
            "#6be6c1",
            "#626c91",
            "#a0a7e6",
            "#c4ebad",
            "#96dee8"
          ],
          data: [
            { value: 92.2, name: "陆上风电" },
            { value: 7.8, name: "海上风电" }
          ]
        }
      ]
    });
    myChart4.setOption({
      title: {
        text: "我国风电累计装机量持续上升",
        textStyle: {
          fontSize: 16
        },
        left: "center"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      grid: {
        left: '15%',
        right: '15%',
        bottom: '10%',
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ["Evaporation", "Precipitation", "Temperature"]
      },
      xAxis: [
        {
          type: "category",
          data: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
          axisPointer: {
            type: "shadow"
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "装机容量",
          min: 0,
          max: 400,
          interval: 100,
          axisLabel: {
            formatter: "{value} GW"
          }
        },
        {
          type: "value",
          name: "占比",
          min: -50,
          max: 150,
          interval: 50,
          axisLabel: {
            formatter: "{value} %"
          }
        }
      ],
      series: [
        {
          name: "累计风电装机量",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value + " GW";
            }
          },
          data: [138, 148, 163, 184, 230, 281, 327]
        },
        {
          name: "新增风电装机容量",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value + " GW";
            }
          },
          data: [20.3, 10, 15, 21, 46, 51, 46]
        },
        {
          name: "新增装机YoY",
          type: "line",
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + " %";
            }
          },
          data: [38, -25, -13, 18, 25, 101, 3],
          smooth: true,
          itemStyle: {
            normal: {
              lineStyle: {
                width: 5,
                type: "dotted"
              }
            }
          }
        },
        {
          name: "累计装机YoY",
          type: "line",
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + " %";
            }
          },
          data: [30, 25, 21, 18, 19, 23, 20],
          smooth: true,
          itemStyle: {
            normal: {
              lineStyle: {
                width: 5
              }
            }
          }
        }
      ]
    });

    myChart5.setOption({
      // Make gradient line here
      visualMap: {
        show: false,
        type: "continuous",
        seriesIndex: 0,
        min: 4,
        max: 9,
        interval: 1
      },
      title: {
        text: "风力发电量比重持续上升",
        textStyle: {
          fontSize: 16
        },
        left: "center"
      },
      tooltip: {
        trigger: "axis",
        valueFormatter: function (value) {
          return value + " %";
        }
      },
      grid: {
        bottom: '10%',
      },
      xAxis: {
        data: [2017, 2018, 2019, 2020, 2021]
      },

      yAxis: {
        min: 4,
        max: 9,
        interval: 1,
        axisLabel: {
          formatter: "{value} %"
        }
      },
      series: {
        type: "line",
        showSymbol: false,
        data: [4.9, 5.1, 5.3, 6.2, 8.0],
        smooth: true,
        itemStyle: {
          normal: {
            lineStyle: {
              width: 5
            }
          }
        }
      }
    });

    var data = [
      { name: "内蒙古自治区", value: 51 },
      { name: "新疆维吾尔自治区", value: 28 },
      { name: "甘肃省", value: 26 },
      { name: "广东省", value: 20 },
      { name: "河北省", value: 20 },
      { name: "吉林省", value: 18 },
      { name: "广西壮族自治区", value: 17 },
      { name: "江苏省", value: 16 },
      { name: "海南省", value: 15 },
      { name: "山西省", value: 10 },
      { name: "黑龙江省", value: 10 },
      { name: "辽宁省", value: 10 },
      { name: "河南省", value: 10 },
      { name: "山东省", value: 10 },
      { name: "云南省", value: 9 },
      { name: "青海省", value: 8 },
      { name: "四川省", value: 7 },
      { name: "湖北省", value: 5 },
      { name: "湖南省", value: 5 },
      { name: "贵州省", value: 5 },
      { name: "福建省", value: 4 },
      { name: "重庆市", value: 4 },
      { name: "安徽省", value: 4 },
      { name: "浙江省", value: 4 },
      { name: "宁夏回族自治区", value: 4 },
      { name: "江西省", value: 3 },
      { name: "天津市", value: 2 },
      { name: "北京市", value: 1 }
    ];
    data.sort(function (a, b) {
      return a.value - b.value;
    });

    const barOption = {
      title: {
        text: "我国23个省份“十四五”期间规划新增风电装机超310GW",
        textStyle: {
          fontSize: 16
        },
        top: "5%",
        left: "6%"
      },
      tooltip: {
        formatter: function (params) {
          return params.name + " : " + params.value + "GW";
        }
      },
      xAxis: {
        type: "value"
      },
      yAxis: {
        type: "category",
        axisLabel: {
          rotate: 30
        },
        data: data.map(function (item) {
          return item.name;
        })
      },
      visualMap: {
        orient: "horizontal",
        left: "center",
        min: 0,
        max: 60,
        text: ["高占比", "低占比"],
        // Map the score column to color
        dimension: 0,
        inRange: {
          color: ["#65B581", "#FFCE34", "#FD665F"]
        }
      },
      animationDurationUpdate: 1000,
      series: {
        name: "风电新增装机量",
        type: "bar",
        id: "population",
        data: data.map(function (item) {
          return item.value;
        }),
        universalTransition: true
      }
    };
    const mapOption = {
      title: {
        text: "我国23个省份“十四五”期间规划新增风电装机超310GW",
        top: "5%",
        left: "6%"
      },
      tooltip: {
        formatter: function (params) {
          return params.name + " : " + params.value + "GW";
        }
      },
      visualMap: {
        left: "right",
        min: 0,
        max: 60,
        inRange: {
          color: ["#65B581", "#FFCE34", "#FD665F"]
        },
        text: ["High", "Low"],
        calculable: true
      },
      series: [
        {
          id: "population",
          type: "map",
          roam: true,
          zoom: 1.7,
          center: [101.77, 36.62], // 西宁
          map: "chinaMap",
          animationDurationUpdate: 1000,
          universalTransition: true,
          data: data
        }
      ]
    };

    let currentOption = mapOption;
    myChart6.setOption(mapOption);
    setInterval(function () {
      currentOption = currentOption === mapOption ? barOption : mapOption;
      // myChart6.clear();
      myChart6.setOption(currentOption, true);
    }, 3000);

    // myChart6.setOption();

    window.onresize = () => {
      myChart1.resize();
      myChart2.resize();
      myChart3.resize();
      myChart4.resize();
      myChart5.resize();
      myChart6.resize();
    };
  }
};
</script>
<style>
#demo {
  position: relative;
  overflow: auto;
}

.news-card {
  background-color: var(--gray-0);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-1);
}

.data-card {
  background-color: var(--gray-0);
  border-radius: var(--radius-4);
  box-shadow: var(--shadow-1);
}

.num-card {
  background-color: var(--gray-0);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-3);
}

@keyframes c-scale-up {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.02);
  }
}

.num-card:hover {
  box-shadow: var(--shadow-4);
  animation: c-scale-up forwards;
  animation-duration: 0.7s;
  animation-timing-function: var(--ease-out-5);
}

.news-card:hover {
  cursor: pointer;
  box-shadow: var(--shadow-4);
  animation: c-scale-up forwards;
  animation-duration: 0.7s;
  animation-timing-function: var(--ease-out-5);
}

.data-card:hover {
  box-shadow: var(--shadow-6);
  animation: c-scale-up forwards;
  animation-duration: 0.7s;
  animation-timing-function: var(--ease-out-5);
}

.pointer:hover {
  cursor: pointer;
}

/* Dev */

:root {
  --d: 700ms;
  --e: cubic-bezier(0.19, 1, 0.22, 1);

}


.xcard {
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-1);
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
}



.new-1:before{
  background-image: url(https://kkkzoz-1304409899.cos.ap-chengdu.myqcloud.com/img/wind-farm.jpg );
}

.new-2:before{
  background-image: url(https://kkkzoz-1304409899.cos.ap-chengdu.myqcloud.com/img/news-2.jpg);
}

.new-3:before{
  background-image: url(https://kkkzoz-1304409899.cos.ap-chengdu.myqcloud.com/img/image-20230707190002862.png);
}

.new-4:before{
  background-image: url(https://kkkzoz-1304409899.cos.ap-chengdu.myqcloud.com/img/news-4.jpg);
}


@media (min-width: 600px) {
  .xcard {
    height: 350px;
  }
}

.xcard:before {

  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-size: cover;
  background-position: 0 0;
  transition: transform calc(var(--d) * 1.5) var(--e);
  pointer-events: none;
}

.xcard:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  pointer-events: none;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.009) 11.7%, rgba(0, 0, 0, 0.034) 22.1%, rgba(0, 0, 0, 0.072) 31.2%, rgba(0, 0, 0, 0.123) 39.4%, rgba(0, 0, 0, 0.182) 46.6%, rgba(0, 0, 0, 0.249) 53.1%, rgba(0, 0, 0, 0.32) 58.9%, rgba(0, 0, 0, 0.394) 64.3%, rgba(0, 0, 0, 0.468) 69.3%, rgba(0, 0, 0, 0.54) 74.1%, rgba(0, 0, 0, 0.607) 78.8%, rgba(0, 0, 0, 0.668) 83.6%, rgba(0, 0, 0, 0.721) 88.7%, rgba(0, 0, 0, 0.762) 94.1%, rgba(0, 0, 0, 0.79) 100%);
  transform: translateY(-50%);
  transition: transform calc(var(--d) * 2) var(--e);
}


.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  transition: transform var(--d) var(--e);
  z-index: 1;
}

.content>*+* {
  margin-top: 1rem;
}

.title {
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.2;
  padding-bottom: 10%;

}

.copy {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.35;
}

.btn {
  cursor: pointer;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;
}

.btn:hover {
  background-color: #0d0d0d;
}

.btn:focus {
  outline: 1px dashed yellow;
  outline-offset: 3px;
}

@media (hover: hover) and (min-width: 600px) {
  .xcard:after {
    transform: translateY(0);
  }

  .content {
    transform: translateY(calc(100% - 4.5rem));
  }

  .content>*:not(.title) {
    opacity: 0;
    transform: translateY(1rem);
    transition: transform var(--d) var(--e), opacity var(--d) var(--e);
  }

  .xcard:hover,
  .xcard:focus-within {
    align-items: center;
  }

  .xcard:hover:before,
  .xcard:focus-within:before {
    transform: translateY(-4%);
  }

  .xcard:hover:after,
  .xcard:focus-within:after {
    transform: translateY(-50%);
  }

  .xcard:hover .content,
  .xcard:focus-within .content {
    transform: translateY(0);
  }

  .xcard:hover .content>*:not(.title),
  .xcard:focus-within .content>*:not(.title) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: calc(var(--d) / 8);
  }

  .xcard:focus-within:before,
  .xcard:focus-within:after,
  .xcard:focus-within .content,
  .xcard:focus-within .content>*:not(.title) {
    transition-duration: 0s;
  }
}
</style>
