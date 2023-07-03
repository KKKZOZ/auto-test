<template>
    <ve-line :data="chartData" :settings="settings" :extend="extend" :toolbox="toolbox" :grid="grid" :xAxis="xAxis" :xAxisType="'time'" :colors="chartColors">
    </ve-line>
</template>

<script>
import LocationPreApi from '../../api/LocationPre'

export default {
    name: "future-pre-chart",
    data() {
        this.extend = {
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
        this.legend = {};
        this.xAxis = {
            type: 'category',
            axisLabel: {
                show: true,
                rotate: 15 // 设置x轴标签旋转角度
            }
        };
        return {
            chartData: {
                columns: [],
                rows: []
            }
        };
    },
    methods: {
        // 获取当前经纬度下的所在地的未来24小时功率预测
        getPowerPreData(lat,lon) {
            LocationPreApi.getFuturePreData(lat,lon).then((res) => {
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
