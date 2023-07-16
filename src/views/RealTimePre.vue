<template>
  <div id="body-root">
    <transition name="fade">
      <div class="lwrapper" v-if="loading">
        <div class="lcontainer">
          <svg viewBox="0 -87 463.83425 463" xmlns="http://www.w3.org/2000/svg">
            <path d="m375.835938 112.957031c-5.851563 0-11.691407.582031-17.425782 1.742188-4.324218-21.582031-18.304687-39.992188-37.933594-49.957031-19.625-9.964844-42.738281-10.382813-62.714843-1.136719-18.078125-49.796875-73.101563-75.507813-122.898438-57.429688s-75.507812 73.105469-57.429687 122.898438c-43.621094 1.378906-78.078125 37.484375-77.4257815 81.121093.6562495 43.640626 36.1835935 78.691407 79.8281255 78.761719h296c48.597656 0 88-39.398437 88-88 0-48.601562-39.402344-88-88-88zm0 0" fill="#a3d4f7"></path>
          </svg>
          <svg viewBox="0 -87 463.83425 463" xmlns="http://www.w3.org/2000/svg">
            <path d="m375.835938 112.957031c-5.851563 0-11.691407.582031-17.425782 1.742188-4.324218-21.582031-18.304687-39.992188-37.933594-49.957031-19.625-9.964844-42.738281-10.382813-62.714843-1.136719-18.078125-49.796875-73.101563-75.507813-122.898438-57.429688s-75.507812 73.105469-57.429687 122.898438c-43.621094 1.378906-78.078125 37.484375-77.4257815 81.121093.6562495 43.640626 36.1835935 78.691407 79.8281255 78.761719h296c48.597656 0 88-39.398437 88-88 0-48.601562-39.402344-88-88-88zm0 0" fill="#b3e4ff"></path>
          </svg>
          <svg viewBox="0 -87 463.83425 463" xmlns="http://www.w3.org/2000/svg">
            <path d="m375.835938 112.957031c-5.851563 0-11.691407.582031-17.425782 1.742188-4.324218-21.582031-18.304687-39.992188-37.933594-49.957031-19.625-9.964844-42.738281-10.382813-62.714843-1.136719-18.078125-49.796875-73.101563-75.507813-122.898438-57.429688s-75.507812 73.105469-57.429687 122.898438c-43.621094 1.378906-78.078125 37.484375-77.4257815 81.121093.6562495 43.640626 36.1835935 78.691407 79.8281255 78.761719h296c48.597656 0 88-39.398437 88-88 0-48.601562-39.402344-88-88-88zm0 0" fill="#fff"></path>
          </svg>
        </div>
        <p>Loading...</p>
      </div>
    </transition>
    <div class="tbanner">
      <div class="home_sun">
        <div class="suntemperature-background">
          <div class="suntemperature"></div>
        </div>
      </div>

      <div class="pannel">
        <div class="text-center">
          <img class='wlogo' src="../assets/logo/logo.png">
        </div>
        <div class="select-container text-right">
          <b-form-select style="box-shadow: 1px;" v-model="selectedType" :options="options" size="lg"
            class="select-col mt-1" @change="selectedTypeChange">
          </b-form-select>
        </div>
        <div id='time-container'>
          <h2>截至 {{showDate}} 实时功率为:</h2>
          <h2></h2>
        </div>
        <div id='text-container' class="text-col text-center"></div>

      </div>
      <div class="clouds">
        <img src="../assets/clouds/cloud1.png" style="--i:1;">
        <img src="../assets/clouds/cloud2.png" style="--i:2;">
        <img src="../assets/clouds/cloud3.png" style="--i:3;">
        <img src="../assets/clouds/cloud4.png" style="--i:4;">
        <img src="../assets/clouds/cloud5.png" style="--i:5;">
        <img src="../assets/clouds/cloud1.png" style="--i:10;">
        <img src="../assets/clouds/cloud2.png" style="--i:9;">
        <img src="../assets/clouds/cloud3.png" style="--i:8;">
        <img src="../assets/clouds/cloud4.png" style="--i:7;">
        <img src="../assets/clouds/cloud5.png" style="--i:6;">
      </div>
    </div>
    <div class="wcontainer">
      <div class="bwindmill">
        <div class="line"></div>
        <div class="bmill"></div>
        <div class="door"></div>
        <div class="fan">
          <div class="wingOne"></div>
          <div class="wingTwo"></div>
          <div class="wingThree"></div>
          <div class="wingFour"></div>
        </div>
      </div>
    </div>
    <base-header class="head-background pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->

      <div class="mt--4 mt-md--8  mb-4 text-right">
        <img src="../assets/start/second.png" v-shared-element:markImage="{duration:'2s'}" height="100"
          style="text-right">
      </div>
      <div class="pbanner">

      </div>

      <b-row class="justify-content-center mb-4">

      </b-row>

      <b-row>
        <!--        <b-col cols="12" class="text-right mt-2">
            <b-form-select style="box-shadow: 1px;" v-model="selectedType" :options="options" size="sm" class="mt-3" @change="selectedTypeChange"></b-form-select>
        </b-col> -->
        <b-col xl="4" lg="6">
          <StatsCard title="预测实时功率" type="gradient-info" :sub-title="yd15 + 'W'" class="data-card mb-4">
            <template slot="footer">
              <!-- <Powermeter :yd15="yd15"></Powermeter> -->
              <div class="YD15-background">
                <div class="main-wrapper">
                  <div class="sun">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div class="mountain-1"></div>
                  <div class="mountain-2"></div>
                  <div class="mountain-3"></div>
                  <div class="mountain-4"></div>
                  <div class="mountain-5"></div>
                  <div class="tree-wrap">
                    <div class="tree">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div class="windmill-pole-wrap">
                    <div class="windmill-pole"></div>
                  </div>
                  <div class="windmill-pole-ellipses">
                    <div class="windmill-pole-ellipses-wrapper">
                      <div class="windmill-pole-ellipses-wrap">
                        <div class="windmill-pole-ellipses-center"></div>
                        <div class="ellipses">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="windmill-pole-wrap right">
                    <div class="windmill-pole"></div>
                  </div>
                  <div class="windmill-pole-ellipses right">
                    <div class="windmill-pole-ellipses-wrapper">
                      <div class="windmill-pole-ellipses-wrap">
                        <div class="windmill-pole-ellipses-center"></div>
                        <div class="ellipses delayed">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="windmill-pole-wrap back-left">
                    <div class="windmill-pole"></div>
                  </div>
                  <div class="windmill-pole-ellipses back-left">
                    <div class="windmill-pole-ellipses-wrapper">
                      <div class="windmill-pole-ellipses-wrap">
                        <div class="windmill-pole-ellipses-center"></div>
                        <div class="ellipses delayed">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="clouds-wind-wrapper">
                    <div class="clouds-wind-wrap">
                      <div class="clouds-wind-section">
                        <div class="cloud">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="cloud snd">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="cloud trd">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="wind">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="wind snd">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="wind-small">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <div class="clouds-wind-section snd">
                        <div class="cloud">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="cloud snd">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="cloud trd">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="wind">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="wind snd">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="wind-small">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <div class="clouds-wind-section trd">
                        <div class="cloud">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="cloud snd">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="cloud trd">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="wind">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="wind snd">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="wind-small">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </StatsCard>

        </b-col>

        <b-col xl="4" lg="6">
          <card class="card-stats data-card mb-4" :show-footer-line="true">
            <b-row>
              <b-col>
                <h5 class="card-title text-uppercase text-muted mb-0">预测实时风向</h5>
                <span class="h2 sub-title font-weight-bold mb-0">{{winddirect}} {{winddirection + '°'}}</span>
              </b-col>
            </b-row>
            <div style="width: 100%;height:320px;">
              <div id="sky">
                <div class="bird">
                  <div class="fwind"></div>
                  <div class="fwind"></div>
                  <div class="fwind"></div>
                  <div class="fwind"></div>
                  <div class="fwind"></div>
                  <div class="fwind"></div>
                  <div class="fwind"></div>
                  <div class="fwind"></div>
                  <div class="fwind"></div>
                  <div class="fwind"></div>
                  <div class="bird_body">
                    <div class="bird_head"></div>
                    <div class="bird_wing_left">
                      <div class="bird_wing_left_top"></div>
                    </div>
                    <div class="bird_wing_right">
                      <div class="bird_wing_right_top"></div>
                    </div>
                    <div class="bird_tail_left"></div>
                    <div class="bird_tail_right"></div>
                  </div>
                </div>
              </div>
            </div>
          </card>

        </b-col>
        <b-col xl="4" lg="6">
          <StatsCard title="预测实时风速" type="gradient-red" :sub-title="windspeed + 'm/s'" class="data-card mb-4">
            <template slot="footer">
              <div class="windspeed-background">
                <div class="windmill">
                  <div class="wheel">
                    <div class="windwheel"></div>
                    <div class="windwheel windwheel2"></div>
                    <div class="windwheel windwheel3"></div>
                    <div class="windwheel windwheel4"></div>
                  </div>
                  <div class="roof"></div>
                  <div class="mill"></div>
                  <div class="house"></div>
                </div>
              </div>
            </template>
          </StatsCard>
        </b-col>
        <b-col xl="4" lg="6">
          <StatsCard title="预测实时湿度" type="gradient-orange" :sub-title="humidity + '％'" class="data-card mb-4">
            <template slot="footer">
              <LiquidFill :humidity="humidity"></LiquidFill>
            </template>
          </StatsCard>

        </b-col>
        <b-col xl="4" lg="6" md="12">
          <StatsCard title="预测实时气压" type="gradient-green" :sub-title="pressure+'hPa'" class="data-card mb-4">
            <template slot="footer">
              <div class="pressure-background">
                <div class="soapBubble">
                  <div class="moveX">
                    <div class="moveY">
                      <div class="deformX">
                        <div class="deformY">
                          <div class="bubbleImg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </StatsCard>

        </b-col>
        <b-col xl="4" lg="6">
          <StatsCard title="预测实时温度" type="gradient-red" :sub-title="temperature + '℃'" class="data-card mb-4">
            <template slot="footer">
              <div class="suntemperature-background">
                <div class="suntemperature"></div>
              </div>
            </template>
          </StatsCard>
        </b-col>
      </b-row>

      <b-row>
        <b-col xl="6" lg="12" md="12" class="mb-5 mb-xl-0">
          <!-- <card type="default" header-classes="bg-transparent"> -->
          <card header-classes="bg-transparent" class="data-card data-table">
            <b-row align-v="center" slot="header">
              <b-col xl="6">
                <!-- <h5 class="text-black card-title text-uppercase ls-1 mb-1">预测数据</h5> -->
                <h2 class="h2 table-title text-black mb-0">实时数据与预测数据对比图</h2>
              </b-col>
              <b-col xl="2">

                <h2 class="h2 text-black mb-0">输入输出：</h2>
              </b-col>
              <b-col xl="2" class="mt-md-2 mt-xl-0 select-in-time">
                <b-form-select v-model="selectedInTime" :options="inOptions" size="lg"
                @change="selectedInTimeChange">
                </b-form-select>
              </b-col>
              <b-col xl="2" class="mt-md-2 mt-xl-0 select-in-time">
                <b-form-select v-model="selectedOutTime" :options="outOptions" size="lg"
                @change="selectedOutTimeChange">
                </b-form-select>
              </b-col>
              <b-col>
                <b-nav class="nav-pills justify-content-end">
                </b-nav>
              </b-col>
            </b-row>
            <div id="linechart" class="pt-2">

            </div>
          </card>
        </b-col>
        <b-col xl="6" lg="12" md="12">
          <!-- <card header-classes="bg-transparent" class="data-card"></card> -->
          <div class="shell">
            <div class="analysis-container" id="analysis-container1">
              <div class="data-container">
                <div class="heading-secondary">
                  <p>预测数据分析</p>
                  <b-form-select style="box-shadow: 1px;" v-model="selectedTime" :options="tOptions" size="lg"
                    class="select-time" id="select-time1" @change="selectedTimeChange">
                  </b-form-select>
                </div>
                <div class="summary-result-options">
                  <div class="result-option result-option-reaction">
                    <div class="icon-box">
                      <svg viewBox="0 0 20 20" fill="none" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z" stroke-width="1.25"
                          stroke-linejoin="round" stroke-linecap="round" stroke="#F55"></path>
                      </svg>
                      <span class="reaction-icon-text">预测当前风机负载</span>
                    </div>
                    <div class="result-box"><span>{{yd15Loading+'%'}}</span> x {{maxDict[turbid]}}W</div>
                  </div>
                  <div class="result-option result-option-memory">
                    <div class="icon-box">
                      <svg viewBox="0 0 20 20" fill="none" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858" stroke-width="1.25" stroke-linejoin="round"
                          stroke-linecap="round" stroke="#FFB21E"></path>
                        <path
                          d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
                          stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round" stroke="#FFB21E"></path>
                        <path
                          d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
                          stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round" stroke="#FFB21E"></path>
                      </svg>
                      <span class="memory-icon-text">未来{{selectedTime}}小时最高功率</span>
                    </div>
                    <div class="result-box"><span>{{maxPow.toFixed(1)}}</span> / {{maxDict[turbid]}}W</div>
                  </div>
                  <div class="result-option result-option-verbal">
                    <div class="icon-box">
                      <svg viewBox="0 0 20 20" fill="none" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
                          stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round" stroke="#00BB8F"></path>
                      </svg>
                      <span class="verbal-icon-text">未来{{selectedTime}}小时平均功率</span>
                    </div>
                    <div class="result-box"><span>{{avgPow.toFixed(1)}}</span> / {{maxDict[turbid]}}W</div>
                  </div>
                  <div class="result-option result-option-Visual">
                    <div class="icon-box">
                      <svg viewBox="0 0 20 20" fill="none" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z" stroke-width="1.25"
                          stroke-linejoin="round" stroke-linecap="round" stroke="#1125D6"></path>
                        <path
                          d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
                          stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round" stroke="#1125D6"></path>
                      </svg>
                      <span class="visual-icon-text">未来{{selectedTime}}小时发电总量</span>
                    </div>
                    <div class="result-box"><span>{{totalEnergy.toFixed(1)}}</span> kW·h</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="analysis-container" id="analysis-container2">
              <div class="data-container">
                <div class="heading-secondary">
                  <p>实时数据分析</p>
                  <b-form-select style="box-shadow: 1px;" v-model="selectedTime" :options="tOptions" size="lg"
                    class="select-time" @change="selectedTimeChange">
                  </b-form-select>
                </div>
                <div class="summary-result-options">
                  <div class="result-option result-option-reaction">
                    <div class="icon-box">
                      <svg viewBox="0 0 20 20" fill="none" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z" stroke-width="1.25"
                          stroke-linejoin="round" stroke-linecap="round" stroke="#F55"></path>
                      </svg>
                      <span class="reaction-icon-text">最新真实风机负载</span>
                    </div>
                    <div class="result-box"><span>{{(realYd15*100/maxDict[turbid]).toFixed(1)}}%</span> x {{maxDict[turbid] + 'W'}}</div>
                  </div>
                  <div class="result-option result-option-memory">
                    <div class="icon-box">
                      <svg viewBox="0 0 20 20" fill="none" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858" stroke-width="1.25" stroke-linejoin="round"
                          stroke-linecap="round" stroke="#FFB21E"></path>
                        <path
                          d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
                          stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round" stroke="#FFB21E"></path>
                        <path
                          d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
                          stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round" stroke="#FFB21E"></path>
                      </svg>
                      <span class="memory-icon-text">最近{{selectedTime}}小时最高功率</span>
                    </div>
                    <div class="result-box"><span>{{realMaxPow.toFixed(1)}}</span> / {{maxDict[turbid]}}W</div>
                  </div>
                  <div class="result-option result-option-verbal">
                    <div class="icon-box">
                      <svg viewBox="0 0 20 20" fill="none" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
                          stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round" stroke="#00BB8F"></path>
                      </svg>
                      <span class="verbal-icon-text">最近{{selectedTime}}小时平均功率</span>
                    </div>
                    <div class="result-box"><span>{{realAvgPow.toFixed(1)}}</span> / {{maxDict[turbid]}}W</div>
                  </div>
                  <div class="result-option result-option-Visual">
                    <div class="icon-box">
                      <svg viewBox="0 0 20 20" fill="none" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z" stroke-width="1.25"
                          stroke-linejoin="round" stroke-linecap="round" stroke="#1125D6"></path>
                        <path
                          d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
                          stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round" stroke="#1125D6"></path>
                      </svg>
                      <span class="visual-icon-text">最近{{selectedTime}}小时发电总量</span>
                    </div>
                    <div class="result-box"><span>{{realTotalEnergy.toFixed(1)}}</span> kW·h</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="switch" id="switch-cnt">
              <div class="switch-circle"></div>
              <div class="switch-circle switch-circle-t"></div>
              <div class="switch-container" id='switch-c1'>
                <h2 class="switch-title title">预测分析</h2>
                <p class="switch-description">分析预测的未来数据，计算未来数据中功率的最值、均值、发电状况</p>
                <button class="switch-button button">切换至实时分析</button>
              </div>

              <div class="switch-container is-hidden" id='switch-c2'>
                <h2 class="switch-title title">实时分析</h2>
                <p class="switch-description">分析实测的近期数据，计算实测数据中功率的最值、均值、发电状况</p>
                <button class="switch-button button">切换至预测分析</button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </base-header>

    <!--Charts-->


  </div>
</template>
<script>
  import Vue from 'vue'
  import {
    getEndpointData
  } from '../api/api';
  import {
    postUserData
  } from '../api/api';
  // Components
  import LiquidFill from '../components/Dashboard/LiquidFill.vue';
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';
  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';
  import {
    time,
    values
  } from 'd3';
  import * as echarts from 'echarts';
  import {
    init
  } from 'echarts/lib/echarts';
  import {
    LeonSans
  } from '../assets/leon/leon.js';
  import * as PIXI from 'pixi.js'
  import dat from 'dat.gui'
  import {
    TweenMax,
    Power3
  } from 'gsap'
  import Hammer from 'hammerjs'


  // import { window } from 'd3';
  var color = require('d3-scale-chromatic');
  var that;
  var sheetPos = -1
  var timer = null;
  var cardTimer = null;
  var realTimer = null;
  var fontTimer = null;
  var new_response;
  var option;
  var step;
  var myChart;
  var leon;
  export default {
    components: {
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable,
      LiquidFill
    },
    data() {
      return {
        loading: true,
        selectedTime: 24, // 小时数
        selectedType: 0, // 风机id-1
        selectedInTime: 1,
        selectedOutTime: 1,
        // startDate: '2022-08-15',
        // endDate: '2023-06-26',
        inOptions: [{
            value: null,
            text: '输入序列长度',
            disabled: true
          },
          {
            value: 1,
            text: '仅未来天气'
          },
          {
            value: 3,
            text: '过去3天'
          },
          {
            value: 5,
            text: '过去5天'
          },
          {
            value: 7,
            text: '过去7天'
          }
        ],
        outOptions: [{
            value: null,
            text: '输出预测天数',
            disabled: true
          },
          {
            value: 1,
            text: '1天'
          },
          {
            value: 2,
            text: '2天'
          },
          {
            value: 3,
            text: '3天'
          }
        ],
        tOptions: [{
            value: null,
            text: '时间长度',
            disabled: true,
          },
          {
            value: 0.5,
            text: '0.5小时'
          },
          {
            value: 1,
            text: '1小时'
          },
          {
            value: 2,
            text: '2小时'
          },
          {
            value: 4,
            text: '4小时'
          },
          {
            value: 8,
            text: '8小时'
          },
          {
            value: 16,
            text: '16小时'
          },
          {
            value: 24,
            text: '24小时'
          }
        ],
        options: [{
            value: null,
            text: '风机型号',
            disabled: true
          },
          {
            value: 0,
            text: '风机01'
          },
          {
            value: 1,
            text: '风机02',
          },
          {
            value: 2,
            text: '风机03',
          },
          {
            value: 3,
            text: '风机04',
          },
          {
            value: 4,
            text: '风机05',
          },
          {
            value: 5,
            text: '风机06',
          },
          {
            value: 6,
            text: '风机07',
          },
          {
            value: 7,
            text: '风机08',
          },
          {
            value: 8,
            text: '风机09',
          },
          {
            value: 9,
            text: '风机10',
          }
        ],
        showDate: '2023-7-1 00:00',
        turbid: 0,
        lastdate: 0,
        nextdate: 0,

        maxDict: [198320,141250,97382,94650,151478,99090,98524,37595,196789,49043],
        maxPow: 0,
        avgPow: 0,
        totalEnergy: 0,
        realMaxPow: 0,
        realAvgPow: 0,
        realTotalEnergy: 0,


        pressure: 0,
        temperature: 0,
        winddirection: 0,
        winddirect: '北',
        windspeed: 0,
        yd15: 0,
        yd15Loading: 0,
        realYd15: 0,
        humidity: 0,

        linechart: null,
      }
    },
    methods: {
      formatTimestamp(timestamp) {
        const date = new Date(timestamp - 28800000);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        // 格式化为 "YYYY-M-D H:mm" 样式
        const formattedDate =
          `${year}-${month}-${day} ${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}`;
        return formattedDate;
      },
      formatCoord(res) {
        var datacoords = [];
        for (var i = 0; i < res.future.length - step - 1; i++) {
          datacoords.push({
            coords: [
              [that.formatTimestamp(new_response.future[i].DATATIME),
                new_response.future[i].YD15.toFixed(1)
              ],
              [that.formatTimestamp(new_response.future[i + 1].DATATIME),
                new_response.future[i + 1].YD15.toFixed(1)
              ],
            ]
          })
        }
        return datacoords;
      },
      formatHistory(res) {
        let stime = res.future[0].DATATIME
        let sindex = 0
        for (let i = res.history.length - 1; i >= 0; i--) {
          if (res.history[i].DATATIME == stime) {
            sindex = i
            break
          }
        }
        return res.history.slice(sindex, res.history.length).map(function(item) {
          return item.YD15.toFixed(1)
        })
      },
      formatWindDirection(angle) {
        angle %= 360
        if (angle >= 338 && angle <=22) {
          this.winddirect = '北'
        } else if (angle >= 23 && angle <= 67) {
          this.winddirect = '东北'
        } else if (angle >= 68 && angle <= 112) {
          this.winddirect = '东'
        } else if (angle >= 113 && angle <= 157) {
          this.winddirect = '东南'
        } else if (angle >= 158 && angle <= 202) {
          this.winddirect = '南'
        } else if (angle >= 203 && angle <= 247) {
            this.winddirect = '西南'
        } else if (angle >= 248 && angle <= 292) {
          this.winddirect = '西'
        } else if (angle >= 293 && angle <= 337) {
          this.winddirect = '西北'
        }
      },
      changeAnimationHomeWindspeed(winds) {
        let clouds = document.querySelectorAll('.tbanner .clouds img')
        let fan = document.getElementsByClassName('fan')[0]
        let animateTime = 5.0 / (parseFloat(winds) + 0.5)

        fan.style.setProperty('animation', `bspin ${animateTime*2}s infinite linear`)
      },
      changeAnimationWindDir(dir, pos) {
        let sheet = document.styleSheets[1]
        let bird_ele = document.getElementsByClassName('bird')[0]
        // console.log('角度值为：', dir)
        let ani_dir = 0;
        if (dir <= 180) {
          ani_dir = 180 - dir
        } else {
          ani_dir = 540 - dir
        }
        if (pos != -1) {
          sheet.removeRule(pos)
        }
        pos = sheet.insertRule(
          `@keyframes newfly {
    0%,20%,40%,60%,80%,100% {
      transform: scale(1.5) rotateX(-130deg) rotateZ(${ani_dir}deg) rotateX(10deg);
    }
    10%,30%,50%,70%,90% {
      transform: scale(1.6) rotateX(-130deg) rotateZ(${ani_dir}deg) rotateX(10deg);
    }
  }`)
        bird_ele.style.animation = 'newfly 10000ms linear infinite'
        return pos
      },
      mapRange(value, fromMin, fromMax, toMin, toMax) {
        var fromRange = fromMax - fromMin;
        var toRange = toMax - toMin;
        var valueScaled = (value - fromMin) / fromRange;
        return toMin + (valueScaled * toRange);
      },
      mapToWarmCool(temperature) {
        var value = this.mapRange(temperature, -10, 40, 0.65, 0.9);
        var colorrgb = color.interpolateTurbo(value);
        var regex = /(\d+)/g;
        var result = [];
        var match;
        while ((match = regex.exec(colorrgb)) !== null) {
          result.push(parseInt(match[0]));
        }
        return result;
      },
      changeColorsuntemperature(temperature) {
        document.documentElement.style.setProperty('--main-color', this.mapToWarmCool(temperature));
        document.documentElement.style.setProperty('--secondary-color', this.mapToWarmCool(temperature + 5));
        document.documentElement.style.setProperty('--tertiary-color', this.mapToWarmCool(temperature - 15));
      },

      changeAnimationYD15(yd15) {
        var wraps = document.getElementsByClassName('windmill-pole-ellipses-wrap');
        var clouds = document.getElementsByClassName('clouds-wind-wrapper');
        if (yd15 > 80000) {
          yd15 = 80000 + (yd15 - 80000) / 6
        }
        for (let i = 0; i < wraps.length; i++) {
          const warp = wraps[i];
          if (yd15 === 0) {
            warp.setAttribute("style", "animation-play-state:paused");
            // cloud.style.animationPlaystate = 'paused';
          } else {
            var animationDuration = (10000 / yd15) * 5;
            warp.setAttribute("style", "animation-duration:" + animationDuration + 's');
          }
        }
        for (let i = 0; i < clouds.length; i++) {
          const cloud = clouds[i];
          if (yd15 === 0) {
            cloud.setAttribute("style", "animation-play-state:paused");
            // cloud.style.animationPlaystate = 'paused';
          } else {
            var animationDuration = (80000 / yd15) * 3;
            cloud.setAttribute("style", "animation-duration:" + animationDuration + 's');
          }
        }

      },
      changeAnimationWindspeed(windspeed) {
        var wheels = document.getElementsByClassName('wheel');
        const wheel = wheels[0];
        if (windspeed === 0) {
          wheel.setAttribute("style", "animation-play-state:paused");
          // cloud.style.animationPlaystate = 'paused';
        } else {
          var animationDuration = (5 / windspeed) * 3;
          wheel.setAttribute("style", "animation-duration:" + animationDuration + 's');
        }
      },
      changeAnimationsoapBubble(pressure) {
        var soapBubbles = document.getElementsByClassName('soapBubble');
        const soapBubble = soapBubbles[0];
        var size = (1800 - pressure) / 1000 * 200;
        var left = -size * 0.12 + 39;
        var top = -size * 0.2 + 50;
        soapBubble.setAttribute("style", "width:" + size + "px;height:" + size + "px;left:" + left + "%;top:" + top +
          '%');
        var bubbleImgs = document.getElementsByClassName('bubbleImg');
        const bubbleImg = bubbleImgs[0];
        bubbleImg.setAttribute("style", "box-shadow:" + size + "px" + size +
          "px 0px rgba(0, 80, 80, .2), 1px 1px 2px rgba(255, 0, 255, .4);");

      },
      initInterface(res) {
        let tid = that.turbid
        new_response = res.data[tid]
        let lastReal = new_response.history[new_response.history.length - 1]
        this.realYd15 = lastReal.YD15.toFixed(0)
        leon.text = this.realYd15 + 'W'
        this.showDate = this.formatTimestamp(lastReal.DATATIME)
        let now = Date.now() + 28800000
        now = now - now % 900000
        step = Math.round(((new_response.future_final_time + 154800) * 1000 - now) / 900000)
        this.initAnalysisCardData()
        var lastdata = new_response.future[new_response.future.length - step - 1]
        var nextdata = new_response.future[new_response.future.length - step]

        console.log('看看两个数据', nextdata, lastdata)
        that.nextdate = nextdata.DATATIME
        that.lastdate = lastdata.DATATIME
        let datanow = 0
        let interv = 0 //间隔的毫秒数
        datanow = Date.now() + 28800000
        interv = datanow - lastdata.DATATIME
        if (interv > 900000) {
          interv -= 900000
          lastdata = nextdata
          that.lastdate = lastdata.DATATIME
          step--
          nextdata = new_response.future[new_response.future.length - step]   // 已修复此处length变化的情况
        }
        that.yd15 = parseFloat((lastdata.YD15 + interv * (nextdata.YD15 - lastdata.YD15) / 900000).toFixed(2))
        that.yd15Loading = (that.yd15*100/that.maxDict[tid]).toFixed(1)
        that.pressure = (lastdata.PRESSURE + interv * (nextdata.PRESSURE - lastdata.PRESSURE) / 900000).toFixed(2)
        that.temperature = (lastdata.TEMPERATURE + interv * (nextdata.TEMPERATURE - lastdata.TEMPERATURE) / 900000)
          .toFixed(2)
        that.winddirection = (lastdata.WINDDIRECTION + interv * (nextdata.WINDDIRECTION - lastdata.WINDDIRECTION) /
          900000).toFixed(2)
        that.formatWindDirection(that.winddirection)
        that.windspeed = (lastdata.WINDSPEED + interv * (nextdata.WINDSPEED - lastdata.WINDSPEED) / 900000).toFixed(
          2)
        that.humidity = (lastdata.HUMIDITY + interv * (nextdata.HUMIDITY - lastdata.HUMIDITY) / 900000).toFixed(2)

        that.loading = false
        if (timer) {
          clearInterval(timer)
          timer = null
        }
        timer = setInterval(() => {
          // 更新元素的属性值
          datanow = Date.now() + 28800000
          interv = datanow - lastdata.DATATIME
          if (interv > 900000) {
            interv -= 900000
            lastdata = nextdata
            step--
            nextdata = new_response.future[new_response.future.length - step]
          }
          that.yd15 = parseFloat((lastdata.YD15 + interv * (nextdata.YD15 - lastdata.YD15) / 900000).toFixed(2))
          if (that.yd15Loading !== (that.yd15*100/that.maxDict[tid]).toFixed(1))
            that.yd15Loading = (that.yd15*100/that.maxDict[tid]).toFixed(1)
          that.pressure = (lastdata.PRESSURE + interv * (nextdata.PRESSURE - lastdata.PRESSURE) / 900000)
            .toFixed(2)
          that.temperature = (lastdata.TEMPERATURE + interv * (nextdata.TEMPERATURE - lastdata.TEMPERATURE) /
            900000).toFixed(2)
          that.winddirection = (lastdata.WINDDIRECTION + interv * (nextdata.WINDDIRECTION - lastdata
            .WINDDIRECTION) / 900000).toFixed(2)
          that.formatWindDirection(that.winddirection)
          that.windspeed = (lastdata.WINDSPEED + interv * (nextdata.WINDSPEED - lastdata.WINDSPEED) / 900000)
            .toFixed(2)
          that.humidity = (lastdata.HUMIDITY + interv * (nextdata.HUMIDITY - lastdata.HUMIDITY) / 900000)
            .toFixed(2)

        }, 500);

        // 更新卡片的动画效果
        sheetPos = that.changeAnimationWindDir(that.winddirection, sheetPos);
        that.changeAnimationHomeWindspeed(that.windspeed)
        that.changeAnimationWindspeed(that.windspeed);
        that.changeColorsuntemperature(that.temperature);
        that.changeAnimationYD15(that.yd15);
        that.changeAnimationsoapBubble(that.pressure);
        if (cardTimer) {
          clearInterval(cardTimer)
          cardTimer = null
        }
        cardTimer = setInterval(() => {
          sheetPos = that.changeAnimationWindDir(that.winddirection, sheetPos);
          that.changeAnimationHomeWindspeed(that.windspeed)
          that.changeAnimationWindspeed(that.windspeed);
          that.changeColorsuntemperature(that.temperature);
          that.changeAnimationYD15(that.yd15);
          that.changeAnimationsoapBubble(that.pressure);
        }, 10000)

        // 更新实时数据，并重画表格
        if (realTimer) {
          clearInterval(realTimer)
          realTimer = null
        }
        realTimer = setInterval(() => {
          datanow = Date.now() + 28800000
          let ste = (datanow - new_response.history_final_time * 1000) / 900000
          // console.log('看看差值',ste)
          if (ste >= 1) {
            console.log('准备调用更新')
            postUserData({
                history_final_time: new_response.history_final_time,
                future_final_time: new_response.future_final_time
              })
              .then(response => {
                console.log('成功返回结果', response)
                for (var i = 0; i < 10; i++) {
                  if (response.data[i].future.length !== 0) {
                    console.log('有新的未来数据')
                    //  更新未来数据成功，更新step和new_response
                    that.$totalData.data[i].future.push(...response.data[i].future)
                    that.$totalData.data[i].future_final_time = response.data[i].future_final_time
                    if (i == tid){
                      that.initInterface(that.$totalData.data[tid])
                      // that.initAnalysisCardData()

                    }
                  }
                  if (response.data[i].history.length !== 0) {
                    that.$totalData.data[i].history.push(...response.data[i].history)
                    that.$totalData.data[i].history_final_time = response.data[i].history_final_time
                    if (i == tid) {
                      new_response = that.$totalData.data[tid]
                      that.initAnalysisCardData()
                      that.realYd15 = that.$totalData.data[tid].history[that.$totalData.data[tid].history.length -
                          1]
                        .YD15.toFixed(0)
                      leon.text = that.realYd15 + 'W'

                      that.lastdate = that.$totalData.data[tid].history[that.$totalData.data[tid].history.length -
                          1]
                        .DATATIME
                      that.showDate = that.formatTimestamp(that.lastdate)
                      console.log('更新实时结果', that.realYd15)

                      let newOption = {
                        grid: {
                          left: '15%',
                        },
                        tooltip: {
                          trigger: 'axis',
                          position: function(pt) {
                            return [pt[0], '10%'];
                          }
                        },

                        toolbox: {
                          feature: {
                            dataZoom: {
                              yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                          }
                        },
                        xAxis: {
                          type: 'category',
                          boundaryGap: false,
                          data: that.$totalData.data[tid].future.slice(0, that.$totalData.data[tid].future.length-(3-that.selectedOutTime)*96)
                            .map(function(item) {
                              return that.formatTimestamp(item.DATATIME);
                            })
                        },
                        yAxis: {
                          type: 'value',
                          boundaryGap: [0, '100%']
                        },
                        dataZoom: [{
                            type: 'inside',
                            startValue: that.$totalData.data[tid].future.length - step - 1 - 48,
                            endValue: that.$totalData.data[tid].future.length - step - 1 + 48,
                            minValueSpan: 32,
                            zoomOnMouseWheel: 'ctrl'
                          },
                          {
                            start: 0,
                            end: 10
                          }
                        ],
                        series: [{
                            smooth: false,
                            name: '预测数据',
                            type: 'line',
                            symbol: 'none',
                            sampling: 'lttb',
                            itemStyle: {
                              color: '#4DA2CB'
                            },
                            areaStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: '#67B26F'
                                },
                                {
                                  offset: 1,
                                  color: '#4DA2CB'
                                }
                              ])
                            },
                            data: that.$totalData.data[tid].future.slice(0, that.$totalData.data[tid].future.length-(3-that.selectedOutTime)*96)
                              .map(function(item) {
                                return item.YD15.toFixed(1);
                            }),
                            markPoint: {
                              symbol: 'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjg4NjYzMzYzMTEzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM2NjQiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0xMTUuNyAxMTUuNnYzOTQuOGgzOTQuOHoiIGZpbGw9IiM1Q0NGRUEiIHAtaWQ9IjM2NjUiPjwvcGF0aD48cGF0aCBkPSJNNTEwLjUgNTI3LjhIMTE1LjdjLTkuNiAwLTE3LjQtNy44LTE3LjQtMTcuNFYxMTUuNmMwLTcgNC4yLTEzLjQgMTAuOC0xNi4xIDYuNS0yLjcgMTQtMS4yIDE5IDMuOGwzOTQuOCAzOTQuOGM1IDUgNi41IDEyLjUgMy44IDE5LTIuOCA2LjUtOS4yIDEwLjctMTYuMiAxMC43ek0xMzMuMSA0OTNoMzM1LjNMMTMzLjEgMTU3LjdWNDkzeiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY2NiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMTUuNyA5MDUuMmgzOTQuOFY1MTAuNHoiIGZpbGw9IiM1Q0NGRUEiIHAtaWQ9IjM2NjciPjwvcGF0aD48cGF0aCBkPSJNNTEwLjUgOTIyLjdIMTE1LjdjLTcgMC0xMy40LTQuMi0xNi4xLTEwLjgtMi43LTYuNS0xLjItMTQgMy44LTE5bDM5NC44LTM5NC44YzUtNSAxMi41LTYuNSAxOS0zLjhzMTAuOCA5LjEgMTAuOCAxNi4xdjM5NC44Yy0wLjEgOS43LTcuOSAxNy41LTE3LjUgMTcuNXogbS0zNTIuNy0zNC45aDMzNS4zVjU1Mi41TDE1Ny44IDg4Ny44eiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY2OCI+PC9wYXRoPjxwYXRoIGQ9Ik05MDUuMyA5MDUuMlY1MTAuNEg1MTAuNXoiIGZpbGw9IiM1Q0NGRUEiIHAtaWQ9IjM2NjkiPjwvcGF0aD48cGF0aCBkPSJNOTA1LjMgOTIyLjdjLTQuNSAwLTktMS44LTEyLjMtNS4xTDQ5OC4yIDUyMi43Yy01LTUtNi41LTEyLjUtMy44LTE5czkuMS0xMC44IDE2LjEtMTAuOGgzOTQuOGM5LjYgMCAxNy40IDcuOCAxNy40IDE3LjR2Mzk0LjhjMCA3LTQuMiAxMy40LTEwLjggMTYuMS0yLjEgMS00LjMgMS41LTYuNiAxLjV6TTU1Mi42IDUyNy44bDMzNS4zIDMzNS4zVjUyNy44SDU1Mi42eiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY3MCI+PC9wYXRoPjxwYXRoIGQ9Ik05MDUuMyAxMTUuNkg1MTAuNXYzOTQuOHoiIGZpbGw9IiM1Q0NGRUEiIHAtaWQ9IjM2NzEiPjwvcGF0aD48cGF0aCBkPSJNNTEwLjUgNTI3LjhjLTIuMiAwLTQuNS0wLjQtNi43LTEuMy02LjUtMi43LTEwLjgtOS4xLTEwLjgtMTYuMVYxMTUuNmMwLTkuNiA3LjgtMTcuNCAxNy40LTE3LjRoMzk0LjhjNyAwIDEzLjQgNC4yIDE2LjEgMTAuOCAyLjcgNi41IDEuMiAxNC0zLjggMTlMNTIyLjggNTIyLjdjLTMuMyAzLjQtNy44IDUuMS0xMi4zIDUuMXpNNTI3LjkgMTMzdjMzNS4zTDg2My4zIDEzM0g1MjcuOXoiIGZpbGw9IiM0QzQ4NDgiIHAtaWQ9IjM2NzIiPjwvcGF0aD48cGF0aCBkPSJNNTEwLjUgMTE1LjZMMzEzLjEgMzEzbDE5Ny40IDE5Ny40eiIgZmlsbD0iIzgwRDRFRSIgcC1pZD0iMzY3MyI+PC9wYXRoPjxwYXRoIGQ9Ik01MTAuNSA1MjcuOGMtNC41IDAtOS0xLjgtMTIuMy01LjFMMzAwLjggMzI1LjNjLTYuOC02LjgtNi44LTE3LjggMC0yNC42bDE5Ny40LTE5Ny40YzUtNSAxMi41LTYuNSAxOS0zLjhzMTAuOCA5LjEgMTAuOCAxNi4xdjM5NC44YzAgNy00LjIgMTMuNC0xMC44IDE2LjEtMi4yIDAuOS00LjUgMS4zLTYuNyAxLjN6TTMzNy43IDMxM0w0OTMgNDY4LjNWMTU3LjdMMzM3LjcgMzEzeiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY3NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMTUuNyA1MTAuNGwxOTcuNCAxOTcuNCAxOTcuNC0xOTcuNHoiIGZpbGw9IiM4MEQ0RUUiIHAtaWQ9IjM2NzUiPjwvcGF0aD48cGF0aCBkPSJNMzEzLjEgNzI1LjJjLTQuNSAwLTguOS0xLjctMTIuMy01LjFMMTAzLjQgNTIyLjdjLTUtNS02LjUtMTIuNS0zLjgtMTlzOS4xLTEwLjggMTYuMS0xMC44aDM5NC44YzcgMCAxMy40IDQuMiAxNi4xIDEwLjggMi43IDYuNSAxLjIgMTQtMy44IDE5TDMyNS40IDcyMC4xYy0zLjQgMy40LTcuOCA1LjEtMTIuMyA1LjF6TTE1Ny44IDUyNy44bDE1NS4zIDE1NS4zIDE1NS4zLTE1NS4zSDE1Ny44eiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY3NiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTAuNSA5MDUuMmwxOTcuNC0xOTcuNC0xOTcuNC0xOTcuNHoiIGZpbGw9IiM4MEQ0RUUiIHAtaWQ9IjM2NzciPjwvcGF0aD48cGF0aCBkPSJNNTEwLjUgOTIyLjdjLTIuMiAwLTQuNS0wLjQtNi43LTEuMy02LjUtMi43LTEwLjgtOS4xLTEwLjgtMTYuMVY1MTAuNGMwLTcgNC4yLTEzLjQgMTAuOC0xNi4xIDYuNS0yLjcgMTQtMS4yIDE5IDMuOGwxOTcuNCAxOTcuNGMzLjMgMy4zIDUuMSA3LjcgNS4xIDEyLjMgMCA0LjYtMS44IDkuMS01LjEgMTIuM0w1MjIuOCA5MTcuNmMtMy4zIDMuMy03LjggNS4xLTEyLjMgNS4xeiBtMTcuNC0zNzAuMnYzMTAuN2wxNTUuMy0xNTUuMy0xNTUuMy0xNTUuNHoiIGZpbGw9IiM0QzQ4NDgiIHAtaWQ9IjM2NzgiPjwvcGF0aD48cGF0aCBkPSJNOTA1LjMgNTEwLjRMNzA3LjkgMzEzIDUxMC41IDUxMC40eiIgZmlsbD0iIzgwRDRFRSIgcC1pZD0iMzY3OSI+PC9wYXRoPjxwYXRoIGQ9Ik05MDUuMyA1MjcuOEg1MTAuNWMtNyAwLTEzLjQtNC4yLTE2LjEtMTAuOC0yLjctNi41LTEuMi0xNCAzLjgtMTlsMTk3LjQtMTk3LjRjNi44LTYuOCAxNy44LTYuOCAyNC42IDBMOTE3LjYgNDk4YzUgNSA2LjUgMTIuNSAzLjggMTktMi43IDYuNi05IDEwLjgtMTYuMSAxMC44ek01NTIuNiA0OTNoMzEwLjdMNzA3LjkgMzM3LjYgNTUyLjYgNDkzeiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY4MCI+PC9wYXRoPjxwYXRoIGQ9Ik01MTAuNSA1MTAuNG0tNzAuMyAwYTcwLjMgNzAuMyAwIDEgMCAxNDAuNiAwIDcwLjMgNzAuMyAwIDEgMC0xNDAuNiAwWiIgZmlsbD0iI0U0NTU0NCIgcC1pZD0iMzY4MSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTAuNSA1OTguMmMtNDguNCAwLTg3LjgtMzkuNC04Ny44LTg3LjhzMzkuNC04Ny44IDg3LjgtODcuOCA4Ny44IDM5LjQgODcuOCA4Ny44LTM5LjQgODcuOC04Ny44IDg3Ljh6IG0wLTE0MC43Yy0yOS4yIDAtNTIuOSAyMy43LTUyLjkgNTIuOXMyMy43IDUyLjkgNTIuOSA1Mi45IDUyLjktMjMuNyA1Mi45LTUyLjktMjMuNy01Mi45LTUyLjktNTIuOXoiIGZpbGw9IiM0QzQ4NDgiIHAtaWQ9IjM2ODIiPjwvcGF0aD48L3N2Zz4=',
                              symbolSize: 30,
                              data: [{
                                coord: [that.formatTimestamp(that.lastdate), lastdata.YD15.toFixed(1)]
                              }]
                            }
                          },
                          {
                            smooth: false,
                            name: '实时数据',
                            type: 'line',
                            symbol: 'none',
                            sampling: 'lttb',
                            itemStyle: {
                              color: 'rgb(255, 70, 131)'
                            },
                            areaStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: 'rgb(255, 158, 68)'
                                },
                                {
                                  offset: 1,
                                  color: 'rgb(255, 70, 131)'
                                }
                              ])
                            },
                            data: that.formatHistory(that.$totalData.data[tid]),
                          }
                          // {
                          //   showSymbol: false,
                          //   name: "预测数据",
                          //   type: "lines",
                          //   polyline: false,
                          //   smooth: false,
                          //   coordinateSystem: "cartesian2d",
                          //   zlevel: 1,
                          //   effect: {
                          //     show: true,
                          //     smooth: true,
                          //     period: 2,
                          //     symbolSize: 3,
                          //     trailLength: 0.5,
                          //   },
                          //   lineStyle: {
                          //     color: "#00ffff",
                          //     width: 1,
                          //     opacity: 0,
                          //     curveness: 0,
                          //     cap: "round",
                          //   },
                          //   data: that.formatCoord(that.$totalData.data[tid])
                          // }
                        ]
                      }
                      myChart.setOption(newOption);
                      console.log('画图结束')
                    }
                  }
                }

              })
          }
        }, 10000)

        // 画图部分
        option = {
          grid: {
            left: '15%',
          },
          tooltip: {
            trigger: 'axis',
            position: function(pt) {
              return [pt[0], '10%'];
            }
          },

          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: new_response.future.slice(0, new_response.future.length-(3-that.selectedOutTime)*96)
              .map(function(item) {
                return that.formatTimestamp(item.DATATIME);
              })
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
          },
          dataZoom: [{
              type: 'inside',
              startValue: new_response.future.length - step - 1 - 48,
              endValue: new_response.future.length - step - 1 + 48,
              minValueSpan: 32,
              zoomOnMouseWheel: 'ctrl'
            },
            {
              start: 0,
              end: 10
            }
          ],
          series: [{
              smooth: false,
              name: '预测数据',
              type: 'line',
              symbol: 'none',
              sampling: 'lttb',
              itemStyle: {
                color: '#4DA2CB'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#67B26F'
                  },
                  {
                    offset: 1,
                    color: '#4DA2CB'
                  }
                ])
              },
              data:  new_response.future.slice(0, new_response.future.length-(3-that.selectedOutTime)*96)
                .map(function(item) {
                  return item.YD15.toFixed(1);
                }),
              markPoint: {
                symbol: 'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjg4NjYzMzYzMTEzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM2NjQiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0xMTUuNyAxMTUuNnYzOTQuOGgzOTQuOHoiIGZpbGw9IiM1Q0NGRUEiIHAtaWQ9IjM2NjUiPjwvcGF0aD48cGF0aCBkPSJNNTEwLjUgNTI3LjhIMTE1LjdjLTkuNiAwLTE3LjQtNy44LTE3LjQtMTcuNFYxMTUuNmMwLTcgNC4yLTEzLjQgMTAuOC0xNi4xIDYuNS0yLjcgMTQtMS4yIDE5IDMuOGwzOTQuOCAzOTQuOGM1IDUgNi41IDEyLjUgMy44IDE5LTIuOCA2LjUtOS4yIDEwLjctMTYuMiAxMC43ek0xMzMuMSA0OTNoMzM1LjNMMTMzLjEgMTU3LjdWNDkzeiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY2NiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMTUuNyA5MDUuMmgzOTQuOFY1MTAuNHoiIGZpbGw9IiM1Q0NGRUEiIHAtaWQ9IjM2NjciPjwvcGF0aD48cGF0aCBkPSJNNTEwLjUgOTIyLjdIMTE1LjdjLTcgMC0xMy40LTQuMi0xNi4xLTEwLjgtMi43LTYuNS0xLjItMTQgMy44LTE5bDM5NC44LTM5NC44YzUtNSAxMi41LTYuNSAxOS0zLjhzMTAuOCA5LjEgMTAuOCAxNi4xdjM5NC44Yy0wLjEgOS43LTcuOSAxNy41LTE3LjUgMTcuNXogbS0zNTIuNy0zNC45aDMzNS4zVjU1Mi41TDE1Ny44IDg4Ny44eiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY2OCI+PC9wYXRoPjxwYXRoIGQ9Ik05MDUuMyA5MDUuMlY1MTAuNEg1MTAuNXoiIGZpbGw9IiM1Q0NGRUEiIHAtaWQ9IjM2NjkiPjwvcGF0aD48cGF0aCBkPSJNOTA1LjMgOTIyLjdjLTQuNSAwLTktMS44LTEyLjMtNS4xTDQ5OC4yIDUyMi43Yy01LTUtNi41LTEyLjUtMy44LTE5czkuMS0xMC44IDE2LjEtMTAuOGgzOTQuOGM5LjYgMCAxNy40IDcuOCAxNy40IDE3LjR2Mzk0LjhjMCA3LTQuMiAxMy40LTEwLjggMTYuMS0yLjEgMS00LjMgMS41LTYuNiAxLjV6TTU1Mi42IDUyNy44bDMzNS4zIDMzNS4zVjUyNy44SDU1Mi42eiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY3MCI+PC9wYXRoPjxwYXRoIGQ9Ik05MDUuMyAxMTUuNkg1MTAuNXYzOTQuOHoiIGZpbGw9IiM1Q0NGRUEiIHAtaWQ9IjM2NzEiPjwvcGF0aD48cGF0aCBkPSJNNTEwLjUgNTI3LjhjLTIuMiAwLTQuNS0wLjQtNi43LTEuMy02LjUtMi43LTEwLjgtOS4xLTEwLjgtMTYuMVYxMTUuNmMwLTkuNiA3LjgtMTcuNCAxNy40LTE3LjRoMzk0LjhjNyAwIDEzLjQgNC4yIDE2LjEgMTAuOCAyLjcgNi41IDEuMiAxNC0zLjggMTlMNTIyLjggNTIyLjdjLTMuMyAzLjQtNy44IDUuMS0xMi4zIDUuMXpNNTI3LjkgMTMzdjMzNS4zTDg2My4zIDEzM0g1MjcuOXoiIGZpbGw9IiM0QzQ4NDgiIHAtaWQ9IjM2NzIiPjwvcGF0aD48cGF0aCBkPSJNNTEwLjUgMTE1LjZMMzEzLjEgMzEzbDE5Ny40IDE5Ny40eiIgZmlsbD0iIzgwRDRFRSIgcC1pZD0iMzY3MyI+PC9wYXRoPjxwYXRoIGQ9Ik01MTAuNSA1MjcuOGMtNC41IDAtOS0xLjgtMTIuMy01LjFMMzAwLjggMzI1LjNjLTYuOC02LjgtNi44LTE3LjggMC0yNC42bDE5Ny40LTE5Ny40YzUtNSAxMi41LTYuNSAxOS0zLjhzMTAuOCA5LjEgMTAuOCAxNi4xdjM5NC44YzAgNy00LjIgMTMuNC0xMC44IDE2LjEtMi4yIDAuOS00LjUgMS4zLTYuNyAxLjN6TTMzNy43IDMxM0w0OTMgNDY4LjNWMTU3LjdMMzM3LjcgMzEzeiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY3NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMTUuNyA1MTAuNGwxOTcuNCAxOTcuNCAxOTcuNC0xOTcuNHoiIGZpbGw9IiM4MEQ0RUUiIHAtaWQ9IjM2NzUiPjwvcGF0aD48cGF0aCBkPSJNMzEzLjEgNzI1LjJjLTQuNSAwLTguOS0xLjctMTIuMy01LjFMMTAzLjQgNTIyLjdjLTUtNS02LjUtMTIuNS0zLjgtMTlzOS4xLTEwLjggMTYuMS0xMC44aDM5NC44YzcgMCAxMy40IDQuMiAxNi4xIDEwLjggMi43IDYuNSAxLjIgMTQtMy44IDE5TDMyNS40IDcyMC4xYy0zLjQgMy40LTcuOCA1LjEtMTIuMyA1LjF6TTE1Ny44IDUyNy44bDE1NS4zIDE1NS4zIDE1NS4zLTE1NS4zSDE1Ny44eiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY3NiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTAuNSA5MDUuMmwxOTcuNC0xOTcuNC0xOTcuNC0xOTcuNHoiIGZpbGw9IiM4MEQ0RUUiIHAtaWQ9IjM2NzciPjwvcGF0aD48cGF0aCBkPSJNNTEwLjUgOTIyLjdjLTIuMiAwLTQuNS0wLjQtNi43LTEuMy02LjUtMi43LTEwLjgtOS4xLTEwLjgtMTYuMVY1MTAuNGMwLTcgNC4yLTEzLjQgMTAuOC0xNi4xIDYuNS0yLjcgMTQtMS4yIDE5IDMuOGwxOTcuNCAxOTcuNGMzLjMgMy4zIDUuMSA3LjcgNS4xIDEyLjMgMCA0LjYtMS44IDkuMS01LjEgMTIuM0w1MjIuOCA5MTcuNmMtMy4zIDMuMy03LjggNS4xLTEyLjMgNS4xeiBtMTcuNC0zNzAuMnYzMTAuN2wxNTUuMy0xNTUuMy0xNTUuMy0xNTUuNHoiIGZpbGw9IiM0QzQ4NDgiIHAtaWQ9IjM2NzgiPjwvcGF0aD48cGF0aCBkPSJNOTA1LjMgNTEwLjRMNzA3LjkgMzEzIDUxMC41IDUxMC40eiIgZmlsbD0iIzgwRDRFRSIgcC1pZD0iMzY3OSI+PC9wYXRoPjxwYXRoIGQ9Ik05MDUuMyA1MjcuOEg1MTAuNWMtNyAwLTEzLjQtNC4yLTE2LjEtMTAuOC0yLjctNi41LTEuMi0xNCAzLjgtMTlsMTk3LjQtMTk3LjRjNi44LTYuOCAxNy44LTYuOCAyNC42IDBMOTE3LjYgNDk4YzUgNSA2LjUgMTIuNSAzLjggMTktMi43IDYuNi05IDEwLjgtMTYuMSAxMC44ek01NTIuNiA0OTNoMzEwLjdMNzA3LjkgMzM3LjYgNTUyLjYgNDkzeiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY4MCI+PC9wYXRoPjxwYXRoIGQ9Ik01MTAuNSA1MTAuNG0tNzAuMyAwYTcwLjMgNzAuMyAwIDEgMCAxNDAuNiAwIDcwLjMgNzAuMyAwIDEgMC0xNDAuNiAwWiIgZmlsbD0iI0U0NTU0NCIgcC1pZD0iMzY4MSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTAuNSA1OTguMmMtNDguNCAwLTg3LjgtMzkuNC04Ny44LTg3LjhzMzkuNC04Ny44IDg3LjgtODcuOCA4Ny44IDM5LjQgODcuOCA4Ny44LTM5LjQgODcuOC04Ny44IDg3Ljh6IG0wLTE0MC43Yy0yOS4yIDAtNTIuOSAyMy43LTUyLjkgNTIuOXMyMy43IDUyLjkgNTIuOSA1Mi45IDUyLjktMjMuNyA1Mi45LTUyLjktMjMuNy01Mi45LTUyLjktNTIuOXoiIGZpbGw9IiM0QzQ4NDgiIHAtaWQ9IjM2ODIiPjwvcGF0aD48L3N2Zz4=',
                symbolSize: 30,
                data: [{
                  coord: [that.formatTimestamp(that.lastdate), lastdata.YD15.toFixed(1)]
                }]
              }
            },
            {
              smooth: false,
              name: '实时数据',
              type: 'line',
              symbol: 'none',
              sampling: 'lttb',
              itemStyle: {
                color: 'rgb(255, 70, 131)'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                  }
                ])
              },
              data: that.formatHistory(new_response),
            }
            // {
            //   showSymbol: false,
            //   name: "预测数据",
            //   type: "lines",
            //   polyline: false,
            //   smooth: false,
            //   coordinateSystem: "cartesian2d",
            //   zlevel: 1,
            //   effect: {
            //     show: true,
            //     smooth: true,
            //     period: 2,
            //     symbolSize: 3,
            //     trailLength: 0.5,
            //   },
            //   lineStyle: {
            //     color: "#00ffff",
            //     width: 1,
            //     opacity: 0,
            //     curveness: 0,
            //     cap: "round",
            //   },
            //   data: that.formatCoord(new_response)
            // }
          ]
        };

        myChart.setOption(option, true);
        window.onresize = () => {
          myChart.resize();
        };
      },

      selectedTypeChange() {
        this.turbid = this.selectedType
        this.initInterface(this.$totalData)
      },

      selectedTimeChange() {
        this.initAnalysisCardData()
      },

      selectedInTimeChange() {
        that.loading = true
        // setTimeout(() => {
        getEndpointData({in_time: that.selectedInTime})
        .then(response => {
          Vue.prototype.$totalData = response
          Vue.prototype.$selectedInTime = that.selectedInTime
          // 处理响应数据
          that.initInterface(response)
        })
        // }, 1000)
      },

      selectedOutTimeChange() {
        let lastdata = new_response.future[new_response.future.length - step - 1]
        let nextdata = new_response.future[new_response.future.length - step]
        console.log('调用OutTimeChange', that.selectedOutTime)
        that.loading = true
        let nOption = {
          grid: {
            left: '15%',
          },
          tooltip: {
            trigger: 'axis',
            position: function(pt) {
              return [pt[0], '10%'];
            }
          },

          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: that.$totalData.data[that.turbid].future.slice(0, that.$totalData.data[that.turbid].future.length-(3-that.selectedOutTime)*96)
              .map(function(item) {
                return that.formatTimestamp(item.DATATIME);
              })
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
          },
          dataZoom: [{
              type: 'inside',
              startValue: that.$totalData.data[that.turbid].future.length - step - 1 - 48,
              endValue: that.$totalData.data[that.turbid].future.length - step - 1 + 48,
              minValueSpan: 32,
              zoomOnMouseWheel: 'ctrl'
            },
            {
              start: 0,
              end: 10
            }
          ],
          series: [{
              smooth: false,
              name: '预测数据',
              type: 'line',
              symbol: 'none',
              sampling: 'lttb',
              itemStyle: {
                color: '#4DA2CB'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#67B26F'
                  },
                  {
                    offset: 1,
                    color: '#4DA2CB'
                  }
                ])
              },
              data: that.$totalData.data[that.turbid].future.slice(0, that.$totalData.data[that.turbid].future.length-(3-that.selectedOutTime)*96)
                .map(function(item) {
                  return item.YD15.toFixed(1);
              }),
              markPoint: {
                symbol: 'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjg4NjYzMzYzMTEzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM2NjQiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0xMTUuNyAxMTUuNnYzOTQuOGgzOTQuOHoiIGZpbGw9IiM1Q0NGRUEiIHAtaWQ9IjM2NjUiPjwvcGF0aD48cGF0aCBkPSJNNTEwLjUgNTI3LjhIMTE1LjdjLTkuNiAwLTE3LjQtNy44LTE3LjQtMTcuNFYxMTUuNmMwLTcgNC4yLTEzLjQgMTAuOC0xNi4xIDYuNS0yLjcgMTQtMS4yIDE5IDMuOGwzOTQuOCAzOTQuOGM1IDUgNi41IDEyLjUgMy44IDE5LTIuOCA2LjUtOS4yIDEwLjctMTYuMiAxMC43ek0xMzMuMSA0OTNoMzM1LjNMMTMzLjEgMTU3LjdWNDkzeiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY2NiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMTUuNyA5MDUuMmgzOTQuOFY1MTAuNHoiIGZpbGw9IiM1Q0NGRUEiIHAtaWQ9IjM2NjciPjwvcGF0aD48cGF0aCBkPSJNNTEwLjUgOTIyLjdIMTE1LjdjLTcgMC0xMy40LTQuMi0xNi4xLTEwLjgtMi43LTYuNS0xLjItMTQgMy44LTE5bDM5NC44LTM5NC44YzUtNSAxMi41LTYuNSAxOS0zLjhzMTAuOCA5LjEgMTAuOCAxNi4xdjM5NC44Yy0wLjEgOS43LTcuOSAxNy41LTE3LjUgMTcuNXogbS0zNTIuNy0zNC45aDMzNS4zVjU1Mi41TDE1Ny44IDg4Ny44eiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY2OCI+PC9wYXRoPjxwYXRoIGQ9Ik05MDUuMyA5MDUuMlY1MTAuNEg1MTAuNXoiIGZpbGw9IiM1Q0NGRUEiIHAtaWQ9IjM2NjkiPjwvcGF0aD48cGF0aCBkPSJNOTA1LjMgOTIyLjdjLTQuNSAwLTktMS44LTEyLjMtNS4xTDQ5OC4yIDUyMi43Yy01LTUtNi41LTEyLjUtMy44LTE5czkuMS0xMC44IDE2LjEtMTAuOGgzOTQuOGM5LjYgMCAxNy40IDcuOCAxNy40IDE3LjR2Mzk0LjhjMCA3LTQuMiAxMy40LTEwLjggMTYuMS0yLjEgMS00LjMgMS41LTYuNiAxLjV6TTU1Mi42IDUyNy44bDMzNS4zIDMzNS4zVjUyNy44SDU1Mi42eiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY3MCI+PC9wYXRoPjxwYXRoIGQ9Ik05MDUuMyAxMTUuNkg1MTAuNXYzOTQuOHoiIGZpbGw9IiM1Q0NGRUEiIHAtaWQ9IjM2NzEiPjwvcGF0aD48cGF0aCBkPSJNNTEwLjUgNTI3LjhjLTIuMiAwLTQuNS0wLjQtNi43LTEuMy02LjUtMi43LTEwLjgtOS4xLTEwLjgtMTYuMVYxMTUuNmMwLTkuNiA3LjgtMTcuNCAxNy40LTE3LjRoMzk0LjhjNyAwIDEzLjQgNC4yIDE2LjEgMTAuOCAyLjcgNi41IDEuMiAxNC0zLjggMTlMNTIyLjggNTIyLjdjLTMuMyAzLjQtNy44IDUuMS0xMi4zIDUuMXpNNTI3LjkgMTMzdjMzNS4zTDg2My4zIDEzM0g1MjcuOXoiIGZpbGw9IiM0QzQ4NDgiIHAtaWQ9IjM2NzIiPjwvcGF0aD48cGF0aCBkPSJNNTEwLjUgMTE1LjZMMzEzLjEgMzEzbDE5Ny40IDE5Ny40eiIgZmlsbD0iIzgwRDRFRSIgcC1pZD0iMzY3MyI+PC9wYXRoPjxwYXRoIGQ9Ik01MTAuNSA1MjcuOGMtNC41IDAtOS0xLjgtMTIuMy01LjFMMzAwLjggMzI1LjNjLTYuOC02LjgtNi44LTE3LjggMC0yNC42bDE5Ny40LTE5Ny40YzUtNSAxMi41LTYuNSAxOS0zLjhzMTAuOCA5LjEgMTAuOCAxNi4xdjM5NC44YzAgNy00LjIgMTMuNC0xMC44IDE2LjEtMi4yIDAuOS00LjUgMS4zLTYuNyAxLjN6TTMzNy43IDMxM0w0OTMgNDY4LjNWMTU3LjdMMzM3LjcgMzEzeiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY3NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMTUuNyA1MTAuNGwxOTcuNCAxOTcuNCAxOTcuNC0xOTcuNHoiIGZpbGw9IiM4MEQ0RUUiIHAtaWQ9IjM2NzUiPjwvcGF0aD48cGF0aCBkPSJNMzEzLjEgNzI1LjJjLTQuNSAwLTguOS0xLjctMTIuMy01LjFMMTAzLjQgNTIyLjdjLTUtNS02LjUtMTIuNS0zLjgtMTlzOS4xLTEwLjggMTYuMS0xMC44aDM5NC44YzcgMCAxMy40IDQuMiAxNi4xIDEwLjggMi43IDYuNSAxLjIgMTQtMy44IDE5TDMyNS40IDcyMC4xYy0zLjQgMy40LTcuOCA1LjEtMTIuMyA1LjF6TTE1Ny44IDUyNy44bDE1NS4zIDE1NS4zIDE1NS4zLTE1NS4zSDE1Ny44eiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY3NiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTAuNSA5MDUuMmwxOTcuNC0xOTcuNC0xOTcuNC0xOTcuNHoiIGZpbGw9IiM4MEQ0RUUiIHAtaWQ9IjM2NzciPjwvcGF0aD48cGF0aCBkPSJNNTEwLjUgOTIyLjdjLTIuMiAwLTQuNS0wLjQtNi43LTEuMy02LjUtMi43LTEwLjgtOS4xLTEwLjgtMTYuMVY1MTAuNGMwLTcgNC4yLTEzLjQgMTAuOC0xNi4xIDYuNS0yLjcgMTQtMS4yIDE5IDMuOGwxOTcuNCAxOTcuNGMzLjMgMy4zIDUuMSA3LjcgNS4xIDEyLjMgMCA0LjYtMS44IDkuMS01LjEgMTIuM0w1MjIuOCA5MTcuNmMtMy4zIDMuMy03LjggNS4xLTEyLjMgNS4xeiBtMTcuNC0zNzAuMnYzMTAuN2wxNTUuMy0xNTUuMy0xNTUuMy0xNTUuNHoiIGZpbGw9IiM0QzQ4NDgiIHAtaWQ9IjM2NzgiPjwvcGF0aD48cGF0aCBkPSJNOTA1LjMgNTEwLjRMNzA3LjkgMzEzIDUxMC41IDUxMC40eiIgZmlsbD0iIzgwRDRFRSIgcC1pZD0iMzY3OSI+PC9wYXRoPjxwYXRoIGQ9Ik05MDUuMyA1MjcuOEg1MTAuNWMtNyAwLTEzLjQtNC4yLTE2LjEtMTAuOC0yLjctNi41LTEuMi0xNCAzLjgtMTlsMTk3LjQtMTk3LjRjNi44LTYuOCAxNy44LTYuOCAyNC42IDBMOTE3LjYgNDk4YzUgNSA2LjUgMTIuNSAzLjggMTktMi43IDYuNi05IDEwLjgtMTYuMSAxMC44ek01NTIuNiA0OTNoMzEwLjdMNzA3LjkgMzM3LjYgNTUyLjYgNDkzeiIgZmlsbD0iIzRDNDg0OCIgcC1pZD0iMzY4MCI+PC9wYXRoPjxwYXRoIGQ9Ik01MTAuNSA1MTAuNG0tNzAuMyAwYTcwLjMgNzAuMyAwIDEgMCAxNDAuNiAwIDcwLjMgNzAuMyAwIDEgMC0xNDAuNiAwWiIgZmlsbD0iI0U0NTU0NCIgcC1pZD0iMzY4MSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTAuNSA1OTguMmMtNDguNCAwLTg3LjgtMzkuNC04Ny44LTg3LjhzMzkuNC04Ny44IDg3LjgtODcuOCA4Ny44IDM5LjQgODcuOCA4Ny44LTM5LjQgODcuOC04Ny44IDg3Ljh6IG0wLTE0MC43Yy0yOS4yIDAtNTIuOSAyMy43LTUyLjkgNTIuOXMyMy43IDUyLjkgNTIuOSA1Mi45IDUyLjktMjMuNyA1Mi45LTUyLjktMjMuNy01Mi45LTUyLjktNTIuOXoiIGZpbGw9IiM0QzQ4NDgiIHAtaWQ9IjM2ODIiPjwvcGF0aD48L3N2Zz4=',
                symbolSize: 30,
                data: [{
                  coord: [that.formatTimestamp(that.lastdate), lastdata.YD15.toFixed(1)]
                }]
              }
            },
            {
              smooth: false,
              name: '实时数据',
              type: 'line',
              symbol: 'none',
              sampling: 'lttb',
              itemStyle: {
                color: 'rgb(255, 70, 131)'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                  }
                ])
              },
              data: that.formatHistory(that.$totalData.data[that.turbid]),
            }
          ]
        }
        setTimeout(()=>{
          myChart.setOption(nOption);
          that.loading = false
        }, 1000)

      },

      initLeon() {

        let container, loader, resource;
        let leafs = [],
          flowers = [];
        let controll;
        const pixelRatio = 2;
        let isDown = false,
          moveX = 0,
          moveY = 0,
          offsetX = 0,
          offsetY = 0;
        let canvas, ctx;
        let renderer, stage;
        let sw = document.getElementById('text-container').clientWidth;
        let sh = document.getElementById('text-container').clientHeight;
        const tintLeaf = [
          0xFFFFFF,
          0xFFFF00,
          0xccff00,
          0x00ff1e,
          0xffb300,
          0xa2ff00
        ];
        const tintFlower = [
          0xFFFFFF,
          0xffeea1,
          0xffa1a1,
          0xeca1ff,
          0xa1dbff,
          0xffa1d6,
          0xd2ffa1,
        ];

        function pixiResize() {
          sw = document.getElementById('text-container').clientWidth;
          sh = document.getElementById('text-container').clientHeight;
          renderer.resize(sw, sh);
        }

        function getSize(size) {
          let ratio = Math.sqrt(sw * sw + sh * sh) / 1800;
          if (ratio > 1) ratio = 1;
          else if (ratio < 0.5) ratio = 0.5;
          return size * ratio;
        }

        function init() {
          console.log('调用gen0')
          renderer = new PIXI.Renderer({
            width: sw,
            height: sh,
            antialias: true,
            transparent: true,
            autoDensity: true,
            resolution: pixelRatio, //window.devicePixelRatio > 1 ? 2 : 1,
            powerPreference: "high-performance",
          });
          console.log('调用gen')

          document.getElementById('text-container').appendChild(renderer.view);
          stage = new PIXI.Container();

          window.addEventListener('resize', pixiResize, false);
          pixiResize();


          container = new PIXI.Container();
          stage.addChild(container);
          console.log('添加完成')
          loader = new PIXI.Loader();
          loader.add('branch_long',
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAAJCAIAAAAgglDSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0MzN0RFMzZBNzhGMTFFOUEzQzM5OTFENjc2OEY5RTEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0MzN0RFMzVBNzhGMTFFOUEzQzM5OTFENjc2OEY5RTEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQTlGMzk4M0E0NjIxMUU5QUEzQzk5Qzc2QTExMjJDOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQTlGMzk4NEE0NjIxMUU5QUEzQzk5Qzc2QTExMjJDOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhxDqmEAAAHNSURBVHja7FhbbgIxDPQgfipValF7jN6h9z/VtOwmjuPHAlKrRYh8QeKMx87YCUC+vmXnARHKc+w3DnfA4amAvWrvjkTwxyE9x621d3i8kB61Xv9vHOXldXFEIbpTdt8bHzYOA8GMWUjM4zxvNUsDie2rrAZmFylAyY3sDw/49QncMolRWO8Ki8aENm+caQdfE6oyX+mZtYkRDXkuCDH8UBIDMAQyGx/l7dQW/PusB9ncs4EyladBgEm9WlqdxRTDxExzxtbQcQOmGSh4BiiBjNJzxFatWPuG3D3CVAs3fIk5c/NVXZ/RbNJm/mrZ+FSBz6fbHAatTU4VRCP67QSnz1AHjjrrlzxEqkqKiUihUgRe/TsCdZdiscoCNq2YKMOqz1WJQn15QXKl58K/opsy06ZsTmK5Dt4/hoJgTPPcZupughWPM7qWCWbtK9qikz6ZEqUPUDAKxV1hafNjL+tBLEuxFr160lafisolZ1w9OofRrqklWOjBOfDghr8/WfROMJX44DEOV3cNtut1YFhbRLp58ZMuH4orcsmgbKabfxxUuzY6xDzvGPo8SoLjGrgm2isiZu9STafpgrt2GWjoEaQ1xMuvTHeC4I8AAwDyQDA21ifD6wAAAABJRU5ErkJggg=='
            )
            .add('branch_circle',
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjUwQTVDQTVBNzhGMTFFOUEzQzM5OTFENjc2OEY5RTEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjUwQTVDQTRBNzhGMTFFOUEzQzM5OTFENjc2OEY5RTEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNjJENjYyRTk1QTgxMUU5QUY2Q0UyREUwOTIyMDU0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNjJENjYyRjk1QTgxMUU5QUY2Q0UyREUwOTIyMDU0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr5zXgIAABazSURBVHja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'
            )
            .add('flower1',
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAewAAAHuCAYAAABd4j9rAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDg3MEY2RkY5NTk0MTFFOUIxNzdGN0NBQzVCM0NBRjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDg3MEY3MDA5NTk0MTFFOUIxNzdGN0NBQzVCM0NBRjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowODcwRjZGRDk1OTQxMUU5QjE3N0Y3Q0FDNUIzQ0FGOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowODcwRjZGRTk1OTQxMUU5QjE3N0Y3Q0FDNUIzQ0FGOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkDX0RwAAFZJSURBVHja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'
            )
            .add('flower2',
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAewAAAHuCAYAAABd4j9rAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTA5NTZENjg5NTk2MTFFOUIxNzdGN0NBQzVCM0NBRjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTA5NTZENjk5NTk2MTFFOUIxNzdGN0NBQzVCM0NBRjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowODcwRjcwMTk1OTQxMUU5QjE3N0Y3Q0FDNUIzQ0FGOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowODcwRjcwMjk1OTQxMUU5QjE3N0Y3Q0FDNUIzQ0FGOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv72PFQAAF7kSURBVHja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'
            )
            .add('flower3',
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAekAAAHICAYAAABqPhIEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjQ0RDI5RjQ5NTU0MTFFOUFGNkNFMkRFMDkyMjA1NDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjQ0RDI5RjM5NTU0MTFFOUFGNkNFMkRFMDkyMjA1NDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDk1NkQ2ODk1OTYxMUU5QjE3N0Y3Q0FDNUIzQ0FGOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MDk1NkQ2OTk1OTYxMUU5QjE3N0Y3Q0FDNUIzQ0FGOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpizkusAAHJoSURBVHja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'
            )
            .add('leaf1',
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAFgCAYAAAA1u9JXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTA5NTZENkM5NTk2MTFFOUIxNzdGN0NBQzVCM0NBRjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTA5NTZENkQ5NTk2MTFFOUIxNzdGN0NBQzVCM0NBRjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDk1NkQ2QTk1OTYxMUU5QjE3N0Y3Q0FDNUIzQ0FGOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MDk1NkQ2Qjk1OTYxMUU5QjE3N0Y3Q0FDNUIzQ0FGOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqvw3wEAABn4SURBVHja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'
            )
            .add('leaf2',
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAE6CAYAAAD+2MfUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTA5NTZENzA5NTk2MTFFOUIxNzdGN0NBQzVCM0NBRjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTA5NTZENzE5NTk2MTFFOUIxNzdGN0NBQzVCM0NBRjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDk1NkQ2RTk1OTYxMUU5QjE3N0Y3Q0FDNUIzQ0FGOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MDk1NkQ2Rjk1OTYxMUU5QjE3N0Y3Q0FDNUIzQ0FGOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpzPn+EAAA/RSURBVHja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'
            );
          // loader.add('branch_long', '../assets/leon/data/branch_long.png')
          //   .add('branch_circle', '../assets/leon/data/branch_circle.png')
          //   .add('flower1', '../assets/leon/data/flower1.png')
          //   .add('flower2', '../assets/leon/data/flower2.png')
          //   .add('flower3', '../assets/leon/data/flower3.png')
          //   .add('leaf1', '../assets/leon/data/leaf1.png')
          //   .add('leaf2', '../assets/leon/data/leaf2.png');

          loader.load((loader, resources) => {
            resource = resources;

            flowers.push('flower1');
            flowers.push('flower2');
            flowers.push('flower3');

            leafs.push('leaf1');
            leafs.push('leaf1');
            leafs.push('leaf2');
            console.log('准备load')
            loaded();
            console.log('load完成')
          });
        }

        function loaded() {

          controll = {
            color: {},
          };
          console.log('看看字体大小', getSize(250))
          let lastVal = that.realYd15
          leon = new LeonSans({
            text: '' + that.realYd15 + 'W',
            size: getSize(250),
            weight: 1,
            pathGap: -1,
            tracking: 0,
            isPath: true
          });
          leon.on('update', (data) => {
            update(data);
          });

          window.addEventListener('resize', resize, false);
          requestAnimationFrame(animate);

        }

        function resize() {
          sw = document.getElementById('text-container').clientWidth;
          sh = document.getElementById('text-container').clientHeight;

          renderer.resize(sw, sh);
        }

        function update() {
          while (container.children[0]) {
            TweenMax.killTweensOf(container.children[0]);
            container.removeChild(container.children[0]);
          }

          let points, saveFlowers = [],
            saveLeafs = [];
          let total = leon.model.data.length;
          let i, j, j_total, d, pos;
          for (i = 0; i < total; i++) {
            d = leon.model.data[i];
            j_total = d.paths.length;
            points = [];
            for (j = 0; j < j_total; j++) {
              pos = d.paths[j];

              if (pos.type == 'a') {
                const dot = new PIXI.Sprite(resource.branch_circle.texture);
                dot.anchor.set(0.5);
                dot.x = pos.x;
                dot.y = pos.y;
                const scale = 0.15 * leon.scale;
                dot.scale.x = dot.scale.y = scale;
                container.addChild(dot);
              } else if (pos.start == 1) {
                if (points.length > 0) {
                  addBranch(points);
                }
                points = [];
                points.push(new PIXI.Point(pos.x, pos.y));
              } else {
                points.push(new PIXI.Point(pos.x, pos.y));
              }

              if (Math.random() > 0.97) {
                saveFlowers.push(pos);
              }

              if (Math.random() > 0.7) {
                saveLeafs.push(pos);
              }
            }

            if (points.length > 0) {
              addBranch(points);
            }
          }

          function addBranch(points) {
            const branch = new PIXI.SimpleRope(resource.branch_long.texture, points);
            container.addChild(branch);
          }

          total = saveLeafs.length;
          for (i = 0; i < total; i++) {
            pos = saveLeafs[i];
            d = leafs[Math.floor(0.5 + (Math.random() * (leafs.length - 1)))];
            const leaf = new PIXI.Sprite(resource[d].texture);
            leaf.anchor.set(0.5, 1);
            leaf.x = pos.x;
            leaf.y = pos.y;
            const scale = 0.1 * (0.2 + Math.random() * (1.2 - 0.2)) * leon.scale;
            leaf.scale.x = leaf.scale.y = 0;
            leaf.rotation = (pos.rotation + (90 * (Math.PI / 180)) * (Math.random() > 0.5 ? 1 : -1)) + (Math.random() *
              (Math.PI / 2) - (Math.PI / 4));
            container.addChild(leaf);
            leaf.tint = tintLeaf[Math.floor(0.5 + (Math.random() * (tintLeaf.length - 1)))];
            TweenMax.to(leaf.scale, 0.8, {
              delay: 0.004 * i,
              x: scale,
              y: scale,
              ease: Power3.easeOut
            });
          }

          total = saveFlowers.length;
          for (i = 0; i < total; i++) {
            pos = saveFlowers[i];
            d = flowers[Math.floor(0.5 + (Math.random() * (flowers.length - 1)))];
            const flower = new PIXI.Sprite(resource[d].texture);
            flower.anchor.set(0.5);
            flower.x = pos.x;
            flower.y = pos.y;
            const scale = 0.04 * (0.6 + Math.random() * (1.2 - 0.6)) * leon.scale;
            flower.scale.x = flower.scale.y = 0;
            flower.rotation = Math.random() * Math.PI * 2;
            container.addChild(flower);
            flower.tint = tintFlower[Math.floor(0.5 + (Math.random() * (tintFlower.length - 1)))];
            TweenMax.to(flower.scale, 0.8, {
              delay: 0.05 * i + 0.6,
              x: scale,
              y: scale,
              ease: Power3.easeOut
            });
          }
        }

        function animate(t) {
          requestAnimationFrame(animate);

          const x = (sw - leon.rect.w) / 2;
          const y = (sh - leon.rect.h) / 2;
          leon.position(x + moveX, y + moveY);

          renderer.render(stage);
        }

        init();
        // window.onload = () => {
        //   console.log('进入onload')
        //   init();
        // };
      },

      initAnalysisCard() {
        let switchCtn = document.querySelector('#switch-cnt')
        let switchC1 = document.querySelector('#switch-c1')
        let switchC2 = document.querySelector('#switch-c2')
        let switchCircle = document.querySelectorAll('.switch-circle')
        let switchBtn = document.querySelectorAll('.switch-button')
        let aContainer = document.querySelector('#analysis-container1')
        let bContainer = document.querySelector('#analysis-container2')

        let getButtons = (e) => e.preventDefault()
        let changeForm = (e) => {
          switchCtn.classList.add('is-gx')
          setTimeout(function() {
            switchCtn.classList.remove('is-gx')
          }, 1500)
          switchCtn.classList.toggle('is-txr')
          switchCircle[0].classList.toggle('is-txr')
          switchCircle[1].classList.toggle('is-txr')

          switchC1.classList.toggle('is-hidden')
          switchC2.classList.toggle('is-hidden')
          aContainer.classList.toggle('is-txl')
          bContainer.classList.toggle('is-txl')
          bContainer.classList.toggle('is-z')
        }


        switchBtn[0].addEventListener('click', changeForm)
        switchBtn[0].addEventListener('click', getButtons)
        switchBtn[1].addEventListener('click', changeForm)
        switchBtn[1].addEventListener('click', getButtons)

      },

      initAnalysisCardData() {

        const time_range = this.selectedTime * 4
        let temp = 0
        let maxTemp = -200000
        if (step < time_range) {
          for (let i = new_response.future.length - time_range; i < new_response.future.length; i++){
            maxTemp = maxTemp > new_response.future[i].YD15 ? maxTemp : new_response.future[i].YD15
            if (i !== new_response.future.length - 1)
              temp += new_response.future[i].YD15 + new_response.future[i+1].YD15
          }
        } else {
          for (let i=new_response.future.length-step-1; i<new_response.future.length-step-1+time_range; i++){
            maxTemp = maxTemp > new_response.future[i].YD15 ? maxTemp : new_response.future[i].YD15
            if (i !== new_response.future.length - 1)
              temp += new_response.future[i].YD15 + new_response.future[i+1].YD15
          }
        }
        this.maxPow = maxTemp
        this.totalEnergy = temp * 450
        this.avgPow = this.totalEnergy / (time_range*900)
        this.totalEnergy /= 3600000
        temp = 0
        maxTemp = -200000

        for (let i = new_response.history.length - time_range; i < new_response.history.length; i++){
          maxTemp = maxTemp > new_response.history[i].YD15 ? maxTemp : new_response.history[i].YD15
          if (i !== new_response.history.length - 1)
            temp += new_response.history[i].YD15 + new_response.history[i+1].YD15
        }
        this.realMaxPow = maxTemp
        this.realTotalEnergy = temp * 450
        this.realAvgPow = this.realTotalEnergy / (time_range*900)
        this.realTotalEnergy /= 3600000
      }
    },

    computed: {},
    created() {

    },
    mounted() {
      that = this;
      this.initLeon()
      this.initAnalysisCard()
      myChart = echarts.init(document.getElementById("linechart"));
      let pannel = document.getElementsByClassName('pannel')[0];
      window.addEventListener('scroll', function() {
        let val = window.scrollY;
        pannel.style.marginBottom = val * 2 + 'px';
      })
      if (typeof this.$selectedInTime !== "undefined") {
        this.selectedInTime = this.$selectedInTime
      }

      if (typeof this.$totalData == "undefined" || this.$totalData == null) {
        getEndpointData({in_time: that.selectedInTime})
          .then(response => {
            Vue.prototype.$totalData = response
            Vue.prototype.$selectedInTime = that.selectedInTime
            // 处理响应数据
            that.initInterface(response)
          }).catch(error => {
            console.error(error);
          });
      } else {
        let res = this.$totalData
        let params = {
          history_final_time: res.data[0].history_final_time,
          future_final_time: res.data[0].future_final_time
        }
        postUserData(params)
          .then(response => {
            for (var i = 0; i < 10; i++) {
              if (response.data[i].future.length !== 0) {
                this.$totalData.data[i].future.push(...response.data[i].future)
                this.$totalData.data[i].future_final_time = response.data[i].future_final_time
              }
              if (response.data[i].history.length !== 0) {
                this.$totalData.data[i].history.push(...response.data[i].history)
                this.$totalData.data[i].history_final_time = response.data[i].history_final_time
              }
            }
            that.initInterface(this.$totalData)
          }).catch(error => {
            console.error(error);
          });
      }
    },
    beforeDestroy() {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
      if (cardTimer) {
        clearInterval(cardTimer)
        cardTimer = null
      }
      if (cardTimer) {
        clearInterval(cardTimer)
        cardTimer = null
      }
    }


  };
</script>
<style>
  .main-content {
    overflow: hidden;
  }

  .card-body {
    overflow: hidden;
  }



  /* ---------------------------黎昊部分----------------------- */
  .pressure-background {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  .soapBubble {
    position: relative;
    z-index: 1;
    left: 20% !important;
    top: 10%;
    width: 100px;
    height: 100px;
    outline: 0 solid rgba(0, 0, 0, .7);
    transition: 1s;
  }

  .soapBubble div {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .bubbleImg {
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, .5);
    transition: 1s;
    background-image:
      url("data:image/svg+xml;utf8, <svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='50' fill='none'/><circle cx='24' cy='24' r='7.5' fill='white' style='filter:blur(.5px)'/><path d='M78 58.4999C69.5 72.4999 56 78.4999 53.5 80.9999C51 83.4999 50 89.9999 59.5 87.4999C69 84.9999 82.5 76.4999 86.5 67.4999C90.5 58.5 86.5 44.5 78 58.4999Z' fill='rgba(255,255,255,.9)' style='filter:blur(0px)'/></svg>"),
      radial-gradient(circle at 70% 96%, white .5%, rgba(255, 255, 200, .4) 2%, transparent 9%),
      radial-gradient(at 30% 20%, white 1%, rgba(255, 255, 200, 1) 2%, transparent 20%, transparent 50%, rgba(0, 200, 200, .3) 73%, rgba(0, 80, 80, .3) 84%),
      radial-gradient(circle at 0% 0%, rgba(255, 0, 255, .7) 2%, transparent 80%);
    background-size: cover;
    box-shadow: 100px 100px 0px rgba(0, 80, 80, .2), 1px 1px 2px rgba(255, 0, 255, .4);
  }

  .moveX {
    animation-name: moveX;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  @keyframes moveX {
    from {
      transform: translateX(-5px);
    }

    to {
      transform: translateX(5px);
    }
  }

  .moveY {
    animation-name: moveY;
    animation-duration: 1.4s;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  @keyframes moveY {
    from {
      transform: translateY(-5px);
    }

    to {
      transform: translateY(5px);
    }
  }

  .deformX {
    animation-name: deformX;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  @keyframes deformX {
    0% {
      transform: none;
    }

    25% {
      transform: scaleX(1.05) skewX(2deg)
    }

    50% {
      transform: none
    }

    75% {
      transform: scaleX(1.05) skewX(-2deg)
    }

    100% {
      transform: none;
    }
  }

  .deformY {
    animation-name: deformY;
    animation-duration: 5s;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  @keyframes deformY {
    0% {
      transform: none;
    }

    25% {
      transform: scaleY(1.05) skewY(2deg)
    }

    50% {
      transform: none
    }

    75% {
      transform: scaleY(1.05) skewY(-2deg)
    }

    100% {
      transform: none;
    }
  }

  /* 分界线 */
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');


  .main-wrapper {
    position: relative;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    height: 300px;
    overflow: hidden;
    display: block;
    /* border: 2px solid #000; */
    z-index: 5;
    margin-top: 1px;
    margin-bottom: 1px;
  }

  .sun {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #000;
    top: 50px;
    left: 270px;
    z-index: 1;
    animation: rotates 10s linear infinite;
  }

  @keyframes rotates {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }

  .sun span {
    position: absolute;
    width: 2px;
    height: 14px;
    background-color: #000;
    top: -18px;
    left: 7px;
    z-index: 1;
    transform-origin: center bottom;
    transform: scaleY(1);
    animation: sun-ray-1 1s linear infinite;
    box-shadow: 4px 4px 0 0 #f1c40f;
  }

  @keyframes sun-ray-1 {

    0%,
    100% {
      transform: scaleY(1);
    }

    50% {
      transform: scaleY(0.6);
    }
  }

  .sun span:nth-child(2) {
    transform: rotate(45deg) scaleY(0.6);
    top: -15px;
    left: 16px;
    animation: sun-ray-2 1s linear infinite;
  }

  @keyframes sun-ray-2 {

    0%,
    100% {
      transform: rotate(45deg) scaleY(0.6);
    }

    50% {
      transform: rotate(45deg) scaleY(1);
    }
  }

  .sun span:nth-child(3) {
    transform: rotate(90deg) scaleY(1);
    top: -5px;
    left: 20px;
    animation: sun-ray-3 1s linear infinite;
  }

  @keyframes sun-ray-3 {

    0%,
    100% {
      transform: rotate(90deg) scaleY(1);
    }

    50% {
      transform: rotate(90deg) scaleY(0.6);
    }
  }

  .sun span:nth-child(4) {
    transform: rotate(135deg) scaleY(0.6);
    top: 3px;
    left: 15px;
    animation: sun-ray-4 1s linear infinite;
  }

  @keyframes sun-ray-4 {

    0%,
    100% {
      transform: rotate(135deg) scaleY(0.6);
    }

    50% {
      transform: rotate(135deg) scaleY(1);
    }
  }

  .sun span:nth-child(5) {
    transform: rotate(180deg) scaleY(1);
    top: 6px;
    left: 7px;
    animation: sun-ray-5 1s linear infinite;
  }

  @keyframes sun-ray-5 {

    0%,
    100% {
      transform: rotate(180deg) scaleY(1);
    }

    50% {
      transform: rotate(180deg) scaleY(0.6);
    }
  }

  .sun span:nth-child(6) {
    transform: rotate(225deg) scaleY(0.6);
    top: 3px;
    left: -2px;
    animation: sun-ray-6 1s linear infinite;
  }

  @keyframes sun-ray-6 {

    0%,
    100% {
      transform: rotate(225deg) scaleY(0.6);
    }

    50% {
      transform: rotate(225deg) scaleY(1);
    }
  }

  .sun span:nth-child(7) {
    transform: rotate(270deg) scaleY(1);
    top: -5px;
    left: -5px;
    animation: sun-ray-7 1s linear infinite;
  }

  @keyframes sun-ray-7 {

    0%,
    100% {
      transform: rotate(270deg) scaleY(1);
    }

    50% {
      transform: rotate(270deg) scaleY(0.6);
    }
  }

  .sun span:nth-child(8) {
    transform: rotate(315deg) scaleY(0.6);
    top: -14px;
    left: -2px;
    animation: sun-ray-8 1s linear infinite;
  }

  @keyframes sun-ray-8 {

    0%,
    100% {
      transform: rotate(315deg) scaleY(0.6);
    }

    50% {
      transform: rotate(315deg) scaleY(1);
    }
  }

  .mountain-1 {
    position: absolute;
    border: 2px solid #08f858;
    width: 14px;
    height: 14px;
    bottom: 37px;
    left: 80px;
    z-index: 1;
    transform: rotate(-45deg);
  }

  .mountain-1:before {
    position: absolute;
    content: '';
    width: 70px;
    height: 2px;
    background-color: #08f858;
    top: -2px;
    left: -72px;
  }

  .mountain-1:after {
    position: absolute;
    content: '';
    height: 14px;
    width: 2px;
    background-color: #08f858;
    top: 10px;
    left: 10px;
    box-shadow: 4px -4px 0 0 #94c6e7;
  }

  .mountain-2 {
    position: absolute;
    border: 2px solid #08f858;
    width: 18px;
    height: 18px;
    bottom: 47px;
    left: 130px;
    z-index: 1;
    transform: rotate(-45deg);
  }

  .mountain-2:before {
    position: absolute;
    content: '';
    width: 40px;
    height: 2px;
    background-color: #08f858;
    top: -2px;
    left: -42px;
  }

  .mountain-2:after {
    position: absolute;
    content: '';
    height: 16px;
    width: 2px;
    background-color: #08f858;
    top: 14px;
    left: 14px;
    box-shadow: 4px -4px 0 0 #94c6e7;
  }

  .mountain-3 {
    position: absolute;
    border: 2px solid #08f858;
    width: 20px;
    height: 20px;
    bottom: 70px;
    left: 198px;
    z-index: 1;
    transform: rotate(-45deg);
  }

  .mountain-3:before {
    position: absolute;
    content: '';
    width: 70px;
    height: 2px;
    background-color: #08f858;
    top: -2px;
    left: -72px;
  }

  .mountain-3:after {
    position: absolute;
    content: '';
    height: 30px;
    width: 2px;
    background-color: #08f858;
    top: 16px;
    left: 16px;
    box-shadow: 4px -12px 0 0 #94c6e7;
  }

  .mountain-4 {
    position: absolute;
    width: 0;
    height: 0;
    bottom: 76px;
    left: 245px;
    z-index: 1;
    transform: rotate(-45deg);
  }

  .mountain-4:before {
    position: absolute;
    content: '';
    width: 15px;
    height: 2px;
    background-color: #08f858;
    top: 0;
    left: -15px;
  }

  .mountain-4:after {
    position: absolute;
    content: '';
    height: 60px;
    width: 2px;
    background-color: #08f858;
    top: 0;
    left: 0;
    box-shadow: -5px 6px 0 0 #94c6e7;
  }

  .mountain-5 {
    position: absolute;
    border: 2px solid #08f858;
    width: 14px;
    height: 14px;
    bottom: 50px;
    left: 290px;
    z-index: 1;
    transform: rotate(-45deg);
  }

  .mountain-5:before {
    position: absolute;
    content: '';
    width: 15px;
    height: 2px;
    background-color: #08f858;
    top: -2px;
    left: -17px;
  }

  .mountain-5:after {
    position: absolute;
    content: '';
    height: 84px;
    width: 2px;
    background-color: #08f858;
    top: 10px;
    left: 10px;
    box-shadow: -5px 6px 0 0 #94c6e7;
  }

  .windmill-pole-wrap {
    position: absolute;
    bottom: -3px;
    left: 130px;
    perspective: 70px;
    z-index: 50;
  }

  .windmill-pole-wrap.back-left {
    left: 50px;
    z-index: 1;
    transform: scale(0.7);
    transform-origin: center bottom;
  }

  .windmill-pole-wrap.right {
    left: auto;
    right: 85px;
    transform: scale(0.85);
    transform-origin: center bottom;
  }

  .windmill-pole {
    position: absolute;
    bottom: 0;
    border: 3px solid #000;
    width: 14px;
    height: 220px;
    left: -7px;
    background-color: #18ddd3;
    transform: rotateX(15deg);
    transform-origin: center bottom;
  }

  .windmill-pole-ellipses {
    position: absolute;
    bottom: 114px;
    left: 130px;
    z-index: 51;
  }

  .windmill-pole-ellipses.back-left {
    left: 50px;
    bottom: 80px;
    z-index: 3;
    transform: scale(0.7);
    transform-origin: center bottom;
  }

  .windmill-pole-ellipses.right {
    left: auto;
    right: 85px;
    bottom: 100px;
    transform: scale(0.85);
    transform-origin: center bottom;
  }

  .windmill-pole-ellipses-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    animation: rotate-ellipses 6s linear infinite;
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    animation-play-state: paused;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
  }

  .windmill-pole-ellipses-wrap {
    position: absolute;
    top: 0;
    left: 0;
    animation: rotate-ellipses 3s linear infinite;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
    -webkit-animation-play-state: running;
    -moz-animation-play-state: running;
    animation-play-state: running;
  }

  .windmill-pole-ellipses-center {
    position: absolute;
    top: -7px;
    left: -7px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #18ddd3;
    border: 2px solid #000;
    z-index: 2;
  }

  .ellipses {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .ellipses span {
    position: absolute;
    top: -70px;
    left: -5px;
    width: 10px;
    height: 70px;
    border-radius: 100%;
    background-color: #18ddd3;
    border: 2px solid #000;
    transform-origin: center bottom;
  }

  .ellipses span:nth-child(2) {
    transform: rotate(120deg);
  }

  .ellipses span:nth-child(3) {
    transform: rotate(240deg);
  }

  .ellipses.delayed span {
    transform: rotate(60deg);
  }

  .ellipses.delayed span:nth-child(2) {
    transform: rotate(180deg);
  }

  .ellipses.delayed span:nth-child(3) {
    transform: rotate(300deg);
  }

  body.slow-wind .windmill-pole-ellipses-wrapper {
    -webkit-animation-play-state: running;
    -moz-animation-play-state: running;
    animation-play-state: running;
  }

  body.slow-wind .windmill-pole-ellipses-wrap {
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    animation-play-state: paused;
  }

  @keyframes rotate-ellipses {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }

  .clouds-wind-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 1200px;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
    z-index: 5;
    animation: moveClouds 15s linear infinite;
    -webkit-animation-play-state: running;
    -moz-animation-play-state: running;
    animation-play-state: running;
  }

  .clouds-wind-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 1200px;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
    animation: moveClouds 12s linear infinite;
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    animation-play-state: paused;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
  }

  @keyframes moveClouds {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-33.333333333333%);
    }
  }

  body.slow-wind .clouds-wind-wrapper {
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    animation-play-state: paused;
  }

  body.slow-wind .clouds-wind-wrap {
    -webkit-animation-play-state: running;
    -moz-animation-play-state: running;
    animation-play-state: running;
  }

  .clouds-wind-section {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
  }

  .clouds-wind-section.snd {
    left: 400px;
  }

  .clouds-wind-section.trd {
    left: 800px;
  }

  .cloud {
    position: absolute;
    top: 50px;
    left: 50px;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
  }

  .cloud span {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    border-color: transparent transparent #000 #000;
    background-color: #fff;
    transform: rotate(45deg);
    z-index: 7;
  }

  .cloud span:nth-child(2) {
    top: -9px;
    left: 10px;
    width: 22px;
    height: 22px;
    border-color: transparent transparent transparent #000;
    z-index: 6;
  }

  .cloud span:nth-child(3) {
    top: -22px;
    left: 20px;
    width: 30px;
    height: 30px;
    border-color: #000 transparent transparent #000;
    box-shadow: 2px -3px 0 0 #3498db;
    z-index: 3;
  }

  .cloud span:nth-child(4) {
    top: 5px;
    left: 10px;
    width: 40px;
    height: 15px;
    border-radius: 0;
    border: none;
    border-bottom: 2px solid #000;
    transform: rotate(0);
    z-index: 6;
  }

  .cloud span:nth-child(5) {
    top: -7px;
    left: 35px;
    width: 27px;
    height: 27px;
    border-color: #000 #000 transparent transparent;
    box-shadow: 2px -3px 0 0 #3498db;
    z-index: 4;
  }

  .cloud.snd {
    top: 100px;
    left: 300px;
  }

  .cloud.trd {
    top: 150px;
    left: 220px;
    transform: rotateY(180deg);
    transform-origin: center center;
  }

  .cloud.trd span {
    box-shadow: -3px 2px 0 0 #3498db;
  }

  .cloud.trd span:nth-child(4) {
    box-shadow: none;
  }

  .cloud.trd span:nth-child(5) {
    box-shadow: none;
  }

  .wind {
    position: absolute;
    top: 90px;
    left: 50px;
  }

  .wind span {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    transform: rotate(45deg);
    border-color: transparent transparent #000 #000;
  }

  .wind span:before {
    position: absolute;
    content: '';
    bottom: 15px;
    right: -38px;
    width: 45px;
    height: 2px;
    background-color: #000;
    transform: rotate(-45deg);
    box-shadow: 4px 4px 0 0 #3498db;
  }

  .wind span:after {
    position: absolute;
    content: '';
    bottom: 40px;
    right: -48px;
    width: 14px;
    height: 2px;
    background-color: #000;
    transform: rotate(-45deg);
    box-shadow: 4px 4px 0 0 #3498db;
  }

  .wind span:nth-child(2) {
    top: 3px;
    left: -16px;
    width: 12px;
    height: 12px;
  }

  .wind span:nth-child(2):after {
    width: 50px;
    bottom: 58px;
    right: -83px;
  }

  .wind span:nth-child(3) {
    top: 18px;
    left: 12px;
    width: 40px;
    height: 2px;
    border: none;
    border-radius: 0;
    background-color: #000;
    transform: rotate(0);
  }

  .wind span:nth-child(3):before {
    width: 10px;
    bottom: auto;
    top: 0;
    left: 50px;
    right: auto;
    transform: rotate(0);
  }

  .wind span:nth-child(3):after {
    width: 30px;
    bottom: auto;
    top: 0;
    left: 70px;
    right: auto;
    transform: rotate(0);
  }

  .wind span:nth-child(4) {
    top: 23px;
    left: 24px;
    width: 10px;
    height: 2px;
    border: none;
    border-radius: 0;
    background-color: #000;
    transform: rotate(0);
  }

  .wind span:nth-child(4):before {
    width: 40px;
    bottom: auto;
    top: 0;
    left: 20px;
    right: auto;
    transform: rotate(0);
  }

  .wind span:nth-child(4):after {
    width: 10px;
    bottom: auto;
    top: 0;
    left: 70px;
    right: auto;
    transform: rotate(0);
  }

  .wind.snd {
    top: 140px;
    left: 260px;
    transform: scale(0.9);
  }

  .wind-small {
    position: absolute;
    top: 0;
    left: 0;
  }

  .wind-small span {
    position: absolute;
    top: 170px;
    left: 32px;
    height: 2px;
    width: 8px;
    background-color: #000;
    box-shadow: 4px 4px 0 0 #3498db;
  }

  .wind-small span:nth-child(2) {
    top: 150px;
    left: 52px;
    width: 16px;
  }

  .wind-small span:nth-child(2):after {
    left: 26px;
    width: 6px;
    height: 2px;
    background-color: #000;
    position: absolute;
    content: '';
    top: 0;
    box-shadow: 4px 4px 0 0 #3498db;
  }

  .wind-small span:nth-child(3) {
    top: 187px;
    left: 102px;
    width: 16px;
  }

  .wind-small span:nth-child(4) {
    top: 180px;
    left: 362px;
    width: 10px;
  }

  .wind-small span:nth-child(5) {
    top: 40px;
    left: 332px;
    width: 20px;
  }

  .wind-small span:nth-child(5):after {
    left: 30px;
    width: 7px;
    height: 2px;
    background-color: #000;
    position: absolute;
    content: '';
    top: 0;
    box-shadow: 4px 4px 0 0 #3498db;
  }

  .wind-small span:nth-child(6) {
    top: 30px;
    left: 122px;
    width: 16px;
  }

  .wind-small span:nth-child(7) {
    top: 70px;
    left: 172px;
    width: 12px;
  }

  .wind-small span:nth-child(8) {
    top: 50px;
    left: 188px;
    width: 8px;
  }

  .wind-small span:nth-child(8):after {
    left: 18px;
    width: 3px;
    height: 2px;
    background-color: #000;
    position: absolute;
    content: '';
    top: 0;
    box-shadow: 4px 4px 0 0 #3498db;
  }

  .tree {
    position: absolute;
    bottom: 0;
    left: 180px;
    z-index: 3;
    transform-origin: center bottom;
    animation: moveTree s linear infinite;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
    -webkit-animation-play-state: running;
    -moz-animation-play-state: running;
    animation-play-state: running;
  }

  .tree-wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    transform-origin: center bottom;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
  }

  @keyframes moveTree {

    0%,
    100% {
      transform: skewX(16deg);
    }

    20% {
      transform: skewX(18deg);
    }

    40% {
      transform: skewX(20deg);
    }

    60% {
      transform: skewX(17deg);
    }

    80% {
      transform: skewX(18deg);
    }
  }

  body.slow-wind .tree-wrap {
    transform: skewX(-10deg);
  }

  body.slow-wind .tree {
    animation-duration: 1.8s;
  }

  .tree span {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 2px;
    height: 8px;
    background-color: #000;
    z-index: 3;
    transform: scale(1.1);
  }

  .tree span:after {
    position: absolute;
    content: '';
    bottom: 100%;
    left: 50%;
    margin-left: -8px;
    width: 16px;
    height: 26px;
    background-color: #0da80d;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    border-color: #000 #000 #000 #000;
  }

  .tree span:before {
    position: absolute;
    content: '';
    bottom: calc(100% + 4px);
    left: 50%;
    margin-left: -4px;
    width: 16px;
    height: 26px;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    border-color: transparent #2ecc71 transparent transparent;
    transform: rotate(-15deg);
  }

  .tree span:nth-child(2) {
    left: 30px;
  }

  .tree span:nth-child(3) {
    left: 160px;
  }

  .tree span:nth-child(4) {
    left: -107px;
  }

  /* 分界线 */
  .windspeed-background {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  .windmill {
    position: absolute;
    left: 26%;
    top: 16%;
  }


  .wheel {
    z-index: 10;
    width: 192px;
    height: 192px;
    position: absolute;
    left: 8px;
    top: 10px;
    animation: spin 1s linear infinite;
    animation-duration: 10s;
  }

  .windwheel {
    position: absolute;
    width: 8px;
    height: 100px;
    background-color: #41155a;
    margin-right: 10px;
    left: 92px;
  }

  .windwheel:before {
    positioN: absolute;
    content: "";
    background-color: #41155a;
    opacity: 0.7;
    width: 15px;
    height: 75px;
    left: 8px;
  }


  .windwheel2 {
    transform: rotate(90deg);
    top: 46px;
    left: 138px;
    z-index: 40;
  }

  .windwheel3 {
    transform: rotate(180deg);
    top: 92px;
  }

  .windwheel4 {
    transform: rotate(-90deg);
    top: 46px;
    left: 46px;
  }

  .windwheel4:after {
    position: absolute;
    content: "";
    background-color: #41155a;
    opacity: 0.7;
    width: 22px;
    height: 22px;
    bottom: -7px;
    left: -7px;
    transform: rotate(45deg);
  }

  /* 分界线 */
  .roof {
    position: absolute;
    z-index: 9;
    left: 52px;
    top: 55px;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 70px solid #df615c;
  }

  .mill {
    position: absolute;
    left: 52px;
    top: 124px;
    width: 100px;
    height: 120px;
    background-color: #93f5dc;
  }

  .mill:after {
    position: absolute;
    content: "";
    background-color: #41155a;
    height: 50px;
    width: 40px;
    bottom: 0;
    left: 28px;
    border-radius: 40% 40% 0 0;
    border-left: 5px solid #edadac;
  }

  .mill:before {
    position: absolute;
    content: "";
    background-color: #41155a;
    height: 40px;
    width: 30px;
    top: 20px;
    left: 32px;
    border-radius: 18px;
    border-left: 5px solid #edadac;
  }


  .house {
    position: absolute;
    width: 80px;
    height: 60px;
    background-color: #6fdff3;
    top: 164px;
    left: 152px;
    border-top: 20px solid #df615c;
  }

  .house:after {
    content: "";
    position: absolute;
    background-color: #41155a;
    width: 20px;
    height: 30px;
    bottom: 0;
    left: 30px;
    border-left: 5px solid #edadac;
  }


  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  .suntemperature-background {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: visible;
  }

  :root {
    --main-color: 248, 227, 83;
    --secondary-color: 255, 210, 31;
    --tertiary-color: 252, 241, 124;
  }

  .suntemperature {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgb(var(--main-color));

  }

  .suntemperature::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: rgb(var(--secondary-color));
    filter: blur(10px);
    z-index: 1;
    animation: inlinesuntemperature 4s ease infinite;
  }

  .suntemperature::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: rgb(var(--tertiary-color));
    z-index: -1;
    box-shadow: 0 0 40px rgb(var(--secondary-color));
    animation: suntemperature 4s ease-in infinite;
  }

  @keyframes inlinesuntemperature {
    0% {
      opacity: 1
    }

    50% {
      opacity: 0.5;
      width: 85px;
      height: 85px;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes suntemperature {
    0% {
      box-shadow: 0 0 120px rgb(var(--secondary-color));
    }

    50% {
      box-shadow: 0 0 50px rgb(var(--secondary-color));
    }

    100% {
      box-shadow: 0 0 120px rgb(var(--secondary-color));
    }
  }

  /* ---------------------------首页面板----------------------- */

  .head-background {
    background: linear-gradient(135deg, #A5D9FE 0%, #4485E3 80%) !important;
    ;
  }

  img {
    user-select: none;
    -webkit-user-drag: none;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1.25s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .lwrapper {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, .6);
    backdrop-filter: blur(20px);
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .lwrapper p {
    color: #0006;
    font-weight: 600;
    font-size: 24px;
    margin: 0;
  }

  .lcontainer {
    position: relative;
    width: 200px;
    height: 200px;
  }
  .lcontainer svg {
    filter: drop-shadow(2px 2px 3px #0002);
    position: absolute;
    top: 50%;
    left: 50%;
    transition: all;
    animation-name: fluffy;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  .lcontainer svg:nth-of-type(1) {
    width: 100%;
    height: 100%;
    transform: translate(-60%, -50%);
  }
  .lcontainer svg:nth-of-type(2) {
    width: 75%;
    height: 75%;
    animation-delay: -0.2s;
    transform: translate(-30%, -30%);
  }
  .lcontainer svg:nth-of-type(3) {
    width: 60%;
    height: 60%;
    animation-delay: -0.4s;
    transform: translate(-100%, -20%);
  }

  @keyframes fluffy {
    0% {
      top: 50%;
    }
    50% {
      top: 44%;
    }
    100% {
      top: 50%;
    }
  }


  .card-title {
    font-size: 1rem !important;
  }
  .sub-title {
    font-size: 1.8rem !important;
  }
  .table-title {
    font-size: 1.5rem !important;
  }
  #text-container {
    background: transparent;
    width: calc(400px + 20vw);
    height: 150px;
  }

  @media screen and (max-aspect-ratio: 9/16) {
    .select-in-time {
      margin-top: 8px;
    }

    .switch-description {
      width: 20vw !important;
    }

    .switch-title {
      width: 20vw !important;
      font-size: 1.5rem !important;
      font-weight: 600 !important;
      letter-spacing: 0 !important;
    }

    .heading-secondary p {
      font-size: 18px !important;
      transform: translateY(10px);
    }

    .result-option {
      font-size: 16px !important;
      padding: 0px 8px !important;
    }

    #text-container {
      transform: scale(0.7);
    }

    .home_sun {
      transform: scale(0.7) translateX(-100px) translateY(-100px);
    }

    .wcontainer {
      transform: scale(0.7);
    }

    .pannel {
      transform: translateY(-100px);
    }
  }

  #time-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: calc(300px + 10vw);
    margin-top: 0.8vw;
  }

  #time-container h2 {
    color: #fff;
    font-size: calc(0.8rem + 0.5vw);
  }

  .pannel {
    margin-right: 5vw;
    margin-top: 8vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .wlogo {
    width: calc(50px + 10vw);
    height: calc(50px + 10vw);
  }

  .select-col {
    width: calc(300px + 10vw);
  }

  .tbanner #text {
    position: relative;
    font-size: calc(3rem + 3vw);
    line-height: 1.2;
    color: #fff;
  }

  .shell {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecf0f3;
    height: 600px;
    min-width: 100%;
    width: 100%;
    border-radius: var(--radius-4);
    /* box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9; */
    overflow: hidden;
  }

  .analysis-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 65%;
    padding: 15px;
    top: 0;
    background-color: #ecf0f3;
    transition: 1.25s;
  }

  .data-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  #analysis-container1 {
    z-index: 100;
    left: 35%;
  }

  .heading-secondary {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 20px;
  }

  .heading-secondary p {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 0;
  }

  .select-time {
    width: 50%;
  }

  .summary-result-options {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 80%;
    gap: 25px;
  }

  .result-option {
    font-size: 18px;
    height: 20%;
    background-color: hsl(0, 100%, 95%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    border-radius: 10px;
    cursor: pointer;
  }

  .result-option-memory {
    background-color: hsl(39, 100%, 95%);
  }

  .result-option-verbal {
    background-color: hsl(166, 100%, 95%);
  }

  .result-option-Visual {
    background-color: hsl(234, 85%, 95%);
  }

  .result-box {
    color: hsl(241, 100%, 89%);
    font-weight: 700;
  }

  .result-box span {
    color: hsl(224, 30%, 27%);
  }

  #analysis-container2 {
    z-index: 0;
    left: 35%;
  }

  .switch-title {
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: 5px;
  }

  .switch-description {
    width: 10vw;
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 1.6;
  }

  .switch {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 35%;
    z-index: 200;
    transition: 1.25s;
    background-color: #ecf0f3;
    box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #d1d9e6;
    overflow: hidden;
  }

  .switch-circle {
    position: absolute;
    width: 400px;
    height: 500px;
    border-radius: 50%;
    background-color: #ecf0f3;
    box-shadow: inset 8px 8px 12px #b8bec7, inset -8px -8px 12px #fff;
    bottom: -60%;
    left: -50%;
    transition: 1.25s;
  }

  .switch-circle-t {
    top: -30%;
    left: 60%;
    width: 300px;
    height: 300px;
  }

  .switch-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 100%;
    padding: 30px 40px;
    transition: 1.25s;
  }

  .switch-button {
    border-radius: 25px;
    width: calc(100px + 40%);
    height: 50px;
    font-size: 14px;
    background-color: #4485E3;
    color: #f9f9f9;
    cursor: pointer;
    border: none;
  }

  .switch-button:hover {
    box-shadow: 6px 6px 10px #d1d9e6, -6px, -6px, 10px #f9f9f9;
    transform: scale(0.98);
    transition: 0.25s;
  }

  .switch-button:active,
  .switch-button:focus {
    box-shadow: 2px 2px 6px #d1d9e6, -2px, -2px, 6px #f9f9f9;
    transform: scale(0.97);
    transition: 0.25s;
  }

  .is-txr {
    left: 65% !important;
    transition: 1.25s;
    transform-origin: left !important;
  }

  .is-txl {
    left: 0 !important;
    transition: 1.25s;
    transform-origin: right !important;
  }

  .is-z {
    z-index: 200 !important;
    transition: 1.25s;
  }

  .is-hidden {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: 1.25s;
  }

  .is-gx {
    animation: is-gx 1.25s;
  }

  @keyframes is-gx {

    0%,
    10%,
    100% {
      width: 35%;
    }

    30%,
    50% {
      width: 45%;
    }
  }

  /* ---------------------------首页太阳----------------------- */
  .home_sun {
    position: absolute;
    width: 300px;
    left: 0;
    top: 11vw;
  }

  /* ---------------------------小鸟部分----------------------- */

  #sky {
    padding-top: 80px;
    perspective: 400px;
    filter: drop-shadow(0px 150px 10px rgba(0, 0, 0, 0.2));
  }

  @-moz-document url-prefix() {
    #sky {
      filter: none;
    }
  }

  #sky div {
    transform-style: preserve-3d;
  }

  #sky .bird {
    animation: fly 10000ms linear infinite;
  }

  #sky .bird .fwind {
    position: absolute;
    left: 40%;
    width: 4px;
    height: 200px;
    margin-left: -2px;
    border-radius: 999px;
    overflow: hidden;
  }

  #sky .bird .fwind:nth-child(1) {
    transform: translate3d(190px, -17px, 40px) rotateY(90deg);
  }

  #sky .bird .fwind:nth-child(1)::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 300px;
    background: rgba(100, 200, 2, 0.3);
    border-radius: 999px;
    transform: translateY(-300px);
    -webkit-animation: fwind 1618ms 4214ms linear infinite;
    animation: fwind 1618ms 4214ms linear infinite;
  }

  #sky .bird .fwind:nth-child(2) {
    transform: translate3d(109px, -45px, -20px) rotateY(90deg);
  }

  #sky .bird .fwind:nth-child(2)::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 300px;
    background: rgba(100, 200, 114, 0.3);
    border-radius: 999px;
    transform: translateY(-300px);
    -webkit-animation: fwind 2916ms 4427ms linear infinite;
    animation: fwind 2916ms 4427ms linear infinite;
  }

  #sky .bird .fwind:nth-child(3) {
    transform: translate3d(25px, -61px, 86px) rotateY(90deg);
  }

  #sky .bird .fwind:nth-child(3)::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 300px;
    background: rgba(100, 200, 138, 0.3);
    border-radius: 999px;
    transform: translateY(-300px);
    -webkit-animation: fwind 1752ms 3879ms linear infinite;
    animation: fwind 1752ms 3879ms linear infinite;
  }

  #sky .bird .fwind:nth-child(4) {
    transform: translate3d(61px, 136px, 56px) rotateY(90deg);
  }

  #sky .bird .fwind:nth-child(4)::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 300px;
    background: rgba(100, 200, 70, 0.3);
    border-radius: 999px;
    transform: translateY(-300px);
    -webkit-animation: fwind 1248ms 4426ms linear infinite;
    animation: fwind 1248ms 4426ms linear infinite;
  }

  #sky .bird .fwind:nth-child(5) {
    transform: translate3d(58px, -48px, 85px) rotateY(90deg);
  }

  #sky .bird .fwind:nth-child(5)::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 300px;
    background: rgba(100, 200, 140, 0.3);
    border-radius: 999px;
    transform: translateY(-300px);
    -webkit-animation: fwind 1585ms 4130ms linear infinite;
    animation: fwind 1585ms 4130ms linear infinite;
  }

  #sky .bird .fwind:nth-child(6) {
    transform: translate3d(27px, -85px, 47px) rotateY(90deg);
  }

  #sky .bird .fwind:nth-child(6)::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 300px;
    background: rgba(100, 200, 132, 0.3);
    border-radius: 999px;
    transform: translateY(-300px);
    -webkit-animation: fwind 1411ms 3856ms linear infinite;
    animation: fwind 1411ms 3856ms linear infinite;
  }

  #sky .bird .fwind:nth-child(7) {
    transform: translate3d(-54px, 54px, 1px) rotateY(90deg);
  }

  #sky .bird .fwind:nth-child(7)::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 300px;
    background: rgba(100, 200, 166, 0.3);
    border-radius: 999px;
    transform: translateY(-300px);
    -webkit-animation: fwind 2617ms 4195ms linear infinite;
    animation: fwind 2617ms 4195ms linear infinite;
  }

  #sky .bird .fwind:nth-child(8) {
    transform: translate3d(-119px, -67px, 92px) rotateY(90deg);
  }

  #sky .bird .fwind:nth-child(8)::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 300px;
    background: rgba(100, 200, 41, 0.3);
    border-radius: 999px;
    transform: translateY(-300px);
    -webkit-animation: fwind 2707ms 2767ms linear infinite;
    animation: fwind 2707ms 2767ms linear infinite;
  }

  #sky .bird .fwind:nth-child(9) {
    transform: translate3d(90px, -10px, -59px) rotateY(90deg);
  }

  #sky .bird .fwind:nth-child(9)::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 300px;
    background: rgba(100, 200, 204, 0.3);
    border-radius: 999px;
    transform: translateY(-300px);
    -webkit-animation: fwind 1793ms 1402ms linear infinite;
    animation: fwind 1793ms 1402ms linear infinite;
  }

  #sky .bird .fwind:nth-child(10) {
    transform: translate3d(101px, -46px, 44px) rotateY(90deg);
  }

  #sky .bird .fwind:nth-child(10)::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 300px;
    background: rgba(100, 200, 8, 0.3);
    border-radius: 999px;
    transform: translateY(-300px);
    -webkit-animation: fwind 2107ms 3491ms linear infinite;
    animation: fwind 2107ms 3491ms linear infinite;
  }

  #sky .bird .fwind:nth-child(11) {
    transform: translate3d(42px, 116px, -34px) rotateY(90deg);
  }

  #sky .bird .fwind:nth-child(11)::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 300px;
    background: rgba(100, 200, 5, 0.3);
    border-radius: 999px;
    transform: translateY(-300px);
    -webkit-animation: fwind 1961ms 4905ms linear infinite;
    animation: fwind 1961ms 4905ms linear infinite;
  }

  #sky .bird_body {
    position: relative;
    top: 5vh;
    left: 45%;
    width: 30px;
    height: 40px;
    background: #bf81e4;
  }

  #sky .bird_head {
    position: absolute;
    top: -30px;
    border-right: 15px solid transparent;
    border-bottom: 30px solid #af78d5;
    border-left: 15px solid transparent;
    transform-origin: 50% 100%;
    transform: rotateX(-20deg);
  }

  #sky .bird_wing_left {
    box-sizing: content-box;
    position: absolute;
    left: -30px;
    height: 30px;
    border-right: 30px solid #b96bef;
    border-bottom: 10px solid transparent;
    transform-origin: 100% 0;
    -webkit-animation: wingLeft 1000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: wingLeft 1000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }

  #sky .bird_wing_left_top {
    box-sizing: content-box;
    position: absolute;
    left: -30px;
    border-right: 30px solid #bc81eb;
    border-bottom: 30px solid transparent;
    transform-origin: 100% 0;
    -webkit-animation: wingLeft 1000ms cubic-bezier(0.545, 0.08, 0.52, 0.975) infinite alternate;
    animation: wingLeft 1000ms cubic-bezier(0.545, 0.08, 0.52, 0.975) infinite alternate;
  }

  #sky .bird_wing_right {
    box-sizing: content-box;
    position: absolute;
    left: 30px;
    height: 30px;
    border-left: 30px solid #7a6bf1;
    border-bottom: 10px solid transparent;
    transform-origin: 0 0;
    -webkit-animation: wingRight 1000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: wingRight 1000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }

  #sky .bird_wing_right_top {
    box-sizing: content-box;
    position: absolute;
    border-left: 30px solid #698ccc;
    border-bottom: 30px solid transparent;
    transform-origin: 0 0;
    -webkit-animation: wingRight 1000ms cubic-bezier(0.545, 0.08, 0.52, 0.975) infinite alternate;
    animation: wingRight 1000ms cubic-bezier(0.545, 0.08, 0.52, 0.975) infinite alternate;
  }

  #sky .bird_tail_left {
    position: absolute;
    top: 40px;
    border-right: 30px solid transparent;
    border-top: 40px solid #ab87f5;
    transform-origin: 50% 0;
    transform: rotateX(-20deg);
  }

  #sky .bird_tail_right {
    position: absolute;
    top: 40px;
    border-left: 30px solid transparent;
    border-top: 40px solid #c688fe;
    transform-origin: 50% 0;
    transform: rotateX(-20deg);
  }

  @keyframes fly {
    0% {
      transform: rotateX(-120deg) rotateZ(170deg) rotateX(10deg);
    }

    50% {
      transform: rotateX(-120deg) rotateZ(190deg) rotateX(10deg);
    }

    100% {
      transform: rotateX(-120deg) rotateZ(170deg) rotateX(10deg);
    }
  }

  @-webkit-keyframes wingLeft {
    0% {
      transform: rotateY(-40deg);
    }

    100% {
      transform: rotateY(40deg);
    }
  }

  @keyframes wingLeft {
    0% {
      transform: rotateY(-40deg);
    }

    100% {
      transform: rotateY(40deg);
    }
  }

  @-webkit-keyframes wingRight {
    0% {
      transform: rotateY(40deg);
    }

    100% {
      transform: rotateY(-40deg);
    }
  }

  @keyframes wingRight {
    0% {
      transform: rotateY(40deg);
    }

    100% {
      transform: rotateY(-40deg);
    }
  }

  @-webkit-keyframes fwind {
    0% {
      transform: translateY(-300px);
    }

    100% {
      transform: translateY(200px);
    }
  }

  @keyframes fwind {
    0% {
      transform: translateY(-300px);
    }

    100% {
      transform: translateY(200px);
    }
  }

  /* ---------------------------浮云部分----------------------- */
  .pbanner {
    position: relative;
    width: 100%;
    height: 93vh;
  }

  .tbanner {
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .tbanner .clouds {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }

  .tbanner .clouds img {
    position: absolute;
    top: 0;
    max-width: 100%;
    animation: animate calc(8s * var(--i)) linear infinite;
    z-index: 11;
  }

  /*  @keyframes animate
  {
    0%{
      opacity: 0;
      transform: scale(1);
    }
    25%, 75%{
      opacity: 1;
    }
    100%{
      opacity: 0;
      transform: scale(2.5);
    }
  } */
  @keyframes animate {
    0% {
      transform: translateX(-100%)
    }

    100% {
      transform: translateX(100%)
    }
  }



  /* --------------------------风车部分--------------------------- */
  .wcontainer {
    top: 85vh;
    right: 25%;
    position: absolute;
    z-index: 4;
  }

  .bwindmill {
    box-sizing: content-box;
    position: relative;
  }

  .line {
    box-sizing: content-box;
    position: absolute;
    width: 600px;
    height: 5px;
    border-radius: 10px;
    background-color: #333;
    left: -300px;
    top: 100px;
    z-index: 1;
  }

  .line:before {
    box-sizing: content-box;
    content: "";
    position: absolute;
    background-color: #6a994e;
    width: 200px;
    height: 100px;
    border-radius: 100px 100px 0 0;
    top: -100px;
    left: 80px;
    box-shadow: 250px 0 #a7c957;
  }

  .line:after {
    box-sizing: content-box;
    content: "";
    position: absolute;
    background-color: #6a994e;
    width: 100px;
    height: 50px;
    border-radius: 100px 100px 0 0;
    top: -50px;
    left: 20px;
    box-shadow: 100px 0 #a7c957, 360px 0 #6a994e, 430px 0 #6a994e, 460px 0 #a7c957;
  }

  .bmill {
    box-sizing: content-box;
    position: absolute;
    border-bottom: 330px solid #333;
    border-right: 25px solid transparent;
    border-left: 25px solid transparent;
    width: 180px;
    height: 0;
    top: -228px;
    left: -110px;
    z-index: 2;
  }

  .bmill:before {
    box-sizing: content-box;
    position: absolute;
    content: "";
    border-bottom: 320px solid #00aaff;
    border-right: 22px solid transparent;
    border-left: 22px solid transparent;
    width: 170px;
    height: 0;
    top: 7px;
    left: -16.5px;
  }

  .bmill:after {
    box-sizing: content-box;
    position: absolute;
    content: "";
    background-color: #333;
    width: 70px;
    height: 5px;
    border-radius: 10px;
    left: -2px;
    top: 20px;
    box-shadow: 40px 60px #333, 0px 220px #333, 110px 200px #333, 70px 180px #333, 110px 80px #333, 55px 140px #333, 15px 95px #333, 10px 30px #333;
  }

  .door {
    box-sizing: content-box;
    position: absolute;
    background-color: #621708;
    width: 50px;
    height: 80px;
    border-radius: 30px 30px 0 0;
    border: 5px solid #333;
    box-shadow: inset 1px 7px rgba(0, 0, 0, 0.2);
    top: 15px;
    left: -25px;
    z-index: 3;
  }

  .door:before {
    box-sizing: content-box;
    position: absolute;
    content: "";
    border-bottom: 150px solid #333;
    border-right: 150px solid transparent;
    border-left: 150px solid transparent;
    height: 0;
    width: 0;
    top: -395px;
    left: -125px;
  }

  .door:after {
    box-sizing: content-box;
    position: absolute;
    content: "";
    border-bottom: 135px solid #AB3428;
    border-right: 135px solid transparent;
    border-left: 135px solid transparent;
    height: 0;
    width: 0;
    top: -384px;
    left: -110px;
  }

  .fan {
    box-sizing: content-box;
    position: absolute;
    background-color: #333;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    left: -15px;
    top: -300px;
    z-index: 4;
    animation: bspin 3s infinite linear;

  }

  @keyframes bspin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .wingOne,
  .wingTwo,
  .wingThree,
  .wingFour {
    box-sizing: content-box;
    position: absolute;
    width: 10px;
    border: 5px solid #333;
    height: 75px;
    background-color: #e6e6ea;
    border-radius: 10px;
  }

  .wingOne:before,
  .wingTwo:before,
  .wingThree:before,
  .wingFour:before {
    box-sizing: content-box;
    position: absolute;
    content: "";
    background-color: #3b8ea5;
    box-shadow: inset -5px 0 #f5ee9e;
    border: 5px solid #333;
    width: 30px;
    height: 200px;
    top: 70px;
    left: -15px;
  }

  .wingOne {
    left: 15px;
    top: 30px;
  }

  .wingTwo {
    transform: rotate(90deg);
    top: -20px;
    left: -35px;
  }

  .wingThree {
    transform: rotate(-90deg);
    top: -20px;
    left: 65px;
  }

  .wingFour {
    transform: rotate(180deg);
    top: -65px;
    left: 15px;
  }


  /* -------------------------数据部分---------------------------- */
  .data-table {
    height: 600px;
  }

  #linechart {
    height: 100%;
    min-height: 300px;
    overflow: visible;
  }

  .data-card {
    background-color: var(--gray-0);
    border-radius: var(--radius-4);
    box-shadow: var(--shadow-1);
    opacity: 0.95;
  }

  .data-card:hover {
    box-shadow: var(--shadow-6);
    animation: c-scale-up forwards;
    animation-duration: 0.7s;
    animation-timing-function: var(--ease-out-5);
  }

  @keyframes c-scale-up {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.02);
    }
  }
</style>
