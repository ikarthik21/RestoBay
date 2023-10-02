import axios from 'axios';

import Cookies from 'js-cookie';

// Retrieve the token from the cookie
const token = Cookies.get('token');

// Set the default Authorization header for all requests
if (token) {
   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

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
export const updateCart = async (cart) => {
   try {

      return axios.post(`${curr_url}/updatecart`, cart);
   } catch (err) {
      console.log(err);
   }

}

export const getCart = async (cartidObj) => {

   try {
      return await axios.post(`${curr_url}/getcart`, cartidObj);
   } catch (err) {
      console.log(err);
   }

}


export const getMenu = async () => {

   try {
      return await axios.get(`${curr_url}/menu`);
   } catch (err) {
      console.log(err);
   }

}

export const makeOrder = async (cart) => {

   try {
      console.log(cart)
      return await axios.post(`${curr_url}/payment/orders`, cart);
   } catch (err) {
      console.log(err);
   }

}

export const verifyPayment = async (data) => {

   try {

      return await axios.post(`${curr_url}/payment/success`, data);
   }
   catch (err) {
      console.log(err);
   }

}
export const verifyTablePayment = async (data) => {

   try {

      return await axios.post(`${curr_url}/payment/table/success`, data);
   }
   catch (err) {
      console.log(err);
   }

}

export const getAllOrders = async () => {
   try {
      return await axios.get(`${curr_url}/getallorders`);
   }
   catch (err) {
      console.log(err);
   }

}

export const getTables = async () => {

   try {
      return await axios.get(`${curr_url}/gettables`);
   }
   catch (err) {
      console.log(err);
   }

}




export const bookTable = async (booking) => {

   try {
      return await axios.post(`${curr_url}/booktable`, booking);
   }
   catch (err) {
      console.log(err);
   }

}



export const getallTablebooks = async () => {

   try {
      return await axios.get(`${curr_url}/getalltablebooks`);
   }
   catch (err) {
      console.log(err);
   }

}



export const getProfile = async () => {

   try {
      return await axios.get(`${curr_url}/getprofile`);
   }
   catch (err) {
      console.log(err);
   }

}

export const editProfile = async (user) => {

   try {

      return await axios.post(`${curr_url}/editprofile`, user);
   }
   catch (err) {
      console.log(err);
   }

}

// Forget password 

export const forgetPassword = async (email) => {

   try {

      return await axios.post(`${curr_url}/forget/password`, email);
   }
   catch (err) {
      console.log(err);
   }

}



// Reset password

export const resetPassword = async (password) => {
   try {
      return await axios.post(`${curr_url}/forget/resetPassword`, password);
   }
   catch (err) {
      console.log(err);
   }
}



// Resend the verification link
export const resendVerifyLink = async (email) => {
   try {
      return await axios.post(`${curr_url}/verify/resend`, email);
   }
   catch (err) {
      console.log(err);
   }
}

// Check the verification 

export const checkVerification = async (token) => {
   try {
      return await axios.post(`${curr_url}/verify/mail`, token);
   }
   catch (err) {
      console.log(err);
   }
}






// Admin Routes 


// Route to get all food  orders 

export const getOrders = async () => {

   try {
      return await axios.get(`${curr_url}/foodorders`);
   }
   catch (err) {
      console.log(err);
   }

}


// Route to get all table orders

export const getTableOrders = async () => {

   try {
      return await axios.get(`${curr_url}/tableorders`);
   }
   catch (err) {
      console.log(err);
   }

}


export const getAllUsers = async () => {

   try {
      return await axios.get(`${curr_url}/allusers`);
   }
   catch (err) {
      console.log(err);
   }

}


