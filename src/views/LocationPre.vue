<template>
<div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
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
            <future-pre-chart></future-pre-chart>
        </b-card>
    </b-container>
</div>
</template>

<script>
import FuturePreChart from './LocationPre/FuturePreChart.vue';
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
            res: {}
        }
    },
    methods: {
        pointChange(e) {
            this.markerPoint = e.point
            // console.log(e)
        },
        getPosition(e) {
            alert(`${e.point.lng} / ${e.point.lat}`)
        },
        getCityName() {
            //  发送请求获取城市名
            this.$axios({
                method: "get", //请求方式
                // dataType: "JSONP",
                url: "http://apia.yikeapi.com/geocode?appid=43656176&appsecret=I42og6Lm&output=json&location=116.437039,39.999664", //请求地址
                // params: {
                //     ak: 'QBdl4bnuDVgAchd3AoohXPKLe2FooIcV',
                //     output: 'json',
                //     coordtype: 'wgs84ll',
                //     location: `${this.markerPoint.lat},${this.markerPoint.lng}`
                // },
                // headers: {
                //     "Content-Type": "application/json"
                // },
            }).then(resp => {
                this.res = resp //接收数据
                console.log(this.res)
            }).catch(err => {
                console.log(err)
            })
        }
    }
};
</script>

<style>
.map {
    width: 100%;
    height: 300px;
}
</style>
