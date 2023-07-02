<template>
    <div>
        <div id="Powermeter" style="width: 100%;height:300px;"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
var myChart;
var option;
option = {
    series: [
        {
            type: 'gauge',
            min: 0,
            max: 100,
            axisLine: {
                lineStyle: {
                    width: 15,
                    color: [
                        [0.3, '#67e0e3'],
                        [0.7, '#37a2da'],
                        [1, '#fd666d']
                    ]
                }
            },
            pointer: {
                itemStyle: {
                    color: 'inherit'
                }
            },
            axisTick: {
                distance: -30,
                length: 8,
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            },
            splitLine: {
                distance: -30,
                length: -70,
                lineStyle: {
                    color: '#fff',
                    width: 4
                }
            },
            axisLabel: {
                color: 'inherit',
                distance: 40,
                fontSize: 20
            },
            detail: {
                valueAnimation: true,
                formatter: '{value} W',
            },
            data: [
                {
                    value: 0
                }
            ]
        }
    ]
};
export default {
    name: 'App',
    props: ['yd15'],
    data() {
        return {
        }
    },
    mounted() {
        myChart = echarts.init(document.getElementById('Powermeter'));
        option && myChart.setOption(option);
        window.addEventListener('resize', this.handleResize);
    },
    watch: {
        yd15: {
            handler(newV, oldV) {
                if (newV < 100) {
                    myChart.setOption({
                        series: [
                            {
                                detail: {
                                    valueAnimation: true,
                                    formatter: '{value} W',
                                },
                                data: [
                                    {
                                        value: newV
                                    }
                                ]
                            }
                        ]
                    })
                } else if (newV > 100 && newV < 1000) {
                    myChart.setOption({
                        series: [
                            {
                                detail: {
                                    valueAnimation: true,
                                    formatter: '{value} W',
                                },
                                data: [
                                    {
                                        value: newV
                                    }
                                ]
                            }
                        ]
                    })
                } else if (newV > 1000 && newV < 10000) {
                    myChart.setOption({
                        series: [
                            {
                                detail: {
                                    valueAnimation: true,
                                    formatter: '{value} kW',
                                },
                                data: [
                                    {
                                        value: newV / 1000
                                    }
                                ]
                            }
                        ]
                    })
                } else if (newV > 10000 && newV < 100000) {
                    myChart.setOption({
                        series: [
                            {   
                                detail: {
                                    valueAnimation: true,
                                    formatter: '{value} kW',
                                },
                                data: [
                                    {
                                        value: newV / 1000
                                    }
                                ]
                            }
                        ]
                    })
                }

            },
            deep: true
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
