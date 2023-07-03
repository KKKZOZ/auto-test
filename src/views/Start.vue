<template>
    <div>
        <div class="bg" v-show="trigger"></div>
        <b-row style="z-index:1">
            <b-col cols="6" class="text-center mt-4">
                <b-row>
                    <b-col xl="8" cols="12">
                        <kinesis-container>
                            <kinesis-element :strength="20">
                                <img src="../assets/start/first.png" width="100%" v-shared-element:markImage="{duration:'2s'}" @click="navigate('/dataReport')">
                            </kinesis-element>
                        </kinesis-container>
                    </b-col>
                    <b-col xl="4" class="text-left ml-xl-0 ml-5 pt-5">
                        <b-button  variant="primary" class="btn-lg rounded-circle" @click="navigate('/dataReport')" @mouseover="mouseoverPartOne" @mouseleave="mouseleavePartOne"><i class="fa fa-trophy"></i></b-button>
                        <h6 class="ls-1 mt-2 text-left">风电数据可视化</h6>
                        <h6 class="text-muted mb-1 text-left" v-show="dataReportShow">通过数据可视化，我们将风电行业的关键数据以图表和图形的形式展示给您。了解行业的整体趋势和各地区的差异。</h6>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="6" class="text-center mt-4">
                <b-row>
                    <b-col xl="4" class="text-right mr-xl-0 mr-5 pt-5">
                        <b-button variant="info" class="btn-lg rounded-circle" @click="navigate('/realtimePre')" @mouseover="mouseoverPartTwo" @mouseleave="mouseleavePartTwo"><i class="fa fa-table"></i></b-button>
                        <h6 class="ls-1 mt-2 text-right">实时功率预测</h6>
                        <h6 class="text-muted mb-1 text-right" v-show="realtimePredictionShow">我们的实时功率预测功能利用先进的算法和模型，基于当前的气象条件和风力数据，提供风电场未来一段时间内的功率预测。</h6>
                    </b-col>
                    <b-col xl="8" cols="12">
                        <kinesis-container>
                            <kinesis-element :strength="20">
                                <div>
                                    <img src="../assets/start/second.png" width="100%" v-shared-element:markImage="{duration:'2s'}" @click="navigate('/realtimePre')">
                                </div>
                            </kinesis-element>
                        </kinesis-container>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-container fluid class="mt-xl--4 mb-xl--6">
            <kinesis-container>
                <kinesis-element :strength="40">
            <h1 class="text-center" style="font-size:60px">Wind is,</h1>
            <h1 class="text-center ml-8" style="font-size:60px">Coming</h1>
                </kinesis-element>
            </kinesis-container>
            <h6 class="text-uppercase text-muted ls-1 mb-1 text-center">风电数据可视化与预测系统</h6>
        </b-container>
        <b-row style="z-index:1">
            <b-col cols="6" class="text-center mt-4">
                <b-row>
                    <b-col xl="8" cols="12">
                        <kinesis-container>
                            <kinesis-element :strength="20">
                                <img src="../assets/start/third.svg" width="100%" v-shared-element:markImage="{duration:'2s'}" @click="navigate('/historyData')">
                            </kinesis-element>
                        </kinesis-container>
                    </b-col>
                    <b-col xl="4" class="text-left ml-xl-0 ml-5 pt-5">
                        <b-button  @click="navigate('/historyData')" variant="success" class="btn-lg rounded-circle" @mouseover="mouseoverPartThree" @mouseleave="mouseleavePartThree"><i class="fa fa-tag"></i></b-button>
                        <h6 class="ls-1 mt-2 text-left">历史数据分析</h6>
                        <h6 class="text-muted mb-1 text-left" v-show="historyDataShow">通过历史数据分析，我们帮助您深入研究过去的风电产量和运行情况。您可以探索不同时间段的趋势和模式，发现影响风电场性能的因素，并进行数据驱动的决策。</h6>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="6" class="text-center mt-4">
                <b-row>
                    <b-col xl="4" class="text-right mr-xl-0 mr-5 pt-5">
                        <b-button  @click="navigate('/locationPre')" variant="warning" class="btn-lg rounded-circle" @mouseover="mouseoverPartFour" @mouseleave="mouseleavePartFour"><i class="fa fa-map"></i></b-button>
                        <h6 class="ls-1 mt-2 text-right">地图定点预测功率</h6>
                        <h6 class="text-muted mb-1 text-right" v-show="locationPredictionShow">地图定点预测功率功能允许您选择感兴趣的地理位置，然后预测该地区风电场的功率输出。您可以使用交互式地图界面，在不同位置之间进行比较，并了解不同地区的风能资源潜力。</h6>
                    </b-col>
                    <b-col xl="8" cols="12">
                        <kinesis-container>
                            <kinesis-element :strength="20">
                                <div>
                                    <img src="../assets/start/forth.png" width="100%" v-shared-element:markImage="{duration:'2s'}" @click="navigate('/locationPre')">
                                </div>
                            </kinesis-element>
                        </kinesis-container>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row align-v="center" class="justify-content-lg-between mx-4">
            <b-col lg="6">
              <div class="copyright text-center text-lg-left text-muted">
                © {{year}} <a href="https://www.scu.edu.cn/" class="font-weight-bold ml-1" target="_blank">WindComing</a>
              </div>
            </b-col>
            <b-col lg="6">
              <h6 class="text-uppercase text-muted ls-1 mb-1 text-center">本网站内容版权由 噢对的对的噢不对不队 团队所有</h6>
            </b-col>
          </b-row>
    </div>
    </template>
    
    <script>
    import {
        Button
    } from "element-ui"
    export default {
        name: "App",
        components: {
            [Button.name]: Button,
        },
        data() {
            return {
                dataReportShow: false,
                realtimePredictionShow: false,
                historyDataShow: false,
                locationPredictionShow: false,
            };
        },
        methods: {
            mouseoverPartOne() {
                this.dataReportShow = true;
                this.trigger = true;
            },
            mouseleavePartOne() {
                this.dataReportShow = false;
                this.trigger = false;
            },
            mouseleavePartTwo() {
                this.realtimePredictionShow = false;
                this.trigger = false;
            },
            mouseoverPartTwo() {
                this.realtimePredictionShow = true;
                this.trigger = true;
            },
            mouseleavePartThree() {
                this.historyDataShow = false;
                this.trigger = false;
            },
            mouseoverPartThree() {
                this.historyDataShow = true;
                this.trigger = true;
            },
            mouseleavePartFour() {
                this.locationPredictionShow = false;
                this.trigger = false;
            },
            mouseoverPartFour() {
                this.locationPredictionShow = true;
                this.trigger = true;
            },
            leave(e) {
                this.trigger = false;
            },
    
            vwavetrigger() {
                this.trigger = true;
            },
            // 点击事件
            navigate(url) {
                this.$router.push(url);
            },
        },
    };
    </script>
    
    <style>
    .bg {
        /*渐变的背景色*/
        /*height: 100vh;
        background-image: linear-gradient(to bottom right, #FC466B, #3F5EF8);
        overflow: hidden;*/
        /*背景图*/
        background: url("../assets/start/bg1.gif");
        text-align: center;
        width: 100%;
        height: 100%;
        position: fixed;
        background-size: 100% 100%;
        z-index: -1;
    }
    
    </style>
    

    <!-- <img src="../assets/logo.png" alt="logo" v-shared-element:namespace @click="click"/>
      <kinesis-container class="container">
        <kinesis-element :strength="150">
          <img src="../assets/logo.png" alt="logrocket logo">
        </kinesis-element> -->
    <!-- background-circles-props -->
    <!-- <kinesis-element :strength="50" axis="y">
          <div class="circle circle-purple"></div>
        </kinesis-element>
        <kinesis-element :strength="80" axis="y">
          <div class="circle circle-purple1"></div>
        </kinesis-element>
        <kinesis-element :strength="80" axis="y">
          <div class="circle circle-purple2"></div>
        </kinesis-element>
        <kinesis-element :strength="80" axis="y">
          <div class="circle circle-purple3"></div>
        </kinesis-element> -->
    <!-- </kinesis-container> -->
    <!-- 固定位置在最底部 -->
    <!-- <b-container fluid class="fixed-bottom">
            <b-row>
            <b-col cols="12" class="text-center">
                <b-button variant="primary" class="btn-lg">开始游戏</b-button>
            </b-col>
            </b-row>
        </b-container> -->
    <!-- <b-container fluid class="fixed-bottom">
        <kinesis-container>
        <kinesis-element :strength="10">
            <img src="../assets/1.png"  alt="logrocket logo">
        </kinesis-element></kinesis-container>
      </b-container> -->