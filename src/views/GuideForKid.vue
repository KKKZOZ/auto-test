<template>
<div>
    <!-- <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="20"
          img-height="100"
        >
        <b-carousel-slide v-for="it in images" :key="it"
          :caption="it.id"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          :img-src="it.src"
        ></b-carousel-slide>
        </b-carousel> -->
    <!-- 

<script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.381/build/spline-viewer.js"></script>
<spline-viewer url="undefined"></spline-viewer> -->
    <!-- <div class="sketchfab-embed-wrapper">
        <iframe title="Noodle Bar" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/fd9fc276ac63420984a69bb79eb5f87f/embed?dnt=1">

        </iframe>
    </div>
    <div class="width:100%"> 
        <iframe class="width:100%" title="Pumpkin, Farmer's house" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/bc4eab3e84df4c3b83464d8b0239640f/embed?autostart=1&dnt=1"> 
        </iframe> 
        <b-embed src="https://sketchfab.com/models/bc4eab3e84df4c3b83464d8b0239640f/embed?autospin=1&autostart=1&preload=1&ui_hint=0&dnt=1" >
        </b-embed>
    </div> -->
    <!-- <b-embed src="https://my.spline.design/miniroomartcopy-1e4e2cfae0438ba5d2dc01b9d3d77e70/" type="iframe">
    </b-embed> -->
    <b-embed src="https://my.spline.design/draganddropbookpencilschoolcopy-599ff8b1c21ba032c947e4a44b880cc0/"></b-embed>
    <b-container class="mt--6 px-5 text-center">
        <!-- <carousel-3d style="height:400">
        <slide style="height:800" :index="it.id" v-for="it in images"  :key="it">
            <b-img :src="it.src" alt="image"></b-img>
        </slide>
    </carousel-3d> -->
        <VueSlickCarousel v-bind="settings">
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

export default {
    name: "GuideForKid",
    components: {
        VueSlickCarousel,
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
                // {id:3,src:'3.jpg'},
                // {id:4,src:'4.jpg'},
                // {id:5,src:'5.jpg'},
                // {id:6,src:'6.jpg'},
                // {id:7,src:'7.jpg'},
                // {id:8,src:'8.jpg'},
            ]

        }
    }

};
</script>

<style>

</style>
