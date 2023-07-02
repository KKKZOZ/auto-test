// api.js

import axios from 'axios';

// 定义后端接口的基本配置
const API = {
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
};

// 封装不同的接口请求方法
export const getEndpointData = () => {
  return axios.get(`${API.baseURL}/all-turbs/get-all`, { headers: API.headers });
};

export const postUserData = (userData) => {
  return axios.post(`${API.baseURL}/all-turbs/update-all`, userData, { headers: API.headers });
};

// 导出API对象
export default API;
