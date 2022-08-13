import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://training.softech.cloud/api/training/',
  timeout: 1000,
});

axiosClient.interceptors.response.use(
  (response) => {
    const { token } = response.data;
    // LOGIN
    if (token) {
      window.localStorage.setItem('token', token);
    }
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // console.log('Please login before request');
      error.response.config.headers['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');
      return axios(error.response.config);
    }
    // console.warn('Error status', error.response.status);
    return Promise.reject(error);
  },
);

export default axiosClient;
