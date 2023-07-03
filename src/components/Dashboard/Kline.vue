<template>
    <div>
        <div id="kline" ></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
var myChart;
export default {
    name: 'App',
    data() {
        return {
            option: {
                series: [
                    {
                        type: 'gauge',
                        min: 0,
                        max: 100,
                        splitNumber: 10,
                        radius: '60%',
                        axisLine: {
                            lineStyle: {
                                color: [[1, '#f00']],
                                width: 3
                            }
                        },
                        splitLine: {
                            distance: -9,
                            length: 9,
                            lineStyle: {
                                color: '#f00'
                            }
                        },
                        axisTick: {
                            distance: -6,
                            length: 3,
                            lineStyle: {
                                color: '#f00'
                            }
                        },
                        axisLabel: {
                            distance: -25,
                            color: '#f00',
                            fontSize: 10
                        },
                        anchor: {
                            show: true,
                            size: 6,
                            itemStyle: {
                                borderColor: '#000',
                                borderWidth: 1
                            }
                        },
                        pointer: {
                            offsetCenter: [0, '10%'],
                            icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                            length: '40%',
                            itemStyle: {
                                color: '#000'
                            }
                        },
                        detail: {
                            valueAnimation: true,
                            precision: 1,
                            textStyle: {
                                fontSize: 10, // 设置合适的字体大小
                                color: '#ff0000' // 设置合适的字体颜色
                                }
                        },
                        title: {
                            offsetCenter: [0, '-50%'],
                            textStyle: {
                                fontSize: 10, // 设置合适的字体大小
                                color: '#ff0000' // 设置合适的字体颜色
                                }
                        },
                        data: [
                            {
                                value: 58.46,
                                name: '气压',
                            }
                        ]
                    },
                    // {
                    //     type: 'gauge',
                    //     min: 0,
                    //     max: 60,
                    //     splitNumber: 6,
                    //     axisLine: {
                    //         lineStyle: {
                    //             color: [[1, '#000']],
                    //             width: 1.5
                    //         }
                    //     },
                    //     splitLine: {
                    //         distance: -1.5,
                    //         length: 9,
                    //         lineStyle: {
                    //             color: '#000'
                    //         }
                    //     },
                    //     axisTick: {
                    //         distance: 0,
                    //         length: 5,
                    //         lineStyle: {
                    //             color: '#000'
                    //         }
                    //     },
                    //     axisLabel: {
                    //         distance: 5,
                    //         fontSize: 12.5,
                    //         color: '#000'
                    //     },
                    //     pointer: {
                    //         show: false
                    //     },
                    //     title: {
                    //         show: false
                    //     },
                    //     anchor: {
                    //         show: true,
                    //         size: 7,
                    //         itemStyle: {
                    //             color: '#000'
                    //         }
                    //     }
                    // }
                ]
            }
        }
    },
    mounted() {
        myChart = echarts.init(document.getElementById('pressure'));
        myChart.setOption(this.option)
    }
};

</script>