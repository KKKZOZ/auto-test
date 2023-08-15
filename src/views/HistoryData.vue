<template>
<div>
    <div>
        <loading ref="loading"></loading>
        <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
            <div class="mt--4 mt-md--8  mb-4 text-right">
                <img src="../assets/start/third.svg" v-shared-element:markImage="{duration:'2s'}" height="100" style="text-right">
            </div>
            <!-- 平均数据图表 -->
            <b-row>
                <b-col xl="3" cols="6">
                    <b-card text-variant="white" title="年平均温度" sub-title="average temperature" style="height:100%">
                        <b-card-text>
                            <span class="text-warning mr-2"><i class="fa fa-sun"></i><i>{{avgData.avg_temperature}}</i> ℃</span>
                        </b-card-text>
                        <img src="../assets/historyData/tempture.gif" width="100%" />
                    </b-card>
                </b-col>
                <b-col xl="3" cols="6">

                    <b-card text-variant="white" title="年平均湿度" sub-title="average humidity" style="height:100%">
                        <b-card-text>
                            <span class="text-info mr-2"><i class="fa fa-cloud"></i><i>{{avgData.avg_humidity}}</i> %</span>
                        </b-card-text>
                        <img src="../assets/historyData/humidity.gif" width="100%" class="rounded-circle" />
                    </b-card>

                </b-col>
                <b-col xl="3" cols="6" class="mt-xl-0 mt-4">

                    <b-card text-variant="white" title="年平均气压" sub-title="average pressure" style="height:100%">
                        <b-card-text>
                            <span class="text-danger mr-2"><i class="fa fa-trophy"></i><i>{{avgData.avg_pressure}}</i> hPa</span>
                        </b-card-text>
                        <img src="../assets/historyData/pressure.gif" width="100%" class="rounded-circle" />
                    </b-card>

                </b-col>
                <b-col xl="3" cols="6" class="mt-xl-0 mt-4">

                    <b-card text-variant="white" title="年平均风速" sub-title="average windspeed" style="height:100%">
                        <b-card-text>
                            <span class="text-success mr-2"><i class="fa fa-compass"></i><i>{{avgData.avg_windspeed}}</i> m/s</span>
                        </b-card-text>
                        <img src="../assets/historyData/windspeed.gif" width="100%" class="rounded-circle" />
                    </b-card>

                </b-col>
            </b-row>
        </base-header>

        <!--历史数据分析图表-->
        <div id="HistoryDataPrinter">
            <b-container fluid class="mt--7">
                <b-row>
                    <b-col xl="8" class="mb-5 mb-xl-0">
                        <card type="default" header-classes="bg-transparent">
                            <b-row align-v="center" slot="header">
                                <b-col cols="6" xl="8">
                                    <h6 class="text-light text-uppercase ls-1 mb-1">review</h6>
                                    <h5 class="h3 text-white mb-0">发电功率回顾</h5>
                                </b-col>
                                <b-col cols="6" xl="4" class="text-right mt-2">
                                    <b-form-select style="box-shadow: 1px;" v-model="selectedType" :options="options" size="sm" class="mt-3" @change="selectedTypeChange"></b-form-select>
                                </b-col>
                            </b-row>
                            <b-row class="mb-3 mt--4">
                                <b-col class="text-right">
                                    <el-date-picker size="mini" type="daterange" v-model="val" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期" @change="dateSelectChange" :value-format="dateFormat">
                                    </el-date-picker>
                                </b-col>
                            </b-row>
                            <history-data-date-chart ref="historyDataDateChart"></history-data-date-chart>
                            <div class="text-right">
                                <b-button variant="primary" class="mt-3" size="sm" pill @click="downloadHtmlToPdf_copy(val[0],val[1])">导出历史数据分析报告</b-button>
                            </div>
                        </card>

                    </b-col>

                    <b-col xl="4" cols="12" class="mb-5 mb-xl-0">
                        <b-row>
                            <b-col xl="12" cols="6">
                                <stats-card title="最高功率" type="gradient-blue" :sub-title="maxPower_m" icon="ni ni-spaceship" style="height:100%">
                                    <template slot="footer">
                                        <span class="text-success mr-2" v-show="maxPower-avgData.avg_power<0">
                                            <i class="fa fa-arrow-down"></i> {{(-maxPower+avgData.avg_power).toFixed(2)}} W
                                        </span>
                                        <span class="text-danger mr-2" v-show="maxPower-avgData.avg_power>=0">
                                            <i class="fa fa-arrow-up"></i> {{(maxPower-avgData.avg_power).toFixed(2)}} W
                                        </span>
                                        <span class="text-nowrap">较年均功率</span>
                                    </template>
                                </stats-card>
                            </b-col>
                            <b-col xl="12" cols="6">
                                <stats-card title="最高气温" type="gradient-orange" :sub-title="maxTemperature_m" icon="ni ni-umbrella-13" style="height:100%">
                                    <template slot="footer">
                                        <span class="text-success mr-2" v-show="maxTemperature-avgData.avg_temperature<0"><i class="fa fa-arrow-down"></i> {{(-maxTemperature+avgData.avg_temperature).toFixed(2)}} ℃</span>
                                        <span class="text-danger mr-2" v-show="maxTemperature-avgData.avg_temperature>=0"><i class="fa fa-arrow-up"></i> {{(maxTemperature-avgData.avg_temperature).toFixed(2)}} ℃</span>
                                        <span class="text-nowrap">较年均气温</span>
                                    </template>
                                </stats-card>
                            </b-col>
                            <b-col xl="12" cols="6" class="mt-xl-0 mt-4">
                                <stats-card title="最高风速" type="gradient-green" :sub-title="maxWindSpeed_m" icon="ni ni-planet" style="height:100%">
                                    <template slot="footer">
                                        <span class="text-success mr-2" v-show="maxWindSpeed-avgData.avg_windspeed<0"><i class="fa fa-arrow-down"></i> {{(-maxWindSpeed+avgData.avg_windspeed).toFixed(2)}} m/s</span>
                                        <span class="text-danger mr-2" v-show="maxWindSpeed-avgData.avg_windspeed>=0"><i class="fa fa-arrow-up"></i> {{(maxWindSpeed-avgData.avg_windspeed).toFixed(2)}} m/s</span>
                                        <span class="text-nowrap">较年均风速</span>
                                    </template>
                                </stats-card>
                            </b-col>
                            <b-col xl="12" cols="6" class="mt-xl-0 mt-4">
                                <stats-card title="最高气压" type="gradient-yellow" :sub-title="maxPressure_m" icon="ni ni-diamond" style="height:100%">
                                    <template slot="footer">
                                        <span class="text-success mr-2" v-show="maxPressure - avgData.avg_pressure<0"><i class="fa fa-arrow-down"></i> {{(-maxPressure + avgData.avg_pressure).toFixed(2)}} hPa</span>
                                        <span class="text-danger mr-2" v-show="maxPressure - avgData.avg_pressure>=0"><i class="fa fa-arrow-up"></i> {{(maxPressure - avgData.avg_pressure).toFixed(2)}} hPa</span>
                                        <span class="text-nowrap">较年均气压</span>
                                    </template>
                                </stats-card>
                            </b-col>
                            <b-col xl="12" cols="6" class="mt-xl-0 mt-4">
                                <stats-card title="最高湿度" type="gradient-red" :sub-title="maxHumidity_m" icon="ni ni-trophy" style="height:100%">
                                    <template slot="footer">
                                        <span class="text-success mr-2" v-show="maxHumidity - avgData.avg_humidity<0"><i class="fa fa-arrow-down"></i> {{(-maxHumidity + avgData.avg_humidity).toFixed(2)}} %</span>
                                        <span class="text-danger mr-2" v-show="maxHumidity - avgData.avg_humidity>=0"><i class="fa fa-arrow-up"></i> {{(maxHumidity - avgData.avg_humidity).toFixed(2)}} %</span>
                                        <span class="text-nowrap">较年均温度</span>
                                    </template>
                                </stats-card>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <b-container class="mt-5">
            <b-row>
                <b-col xl="4" class="mb-5 mb-xl-0  text-center">
                    <b-img :src='imgRank' fluid />
                </b-col>
                <b-col xl="8" class="mb-5 mb-xl-0">
                    <power-rank-table></power-rank-table>
                </b-col>
            </b-row>
        </b-container>
        <!-- 近三月风机发电功率统计 -->
        <b-container fluid class="mt-7">
            <recent-power-glance-chart></recent-power-glance-chart>
        </b-container>
        <!-- End 近三月风机发电功率统计 -->
        <!-- <ve-map :data="chartData1"></ve-map> -->
    </div>

</div>
</template>

<script>
// element日历
import {
    DatePicker
} from 'element-ui';

// Charts
import HistoryDataDateChart from './HistoryData/HistoryDataDateChart';
import RecentPowerGlanceChart from './HistoryData/RecentPowerGlanceChart';

// Components
import BaseProgress from '@/components/BaseProgress';
import StatsCard from '@/components/Cards/StatsCard';

// Tables
import PowerRankTable from './HistoryData/PowerRankTable';

import historyDataApi from '../api/HistoryData'
import Loading from '../components/Loading.vue';

export default {
    components: {
        HistoryDataDateChart,
        RecentPowerGlanceChart,
        BaseProgress,
        StatsCard,
        PowerRankTable,
        Loading,
        [DatePicker.name]: DatePicker,
    },
    data() {
        return {
            imgRank:require("../assets/historyData/windmill.png"),
            avgData: {},
            val: [
                '2023-07-05',
                '2023-06-06'
            ],
            dateFormat: "yyyy-MM-dd",
            selectedType: '风机01',
            // startDate: '2022-08-15',
            // endDate: '2023-06-26',
            options: [{
                    value: null,
                    text: '风机型号',
                    disabled: true
                },
                {
                    value: '风机01',
                    text: '风机01'
                },
                {
                    value: '风机02',
                    text: '风机02',
                },
                {
                    value: '风机03',
                    text: '风机03',

                },
                {
                    value: '风机04',
                    text: '风机04',

                },
                {
                    value: '风机05',
                    text: '风机05',

                },
                {
                    value: '风机06',
                    text: '风机06',

                },
                {
                    value: '风机07',
                    text: '风机07',

                },
                {
                    value: '风机08',
                    text: '风机08',

                },
                {
                    value: '风机09',
                    text: '风机09',

                },
                {
                    value: '风机10',
                    text: '风机10',

                },
                {
                    value: '全选',
                    text: '全选',

                },
            ],
            maxPower: '',
            maxTemperature: '',
            maxWindSpeed: '',
            maxPressure: '',
            maxHumidity: '',
            maxPower_m: '',
            maxTemperature_m: '',
            maxWindSpeed_m: '',
            maxPressure_m: '',
            maxHumidity_m: '',
        };
    },
    methods: {
        // 获取年均数据
        getAvgData() {
            historyDataApi.getAvgData().then((res) => {
                console.log(res)
                let Data = res.data.data
                this.avgData = Data
                this.$refs.loading.hide();
            })
        },
        // 日期选择
        dateSelectChange(val) {
            console.log(val.toString())
            if (val) {
                // var startDate = new Date(val[0]).getTime();
                // var endDate = new Date(val[1]).getTime();
                // this.startDate = val[0]
                // this.endDate = val[1]
                this.val = val
                // console.log(this.startDate)
                this.$refs.historyDataDateChart.getData(val, this.selectedType);
                this.getDateRangeMaxData(val, this.selectedType)
            }
        },
        selectedTypeChange() {
            this.$refs.historyDataDateChart.getData(this.val, this.selectedType);
            this.getDateRangeMaxData(this.val, this.selectedType)
        },
        // 获取日期内最高数据
        getDateRangeMaxData(range, turbine_type) {
            historyDataApi.getTimeRangeMaxData(range[0], range[1], turbine_type).then((res) => {
                console.log(res)
                let Data = res.data.data
                console.log(Data)
                this.maxHumidity_m = Data['ROUND(MAX(humidity),2)'] + '%'
                this.maxPower_m = Data['ROUND(MAX(YD15),2)'] + 'W'
                this.maxPressure_m = Data['ROUND(MAX(pressure),2)'] + 'hPa'
                this.maxTemperature_m = Data['ROUND(MAX(temperature),2)'] + '℃'
                this.maxWindSpeed_m = Data['ROUND(MAX(windspeed),2)'] + 'm/s'
                this.maxHumidity = Data['ROUND(MAX(humidity),2)']
                this.maxPower = Data['ROUND(MAX(YD15),2)']
                this.maxPressure = Data['ROUND(MAX(pressure),2)']
                this.maxTemperature = Data['ROUND(MAX(temperature),2)']
                this.maxWindSpeed = Data['ROUND(MAX(windspeed),2)']
            })
        },
    },
    created() {
        this.getAvgData();
        // 获取昨日日期转换为字符串
        let startDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toLocaleDateString();
        // 获取当前日期转换为字符串
        let endDate = new Date().toLocaleDateString();
        console.log(endDate)
        this.val[0] = startDate.toString()
        this.val[1] = endDate.toString()
        this.getDateRangeMaxData(this.val, this.selectedType)
    },
    mounted() {
        this.$refs.historyDataDateChart.getData(this.val, this.selectedType);
    }
};
</script>

<style>
.el-table .cell {
    padding-left: 0px;
    padding-right: 0px;
}
</style>
