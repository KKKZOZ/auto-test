<template>
<div>
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
            <iframe allowfullscreen :src="windyUrl" width="100%" height="500px" frameborder="0"></iframe>
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
        <div id="printer">
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

            <b-container fluid class="mt-6">
                <h2 class="mb-4">所选地区风能资源评估</h2>
                <b-alert show dismissible fade variant="primary" class="mt-2">{{mapInfo}}</b-alert>
                <b-row>
                    <b-col cols="12" xl="6">
                        <b-card no-body class="overflow-hidden" style="max-height: 300px;">
                            <b-row no-gutters>
                                <b-col cols="4">
                                    <b-card-img :src="cardImg1" class="rounded-0 overflow-hidden"></b-card-img>
                                </b-col>
                                <b-col cols="8" class="p-3 p-md-5">
                                    <b-card-text>
                                        <h3>您选择的地点位于中国
                                            <span class="text-blue">{{region}}</span>。
                                        </h3>
                                        <h3>此区域10%最强分区的平均风功率密度达
                                            <span class="text-orange">{{provincePower}} W/m²</span>，位于全国第
                                            <span class="text-red">{{provinceRank}}</span>。相较于全国其它区域风力资源较为
                                            <span class="text-green">{{provinceRemark}}</span>，具体说明可参照以下内容。
                                        </h3>
                                    </b-card-text>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                    <b-col cols="12" xl="6">
                        <b-card no-body class="overflow-hidden" style="max-height: 300px;">
                            <b-row no-gutters>

                                <b-col cols="8" class="p-3 p-md-5">

                                    <b-card-text>
                                        <h2>10%最强风区的数据</h2>
                                        <h3><i class="fa fa-compass text-purple mr-2"></i>高度: 100m</h3>
                                        <h3><i class="fa fa-cloud text-blue mr-2"></i>平均风速: {{provinceSpeed}}m/s</h3>
                                        <h3><i class="fa fa-sun text-orange mr-2"></i>平均功率密度: {{provincePower}} W/m²</h3>
                                    </b-card-text>
                                </b-col>
                                <b-col cols="4">
                                    <b-card-img :src="cardImg2" class="rounded-0 overflow-hidden"></b-card-img>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>

            <!-- 风能资源 -->
            <b-container fluid class="mt-4">
                <h4>平均风速地图</h4>
                <b-row>
                    <b-col cols="12" xl="6">
                        <b-img :src="speed_map" fluid class="rounded-lg">
                        </b-img>
                    </b-col>
                    <b-col cols="12" xl="6">
                        <speed-chart ref="SpeedChart"></speed-chart>
                    </b-col>
                </b-row>
            </b-container>

            <b-container fluid class="mt-4">
                <h4>平均功率密度地图</h4>
                <b-row>
                    <b-col cols="12" xl="6">
                        <b-img :src="power_map" fluid class="rounded-lg">
                        </b-img>
                    </b-col>
                    <b-col cols="12" xl="6">
                        <power-chart ref="PowerChart"></power-chart>
                    </b-col>
                </b-row>
            </b-container>

            <b-container fluid class="mt-4">
                <h4>风极坐标柱状图</h4>
                <b-row>
                    <b-col cols="12" xl="4">
                        <speed-rose-chart ref="SpeedRoseChart"></speed-rose-chart>
                    </b-col>
                    <b-col cols="12" xl="4">
                        <direction-rose-chart ref="DirectionRoseChart"></direction-rose-chart>
                    </b-col>
                    <b-col cols="12" xl="4">
                        <energy-rose-chart ref="EnergyRoseChart"></energy-rose-chart>
                    </b-col>
                </b-row>
            </b-container>

            <b-container fluid class="mt-6">
                <h2 class="mb-4">相关资料</h2>
                <b-row>
                    <b-col cols="12" xl="6">
                        <h3>全国平均风速图总览</h3>
                        <b-img :src="speed_china_map" fluid></b-img>
                    </b-col>
                    <b-col cols="12" xl="6">
                        <h3>全国平均功率密度图总览</h3>
                        <b-img :src="power_china_map" fluid></b-img>
                    </b-col>
                </b-row>
            </b-container>

            <!-- <b-container fluid class="mt-4 d-none d-md-block">
        <b-embed type="iframe" aspect="16by9" :src="windPowerUrl" allowfullscreen  @load="loadIframe">
        </b-embed> -->
            <!-- <iframe  src="" frameborder="0"></iframe> -->
            <!-- </b-container>
    <b-container fluid class="mt-4 rounded d-md-none">
        <iframe allowfullscreen  :src="windPowerUrl" width="100%" height="600px" frameborder="0"></iframe>
    </b-container> -->
        </div>
    </div>
    <b-container class="mt-5 text-center">
        <b-button class="text-white bg-blue" @click="downloadHtmlToPdf(region)">导出地区功率预测与风能资源评估报告</b-button>
    </b-container>
</div>
</template>

<script>
import FuturePreChart from './LocationPre/FuturePreChart';
import PieChart from './LocationPre/PieChart';
import LocationPreApi from '../api/LocationPre';
import Loading from '../components/Loading.vue';
import SpeedChart from './LocationPre/SpeedChart.vue';
import PowerChart from './LocationPre/PowerChart.vue';
import SpeedRoseChart from './LocationPre/SpeedRoseChart';
import DirectionRoseChart from './LocationPre/DirectionRoseChart';
import EnergyRoseChart from './LocationPre/EnergyRoseChart';

export default {
    components: {
        FuturePreChart,
        PieChart,
        Loading,
        SpeedChart,
        PowerChart,
        SpeedRoseChart,
        DirectionRoseChart,
        EnergyRoseChart
    },
    data() {
        return {
            loading: true,
            markerPoint: {
                lng: 116.404,
                lat: 39.915
            },
            region: 'Beijing',
            provincePower: '',
            provinceSpeed: '',
            provinceRank: '',
            provinceRemark: '',
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
            mapInfo: '您所选的地方位于北京市',
            speed_map: require('../assets/LocationPre/speed_map/Anhui-speed.png'),
            power_map: require('../assets/LocationPre/power_map/Anhui-power.png'),

            cardImg1: require('../assets/LocationPre/card-4.jpeg'),
            cardImg2: require('../assets/LocationPre/card-5.jpeg'),

            speed_china_map: require('../assets/LocationPre/speed-map-china.png'),
            power_china_map: require('../assets/LocationPre/power-map-china.png'),
        }
    },
    methods: {
        pointChange(e) {
            this.markerPoint = e.point
            this.windyUrl = "https://embed.windy.com/embed2.html?lat=" + this.markerPoint.lat + "&" + "lon=" + this.markerPoint.lng + "&detailLat=" + this.markerPoint.lat + "&detailLon=" + this.markerPoint.lng + "&width=650&height=450&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1"
            this.getCityName()
            this.getPowerPreData(this.markerPoint.lat, this.markerPoint.lng)
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

                // let region = this.region
                // this.speed_map = require('../assets/LocationPre/speed_map/' + region + '-speed.png')
                // this.power_map = require('../assets/LocationPre/power_map/' + region + '-power.png')
                // this.$refs.SpeedChart.getData(region)
                // this.$refs.PowerChart.getData(region)
                // this.$refs.SpeedRoseChart.getData(region)
                // this.$refs.DirectionRoseChart.getData(region)
                // this.$refs.EnergyRoseChart.getData(region)

                // this.getProvinceData()

                this.$refs.loading.hide()
            })

        },

        // 获取省市风能数据
        getProvinceData() {
            // 读取指定路径下的json文件,并返回json对象
            console.log(this.region)
            this.$axios.get('/provinceData.json')
                .then(response => {
                    // 处理请求成功的数据
                    var provinceData = response.data
                    for (let i = 0; i < provinceData.length; i++) {

                        if (provinceData[i]['province'] == this.region) {
                            this.provincePower = provinceData[i]['province_power'];
                            this.provinceSpeed = provinceData[i]['province_speed'];
                            this.provinceRank = provinceData[i]['province_rank'];
                            this.provinceRemark = provinceData[i]['province_remark'];
                        }
                    }
                })
                .catch(error => {
                    // 处理请求失败的情况
                    console.log(error)
                })

        },

        // 获得数组中每个对象的某个属性的最大值
        getMaxValue(arr, key) {
            let max = Number(arr[0][key])
            arr.forEach((item) => {
                // 将字符串转换为数字
                item[key] = Number(item[key])
                // console.log(max,item[key])
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

        getCityName() {
            LocationPreApi.getCityName(this.markerPoint.lat, this.markerPoint.lng).then(res => {
                console.log(res)
                this.mapInfo = '您所选的地方位于' + res.data.data.formatted_address + '，如果想查询具体经纬度下的风能资源信息，请转到https://globalwindatlas.info/zh，复制以下经纬度信息到搜索框内：' + this.markerPoint.lat + ',' + this.markerPoint.lng
                // this.windPowerUrl = "https://globalwindatlas.info/zh/area/China/" + res.data.data.addressComponent['province']
                this.region = res.data.data.addressComponent.province
                let region = this.region
                this.speed_map = require('../assets/LocationPre/speed_map/' + region + '-speed.png')
                this.power_map = require('../assets/LocationPre/power_map/' + region + '-power.png')
                this.$refs.SpeedChart.getData(region)
                this.$refs.PowerChart.getData(region)
                this.$refs.SpeedRoseChart.getData(region)
                this.$refs.DirectionRoseChart.getData(region)
                this.$refs.EnergyRoseChart.getData(region)

                this.getProvinceData()
            })
        }
    },
    created() {
        // this.getWeatherInfo(this.markerPoint.lat, this.markerPoint.lng)
        this.windyUrl = "https://embed.windy.com/embed2.html?lat=" + this.markerPoint.lat + "&" + "lon=" + this.markerPoint.lng + "&detailLat=" + this.markerPoint.lat + "&detailLon=" + this.markerPoint.lng + "&width=800&height=600&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1"
        this.windPowerUrl = "https://globalwindatlas.info/zh/area/China/Beijing"
        this.getCityName()
    },
    mounted() {
        this.getPowerPreData(this.markerPoint.lat, this.markerPoint.lng)

    },
};
</script>

<style>

</style>
