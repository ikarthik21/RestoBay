import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import Cookies from 'js-cookie';

const initialState = {
    data: []
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        fetchMenu(state, action) {
            state.data = action.payload;
        }
    }
})




const { fetchMenu } = menuSlice.actions;

const curr_url = process.env.REACT_APP_BACKEND_URL;



// Retrieve the token from the cookie
const token = Cookies.get('token');

// Set the default Authorization header for all requests
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}




export const getTableF = () => {
    return async function (dispatch) {
        const res = await axios.get(`${curr_url}/menu`);
        dispatch(fetchMenu(res.data));
    }
}

 
