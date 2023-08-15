<template>
<div class="shadow-lg">
    <b-card header-tag="header" no-body>
        <template v-slot:header>
            <h3 class="mb-0 text-center">平均风速
            </h3>
        </template>
        <ve-line :data="chartData" :settings="chartSettings" :colors="colors" :extend="chartExtend">
        </ve-line>
    </b-card>
</div>
</template>

<script>
export default {
    name: "speed-chart",
    data() {
        return {
            componentKey: 0,
            colors: ["#0396FF", "#A5DEE4", "#ABDCFF"],
            chartData: {
                columns: ["sel_perc", "val"],
                rows: []
            },
            chartSettings: {
                labelMap: {
                    'val': '平均风速 @高度 100m （ m/s）',
                    'sel_perc': '最强风区 %'
                },
                area: true
            },
            chartExtend: {
                visualMap: [{
                    type: 'piecewise',
                    pieces: [{
                            gt: 10,
                            color: '#66CCFF'
                        },
                        {
                            gt: 7.5,
                            lte: 10,
                            color: '#66CCCC'
                        },
                        {
                            gt: 5,
                            lte: 7.5,
                            color: '#66CC99'
                        },
                        {
                            gt: 2.5,
                            lte: 5,
                            color: '#66CC66'
                        },
                        {
                            gt: 0,
                            lte: 2.5,
                            color: '#66CC33'
                        },
                    ],
                    right: 0,
                    top: '50%'
                }],
                // title: [{
                //     text: '平均风速',
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
                // }],
                legend: {
                    show: true,
                    padding: [
                        40, // 上
                        0, // 右
                        40, // 下
                        0, // 左
                    ],
                },
                xAxis: {
                    type: 'value',
                    splitNumber: 5,
                },
            }
        };
    },
    methods: {
        getData(region) {
            // 读取指定路径下的json文件,并返回json对象
            this.$axios.get('/charts/' + region + '/windSpeed.json')
                .then(response => {
                    // 处理请求成功的数据
                    console.log(response.data)
                    var chartData = response.data
                    this.chartData = {
                        columns: ["sel_perc", "val"],
                        rows: chartData
                    }
                    this.componentKey += 1
                })
                .catch(error => {
                    // 处理请求失败的情况
                    console.log(error)
                })
        }
    },

};
</script>
