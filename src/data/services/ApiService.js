import axios from 'axios';

const url = 'http://localhost:3002/api';

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  },
});