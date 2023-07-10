import React from 'react';
import { verifyPayment, makeOrder } from '../../Service/Api';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { notyf } from '../Styles/Navstyles';
const PaymentButton = (props) => {
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

            const response = await makeOrder(props.cart);

            const { amount, orderId } = response.data;

            const options = {
                key: process.env.RAZORPAY_KEY_ID,
                amount: amount.toString(),
                currency: "INR",
                name: 'Restobay Foods',
                description: 'Order Bill',
                order_id: orderId,
                handler: async function (response) {
                    const data = {
                        orderCreationId: orderId,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                        cartId: props.cart.cartId,
                    };

                    try {
                        const result = await verifyPayment(data);

                        if ((result.status === 200)) {
                            notyf.open({
                                type: 'info',
                                message: result.data.msg
                            });
                            navigate('/allorders');
                        }


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
        } catch (error) {
            console.log(error);
            alert('Failed to create Razorpay order');
        }
    };

    return (
        <div className='right_float'>
            <button className='right_float btn' onClick={displayRazorpay}>Pay</button>

        </div>
    );
};

export default PaymentButton;
