<template>
<div>
   <loading ref="loading"></loading>
    <base-header class="pb-4 pb-md-6 pt-5 pt-md-8 bg-gradient-success">
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
                    <b-row align-v="center" no-gutters class="mx-3 mx-lg-8">
                        <b-col class="text-center">
                            <h4 class="mb-0">经度</h4>
                        </b-col>
                        <b-col class="text-center">
                            <h4 class="mb-0">{{markerPoint.lng}}</h4>
                        </b-col>
                        <b-col class="text-center">
                            <h4 class="mb-0">维度</h4>
                        </b-col>
                        <b-col class="text-center">
                            <h4 class="mb-0">{{markerPoint.lat}}</h4>
                        </b-col>
                        <!-- <b-col class="text-right" cols="6">
                            <base-button size="lg" type="primary" @click="getCityName">预测</base-button>
                        </b-col> -->
                    </b-row>
                </template>
            </b-card>
            <b-alert show dismissible fade variant="primary" class="mt-2">请拖拽风机图标到您想要建造风机的位置，该参考风机的最高发电功率为100KW</b-alert>
        </b-container>
    </base-header>

    <b-container fluid class="mt--5 rounded d-none d-md-block">
        <b-embed type="iframe" aspect="4by3" :src="windyUrl" allowfullscreen>
        </b-embed>
    </b-container>
    <b-container fluid class="mt--3 rounded d-md-none" style="z-index:998;position: relative;">
        <iframe allowfullscreen  :src="windyUrl" width="100%" height="500px" frameborder="0"></iframe>
    </b-container>
    <!-- 实况天气 -->
    <b-container fluid class="mt-4">
        <b-row class="mb-5 mb-xl-0" no-gutters>
            <b-col xl="3" cols="6">
                <stats-card title="最高功率" type="gradient-blue" :sub-title="maxPower" icon="ni ni-spaceship" style="height:100%">
                </stats-card>
            </b-col>
            <b-col xl="3" cols="6">
                <stats-card title="最高气温" type="gradient-orange" :sub-title="maxTemperature" icon="ni ni-umbrella-13" style="height:100%">
                </stats-card>
            </b-col>
            <b-col xl="3" cols="6">
                <stats-card title="最高风速" type="gradient-green" :sub-title="maxWindSpeed" icon="ni ni-planet" style="height:100%">

                </stats-card>
            </b-col>
            <b-col xl="3" cols="6">
                <stats-card title="最高气压" type="gradient-yellow" :sub-title="maxPressure" icon="ni ni-diamond" style="height:100%">
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
    <b-container fluid class="mt-4 d-none d-md-block">
        <b-embed type="iframe" aspect="16by9" :src="windPowerUrl" allowfullscreen  @load="loadIframe">
        </b-embed>
        <!-- <iframe  src="" frameborder="0"></iframe> -->
    </b-container>
    <b-container fluid class="mt-4 rounded d-md-none">
        <iframe allowfullscreen  :src="windPowerUrl" width="100%" height="600px" frameborder="0"></iframe>
    </b-container>
</div>
</template>

<script>
import FuturePreChart from './LocationPre/FuturePreChart.vue';
import PieChart from './LocationPre/PieChart.vue';
import LocationPreApi from '../api/LocationPre';
import Loading from '../components/Loading.vue';
export default {
    components: {
        FuturePreChart,
        PieChart,
        Loading
    },
    data() {
        return {
            loading: true,
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
            },
            componentKey: 0,
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
                this.maxPower = this.getMaxValue(chartData, 'power') + 'W'
                this.maxTemperature = this.getMaxValue(chartData, 'temp') + '℃'
                this.maxWindSpeed = this.getMaxValue(chartData, 'windSpeed') + 'm/s'
                this.maxPressure = this.getMaxValue(chartData, 'pressure') + 'hPa'

                this.chartData.rows = chartData
                console.log(this.chartData)
                let powerPreData = this.chartData
                // var piePreData = JSON.parse(JSON.stringify(chartData))
                this.$refs.pieChart.getData(powerPreData)
                this.$refs.futurePreChart.getData(powerPreData)
                

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
        },
        loadIframe(e) {
            console.log(e)
            this.$refs.loading.hide()      
        },
    },
    created() {
        this.getWeatherInfo(this.markerPoint.lat, this.markerPoint.lng)
        this.windyUrl = "https://embed.windy.com/embed2.html?lat=" + this.markerPoint.lat + "&" + "lon=" + this.markerPoint.lng + "&detailLat=" + this.markerPoint.lat + "&detailLon=" + this.markerPoint.lng + "&width=800&height=600&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1"
       
    },
    mounted() {
        this.getPowerPreData(this.markerPoint.lat, this.markerPoint.lng)
        
    },
};
</script>

<style>

</style>
