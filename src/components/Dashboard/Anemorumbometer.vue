<template>
    <div>
        <div id="Anemorumbometer" style="width: 100%;height:300px;"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
var myChart;

var option = {

    series: [{
        type: 'gauge',
        radius: '50%',
        splitNumber: 1,
        min: 0,
        max: 360,
        startAngle: 90,
        endAngle: 449.9,
        axisLine: {
            show: false,
            lineStyle: {
                width: 1,
                shadowBlur: 0,
                color: [
                    [1, '#8f8f8f']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#666',
                width: 1,
            },
            length: '-6%',
            splitNumber: 8,
        },
        splitLine: {
            show: true,
            length: 2,
            lineStyle: {
                color: '#000',
            }
        },
        axisLabel: {
            show: false,
        },
        detail: {
            show: false
        }
    }, {
        name: '',
        type: 'gauge',
        min: 0,
        max: 360,
        startAngle: 90,
        endAngle: -269.9999,
        radius: '60%',
        splitNumber: 8,
        axisLine: {
            lineStyle: {
                width: 10,
                shadowBlur: 0,
                color: [
                    [0.25, '#DDBD4D'],
                    [0.5, '#E43F3D'],
                    [0.75, '#7CBB55'],
                    [1, '#9CD6CE']
                ]
            }
        },
        axisTick: {
            show: true,
            splitNumber: 5
        },
        splitLine: {
            length: 10,
            lineStyle: {
                width: 5
            }
        },
        axisLabel: {
            formatter: function(e) {
                switch (e + "") {
                    case "0":
                        return "北";
                    case "45":
                        return "东北";
                    case "135":
                        return "东南";
                    case "225":
                        return "西南"
                    case "315":
                        return "西北";
                    case "45":
                        return "东北";
                    case "360":
                        return "北";
                    case "180":
                        return "南";
                    case "90":
                        return "东";
                    case "270":
                        return "西";
                    default:
                        return e;
                }
            },
            distance: -30,
            textStyle: {
                fontSize: 10,
                fontWeight: ""
            }
        },
        pointer: {
            show: true,
            length:'80%',
            width:5
        },
        detail: {
            formatter: function(param) {
                var level = '';
                if (param > 0 && param < 90){
                    level = '东北'
                } else if (param > 90 && param < 180){
                    level = '东南'
                } else if (param > 180 && param < 270) {
                    level = '西南'
                } else if (param > 270 && param < 360) {
                    level = '西北'
                } else if (param == 360) {
                    level = '正北'
                } else if (param == 270) {
                    level = '正西'
                } else if (param == 90) {
                    level = '正东'
                } else if (param == 180) {
                    level = '正南'
                }
                return "当前风向:"+level + "(" + param + "°)";
            },
            offsetCenter: [0, 140],
            textStyle: {
                fontSize: 20
            }
        },
        data: [270]
    }]
};

export default {
    name: 'App',
    props:['winddirection'],
    data() {
        return {
        }
    },
    mounted() {
        myChart = echarts.init(document.getElementById('Anemorumbometer'));
        let datavalue = (0 * 360).toFixed(0);
        option.series[1].data[0] = datavalue;
        myChart.setOption(option, true);


        window.addEventListener('resize', this.handleResize);
    },
    watch:{
        winddirection: {
            handler(newV, oldV) {
            let datavalue = newV
            option.series[1].data[0] = datavalue;
            myChart.setOption(option,true);
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
