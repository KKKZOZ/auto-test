<template>
<div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
        <!-- 平均数据图表 -->
        <b-row>
            <b-col xl="3" cols="6">
                <b-card text-variant="white" title="年平均温度" sub-title="average temperature">
                    <b-card-text>
                        <span class="text-warning mr-2"><i class="fa fa-sun"></i> 3.48%</span>
                    </b-card-text>
                    <img src="../assets/historyData/tempture.gif" width="100%" height="150" />
                </b-card>
            </b-col>
            <b-col xl="3" cols="6">
                <b-card text-variant="white" title="年平均湿度" sub-title="average humidity">
                    <b-card-text>
                        <span class="text-info mr-2"><i class="fa fa-cloud"></i> 3.48%</span>
                    </b-card-text>
                    <img src="../assets/historyData/humidity.gif" width="100%" height="150" class="rounded-circle" />
                </b-card>
            </b-col>
            <b-col xl="3" cols="6">
                <b-card text-variant="white" title="年平均气压" sub-title="average pressure">
                    <b-card-text>
                        <span class="text-danger mr-2"><i class="fa fa-trophy"></i> 3.48%</span>
                    </b-card-text>
                    <img src="../assets/historyData/pressure.gif" width="100%" height="150" class="rounded-circle" />
                </b-card>
            </b-col>
            <b-col xl="3" cols="6">
                <b-card text-variant="white" title="年平均风速" sub-title="average windspeed">
                    <b-card-text>
                        <span class="text-success mr-2"><i class="fa fa-compass"></i> 3.48%</span>
                    </b-card-text>
                    <img src="../assets/historyData/windspeed.gif" width="100%" height="150" class="rounded-circle" />
                </b-card>
            </b-col>
        </b-row>
    </base-header>

    <!--历史数据分析图表-->
    <b-container fluid class="mt--7">
        <b-row>
            <b-col xl="8" class="mb-5 mb-xl-0">
                <card type="default" header-classes="bg-transparent">
                    <b-row align-v="center" slot="header">
                        <b-col>
                            <h6 class="text-light text-uppercase ls-1 mb-1">review</h6>
                            <h5 class="h3 text-white mb-0">发电功率回顾</h5>
                        </b-col>
                        <b-col class="text-right mt-2">
                            <b-dropdown size="sm" split text="风机型号" class="m-2">
                                <b-dropdown-item-button>Action</b-dropdown-item-button>
                                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                                <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
                            </b-dropdown>
                        </b-col>
                    </b-row>
                    <history-data-date-chart></history-data-date-chart>
                    <b-row align-v="center" slot="footer">
                        <b-col>
                            <b-dropdown size="sm" split text="风机型号" class="m-0">
                                <b-dropdown-item-button>Action</b-dropdown-item-button>
                                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                                <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
                            </b-dropdown>
                        </b-col>
                        <b-col class="text-right">
                            <el-date-picker size="mini" type="daterange" v-model="value1" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期" @change="dateSelectChange" :value-format="dateFormat">
                            </el-date-picker>
                        </b-col>
                    </b-row>
                </card>
            </b-col>

            <b-col xl="4" cols="12" class="mb-5 mb-xl-0">
                <b-row>
                    <b-col xl="12" cols="6">
                        <stats-card title="最高功率" type="gradient-blue" sub-title="2,356" icon="ni ni-spaceship">
                            <template slot="footer">
                                <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                                <span class="text-nowrap">Since last month</span>
                            </template>
                        </stats-card>
                    </b-col>
                    <b-col xl="12" cols="6">
                        <stats-card title="最高气温" type="gradient-orange" sub-title="2,356" icon="ni ni-umbrella-13">
                            <template slot="footer">
                                <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                                <span class="text-nowrap">Since last month</span>
                            </template>
                        </stats-card>
                    </b-col>
                    <b-col xl="12" cols="6">
                        <stats-card title="最高风速" type="gradient-green" sub-title="2,356" icon="ni ni-planet">
                            <template slot="footer">
                                <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                                <span class="text-nowrap">Since last month</span>
                            </template>
                        </stats-card>
                    </b-col>
                    <b-col xl="12" cols="6">
                        <stats-card title="最高气压" type="gradient-yellow" sub-title="2,356" icon="ni ni-diamond">
                            <template slot="footer">
                                <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                                <span class="text-nowrap">Since last month</span>
                            </template>
                        </stats-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <!-- End charts-->

        <!--排名表格-->
        <b-row class="mt-5">
            <b-col xl="4" class="mb-5 mb-xl-0 text-center">
                <img src="../assets/historyData/windmill_3d.gif" height="300px" />
            </b-col>
            <b-col xl="8" class="mb-5 mb-xl-0">
                <power-rank-table></power-rank-table>
            </b-col>
        </b-row>
        <!--End tables-->

    </b-container>
    <!-- 近三月风机发电功率统计 -->
    <b-container fluid class="mt-7">
        <recent-power-glance-chart></recent-power-glance-chart>
    </b-container>
    <!-- End 近三月风机发电功率统计 -->
    <!-- <ve-map :data="chartData1"></ve-map> -->
</div>
</template>

<script>
// element日历
import {
    DatePicker
} from 'element-ui';

// Charts
import * as chartConfigs from '@/components/Charts/config';
import LineChart from '@/components/Charts/LineChart';
import BarChart from '@/components/Charts/BarChart';
import HistoryDataDateChart from './HistoryData/HistoryDataDateChart.vue';
import RecentPowerGlanceChart from './HistoryData/RecentPowerGlanceChart.vue';

// Components
import BaseProgress from '@/components/BaseProgress';
import StatsCard from '@/components/Cards/StatsCard';

// Tables
import SocialTrafficTable from './Dashboard/SocialTrafficTable';
import PageVisitsTable from './Dashboard/PageVisitsTable';
import PowerRankTable from './HistoryData/PowerRankTable.vue';

export default {
    components: {
        LineChart,
        BarChart,
        HistoryDataDateChart,
        RecentPowerGlanceChart,
        BaseProgress,
        StatsCard,
        PowerRankTable,
        PageVisitsTable,
        SocialTrafficTable,
        [DatePicker.name]: DatePicker
    },
    data() {
        return {
            maxDataList: [35, 36, 3, 4],
            chartData1: {
                columns: ['位置', '税收', '人口', '面积'],
                rows: [{
                        '位置': '吉林',
                        '税收': 123,
                        '人口': 123,
                        '面积': 92134
                    },
                    {
                        '位置': '北京',
                        '税收': 1223,
                        '人口': 2123,
                        '面积': 29234
                    },
                    {
                        '位置': '上海',
                        '税收': 2123,
                        '人口': 1243,
                        '面积': 94234
                    },
                    {
                        '位置': '浙江',
                        '税收': 4123,
                        '人口': 5123,
                        '面积': 29234
                    }
                ]
            },
            //数据
            option: {
                dataType: {
                    '温度': '°C',
                },
                dataName: '°C',
                seriesMap: {
                    //附加到 series 中的设置
                    温度: {
                        title: '平均温度',
                        type: 'gauge',
                        center: ['50%', '60%'],
                        startAngle: 200,
                        endAngle: -20,
                        min: 0,
                        max: 60,
                        splitNumber: 12,
                        progress: {
                            show: true,
                            width: 30
                        },
                        pointer: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: [
                                    [0.2, "#FFAB91"],
                                    [0.8, "#FFAB91"],
                                    [1, "#FFAB91"]
                                ],
                                width: 30
                            }
                        },
                        axisTick: {
                            distance: -45,
                            splitNumber: 5,
                            lineStyle: {
                                width: 2,
                                color: '#fff'
                            }
                        },
                        splitLine: {
                            distance: -52,
                            // length: 14,
                            lineStyle: {
                                width: 3,
                                color: '#999'
                            }
                        },
                        axisLabel: {
                            distance: -60,
                            color: '#999',
                            fontSize: 15
                        },
                        anchor: {
                            show: false
                        },
                        detail: {
                            valueAnimation: true,
                            width: '60%',
                            lineHeight: 40,
                            borderRadius: 8,
                            offsetCenter: [0, '-15%'],
                            fontSize: 10,
                            fontWeight: 'bolder',
                            formatter: '{value} °C',
                            // color: 'inherit'
                        },

                    },
                    progress: {
                        type: 'gauge',
                        center: ['50%', '60%'],
                        startAngle: 200,
                        endAngle: -20,
                        min: 0,
                        max: 60,
                        pointer: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: [
                                    [0.2, "#FD7347"],
                                    [0.8, "#FD7347"],
                                    [1, "#FD7347"]
                                ],
                                width: 8
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        detail: {
                            show: false
                        },

                    }
                }

            },

            chartData: {
                columns: ["type", "value"],
                rows: [{
                    type: "温度",
                    value: 48
                }, {
                    type: "progress",
                    value: 48
                }]
            },

            bigLineChart: {
                allData: [
                    [0, 20, 10, 30, 15, 40, 20, 60, 60],
                    [0, 20, 5, 25, 10, 30, 15, 40, 40]
                ],
                activeIndex: 0,
                chartData: {
                    datasets: [{
                        label: 'Performance',
                        data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
                    }],
                    labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                extraOptions: chartConfigs.blueChartOptions,
            },
            redBarChart: {
                chartData: {
                    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Sales',
                        data: [25, 20, 30, 22, 17, 29]
                    }]
                },
                extraOptions: chartConfigs.blueChartOptions
            }
        };
    },
    methods: {
        initBigChart(index) {
            let chartData = {
                datasets: [{
                    label: 'Performance',
                    data: this.bigLineChart.allData[index]
                }],
                labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            };
            this.bigLineChart.chartData = chartData;
            this.bigLineChart.activeIndex = index;
        }
    },
    mounted() {
        this.initBigChart(0);
    }
};
</script>

<style>
.el-table .cell {
    padding-left: 0px;
    padding-right: 0px;
}
</style>
