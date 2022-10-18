import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://training.softech.cloud/api/training/',
  timeout: 1000,
});

// axiosClient.interceptors.request.use((request) => {
//   // const token = window.localStorage.getItem('token');
//   // if (token) {
//   //   console.log('interceptors - request - token', token);
//   // }
//   // console.log('interceptors - request');
//   // request.config.headers['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');
// });

axiosClient.interceptors.response.use(
  (response) => {
    const { token } = response.data;
    // LOGIN
    console.log('token:', token);
    if (token) {
      window.localStorage.setItem('token', token);
    }
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // console.log('Please login before request');
      // Redirect to '/login'
      error.response.config.headers['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');
      return axios(error.response.config);
    }
    // console.warn('Error status', error.response.status);
    return Promise.reject(error);
  },
);

export default axiosClient;
