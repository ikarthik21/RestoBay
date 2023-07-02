import { Container, CartCheckBox, OrderTable, OrderRow, QtyBox, OrderItem } from '../Styles/Menu';




const CartComp = (props) => {

    const decQuan = props.decQuan;
    const incQuan = props.incQuan;


    const handleDecrement = (item) => {
        decQuan(item);
    };

    const handleIncrement = (item) => {
        incQuan(item);
    };

    if (!props.cart) {
        // Handle the loading state while waiting for the cart data
        return <div>Loading...</div>;
    }

    return (
        <Container>

            <CartCheckBox>
                <h2>Order Summary</h2>
                <div className='sp-undline'></div>

                <OrderTable>


                    {
                        props.cart && props.cart?.Items?.map(item => {

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
                                            <div onClick={() => {
                                                handleDecrement(item)
                                            }}>
                                                -
                                            </div>
                                            <span  >{item.quantity}</span>

                                            <div onClick={() => {
                                                handleIncrement(item)
                                            }}>
                                                +
                                            </div>
                                        </QtyBox>
                                    </OrderItem>

                                    <OrderItem>


                                        <h3>{item.quantity * item.price}</h3>
                                    </OrderItem>

                                </OrderRow>
                            )
                        })

                    }

                    <div className='sp-undline'></div>
                    <OrderRow className='spl_box'>

                        <h2>Total</h2>
                        <h2 className="spl_num"> {props?.cart?.totalPrice}</h2>
                    </OrderRow>

                    <div className='right_float'>
                        <button className='right_float btn'>Pay</button>

                    </div>





                </OrderTable>


            </CartCheckBox>

        </Container>
    )
}

export default CartComp;