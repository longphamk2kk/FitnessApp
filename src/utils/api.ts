import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Update this URL to match your backend server
const BASE_URL = 'http://192.168.1.20:1200/api';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (no token needed for simple auth)
api.interceptors.request.use(
  async (config) => {
    // No token authentication needed for this simple auth system
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle authentication errors by clearing user data
      await AsyncStorage.removeItem('user');
      // Navigate to login screen (you'll need to implement this)
    }
    return Promise.reject(error);
  }
);

export default api;