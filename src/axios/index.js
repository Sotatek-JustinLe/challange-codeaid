import axios from 'axios';

const BASE_API_URL = 'http://localhost:3001';
const API_VERSION = 'api/v1';

const axiosInstance = axios.create({
  baseURL: `${BASE_API_URL}/${API_VERSION}`,
  headers: {
    'Content-Type': 'application/json',
    responseType: 'json',
    timeout: 5000,
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    let accessToken = localStorage.getItem('access_token') || '';

    if (!accessToken) {
      const res = await axios.get(
        `${BASE_API_URL}/${API_VERSION}/getAccessToken`
      );

      if (res && res.data.access_token) {
        localStorage.setItem('access_token', res.data.access_token);
        accessToken = res.data.access_token;
      }
    }

    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  async (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
