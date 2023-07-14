<template>
<!-- <ve-histogram :extend="chartExtend" :settings="settings">
</ve-histogram> -->
<ve-histogram
    :extend="chartExtend">
  </ve-histogram>
</template>

<script>
export default {
    name: "pie-chart",
    data() {
        // this.settings = {
        //     stack: { 'all': ['windSpeed', 'power'] }
        // }
        // this.chartExtend = {
        // //   angleAxis: {
        // //             type: 'category',
        // //             data: this.fxTime
        // //         },
        //   radiusAxis: {},
        //   polar: {},
        //   stack:{},
        //   series: {
        //     barWidth: 10,
        //     coordinateSystem: 'polar',
        //   },
        //   tooltip: {
        //     trigger: 'none'
        //   }
        // }
            this.settings = {
                roseType: "area",
                // limitShowNum: 5,

            }
        return {
            // chartData: {
            //     columns: ["fxTime", "power", "windSpeed"],
            //     rows: []
            // },
            chartData: {
          columns: ['日期', '成本', '利润'],
          rows: [
            { '日期': '1月1日', '成本': 15, '利润': 12 },
            { '日期': '1月2日', '成本': 12, '利润': 25 },
            { '日期': '1月3日', '成本': 21, '利润': 10 },
            { '日期': '1月4日', '成本': 41, '利润': 32 },
            { '日期': '1月5日', '成本': 31, '利润': 30 },
            { '日期': '1月6日', '成本': 71, '利润': 55 }
          ]
        },
            chartExtend :{
                angleAxis: {
                    type: 'category',
                    data: []
                },
                radiusAxis: {},
                polar: {},
                series: [{
                        type: 'bar',
                        data: [],
                        coordinateSystem: 'polar',
                        name: '功率',
                        stack: 'a',
                        emphasis: {
                            focus: 'series'
                        }
                    },
                    {
                        type: 'bar',
                        data: [],
                        coordinateSystem: 'polar',
                        name: '风速',
                        stack: 'a',
                        emphasis: {
                            focus: 'series'
                        }
                    },
                ],
                legend: {
                    show: true,
                    data: ['功率', '风速']
                }
            },
            fxTime: ['1','2','3'],
            windSpeed: ['1','2','3'],
            power: ['1','2','3'],
        };
    },
    methods: {
        // 获取当前经纬度下的所在地的未来24小时功率预测
        getData(chartData) {
            console.log(chartData)
            console.log(chartData.rows)
            var powerPreData = JSON.parse(JSON.stringify(chartData))
            this.chartData.rows = powerPreData.rows
            // this.chartData = JSON.parse(JSON.stringify(chartData))
            console.log(this.chartData)
            // 将chartData.rows中的fxTime转换为HH:mm格式
            for (let i = 0; i < this.chartData.rows.length; i++) {
                let fxTime = this.chartData.rows[i].fxTime
                let fxTimeStr = fxTime.toString()
                let fxTimeStrHH = fxTimeStr.slice(11, 13)
                let fxTimeStrMM = fxTimeStr.slice(14, 16)
                let fxTimeStrHHMM = fxTimeStrHH + ':' + fxTimeStrMM
                this.chartData.rows[i].fxTime = fxTimeStrHHMM
                this.chartData.rows[i].power = (this.chartData.rows[i].power/1000).toFixed(2)
            }
            this.fxTime = this.chartData.rows.map(({ fxTime }) => fxTime)
            this.windSpeed = this.chartData.rows.map(({ windSpeed }) => windSpeed)
            this.power = this.chartData.rows.map(({ power }) => power)
            this.chartExtend.angleAxis.data = this.fxTime
        this.chartExtend.series[1].data = this.windSpeed
        this.chartExtend.series[0].data = this.power
        }
    },
    created() {
        
    }
};
</script>
