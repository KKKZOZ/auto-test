import request from '../util/request'


export default {

    // 年均数据查询接口
  getAvgData() {
    return request({
        url: '/historyData/avgData',
        method: 'get',
    })
  },

  // 历史日期数据查询接口
  getTimeRangeData(startTime,endTime,turbineType) {
    return request({
        url: '/historyData/timeRange',
        method: 'get',
        params: {
          startDate:startTime,
          endDate:endTime,
          turbineType:turbineType
        },
    })
  },

  // 历史日期最高数据查询接口
  getTimeRangeMaxData(startTime,endTime,turbineType) {
    return request({
        url: '/historyData/timeRangeMaxData',
        method: 'get',
        params: {
            startDate:startTime,
            endDate:endTime,
            turbineType:turbineType
        },
    })
  },

  // 排行数据查询接口
  getPowerRankData(month) {
    return request({
        url: '/historyData/powerRank',
        params:{
            month:month
        },
        method: 'get',
    })
  },

  // 最近三个月数据查询接口
  getRecentData() {
    return request({
        url: '/historyData/recentData',
        method: 'get',
    })
  },

}
