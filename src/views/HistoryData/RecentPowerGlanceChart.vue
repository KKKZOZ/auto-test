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
import historyDataApi from '../../api/HistoryData';
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
        }
        return {
            chartData: {
                columns: [],
                rows: []
            }
        };
    },
    methods: {
        // 获取数据
        getChartData(){
            historyDataApi.getRecentData().then((res) => {
                console.log(res)
                let chartData = res.data.data
                this.chartData.columns = chartData.columns
                this.chartData.rows = chartData.rows
                console.log(this.chartData)
            })
        }
    },
    created(){
        this.getChartData();
    }
};
</script>
