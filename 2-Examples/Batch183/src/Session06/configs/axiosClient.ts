import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://server.aptech.io',
  timeout: 30000,
});

export default axiosClient;
