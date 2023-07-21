import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { resetPassword } from '../../Service/Api';
import { notyf } from '../Styles/Navstyles';
import { FormItem, AllSecWrap } from '../Styles/HomeStyles';
import { Container, Allitems } from '../Styles/Menu';
import '../../App.css'


const ResetPassword = () => {
    const naviagte = useNavigate();
    const { token } = useParams();
    const [reset, setReset] = useState({
        password: "",
        cpassword: ""
    })

    const readinp = (e) => {
        setReset({ ...reset, [e.target.name]: e.target.value });
    }



    const handleSubmit = async () => {
        if (reset.password === reset.cpassword) {
            try {
                const response = await resetPassword({ password: reset.password, token: token });
                if (response.data.message) {
                    notyf.open({
                        type: 'info',
                        message: response.data.message
                    });
                }
                naviagte('/login');
            }
            catch (error) {
                console.log(error)
            }
        }
        else {
            notyf.open({
                type: 'error',
                message: "Passwords do not match"
            });
        }
    };

    return (
        <AllSecWrap>
            <Container>
                <Allitems>
                    <h1>Reset Password</h1>

                </Allitems>

                <FormItem>
                    <input type="password" name="password" onChange={readinp} placeholder='Password' />
                </FormItem>
                <FormItem>
                    <input type="password" name="cpassword" onChange={readinp} placeholder='Confirm Password' />
                </FormItem>
                <br />
                <FormItem>
                    <button className='mainBtStyle' onClick={handleSubmit} >
                        Reset
                    </button>
                </FormItem>

            </Container>

        </AllSecWrap>
    );
};

export default ResetPassword;
