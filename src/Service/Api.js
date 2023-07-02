import axios from 'axios';

import Cookies from 'js-cookie';

// Retrieve the token from the cookie
const token = Cookies.get('token');

// Set the default Authorization header for all requests
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const curr_url = process.env.REACT_APP_BACKEND_URL;

export const adduser = async (user) => {
   try {
      return axios.post(`${curr_url}/register`, user);
   } catch (err) {
      console.log(err);
   }
}

export const loginUser = async (user) => {
   try {
      return axios.post(`${curr_url}/login`, user);
   } catch (err) {
      console.log(err);
   }

}
export const udateCart = async (cart) => {
   try {
    
      return axios.post(`${curr_url}/update-cart`, cart);
   } catch (err) {
      console.log(err);
   }

}

export const getCart = async (cartidObj) => {
   try {
      return await axios.post(`${curr_url}/get-cart`, cartidObj);
   } catch (err) {
      console.log(err);
   }

}

