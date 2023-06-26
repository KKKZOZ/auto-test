<template>
    
    <div class="bg">
        <b-row align-h=start>
            <b-col xl="6" md="8" sm="12" style="margin-top: 10rem">
                <b-row>
                    <b-col  xl="2" md="1" sm="1" cols="1"></b-col>
                    <b-col  xl="10" md="11" sm="11" cols="11">
                        <p class="head">The Wind is Coming.</p>
                    </b-col>
                    <b-col cols="8"></b-col>
                    <b-col cols="4" class="mt-4">
                        <p class="han">有风来</p>
                    </b-col>
                </b-row>
                <!-- 小字部分 -->
                <b-row>
                    <b-col cols="2"></b-col>
                    <b-col cols="10" class="px-0">
                        <p class="detail" style="margin-left: 10%;">提高风电功率预测的准确性</p>
                    </b-col>
                    <b-col cols="4"></b-col>
                    <b-col cols="8" class="px-0">
                        <p class="detail">为电网调度提供科学支撑</p>
                    </b-col>
                </b-row>
                <!-- 按钮部分 -->
                <b-row>
                    <b-col cols="2"></b-col>
                    <b-col cols="10" class="px-0" style="display: flex;align-items: center;justify-content:center">
                        <p class="detail">进入功率预测及管理系统</p>
                        <span class="ml-3">
                            <b-button variant="primary" style="width: 50px; height: 50px; text-align: center; border-radius: var(--radius-round);">Go</b-button>
                        </span>
                        
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>  

</template>

<script>
import { Fake3dImageEffect } from '@luxdamore/vue-fake3d-image-effect';
import '@luxdamore/vue-fake3d-image-effect/dist/Fake3dImageEffect.css';
export default {
        components: {
            'fake3d-image-effect': Fake3dImageEffect,
        },
    };

</script>

<style>
.bg {
    width: 100%; height: 100vh; 
    background-image: url(https://kkkzoz-1304409899.cos.ap-chengdu.myqcloud.com/img/bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.head {
    
    font-size: var(--font-size-fluid-3);
    font-weight: var(--font-weight-5);
    font-family: var(--font-sans);
    color: var(--gray-0);

    
    animation: var(--animation-fade-in-bloom);
    animation-duration: 3s;
    
}
.han {
    font-size: var(--font-size-fluid-2);
    font-weight: var(--font-weight-5);
    font-family: var(--font-sans);
    color: var(--gray-0);

    
    animation: var(--animation-fade-in-bloom);
    animation-duration: 3s;
    
}

.detail {
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-8);
    font-family: var(--font-sans);
    color: var(--gray-0);
}
</style>