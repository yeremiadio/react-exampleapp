import axios, { AxiosInstance } from 'axios';

// Create an Axios instance
const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://exampletravelapi.datacakra.com', // Your API base URL
    timeout: 5000, // Request timeout in milliseconds
});

export default axiosInstance;