<template>
<div class="shadow-lg">
    <b-card header-tag="header" no-body>
        <template v-slot:header>

            <h3 class="mb-0">风速极坐标柱状图
            </h3>
            <h4 class="text-muted">单位：%</h4>

        </template>

        <ve-bar :extend="chartExtend" :key="componentKey">
        </ve-bar>
    </b-card>
</div>
</template>

    
<script>
export default {
    name: "speed-rose-chart",
    data() {
        return {
            componentKey: 0,
            chartData: {
                columns: ["center_degrees", "value"],
                rows: []
            },
            chartExtend: {
                // 12个渐变的蓝色
                color: ["#ABDCFF", "#0396FF", "#A5DEE4"],
                visualMap: [{
                    type: 'piecewise',
                    pieces: [{
                            gt: 10,
                            color: '#AFEEEE'
                        },
                        {
                            gt: 5,
                            lte: 10,
                            color: '#00CED1'
                        },
                        {
                            gt: 0,
                            lte: 5,
                            color: '#40E0D0'
                        },
                    ],
                    right: 0,
                    top: '50%'
                }],
                // title: [{
                //     text: '风速玫瑰图',
                //     textStyle: {
                //         fontSize: 16,
                //         fontWeight: 'normal',
                //         color: '#000000'
                //     },
                //     padding: [
                //         5, // 上
                //         0, // 右
                //         20, // 下
                //         0, // 左
                //     ],
                //     left: 'center',
                //     subtext: '单位：%',
                // }],
                angleAxis: {
                    type: 'category',
                    data: [],
                    axisLabel: {
                        formatter: '{value} °'
                    }
                },
                radiusAxis: {},
                polar: {
                    center: ['50%', '50%']
                },
                series: {
                    type: 'bar',
                    data: [],
                    coordinateSystem: 'polar',
                    name: '占比',
                    label: {
                        show: true,
                        position: 'middle',
                        formatter: '{b}: {c}'
                    }
                }
            },
            value: [],
            center_degrees: [],
        };
    },
    methods: {
        getData(region) {
            // 读取指定路径下的json文件,并返回json对象
            this.$axios.get('/charts/' + region + '/windSpeedRose.json')
                .then(response => {
                    // 处理请求成功的数据
                    console.log(response.data)
                    var chartData = response.data
                    this.value = chartData.map(({
                        value
                    }) => value * 100)
                    console.log(this.value)
                    this.center_degrees = chartData.map(({
                        center_degrees
                    }) => center_degrees)
                    console.log(this.center_degrees)
                    this.chartExtend.angleAxis.data = this.center_degrees
                    this.chartExtend.series.data = this.value
                    console.log(this.chartExtend)
                    this.componentKey += 1
                })
                .catch(error => {
                    // 处理请求失败的情况
                    console.log(error)
                })
        }
    },
    created() {
        // this.getData()
    }

};
</script>
