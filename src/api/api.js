// api.js

import axios from 'axios';

// 定义后端接口的基本配置
const API = {
  baseURL: 'http://152.136.61.134:5000',//云服务器
  // baseURL: 'http://127.0.0.1:5000',//本地服务器
  headers: {
    'Content-Type': 'application/json'
  }
};

// 封装不同的接口请求方法
export const getEndpointData = (userData) => {
  return axios.get(`${API.baseURL}/all-turbs/get-all`, 
  { 
    headers: API.headers,
    params: userData
    });
};

export const postUserData = (userData) => {
  return axios.get(`${API.baseURL}/all-turbs/update-all`,
  {
    headers: API.headers,
    params: userData,
   });
};

// 导出API对象
export default API;
