<template>
    <div class="shadow-lg">
        <b-card header-tag="header" no-body>
            <template v-slot:header>
                <h3 class="mb-0 text-center">平均功率密度
                </h3>
            </template>
    <ve-line :data="chartData" :settings="chartSettings"  :colors="colors" :extend="chartExtend">
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
            chartData: {
                columns: ["sel_perc", "val"],
                rows: []
            },
            colors: ["#A5DEE4","#ABDCFF", "#0396FF"],
            chartSettings: {
                labelMap: {
                    'val': '平均功率密度 @高度 100m （ W/m²）',
                    'sel_perc': '最强风区 %'
                },
                area: true
            },
            chartExtend : {
                visualMap: [{
                    type: 'piecewise',
                    pieces: [{
                            gt: 1000,
                            color: '#FFCCFF'
                        },
                        {
                            gt: 750,
                            lte: 1000,
                            color: '#FFCCCC'
                        },
                        {
                            gt: 500,
                            lte: 750,
                          color: '#FFCC99'
                        },
                        {
                            gt: 250,
                            lte: 500,
                           color: '#FFCC66'
                        },
                        {
                            gt: 0,
                            lte: 250,
                           color: '#FFCC33'
                        },
                    ],
                    right: 0,
                    top: '50%'
                }],
                // title: [{
                //     text: '平均功率密度',
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
                    type:'value',
                    splitNumber: 5, 
                },
            }
        };
    },
    methods: {
        getData(region) {
            // 读取指定路径下的json文件,并返回json对象
            this.$axios.get('/charts/' + region + '/powerDensity.json')
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
