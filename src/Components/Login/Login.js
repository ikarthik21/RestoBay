import React, { useState, useEffect } from 'react';
import { FormItem, AllSecWrap } from '../Styles/HomeStyles';
import '../../App.css'
import { useNavigate } from 'react-router-dom';
import { loginUser, forgetPassword, resendVerifyLink } from '../../Service/Api';
import { Imagebox, LogBox, SignBox } from '../Styles/Sign'
import Cookies from "js-cookie";
import { Container } from '../Styles/Menu';
import { notyf } from '../Styles/Navstyles';
import Register from './Register';


const Login = () => {


    const loginuserDetails = {
        lemail: "",
        lpassword: "",
    };



    const navigate = useNavigate();
    const [Loginpg, setLoginpg] = useState(true); // toggle login and signup 
    const [loginDetails, setloginDetails] = useState(loginuserDetails); // set user details for login

    const [showfEmail, setShowfEmail] = useState(false);
    const [showVemail, setshowVemail] = useState(false);
    const [femail, setFemail] = useState({ femail: "" });
    const [vemail, setVemail] = useState({ vemail: "" });


    // input reading for  user login
    const readLoginInput = (e) => {
        setloginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    }

    // input reading for forget email
    const readFEmail = (e) => {
        setFemail({ ...femail, [e.target.name]: e.target.value });
    }

    // input reading for resend verification email
    const readVEmail = (e) => {
        setVemail({ ...vemail, [e.target.name]: e.target.value });
    }

    // toggle login and signup forms
    const toggleLogin = () => {
        setShowfEmail(!showfEmail);
        setLoginpg(!Loginpg);
    }


    useEffect(() => {
        console.log(loginDetails)

    }, [loginDetails])


    // user login function
    const validateLogin = async () => {

        if (loginDetails.lemail && loginDetails.lpassword) {
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



    const sendMail = async (e) => {
        e.preventDefault();
        if (femail === "") {
            notyf.error("Please Enter your details");
        }
        try {
            const resp = await forgetPassword(femail);
            if (resp.data.message) {
                notyf.open({
                    type: 'info',
                    message: resp.data.message
                });
            }
        } catch (error) {
            console.log(error)
        }
    }

    const resendMail = async () => {
        try {
            const resp = await resendVerifyLink(vemail);
            console.log(resp);
            if (resp.data.message) {
                notyf.open({
                    type: 'info',
                    message: resp.data.message
                });
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <AllSecWrap>
            {
                showVemail ?

                    <Container>
                        <FormItem>
                            <input type="email" onChange={readVEmail} name="vemail" placeholder='Enter your email to resend' />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button className='mainBtStyle' onClick={resendMail}>
                                Send
                            </button>
                        </FormItem>
                        <div className='applyFlexCol' style={{ textAlign: 'center' }}>
                            <button onClick={() => {
                                setshowVemail(false)
                            }} className='sp-bt'>
                                Already a Member? Login
                            </button>

                        </div>


                    </Container>
                    :
                    <SignBox>


                        {
                            Loginpg ? <LogBox style={{ padding: '100px 20px' }}>
                                <h2 className='changeFontColor'>Log In</h2>
                                <div>


                                    {
                                        showfEmail ? <FormItem>
                                            <input type="email" onChange={readFEmail} name="femail" placeholder='Enter email here' />
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className='mainBtStyle' onClick={sendMail}>
                                                Send
                                            </button>

                                        </FormItem>


                                            :

                                            <>
                                                <FormItem>
                                                    <input type="email" onChange={readLoginInput} name="lemail" placeholder='Email' />
                                                </FormItem>

                                                <FormItem>
                                                    <input type="password" onChange={readLoginInput} name="lpassword" placeholder='Password' />
                                                </FormItem>
                                                <br />
                                                <FormItem>
                                                    <button className='mainBtStyle' onClick={validateLogin}>
                                                        Log In
                                                    </button>
                                                </FormItem>
                                                <FormItem>
                                                    <button className='sp-bt' onClick={() => {
                                                        setShowfEmail(!showfEmail);
                                                    }}>
                                                        Forgot Password?
                                                    </button>
                                                    <button className='sp-bt' onClick={() => {
                                                        setshowVemail(!showVemail);
                                                    }}>
                                                        Resend verication mail
                                                    </button>


                                                </FormItem>
                                            </>
                                    }
                                </div>

                                {showfEmail ? <div className='applyFlexCol' style={{ textAlign: 'center' }}>
                                    <button onClick={() => {
                                        setShowfEmail(false)
                                    }} className='sp-bt'>
                                        Already a Member? Login
                                    </button>

                                </div>
                                    :
                                    <div className='applyFlexCol' style={{ textAlign: 'center' }}>
                                        <button className='sp-bt' onClick={toggleLogin} >
                                            Not a Member? Signup
                                        </button>
                                    </div>
                                }


                            </LogBox> :

                                <div className='applyFlexCol'>

                                    <Register />

                                    <div className='applyFlexCol' style={{ textAlign: 'center' }}>
                                        <button onClick={toggleLogin} className='sp-bt'>
                                            Already a Member? Login
                                        </button>

                                    </div>
                                </div>
                        }
                        <Imagebox>
                            <img src="/images/chef.png" alt="" />
                        </Imagebox>
                    </SignBox>
            }

        </AllSecWrap>
    )
}

export default Login
