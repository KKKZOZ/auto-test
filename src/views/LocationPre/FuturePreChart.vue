<template>
<div class="future-charts">
    <ve-line :data="chartData" :settings="settings" :mark-line="markLine" :mark-point="markPoint" :extend="extend" :toolbox="toolbox" :grid="grid" :xAxis="xAxis" :colors="chartColors">
    </ve-line>
</div>
</template>

<script>
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/markPoint'
export default {
    name: "future-pre-chart",
    data() {
        this.settings = {
                axisSite: {
                    right: ['windSpeed']
                },
                area: true,
                stack: false,
                yAxisType: ['KMB', 'normal'],
                yAxisName: ['功率', '风速'],
                labelMap: {
                    'power': '功率:W',
                    'windSpeed': '风速:m/s'
                },
                legendName: {
                    'power': "功率",
                    'windSpeed': '风速'
                },
                
            },
            this.markLine = {
                data: [{
                    name: '平均线',
                    type: 'average'
                }]
            }
        this.markPoint = {
            data: [{
                name: '最大值',
                type: 'max'
            }]
        }
        this.extend = {
            xAxis: {
                type: 'time',
                // axisLabel: {
                //     show: true,
                //     rotate: 15 // 设置x轴标签旋转角度
                // }
                // splitNumber: 6,
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
            left: "center",
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
                columns: ["fxTime", "power", "windSpeed"],
                rows: []
            }
        };
    },
    methods: {
        getData(chartData) {
            console.log(chartData)
            console.log(chartData.rows)
            let rows = chartData.rows
            this.chartData.rows = rows
            console.log(this.chartData)
        }
    },
};
</script>

<style>

</style>
