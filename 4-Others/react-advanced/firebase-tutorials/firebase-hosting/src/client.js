import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://us-central1-fir-training-2c5ac.cloudfunctions.net/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
