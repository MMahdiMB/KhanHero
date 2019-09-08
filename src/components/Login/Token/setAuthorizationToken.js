import React from 'react';
import axios from 'axios';

export const SetAuthorizationToken = (token) => {
    if(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
};


