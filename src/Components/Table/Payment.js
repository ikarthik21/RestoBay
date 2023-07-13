import React from 'react';
import { verifyTablePayment, bookTable } from '../../Service/Api';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { notyf } from '../Styles/Navstyles';

const Payment = (props) => {

    const navigate = useNavigate();

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async () => {

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        try {

            const currentDate = new Date().setHours(0, 0, 0, 0);

            const selectedDate = new Date(props?.booking.date).setHours(0, 0, 0, 0);

            if (props?.booking.tableId === "" || props?.booking.tableno === null) {

                notyf.open({
                    type: 'error',
                    message: "Please select a table"
                });

            }
            else if (props?.booking.starttime === "" || props?.booking.date === "" || props?.booking.endtime === "") {

                notyf.open({
                    type: 'error',
                    message: "Please fill in all details"
                });

            }
            else if (currentDate > selectedDate) {
                notyf.open({
                    type: 'error',
                    message: "Please select a valid date"
                });


            }
            else if (props?.booking.starttime >= props?.booking.endtime) {
                notyf.open({
                    type: 'error',
                    message: "Please select a valid time range"

                })
            }
            else {

                try {
                    const response = await bookTable(props?.booking);
                    console.log(response)
                    if (response.data.message) {
                        notyf.open({
                            type: 'info',
                            message: response.data.message
                        })
                    }
                    const { amount, orderId } = response.data;

                    const options = {
                        key: process.env.RAZORPAY_KEY_ID,
                        amount: amount.toString(),
                        currency: "INR",
                        name: 'Restobay Foods',
                        description: 'Table Bill',
                        order_id: orderId,
                        handler: async function (response) {
                            const data = {
                                orderCreationId: orderId,
                                razorpayPaymentId: response.razorpay_payment_id,
                                razorpayOrderId: response.razorpay_order_id,
                                razorpaySignature: response.razorpay_signature,
                                tableId: props?.booking.tableId,
                                starttime: props?.booking.starttime,
                                date: props?.booking.date,
                                endtime: props?.booking.endtime
                            };

                            try {
                                const result = await verifyTablePayment(data);
                                console.log(result);
                                if (result.data.message) {
                                    notyf.open({
                                        type: 'info',
                                        message: result.data.message
                                    });
                                }

                                setTimeout(() => {
                                    navigate('/alltableorders');
                                }, 2500);

                            } catch (error) {

                                notyf.open({
                                    type: 'error',
                                    message: "<h3>Payment verification Failed</h3>"
                                });
                            }
                        },
                        notes: {
                            address: 'Restobay Foods',
                        },
                        theme: {
                            color: '#ef5644',
                        },
                    };

                    const paymentObject = new window.Razorpay(options);
                    paymentObject.open();
                }
                catch (error) {
                    console.log(error);
                }
            }
        } catch (error) {
            console.log(error);
            alert('Failed to create Razorpay order');
        }
    };

    return (
        <div className='right_float'>
            <button className='right_float btn' onClick={displayRazorpay}>Book Table</button>

        </div>
    );
};

export default Payment;
