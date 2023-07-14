<template>
<b-card body-class="p-0" header-class="border-0 bg-transparent">
    <ve-line :data="chartData" :settings="settings" :extend="extend" :toolbox="toolbox" :grid="grid" :xAxis="xAxis" :xAxisType="'time'" :colors="chartColors">
    </ve-line>
</b-card>
</template>

<script>
import historyDataApi from '../../api/HistoryData'

export default {
    name: "history-data-date-chart",
    data() {
        this.settings = {
                area: true,
                stack: false,
            },
            this.extend = {
                grid: {
                    show: false
                },
                xAxis: {
                    type: 'time',
                    splitNumber: 10,
                    minInterval: 3600 * 15,
                    maxInterval: 3600 * 1000 * 30,
                },
                dataZoom: [{
                        // type: 'inside',
                        show: true,
                        realtime: true,
                        start: 30,
                        end: 70,
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
        // 十个颜色
        this.chartColors = ["#ABDCFF", "#0396FF", "#A5DEE4", "#FFD8C9", "#FFBFBF", "#FFD6E7", "#FFD6E7", "#FFD6E7", "#FFD6E7", "#FFD6E7"];
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
        this.legend = {};
        // this.xAxis = {
        //     type: 'time',
        //     // axisLabel: {
        //     //     show: true,
        //     //     rotate: 15 // 设置x轴标签旋转角度
        //     // }
        // };
        this.yAxis = {};
        this.radar = {};
        this.tooltip = {};
        this.axisPointer = {};
        this.brush = {};
        this.geo = {};
        this.timeline = {};
        this.graphic = {};
        this.series = {};
        this.textStyle = {

        };
        return {
            startDate: '',
            endDate: '',
            chartData: {
                columns: [],
                rows: []
            }
        };
    },
    methods: {
        //交互：获取数据————历史数据
        getData(range, turbine_type) {
            var that = this;
            let chartData = [];
            historyDataApi.getTimeRangeData(range[0], range[1], turbine_type).then((res) => {
                console.log(res)
                chartData = res.data.data
                this.chartData.rows = chartData.rows
                this.chartData.columns = chartData.columns
                console.log(this.chartData)
            })
        }
    }
};
</script>
