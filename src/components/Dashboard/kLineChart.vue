<script>
import * as echarts from "echarts";
import staticData from "../../assets/json/stock-DJI.json";

var myChart;
export default {
  props: ["kLineData"],
  components: {},
  data() {
    return {
      option: {}
    };
  },
  computed: {},
  //   watch: {
  //     kLineData: {
  //       handler(newV, oldV) {
  //         var option = {};
  //         myChart.setOption(option, true);
  //       },
  //       deep: true,
  //     },
  //   },
  methods: {
    splitData(rawData) {
      const categoryData = [];
      const values = [];
      for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i][0]);
        rawData[i][0] = i;
        values.push(rawData[i]);
      }
      return {
        categoryData: categoryData,
        values: values
      };
    },
    renderItem(params, api) {
      var xValue = api.value(0);
      var openPoint = api.coord([xValue, api.value(1)]);
      var closePoint = api.coord([xValue, api.value(2)]);
      var lowPoint = api.coord([xValue, api.value(3)]);
      var highPoint = api.coord([xValue, api.value(4)]);
      var halfWidth = api.size([1, 0])[0] * 0.35;
      var style = api.style({
        stroke: api.visual("color")
      });
      return {
        type: "group",
        children: [
          {
            type: "line",
            shape: {
              x1: lowPoint[0],
              y1: lowPoint[1],
              x2: highPoint[0],
              y2: highPoint[1]
            },
            style: style
          },
          {
            type: "line",
            shape: {
              x1: openPoint[0],
              y1: openPoint[1],
              x2: openPoint[0] - halfWidth,
              y2: openPoint[1]
            },
            style: style
          },
          {
            type: "line",
            shape: {
              x1: closePoint[0],
              y1: closePoint[1],
              x2: closePoint[0] + halfWidth,
              y2: closePoint[1]
            },
            style: style
          }
        ]
      };
    },

    getData() {
      var data = this.splitData(staticData);
      myChart.setOption(
        (this.option = {
          animation: false,
          legend: {
            bottom: 10,
            left: "center",
            data: ["Dow-Jones index"]
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross"
            },
            position: function(pos, params, el, elRect, size) {
              var obj = { top: 10 };
              obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
              return obj;
            }
          },
          axisPointer: {
            link: [{ xAxisIndex: "all" }]
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: false
              },
              brush: {
                type: ["lineX", "clear"]
              }
            }
          },
          grid: [
            {
              left: "10%",
              right: "8%",
              bottom: 150
            }
          ],
          xAxis: [
            {
              type: "category",
              data: data.categoryData,
              boundaryGap: false,
              axisLine: { onZero: false },
              splitLine: { show: false },
              min: "dataMin",
              max: "dataMax",
              axisPointer: {
                z: 100
              }
            }
          ],
          yAxis: [
            {
              scale: true,
              splitArea: {
                show: true
              }
            }
          ],
          dataZoom: [
            {
              type: "inside",
              start: 98,
              end: 100,
              minValueSpan: 10
            },
            {
              show: true,
              type: "slider",
              bottom: 60,
              start: 98,
              end: 100,
              minValueSpan: 10
            }
          ],
          series: [
            {
              name: "Dow-Jones index",
              type: "custom",
              renderItem: this.renderItem,
              dimensions: ["-", "open", "close", "lowest", "highest"],
              encode: {
                x: 0,
                y: [1, 2, 3, 4],
                tooltip: [1, 2, 3, 4]
              },
              data: data.values
            }
          ]
        }),
        true
      );
    }
  },
  created() {},
  mounted() {
    myChart = echarts.init(document.getElementById("kLine"));
    this.getData();
    window.onresize = () => {
      myChart.resize();
    };
    // myChart.setOption(this.option);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有 keep-alive 缓存功能，这个函数会触发
};
</script>

<template>
  <div id="kLine" style="width: 100%;height:600px;"></div>
</template>

<style></style>
