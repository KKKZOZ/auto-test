<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3.5" md="6">
          <stats-card title="实时温度" type="gradient-red" :sub-title="temperature + '℃'" class="mb-4">
            <template slot="footer">
              <Thermometer :temperature="temperature"></Thermometer>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3.5" md="6">
          <stats-card title="实时风向" type="gradient-red" :sub-title="winddirection + '°'" class="mb-4">
            <template slot="footer">
              <Anemorumbometer :winddirection="winddirection"></Anemorumbometer>
            </template>
          </stats-card>

        </b-col>
        <b-col xl="3.5" md="6">
          <stats-card title="实时风速" type="gradient-red" :sub-title="windspeed + 'km/h'" class="mb-4">
            <template slot="footer">
              <Ventometer :windspeed="windspeed"></Ventometer>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3.5" md="6">
          <stats-card title="实时湿度" type="gradient-orange" :sub-title="humidity + '％'" class="mb-4">
            <template slot="footer">
              <Hygrometer :humidity="humidity"></Hygrometer>
            </template>
          </stats-card>

        </b-col>
        <b-col xl="3.5" md="6">
          <stats-card title="实时气压" type="gradient-green" :sub-title="pressure+'kpa'" class="mb-4">
            <template slot="footer">
              <pressure :pressure="pressure"></pressure>
            </template>
          </stats-card>

        </b-col>
        <b-col xl="3.5" md="6">
          <stats-card title="实时功率" type="gradient-info" :sub-title="yd15 + 'w'" class="mb-4">
            <template slot="footer">
              <Powermeter :yd15="yd15"></Powermeter>
            </template>
          </stats-card>

        </b-col>
      </b-row>
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="12" class="mb-5 mb-xl-0">
          <!-- <card type="default" header-classes="bg-transparent"> -->
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-black text-uppercase ls-1 mb-1">预测数据</h6>
                <h5 class="h3 text-black mb-0">预测结果</h5>
              </b-col>
              <b-col>
                <b-nav class="nav-pills justify-content-end">
                </b-nav>
              </b-col>
            </b-row>
            <div class="data-card pt-2">
              <!-- <Klinechart></Klinechart> -->
              <Linechart :linechart="linechart"></Linechart>
            </div>
          </card>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>
<script>
import { getEndpointData } from '../api/api';
// Components
import BaseProgress from '@/components/BaseProgress';
import StatsCard from '@/components/Cards/StatsCard';
import Pressure from '../components/Dashboard/Pressure.vue';
import Klinechart from '../components/Dashboard/kLineChart.vue';
import Linechart from '../components/Dashboard/Linechart.vue';
import Thermometer from '../components/Dashboard/Thermometer.vue';
import Anemorumbometer from '../components/Dashboard/Anemorumbometer.vue';
import Hygrometer from '../components/Dashboard/Hygrometer.vue';
import Powermeter from '../components/Dashboard/Powermeter.vue';
import Ventometer from '../components/Dashboard/Ventometer.vue';
// Tables
import SocialTrafficTable from './Dashboard/SocialTrafficTable';
import PageVisitsTable from './Dashboard/PageVisitsTable';

export default {
  components: {
    BaseProgress,
    StatsCard,
    PageVisitsTable,
    SocialTrafficTable,
    Pressure,
    Klinechart,
    Thermometer,
    Anemorumbometer,
    Hygrometer,
    Powermeter,
    Ventometer,
    Linechart
  },
  data() {
    return {
      lastdate: 0,
      nextdate: 0,
      pressure: null,
      temperature: null,
      winddirection: null,
      windspeed: null,
      yd15: null,
      humidity: null,
      linechart: null,
    }
  },
  methods: {
    formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      // 格式化为 "YYYY-M-D H:mm" 样式
      const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
      return formattedDate;
    }
  },
  computed: {
  },
  mounted() {
    getEndpointData()
      .then(response => {
        // 处理响应数据

        let nextdata = response.data[0].future[response.data[0].future.length - 1]
        let lastdata = response.data[0].future[response.data[0].future.length - 2]
        this.nextdate = nextdata.DATATIME
        this.lastdate = lastdata.DATATIME
        let datanow = 3
        // console.log(response.data[0].future[response.data[0].future.length-1].PRESSURE);
        this.pressure = (lastdata.PRESSURE + datanow * (nextdata.PRESSURE - lastdata.PRESSURE) / 15).toString()
        this.temperature = (lastdata.TEMPERATURE + datanow * (nextdata.TEMPERATURE - lastdata.TEMPERATURE) / 15).toString()
        this.winddirection = (lastdata.WINDDIRECTION + datanow * (nextdata.WINDDIRECTION - lastdata.WINDDIRECTION) / 15).toString()
        this.windspeed = (lastdata.WINDSPEED + datanow * (nextdata.WINDSPEED - lastdata.WINDSPEED) / 15).toString()
        this.yd15 = (lastdata.YD15 + datanow * (nextdata.YD15 - lastdata.YD15) / 15).toString()
        this.humidity = (lastdata.HUMIDITY + datanow * (nextdata.HUMIDITY - lastdata.HUMIDITY) / 15).toString()
        const extractedProperties = ["DATATIME", "YD15"];
        // 提取特定属性组成新的JSON对象数组
        const extractedJSON = Object.values(response.data[0].future).map(item => {
          const extractedItem = {};
          extractedProperties.forEach(property => {
            if (property === 'DATATIME') {
              var date=this.formatTimestamp(item[property]);
              extractedItem[property] = date;
            }else {
              extractedItem[property] = item[property];
            }
          });
          return extractedItem;
        });
        this.linechart = extractedJSON;
      })

      .catch(error => {
        // 处理错误
        console.error(error);
      });
  }
};
</script>
<style></style>
