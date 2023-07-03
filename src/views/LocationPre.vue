<template>
<div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <div class="mt--4 mt-md--8  mb-4 text-right">
        <img src="../assets/start/forth.png" v-shared-element:markImage="{duration:'2s'}" height="100" style="text-right">
    </div>
        <b-container fluid class="mt-2 rounded">
            <b-row>
                <b-col>
                    <b-card body-class="p-0" header-class="border-0">
                        <baidu-map class="map" center="北京" :scroll-wheel-zoom="true">
                            <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP','BMAP_SATELLITE_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
                            <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list> -->
                            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
                            <bm-marker :position="markerPoint" :dragging="true" @dragend="pointChange" animation="BMAP_ANIMATION_BOUNCE">
                            </bm-marker>
                        </baidu-map>
                        <template v-slot:footer>
                            <b-row align-v="center">
                                <b-col>
                                    <h4 class="mb-0">经度</h4>
                                </b-col>
                                <b-col>
                                    <h3 class="mb-0">{{markerPoint.lng}}</h3>
                                </b-col>
                                <b-col>
                                    <h3 class="mb-0">维度</h3>
                                </b-col>
                                <b-col>
                                    <h3 class="mb-0">{{markerPoint.lat}}</h3>
                                </b-col>
                                <b-col class="text-right">
                                    <base-button size="lg" type="primary" @click="getCityName">预测</base-button>
                                </b-col>
                            </b-row>
                        </template>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </base-header>

    <!-- 实况天气 -->
    <b-container fluid class="mt--6">
        <b-row class="mb-5 mb-xl-0">
            <b-col xl="3" cols="6">
                <stats-card title="最高功率" type="gradient-blue" sub-title="2,356" icon="ni ni-spaceship">
                </stats-card>
            </b-col>
            <b-col xl="3" cols="6">
                <stats-card title="最高气温" type="gradient-orange" sub-title="2,356" icon="ni ni-umbrella-13">
                </stats-card>
            </b-col>
            <b-col xl="3" cols="6">
                <stats-card title="最高风速" type="gradient-green" sub-title="2,356" icon="ni ni-planet">

                </stats-card>
            </b-col>
            <b-col xl="3" cols="6">
                <stats-card title="最高气压" type="gradient-yellow" sub-title="2,356" icon="ni ni-diamond">
                </stats-card>
            </b-col>
        </b-row>
    </b-container>
    <b-container fluid class="mt-4">
        <b-embed type="iframe" aspect="16by9" :src="windyUrl" allowfullscreen>
        </b-embed>
        <!-- <iframe  src="" frameborder="0"></iframe> -->
    </b-container>
    <!-- 未来24小时功率预测 -->
    <b-container fluid class="mt-4">
        <b-card body-class="p-0" header-class="border-0">
            <template v-slot:header>
                <b-row align-v="center">
                    <b-col>
                        <h3 class="mb-0">所在地24小时功率预测</h3>
                    </b-col>
                </b-row>
            </template>
            <future-pre-chart ref="futurePreChart"></future-pre-chart>
        </b-card>
    </b-container>
</div>
</template>

<script>
import FuturePreChart from './LocationPre/FuturePreChart.vue';
import LocationPreApi from '../api/LocationPre';
export default {
    components: {
        FuturePreChart
    },
    data() {
        return {
            markerPoint: {
                lng: 116.404,
                lat: 39.915
            },
            windyUrl:'',
            res: {}
        }
    },
    methods: {
        pointChange(e) {
            this.markerPoint = e.point
            this.windyUrl = "https://embed.windy.com/embed2.html?lat="+this.markerPoint.lat+"&"+"lon="+this.markerPoint.lng+"&detailLat="+this.markerPoint.lat+"&detailLon="+this.markerPoint.lng+"&width=650&height=450&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1"
            this.$refs.futurePreChart.getFuturePreData(this.markerPoint.lat, this.markerPoint.lng)
        },
        // 获取当前经纬度下的未来24小时天气信息
        getWeatherInfo() {
            LocationPreApi.getWeatherData(this.markerPoint.lat, this.markerPoint.lng).then(res => {
                this.res = res.data
            })
        },
    },
    created(){
        this.getWeatherInfo(this.markerPoint.lat, this.markerPoint.lng)
        this.windyUrl = "https://embed.windy.com/embed2.html?lat="+this.markerPoint.lat+"&"+"lon="+this.markerPoint.lng+"&detailLat="+this.markerPoint.lat+"&detailLon="+this.markerPoint.lng+"&width=650&height=450&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1"
    },
    mounted() {
       this.$refs.futurePreChart.getFuturePreData(this.markerPoint.lat, this.markerPoint.lng)
    }
};
</script>

<style>
.map {
    width: 100%;
    height: 300px;
}
</style>
