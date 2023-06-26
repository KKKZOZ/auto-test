<template>
<ve-line :data="chartData" :toolbox="toolbox" :grid="grid" :colors="chartColors"></ve-line>
</template>

    
<script>
export default {
    name: "future-pre-chart",
    data() {
        this.grid = {
            show: false
        };
        // this.chartColors = ["#ABDCFF", "#0396FF", "#A5DEE4"];
        this.toolbox = {
            show: true,
            top: 20,
            feature: {
                dataZoom: {
                    yAxisIndex: "none"
                },
                dataView: {
                    show: true,
                    readOnly: true
                },
                magicType: {
                    type: ["line", "bar"]
                },
                restore: {},
                saveAsImage: {}
            }
        };
        this.legend = {};
        this.xAxis = {};
        this.yAxis = {};
        this.radar = {};
        this.tooltip = {};
        this.axisPointer = {};
        this.brush = {};
        this.geo = {};
        this.timeline = {};
        this.graphic = {};
        this.series = {};
        this.textStyle = {};
        return {
            chartData: {
                columns: ["风机型号", "第一月", "第二月", "第三月"],
                rows: [{
                        风机型号: "风机01",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机02",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机03",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机04",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机05",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机06",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机07",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机08",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    }, {
                        风机型号: "风机09",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机10",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    }
                ]
            }
        };
    },
    methods: {}
};
</script>
