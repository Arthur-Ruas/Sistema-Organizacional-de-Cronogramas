import React from 'react'
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localHost:3333',
});

//captura o token da sessionStorage
API.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  

// Redirecionar para a página de login
API.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401 || error.response.status === 400) {
            window.location.href = '/'; 
        }
        return Promise.reject(error);
    }
);

export default API;