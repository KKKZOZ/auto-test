<template>
<b-card body-class="p-0" header-class="border-0 bg-transparent">
    <!-- <template v-slot:header>
                <b-row align-v="center">
                    <b-col>
                        <h3 class="mb-0">近三个月发电功率一览</h3>
                    </b-col>
                </b-row>
            </template> -->
    <ve-line :data="chartData" :settings="settings" :extend="extend" :toolbox="toolbox" :grid="grid" :xAxisType="'time'" :colors="chartColors">
    </ve-line>
</b-card>
</template>

<script>
export default {
    name: "history-data-date-chart",
    data() {
         // v-charts配置参数
         this.vchartsConfig = {
          setting:{
            // 别称
            labelMap: {
              'area': '',
              'count': '',
            },
          },
          extend: {
            title:{
              show:true,
              // text:'数据',
              // subtext:'',
              textAlign:'center',
            },
            // 图标顶部的标题及按钮
            legend:{
              show:true,
            },
            // backgroundColor:'red',//整个组件的背景颜色
            //X轴线
            xAxis: {
              // name: "地区",
              type:'category',
              show:true,
              // 坐标轴轴线
              axisLine:{
                show:false,
              },
              // 坐标轴刻度
              axisTick:{
                show:false,
              },
              // 坐标轴每项的文字
              axisLabel:{
                showMaxLabel:true,
                showMinLabel:true,
                // color:'#3a3a3a',
                rotate:0, //刻度文字旋转，防止文字过多不显示
                margin:8,//文字离x轴的距离
                boundaryGap:true,
                // backgroundColor:'#0f0',
                formatter:(v)=>{
                  // console.log('x--v',v)
                  if(v.length>6){
                    return v.substring(0,6)+'...'
                  }
                  return v
                },
              },
              // X轴下面的刻度小竖线
              axisTick:{
                show:false,
                alignWithLabel:true,//axisLabel.boundaryGap=true时有效
                interval:0,
                length:6,//长度
              },
              // x轴对应的竖线
              splitLine: {
                show: false,
                interval: 0,
                lineStyle:{
                  color:'red',
                  backgroundColor:'red',
                }
              }
            },
            yAxis: {
              show:true,
              offset:0,
              // 坐标轴轴线
              axisLine:{
                show:false,
              },
              // x轴对应的竖线
              splitLine: {
                show: false,
              },
              // 坐标轴刻度
              axisTick:{
                show:false,
              },
              boundaryGap:false,
              axisLabel:{
                color:'#3a3a3a',
              },
            },

            // 滚动组件参数
            dataZoom:[
              //滚动组件参数上下两个的必须，注意点是end的不宜过大根据效果进行调整
              {
                show: true,
                realtime: true,
                start: 0,
                end: 5
              },
              {
                type: 'inside',
                show: true,
                realtime: true,
                start: 0,
                end: 5,
                xAxisIndex: [0],
                startValue: 0,
                //显示的多少数据
                endValue: 12,
                zoomLock:true,//阻止区域缩放
              },
              {
                type: 'slider',
                show: true,
                realtime: true,
                start: 0,
                end: 5,
                xAxisIndex: [0],
                startValue: 0,
                //显示的多少数据
                endValue: 12,
                zoomLock:true,//阻止区域缩放
              }
            ],

            // 柱形区域
            grid: {
              show: true,
              // backgroundColor: "#FFF6F3",
              borderColor: "#FFF6F3",
              // containLabel:false,
            },

            // 每个柱子
            series(v) {
              // console.log("v", v);
              // 设置柱子的样式
              v.forEach(i => {
                console.log("series", i);
                i.barWidth = 30;
                i.itemStyle={
                  // barBorderRadius:[10,10,10,10],
                  // color:'#FF6633',
                  borderWidth:0,
                };
                i.label={
                  // color:'#666',
                  show:true,
                  position:'top',
                  // backgroundColor:'yellow',
                };

              });
              return v;
            },
          }
        },
        this.extend = {
            xAxis: {
                minInterval: 3600 * 1000,
                maxInterval: 3600 * 1000
            },
            dataZoom: [{
                // type: 'inside',
                show: true,
                realtime: true,
                start: 0,
                end: 5,
                // xAxisIndex: [0, 1]
            },
            {
                type: 'inside',
                show: true,
                realtime: true,
                start: 0,
                end: 5,
                xAxisIndex: [0],
                startValue: 0,
                //显示的多少数据
                endValue: 12,
                zoomLock:true,//阻止区域缩放
              }],
        };

        this.settings = {
            // dataZoom: [{
            //     type: 'inside',
            //     // realtime: true,
            //     start: 30,
            //     end: 70,
            //     // xAxisIndex: [0, 1]
            // }],
        };
        this.grid = {
            show: false
        };
        this.chartColors = ["#ABDCFF", "#0396FF", "#A5DEE4"];
        this.toolbox = {
            show: true,
            top: 20,
            feature: {
                dataZoom: {
                    yAxisIndex: "none"
                },
                dataView: {
                    show: true,
                    readOnly: true
                },
                magicType: {
                    type: ["line", "bar"]
                },
                restore: {},
                saveAsImage: {}
            }
        };
        this.legend = {};
        this.xAxis = {};
        this.yAxis = {};
        this.radar = {};
        this.tooltip = {};
        this.axisPointer = {};
        this.brush = {};
        this.geo = {};
        this.timeline = {};
        this.graphic = {};
        this.series = {};
        this.textStyle = {};
        return {
            chartData: {
                columns: ["风机型号", "第一月", "第二月", "第三月"],
                rows: [{
                        风机型号: "风机01",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机02",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机03",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机04",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机05",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机06",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机07",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机08",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    }, {
                        风机型号: "风机09",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    },
                    {
                        风机型号: "风机10",
                        第一月: 1391,
                        第二月: 1093,
                        第三月: 3200
                    }
                ]
            }
        };
    },
    methods: {}
};
</script>
