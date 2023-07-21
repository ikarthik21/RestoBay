import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { checkVerification } from '../../Service/Api';
import { FormItem, AllSecWrap } from '../Styles/HomeStyles';
import { Container } from '../Styles/Menu';
import '../../App.css'
 
import { useEffect } from 'react';


const Verify = () => {
    const naviagte = useNavigate();
    const { token } = useParams();
    const [msg, setMessage] = useState();

    useEffect(() => {
        const checkverify = async () => {
            const resp = await checkVerification({ token: token });
            setMessage(resp.data.message);
        }
        checkverify();
    }, [token])

    return (
        <AllSecWrap>
            <Container>


                <FormItem>
                    <h1 className='font5'>{msg}</h1>
                </FormItem>
                <FormItem>

                    <button className='mainBtStyle' onClick={() => {
                        naviagte('/login');
                    }} >

                        Log In


                    </button>
                </FormItem>



            </Container>

        </AllSecWrap>
    );
};

export default Verify;
