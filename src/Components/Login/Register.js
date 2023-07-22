import React, { useState } from 'react';
import { FormItem } from '../Styles/HomeStyles';
import '../../App.css'
import { useNavigate } from 'react-router-dom';
import { adduser } from '../../Service/Api';
import { LogBox } from '../Styles/Sign'

import { notyf } from '../Styles/Navstyles';

const Register = () => {

    const navigate = useNavigate();

    // Basic User Structure
    const userDetails = {
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
    };

    const [details, setDetails] = useState(userDetails); // set user details for registration  

    // input reading for  user registration
    const readInput = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }




    // user registration function 
    const addNewUser = async () => {
        if (details.email && details.cpassword && details.phone && details.password && details.name) {
            if (details.password === details.cpassword) {
                try {
                    const data = await adduser(details);


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
        <div>
            <LogBox>
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




            </LogBox>
        </div>
    )
}

export default Register