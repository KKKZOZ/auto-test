<template>
<b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
            <b-row align-v="center">
                <b-col>
                    <h3 class="mb-0">近三个月发电功率一览</h3>
                </b-col>
            </b-row>
        </template>
    
    <ve-histogram :data="chartData" :toolbox="toolbox" :grid="grid" :colors="chartColors"></ve-histogram>
</b-card>
</template>

  
<script>

export default {
    name: "recent-power-glance-chart",
    data() {
        this.grid = {
            show:'false'
        };
        this.chartColors = ["#ABDCFF", "#0396FF","#A5DEE4"];
        this.toolbox = {
            show: true,
            top: 20,
            feature: {
                dataZoom: {
                    yAxisIndex: "none"
                },
                dataView: {show: true, readOnly: true},
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
                columns: ["风机型号", "第一月", "第二月","第三月"],
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
                    },{
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
