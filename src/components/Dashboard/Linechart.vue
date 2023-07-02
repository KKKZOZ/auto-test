<script>
import * as echarts from "echarts";
import data from "../../assets/json/aqi-beijing.json";

var myChart;
var option = {
    title: {
        text: '实时功率预测',
        left: '1%'
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '5%',
        right: '15%',
        bottom: '10%'
    },
    xAxis: {
        data: data.map(function (item) {
            return item[0];
        })
    },
    yAxis: {},
    toolbox: {
        right: 10,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: [
        {
            startValue: '2023-10-01'
        },
        {
            type: 'inside'
        }
    ],
    visualMap: {
        top: 50,
        right: 10,
        pieces: [
            {
                gt: -10000,
                lte: 0,
                color: '#93CE07'
            },
            {
                gt: 0,
                lte: 10000,
                color: '#FBDB0F'
            },
            {
                gt: 10000,
                lte: 20000,
                color: '#FC7D02'
            },
            {
                gt: 20000,
                lte: 30000,
                color: '#FD0100'
            },
            {
                gt: 30000,
                lte: 40000,
                color: '#AA069F'
            },
            {
                gt: 40000,
                color: '#AC3B2A'
            }
        ],
        outOfRange: {
            color: '#999'
        }
    },
    series: {
        name: '实时功率预测',
        type: 'line',
        data: data.map(function (item) {
            return item[1];
        }),
        markLine: {
            silent: true,
            lineStyle: {
                color: '#333'
            },
            data: [
                {
                    yAxis: 0
                },
                {
                    yAxis: 10000
                },
                {
                    yAxis: 20000
                },
                {
                    yAxis: 30000
                },
                {
                    yAxis: 40000
                }
            ]
        }
    }
}
export default {
    props: ["linechart"],
    components: {},
    data() {
        return {
        };
    },
    computed: {},
    watch: {
        linechart: {
            handler(newV, oldV) {
                var data = JSON.stringify(newV);
                const extractedTimes = Object.values(JSON.parse(data)).map(item => item.DATATIME);
                const extractedYD15 = Object.values(JSON.parse(data)).map(item => item.YD15);
                myChart.setOption(
                    (option = {
                        xAxis: {
                            data: extractedTimes
                        },
                        dataZoom: [
                            {
                                startValue: '2014-06-01 15:00'
                            },
                            {
                                type: 'inside'
                            }
                        ],
                        series: {
                            name: '实时功率预测',
                            type: 'line',
                            data: extractedYD15
                        }
                    })
                );
            }
        },
        deep: true,
    },
    methods: {

    },
    created() { },
    mounted() {
        myChart = echarts.init(document.getElementById("Linechart"));
        myChart.setOption(option);
        window.onresize = () => {
            myChart.resize();
        };
        // myChart.setOption(this.option);
    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { } //如果页面有 keep-alive 缓存功能，这个函数会触发
};
</script>

<template>
    <div id="Linechart" style="width: 100%;height:600px;"></div>
</template>

<style></style>
 