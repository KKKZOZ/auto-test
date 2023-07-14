<template>
<ve-line :data="chartData" :settings="settings" :mark-line="markLine"
:mark-point="markPoint" :extend="extend" :toolbox="toolbox" :grid="grid" :xAxis="xAxis" :colors="chartColors">
</ve-line>
</template>

<script>
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/markPoint'
export default {
    name: "future-pre-chart",
    data() {
        this.settings = {
            area: true,
            stack: false,
        },
        this.markLine = {
        data: [
          {
            name: '平均线',
            type: 'average'
          }
        ]
      }
      this.markPoint = {
        data: [
          {
            name: '最大值',
            type: 'max'
          }
        ]
      }
        this.extend = {
            xAxis: {
                type: 'time',
                // axisLabel: {
                //     show: true,
                //     rotate: 15 // 设置x轴标签旋转角度
                // }
                splitNumber: 12,
                // minInterval: 3600 * 15,
                // maxInterval: 3600 * 1000,
            },
            dataZoom: [{
                    // type: 'inside',
                    show: true,
                    realtime: true,
                    start: 0,
                    end: 100,
                    // xAxisIndex: [0, 1]
                },
                {
                    type: 'inside',
                    show: true,
                    realtime: true,
                    start: 0,
                    end: 5,
                    xAxisIndex: [0],
                    startValue: 30,
                    //显示的多少数据
                    endValue: 70,
                    zoomLock: false, //阻止区域缩放
                }
            ],
        };
        this.grid = {
            show: false
        };
        this.chartColors = ["#ABDCFF", "#0396FF", "#A5DEE4"];
        this.toolbox = {
            show: true,
            top: 20,
            feature: {
                dataZoom: {
                    yAxisIndex: "none"
                },
                dataView: {
                    show: true,
                    readOnly: true
                },
                magicType: {
                    type: ["line", "bar"]
                },
                restore: {},
                saveAsImage: {}
            }
        };

        return {
            chartData: {
                columns: ["fxTime", "power","windSpeed"],
                rows: []
            }
        };
    },
    methods: {
        getData(chartData){
            console.log(chartData)
            console.log(chartData.rows)
            let rows = chartData.rows
            this.chartData.rows = rows
            console.log(this.chartData)
        }
        // 获取当前经纬度下的所在地的未来24小时功率预测
        // getPowerPreData(lat, lon) {
        //     LocationPreApi.getFuturePreData(lat, lon).then((res) => {
        //         console.log(res)
        //         let chartData = res.data.hourly
        //         this.chartData.rows = chartData
        //         // this.chartData.columns = chartData.columns
        //         console.log(this.chartData)
        //     })
        // }
    },
    // created() {
    //     this.chartData.rows = this.chartRows
    //     console.log(this.chartData)
    // }
};
</script>
