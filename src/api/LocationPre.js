import request from '../util/request'


export default {
    // 获取天气数据
    getWeatherData(lat, lon) {
        return request({
            url: '/locationPre/weather',
            method: 'get',
            params: {
                lat: lat,
                lon: lon
            }
        })
    },

    // 获取未来预测数据
    getFuturePreData(lat, lon) {
    return request({
        url: '/locationPre/futurePre',
        method: 'get',
        params: {
            lat: lat,
            lon: lon
        }
    })
  }}