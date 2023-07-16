<template>
<!-- <ve-histogram :extend="chartExtend" :settings="settings">
    </ve-histogram> -->
    <div>
<ve-bar :extend="chartExtend" :key="componentKey">
    </ve-bar>
</div>
</template>

    
<script>
export default {
    name: "pie-chart",
    data() {
        return {
            componentKey: 0,
            chartData: {
                columns: ["fxTime", "power", "windSpeed"],
                rows: []
            },
            chartExtend : {
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
            fxTime: ['1', '2', '3'],
            windSpeed: ['1', '2', '3'],
            power: ['1', '2', '3'],
        };
    },
    methods: {
        // 获取当前经纬度下的所在地的未来24小时功率预测
        getData(chartData) {
            console.log(chartData)
            console.log(chartData.rows)
            var powerPreData = JSON.parse(JSON.stringify(chartData))
            // this.chartData.rows = powerPreData.rows
            // this.chartData = JSON.parse(JSON.stringify(chartData))
            console.log(powerPreData)
            // 将chartData.rows中的fxTime转换为HH:mm格式
            for (let i = 0; i < powerPreData.rows.length; i++) {
                let fxTime = powerPreData.rows[i].fxTime
                let fxTimeStr = fxTime.toString()
                let fxTimeStrHH = fxTimeStr.slice(11, 13)
                let fxTimeStrMM = fxTimeStr.slice(14, 16)
                let fxTimeStrHHMM = fxTimeStrHH + ':' + fxTimeStrMM
                powerPreData.rows[i].fxTime = fxTimeStrHHMM
                powerPreData.rows[i].power = (powerPreData.rows[i].power / 1000).toFixed(2)
            }
            this.fxTime = powerPreData.rows.map(({
                fxTime
            }) => fxTime)
            this.windSpeed = powerPreData.rows.map(({
                windSpeed
            }) => windSpeed)
            this.power = powerPreData.rows.map(({
                power
            }) => power)
            this.chartExtend.angleAxis.data = this.fxTime
            this.chartExtend.series[1].data = this.windSpeed
            this.chartExtend.series[0].data = this.power
            console.log(this.chartExtend)
            this.componentKey += 1
        }
    },
  
};
</script>
