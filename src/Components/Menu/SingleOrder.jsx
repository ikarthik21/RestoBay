import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container } from '../Styles/Menu';

import { OrderItem, OrderRow, OrderTable, QtyBox } from '../Styles/Menu';
import '../../App.css';
import moment from 'moment';

const SingleOrder = (props) => {

    const params = useParams();


    const [order, setOrder] = useState({});

    useEffect(() => {
        const fetchOrder = () => {
            const res = props.orders?.find(order => order.orderId === params.oid)

            setOrder(res);

        }
        fetchOrder();

    }, [params.oid, props.orders])

    return (
        <Container>
            <div className='applyFlexCol'>
                <div className='applyFlex3'>

                    <div>
                        <h3>Order Summary</h3>
                    </div>

                    <div>
                        <h3>{moment(props?.order?.createdAt).format('DD-MM-YYYY h:mm A')}</h3>

                    </div>

                </div>

                <div className='applyFlex3'>


                    <OrderTable>
                        {

                            order && order?.Items?.map(item => {

                                return (
                                    <OrderRow key={item.item_id}>

                                        <OrderItem>
                                            <img src={`/images/${item.image}`} alt="" />
                                        </OrderItem>
                                        <OrderItem>

                                            <h3>{item.name}</h3>
                                        </OrderItem>

                                        <OrderItem>

                                            <QtyBox>


                                                <span  >{item.quantity}</span>



                                            </QtyBox>
                                        </OrderItem>

                                        <OrderItem>


                                            <h3>{item.quantity * item.price}</h3>
                                        </OrderItem>

                                    </OrderRow>
                                )
                            })




                        }



                    </OrderTable>
                </div>


            </div >


        </Container >
    )
}

export default SingleOrder