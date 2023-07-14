<template>
<div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
        <div class="mt--4 mt-md--8  mb-4 text-right">
            <img src="../assets/start/forth.png" v-shared-element:markImage="{duration:'2s'}" height="100" style="text-right">
        </div>
        <b-container fluid class="mt-2 rounded">
            
                    <b-card body-class="p-0" header-class="border-0">
                        <baidu-map class="map" center="北京" :scroll-wheel-zoom="true">
                            <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP','BMAP_SATELLITE_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
                            <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list> -->
                            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
                            <bm-marker :position="markerPoint" :dragging="true" @dragend="pointChange" animation="BMAP_ANIMATION_BOUNCE" :icon="{url: require('../assets/LocationPre/windmill.png'), size: {width: 64, height: 64}}">
                            </bm-marker>
                        </baidu-map>
                        <template v-slot:footer>
                            <b-row align-v="center" no-gutters>
                                <b-col>
                                    <h4 class="mb-0">经度</h4>
                                </b-col>
                                <b-col class="ml-1">
                                    <h4 class="mb-0">{{markerPoint.lng}}</h4>
                                </b-col>
                                <b-col class="ml-2">
                                    <h4 class="mb-0">维度</h4>
                                </b-col>
                                <b-col class="ml-1">
                                    <h4 class="mb-0">{{markerPoint.lat}}</h4>
                                </b-col>
                                <b-col class="text-right" cols="6">
                                    <base-button size="lg" type="primary" @click="getCityName">预测</base-button>
                                </b-col>
                            </b-row>
                        </template>
                    </b-card>
               
        </b-container>
    </base-header>

    
    <b-container fluid class="mt--6 rounded">
        <b-embed type="iframe" :src="windyUrl" allowfullscreen>
        </b-embed>
        <!-- <iframe  src="" frameborder="0"></iframe> -->
    </b-container>
    <!-- 实况天气 -->
    <b-container fluid class="mt-4">
        <b-row class="mb-5 mb-xl-0" no-gutters>
            <b-col xl="3" cols="6">
                <stats-card title="最高功率" type="gradient-blue" :sub-title="maxPower" icon="ni ni-spaceship">
                </stats-card>
            </b-col>
            <b-col xl="3" cols="6">
                <stats-card title="最高气温" type="gradient-orange" :sub-title="maxTemperature" icon="ni ni-umbrella-13">
                </stats-card>
            </b-col>
            <b-col xl="3" cols="6">
                <stats-card title="最高风速" type="gradient-green" :sub-title="maxWindSpeed" icon="ni ni-planet">

                </stats-card>
            </b-col>
            <b-col xl="3" cols="6">
                <stats-card title="最高气压" type="gradient-yellow" :sub-title="maxPressure" icon="ni ni-diamond">
                </stats-card>
            </b-col>
        </b-row>
    </b-container>
    <!-- 未来24小时功率预测 -->
    <b-container fluid class="mt-4">
        <b-row>
            <b-col cols="12" xl="7">
                <b-card body-class="p-0" header-class="border-0">
                    <template v-slot:header>
                        <b-row align-v="center">
                            <b-col>
                                <h4 class="mb-0">所在地未来24小时功率预测</h4>
                            </b-col>
                        </b-row>
                    </template>
                    <future-pre-chart ref="futurePreChart"></future-pre-chart>
                </b-card>
            </b-col>
            <b-col cols="12" xl="5">
                <b-card body-class="p-0" header-class="border-0">
                    <template v-slot:header>
                        <b-row align-v="center">
                            <b-col>
                                <h4 class="mb-0">功率风速变化</h4>
                            </b-col>
                        </b-row>
                    </template>
                    <pie-chart ref="pieChart"></pie-chart>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
    <b-container fluid class="mt-4">
        <b-embed type="iframe" aspect="16by9" :src="windPowerUrl" allowfullscreen>
        </b-embed>
        <!-- <iframe  src="" frameborder="0"></iframe> -->
    </b-container>
</div>
</template>

<script>
import FuturePreChart from './LocationPre/FuturePreChart.vue';
import PieChart from './LocationPre/PieChart.vue';
import LocationPreApi from '../api/LocationPre';
export default {
    components: {
        FuturePreChart,
        PieChart
    },
    data() {
        return {
            markerPoint: {
                lng: 116.404,
                lat: 39.915
            },
            maxPower: 0,
            maxTemperature: 0,
            maxWindSpeed: 0,
            maxPressure: 0,
            windPowerUrl: 'https://globalwindatlas.info/zh/area/China/Beijing',
            windyUrl: '',
            res: {},
            chartData: {
                columns: ['fxTime', 'power'],
                rows: [],
            }
        }
    },
    methods: {
        pointChange(e) {
            this.markerPoint = e.point
            this.windyUrl = "https://embed.windy.com/embed2.html?lat=" + this.markerPoint.lat + "&" + "lon=" + this.markerPoint.lng + "&detailLat=" + this.markerPoint.lat + "&detailLon=" + this.markerPoint.lng + "&width=650&height=450&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1"
            this.getPowerPreData(this.markerPoint.lat, this.markerPoint.lng)
        },
        // 获取当前经纬度下的未来24小时天气信息
        getWeatherInfo() {
            LocationPreApi.getWeatherData(this.markerPoint.lat, this.markerPoint.lng).then(res => {
                this.res = res.data
            })
        },
        // 获取当前经纬度下的所在地的未来24小时功率预测
        getPowerPreData(lat, lon) {
            LocationPreApi.getFuturePreData(lat, lon).then((res) => {
                console.log(res)
                let chartData = res.data.hourly
                // 将数组里的power保留两位小数
                chartData.forEach((item) => {
                    item.power = item.power.toFixed(2)
                })
                this.maxPower = this.getMaxValue(chartData, 'power')+ 'W'
                this.maxTemperature = this.getMaxValue(chartData, 'temp')+ '℃'
                this.maxWindSpeed = this.getMaxValue(chartData, 'windSpeed')+ 'm/s'
                this.maxPressure = this.getMaxValue(chartData, 'pressure')+ 'hPa'

                this.chartData.rows = chartData
                console.log(this.chartData)
                let powerPreData = this.chartData
                this.$refs.futurePreChart.getData(powerPreData)
                this.$refs.pieChart.getData(powerPreData)
                
               
            })
        },
        // 获得数组中每个对象的某个属性的最大值
        getMaxValue(arr, key) {
            let max = arr[0][key]
            arr.forEach((item) => {
                if (item[key] > max) {
                    max = item[key]
                }
            })
            return max
        }
    },
    created() {
        this.getWeatherInfo(this.markerPoint.lat, this.markerPoint.lng)
        this.windyUrl = "https://embed.windy.com/embed2.html?lat=" + this.markerPoint.lat + "&" + "lon=" + this.markerPoint.lng + "&detailLat=" + this.markerPoint.lat + "&detailLon=" + this.markerPoint.lng + "&width=650&height=450&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1"
    },
    mounted() {
        this.getPowerPreData(this.markerPoint.lat, this.markerPoint.lng)
    }
};
</script>

<style>
.map {
    width: 100%;
    height: 300px;
}
</style>
