<template>
    <div>
        <div id="Thermometer" style="width: 100%;height:300px;"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
var myChart;
export default {
    props: ['temperature'],
    name: 'App',
    data() {
        return {
            option: {
                title: {
                    text: '温度计 edge',
                    show: false
                },
                series: [{
                    type: 'liquidFill',
                    radius: '70%',
                    data: [{
                        value: 0,
                        itemStyle: {
                            normal: {
                                color: '#fd4d49'
                            }
                        }
                    }],
                    amplitude: 0,
                    shape: 'path://M324.234,516.886c0-41.643,0-252.383,0-258.626c0-14.688-11.906-26.594-26.593-26.594c-14.688,0-26.595,11.906-26.595,26.594c0,5.271,0,216.887,0,258.625c-13.383,8.71-22.24,23.791-22.24,40.949c0,26.97,21.863,48.834,48.834,48.834c26.969,0,48.834-21.864,48.834-48.834C346.475,540.676,337.617,525.596,324.234,516.886z',
                    backgroundStyle: {
                        color: 'none',
                        borderColor: '#fd4d49',
                        borderWidth: 5,
                    },
                    itemStyle: {
                        normal: {
                            opacity: 1,
                            shadowBlur: 0
                        }
                    },
                    outline: {
                        show: false
                    },
                    label: {
                        normal: {
                            formatter: ''
                        }
                    }
                }]
            }
        }
    },
    watch: {
        temperature: {
            handler(newV, oldV) {
                myChart.setOption({
                    series: [
                        {

                            data: [{
                                value: newV/100,
                                itemStyle: {
                                    normal: {
                                        color: '#fd4d49'
                                    }
                                }
                            }
                            ]
                        }
                    ]
                })
            },
            deep: true
        },
    },
    mounted() {
        myChart = echarts.init(document.getElementById('Thermometer'));
        myChart.setOption(this.option)
        window.addEventListener('resize', this.handleResize);
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
