<template>
    <div>
        <div id="Hygrometer" style="width: 100%;height:300px;"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
var myChart;
var option;
var colorArr = ['#6394F8', '#FFD380'];
var colorJB = {
    x: 0,
    y: 1,
    x2: 0,
    y2: 0,
    type: 'linear',
    global: false,
    colorStops: [
        {
            offset: 0,
            color: colorArr[0],
        },
        {
            offset: 0.6,
            color: colorArr[0],
        },
        {
            offset: 1,
            color: colorArr[1],
        },
    ],
};
option = {
            series: [
                {
                    type: 'gauge',
                    startAngle: 225,
                    endAngle: -45,
                    min: 0,
                    max: 100,
                    splitNumber: 5, //刻度数量
                    radius: '70%',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#999',
                        },
                    },
                    detail: {
                        show: true,
                        fontFamily: 'PingFang',
                        fontWeight: '500',
                        color: '#4B525E',
                        fontSize: 12,
                        offsetCenter: [0, '70%'],
                        formatter: 0
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: colorArr[0],
                            width: 1
                        },
                    },
                    splitLine: {
                        show: true,
                        length: 20,
                        lineStyle: {
                            color: colorArr[0],
                            width: 1
                        }
                    },
                    axisLabel: {
                        color: '#4B525E',
                        fontSize: 12,
                        distance: 20,
                    },
                    pointer: {
                        show: true,
                        width: 8,
                        length: '70%',
                    },
                    itemStyle: {
                        color: colorArr[0],
                    },
                    markPoint: {
                        animation: false,
                        silent: true,
                        data: [
                            {
                                x: '50%',
                                y: '50%',
                                symbol: 'circle',
                                symbolSize: 40,
                                itemStyle: {
                                    color: colorArr[0],
                                },
                            },
                        ],
                    },
                    data: [
                        {
                            value: 0,
                        },
                    ],
                },
                {
                    type: 'gauge',
                    radius: '75%',
                    startAngle: 225,
                    endAngle: -45,
                    min: 0,
                    max: 100,
                    title: {
                        show: false,
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, '85%'],
                        textStyle: {
                            fontSize: 12,
                            color: '#4B525E',
                        },
                        formatter: '湿度'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 18,
                            color: [
                                [0 / 100, colorJB],
                                [1, '#E0F0FF'],
                            ],
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    pointer: {
                        show: false,
                    },
                },
            ],
        };
export default {
    name: 'App',
    props:['humidity'],
    data() {
        return {

        }
    },
    mounted() {
        myChart = echarts.init(document.getElementById('Hygrometer'));
        option && myChart.setOption(option);
        window.addEventListener('resize', this.handleResize);
    },
    watch:{
        humidity: {
            handler(newV, oldV) {
                 myChart.setOption({
                series: [
                    {
                        detail: {
                        formatter: newV
                    },data: [
                        {
                            value: newV,
                        },
                    ],
                    },
                    {
                        axisLine: {
                        show: true,
                        lineStyle: {
                            width: 18,
                            color: [
                                [newV / 100, colorJB],
                                [1, '#E0F0FF'],
                            ],
                        },
                    },
                    }
                ]
            })
            },
            deep:true
        },
    },
    methods: {
        handleResize() {
            myChart.resize();
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
};

</script>
