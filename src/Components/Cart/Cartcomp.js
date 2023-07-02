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
                <h3>Order Summary</h3>

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


                    <OrderRow>
                        <h3>Total</h3>
                        <h4> {props?.cart?.totalPrice}</h4>
                    </OrderRow>

                </OrderTable>


            </CartCheckBox>

        </Container>
    )
}

export default CartComp;