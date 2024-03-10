import React from 'react'
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localHost:3333'
});

export default API;