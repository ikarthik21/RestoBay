import React, { useState } from 'react';
import { FormItem } from '../Styles/HomeStyles';
import '../../App.css'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { useNavigate } from 'react-router-dom';
import { loginUser, adduser } from '../../Service/Api';
import { Imagebox, LogBox, SignBox } from '../Styles/Sign'
import Cookies from "js-cookie";

const notyf = new Notyf({
    duration: 3000,
    position: {
        x: 'right',
        y: 'top',
    },
    types: [
        {
            type: 'error',
            background: '#ef5644',
            duration: 5000,
            dismissible: true
        },
        {
            type: 'info',
            background: '#00adf1',
            duration: 5000,
            dismissible: true
        }

    ]
});

const loginuserDetails = {
    email: "",
    password: "",
}

const Login = () => {

    // Basic User Structure

    const userDetails = {
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""

    }

    const navigate = useNavigate();
    const [Loginpg, setLoginpg] = useState(true); // toggle login and signup 
    const [loginDetails, setloginDetails] = useState(loginuserDetails); // set user details for login
    const [details, setDetails] = useState(userDetails); // set user details for registration


    // input reading for  user registration
    const readInput = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    // input reading for  user login
    const readLoginInput = (e) => {
        setloginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    }

    // toggle login and signup forms
    const toggleLogin = () => {
        setLoginpg(!Loginpg)
    }

    // user login function
    const validateLogin = async () => {

        if (loginDetails.email && loginDetails.password) {
            try {
                const response = await loginUser(loginDetails);
                const token = response.data.token;

                if (token) {
                    const expires = 1 / 24;
                    Cookies.set("token", token, { expires: expires });
                    navigate("/menu");
                    notyf.open({
                        type: 'info',
                        message: response.data.message
                    });
                    window.location.reload();
                }
                else {
                    notyf.open({
                        type: 'info',
                        message: response.data.message
                    });
                }

            }
            catch (error) {
                notyf.error("Error adding user", error);
            }
        }
        else {
            notyf.error('Please enter your Credentials');
        }
    }


    // user registration function 
    const addNewUser = async () => {
        if (details.email && details.cpassword && details.phone && details.password && details.name) {
            if (details.password === details.cpassword) {
                try {
                    const data = await adduser(details);
                    console.log(data);

                    notyf.open({
                        type: 'info',
                        message: data.data.message
                    });

                    navigate("/login");
                }
                catch (error) {
                    notyf.error("Error adding user", error);
                }
            }
            else {
                notyf.error('Both passwords must be same');
            }
        }
        else {
            notyf.error('Please fill all the fields');
        }

    }

    return (
        <>
            <SignBox>
                {
                    Loginpg ? <LogBox style={{ padding: '100px 20px' }}>
                        <h2 className='changeFontColor'>Log In</h2>
                        <div>

                            <FormItem>
                                <input type="email" onChange={readLoginInput} name="email" placeholder='Email' />
                            </FormItem>

                            <FormItem>
                                <input type="password" onChange={readLoginInput} name="password" placeholder='Password' />
                            </FormItem>

                            <FormItem>
                                <button className='mainBtStyle' onClick={validateLogin}>
                                    Log In
                                </button>
                            </FormItem>
                        </div>


                        <div className='applyFlexCol' style={{ textAlign: 'center' }}>
                            <button className='sp-bt' onClick={toggleLogin} >
                                Not a Member? Signup
                            </button>
                        </div>

                    </LogBox> : <LogBox>
                        <h2 className='changeFontColor'>Create an account</h2>
                        <div  >
                            <FormItem>
                                <input type="text" name="name" onChange={readInput} placeholder='Name' />
                            </FormItem>
                            <FormItem>
                                <input type="email" name="email" onChange={readInput} placeholder='Email' />
                            </FormItem>
                            <FormItem>
                                <input type="text" name="phone" onChange={readInput} placeholder='Phone Number' />
                            </FormItem>
                            <FormItem>
                                <input type="password" name="password" onChange={readInput} placeholder='Password' />
                            </FormItem>
                            <FormItem>
                                <input type="password" name="cpassword" onChange={readInput} placeholder='Confirm Password' />
                            </FormItem>
                            <div className='applyFlexCol' style={{ textAlign: 'center' }}>

                                <FormItem>
                                    <button className='mainBtStyle' onClick={addNewUser} >
                                        Create
                                    </button>
                                </FormItem>

                            </div>
                        </div>

                        <div className='applyFlexCol' style={{ textAlign: 'center' }}>
                            <button onClick={toggleLogin} className='sp-bt'>
                                Already a Member? Login
                            </button>

                        </div>


                    </LogBox>}
                <Imagebox>
                    <img src="/images/chef.png" alt="" />
                </Imagebox>
            </SignBox>
        </>
    )
}

export default Login
