// src/axios.js
import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_URL, // Use your API base URL
  withCredentials: true, // Important for Sanctum authentication
});

// Set the Sanctum token as a default header for all requests
axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('sanctum_token')}`;

// Add a request interceptor to update the token if it changes
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('sanctum_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;
