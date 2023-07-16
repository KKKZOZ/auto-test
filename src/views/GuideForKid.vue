<template>
<div>
    <loading ref="loading"></loading>
    <div>
    <b-embed src="https://my.spline.design/draganddropbookpencilschoolcopy-599ff8b1c21ba032c947e4a44b880cc0/" @load="loading"></b-embed>
    </div><b-container class="mt--6 text-center d-none d-lg-block">
        <VueSlickCarousel v-bind="settings">
            <b-img :src="it.src" alt="image" v-for="it in images" :key="it"></b-img>
        </VueSlickCarousel>
    </b-container>
    <b-container class="mt--3 text-center d-lg-none">
        <VueSlickCarousel v-bind="settingsMd">
            <b-img :src="it.src" alt="image" v-for="it in images" :key="it"></b-img>
        </VueSlickCarousel>
    </b-container>
</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Loading from '../components/Loading.vue';

export default {
    name: "GuideForKid",
    components: {
        VueSlickCarousel,
        Loading,
    },
    data() {
        return {
            settings:{
            "dots": true,
            "focusOnSelect": true,
            "infinite": true,
            "speed": 200,
            "slidesToShow": 2,
            "slidesToScroll": 2,
            "touchThreshold": 5,
            },
            settingsMd:{
            "dots": true,
            "focusOnSelect": true,
            "infinite": true,
            "speed": 10,
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "touchThreshold": 5,
            },
            images: [
                {
                    id: 0,
                    src: require('@/assets/guide/1.png')
                },
                {
                    id: 1,
                    src: require('@/assets/guide/2.png')
                },
                {
                    id: 2,
                    src: require('@/assets/guide/3.png')
                },
                {
                    id: 3,
                    src: require('@/assets/guide/4.png')
                },
                {
                    id: 4,
                    src: require('@/assets/guide/5.png')
                },
                {
                    id: 5,
                    src: require('@/assets/guide/6.png')
                },
                {
                    id: 6,
                    src: require('@/assets/guide/7.png')
                },
                {
                    id: 7,
                    src: require('@/assets/guide/8.png')
                },
            ]

        }
    },
    methods:{
        loading() {
            this.$refs.loading.hide();
        }
    },

};
</script>

<style>

</style>
