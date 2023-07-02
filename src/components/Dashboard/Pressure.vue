<template>
    <div>
        <div id="pressure" style="width: 100%;height:300px;"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';

var myChart;

var scale = 1; // 变量用于控制大小比例

var option = {
    series: [
        {
            type: 'gauge',
            min: 0 / scale,
            max: 1500 / scale,
            splitNumber: 10 / scale,
            radius: (60 / scale) + '%',
            axisLine: {
                lineStyle: {
                    color: [[1, '#f00']],
                    width: (3 / scale)
                }
            },
            splitLine: {
                distance: (-18 / scale),
                length: (18 / scale),
                lineStyle: {
                    color: '#f00'
                }
            },
            axisTick: {
                distance: (-12 / scale),
                length: (10 / scale),
                lineStyle: {
                    color: '#f00'
                }
            },
            axisLabel: {
                distance: (-40 / scale),
                color: '#f00',
                fontSize: (10 / scale)
            },
            anchor: {
                show: true,
                size: (20 / scale),
                itemStyle: {
                    borderColor: '#000',
                    borderWidth: (2 / scale)
                }
            },
            pointer: {
                offsetCenter: [0, (10 / scale) + '%'],
                icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                length: (115 / scale) + '%',
                itemStyle: {
                    color: '#000'
                }
            },
            detail: {
                valueAnimation: true,
                precision: 1
            },
            title: {
                offsetCenter: [0, (-50 / scale) + '%']
            },
            data: [
                {
                    value: 0,
                    name: '压力',
                }
            ]
        }
    ]
};

export default {
    name: 'App',
    props: ['pressure'],
    data() {
        return {
        }
    },
    mounted() {
        myChart = echarts.init(document.getElementById('pressure'));
        option && myChart.setOption(option);
        window.addEventListener('resize', this.handleResize);       
    },
    watch:{
        pressure: {
            handler(newV, oldV) {
                 myChart.setOption({
                series: [
                    {
                        type: 'gauge',
                        data: [
                            {
                                value: newV/10,
                                name: '压力',
                            }
                        ]
                    }
                ]
            })
            },
            deep:true
        },
    },
    methods:{
        handleResize(){
            myChart.resize();
        }
    },
    beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};

</script>
