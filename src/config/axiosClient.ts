import axios, { AxiosInstance, AxiosResponse } from 'axios';
const queryString = require('query-string');

let token = null;
if (localStorage.getItem('persist:auth')) {
  token = JSON.parse(localStorage.getItem('persist:auth') as string).token;
}

const authorization = token ? { Authorization: `Bearer ${token}` } : null;

const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'content-type': 'application/json',
    ...authorization,
  },
  paramsSerializer: (params) => queryString.stringtify(params),
});

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    if (response && response.data) {
      return response;
    }
  },
  function (error) {
    if (error.response.status === 401) {
      console.log('Do something');
    }
    return Promise.reject(error);
  }
);

axiosClient.interceptors.request.use(function (config: any) {
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  }
  return config;
});
export default axiosClient;
