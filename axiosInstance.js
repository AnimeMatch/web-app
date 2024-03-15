import axios from 'axios';
import http from 'http';
import https from 'https';

const instance = axios.create();

instance.defaults.adapter = require('axios/lib/adapters/http');
instance.defaults.httpAgent = new http.Agent({ keepAlive: true });
instance.defaults.httpsAgent = new https.Agent({ keepAlive: true });

instance.interceptors.request.use((config) => {
    // Modify request config if needed
    return config;
});

instance.interceptors.response.use((response) => {
    // Handle response data if needed
    return response;
}, (error) => {
    // Handle error response
    if (error.code === 'ECONNRESET') {
        // Handle ECONNRESET error
    }
    return Promise.reject(error);
});

export default instance;
