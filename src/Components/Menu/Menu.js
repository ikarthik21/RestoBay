import React, { useEffect, useState } from 'react';
import '../../App.css'
import { Allitems, Container, DescItem, FoodItem, SelectCat, QtyBox } from '../Styles/Menu';
import { updateCart, getCart, getMenu } from '../../Service/Api'
import { CartBox } from '../Styles/Navstyles';
import { FaShoppingCart } from 'react-icons/fa'
import CartComp from '../Cart/Cartcomp';
import Modal from '../Cart/Modal';


const Menu = (props) => {
    const [itemDisplay, setitemDisplay] = useState("");
    const [itemCat, setitemCat] = useState("");
    const [cart, setCart] = useState();
    const [menu, setMenu] = useState();

    // Toggle between the food categories
    useEffect(() => {
        if (itemCat === "") {
            setitemDisplay("all");
        }
        else {
            setitemDisplay("");
        }
    }, [itemCat])

    // get Menu
    useEffect(() => {
        const getMenulis = async () => {
            const resp = await getMenu();
            setMenu(resp.data);
        }
        getMenulis();
    }, [])


    // Get Existing Cart from Db
    useEffect(() => {
        const getcart = async (cartobj) => {
            const resp = await getCart(cartobj);
            console.log(resp.data.cart);
            setCart(resp.data.cart);
        }
        getcart({ cartid: props.userId });

    }, [props.userId])

    // Update the cart
    useEffect(() => {
        if (cart !== undefined) {
            const updCart = async () => {
                await updateCart(cart);
            }
            updCart();
        }
    }, [cart])

    // add Items to cart
    const addItem = (item) => {
        if (!cart) {
            const CartInit = {
                Items: [
                    {
                        ...item,
                        quantity: 1,
                    },
                ],
                totalItems: 1,
                totalPrice: item.price,
                cartId: props.userId,
            };
            setCart(CartInit);
        } else {
            const findEle = cart.Items.findIndex((itm) => itm.item_id === item.item_id);

            if (findEle === -1) {
                const updatedItems = [...cart.Items, { ...item, quantity: 1 }];
                setCart({
                    ...cart,
                    totalItems: cart.totalItems + 1,
                    totalPrice: cart.totalPrice + item.price,
                    Items: updatedItems,
                });
            } else {
                const updatedItems = [...cart.Items];
                updatedItems[findEle].quantity += 1;
                setCart({
                    ...cart,
                    Items: updatedItems,
                    totalPrice: cart.totalPrice + item.price,
                    totalItems: updatedItems.length,
                });
            }
        }
    };

    // To Decrease the quantity
    const decQuan = (item) => {
        const findEle = cart.Items.findIndex((itm) => itm.item_id === item.item_id);

        const updatedItems = [...cart.Items];
        updatedItems[findEle].quantity -= 1;
        if (updatedItems[findEle].quantity === 0) {
            updatedItems.splice(findEle, 1);
        }
        setCart({
            ...cart,
            Items: updatedItems,
            totalPrice: cart.totalPrice - item.price,
            totalItems: updatedItems.length,
        });
    }

    // To increase the quantity
    const incQuan = (item) => {
        const findEle = cart.Items.findIndex((itm) => itm.item_id === item.item_id);

        const updatedItems = [...cart.Items];
        updatedItems[findEle].quantity += 1;
        setCart({
            ...cart,
            Items: updatedItems,
            totalPrice: cart.totalPrice + item.price,
            totalItems: updatedItems.length,
        });

    }

    const [cartshow, setCartshow] = useState(false);



    // Toggle the cart modal
    const toggleCartModal = () => {
        setCartshow(!cartshow);
    };


    return (

        <Container >
            <CartBox onClick={toggleCartModal}>
                <FaShoppingCart style={{ color: '#ef5644' }} size={22} />
                <h4>{cart?.Items.length}</h4>
            </CartBox>

            {cartshow && (
                <Modal onClose={toggleCartModal}>
                    <CartComp cart={cart} decQuan={decQuan} incQuan={incQuan} />
                </Modal>
            )}

            <SelectCat className={cartshow ? "appblur" : ""} >
                <ul>
                    <li onClick={() => { setitemCat("") }}>All</li>
                    <li onClick={() => { setitemCat("south") }}>South</li>
                    <li onClick={() => { setitemCat("north") }}>North</li>
                    <li onClick={() => { setitemCat("dessert") }}>Dessert</li>
                </ul>
            </SelectCat>

            {
                menu ? <Allitems className={cartshow ? "appblur" : ""}>
                    {
                        itemDisplay === "all" ?
                            menu.map((item) => {
                                const cartItem = cart?.Items.find((cartItem) => cartItem.item_id === item.item_id);
                                return (
                                    <FoodItem key={item.item_id}>
                                        <img src={`/images/${item.image}`} alt="" />
                                        <h3>{item.name}</h3>
                                        <DescItem>
                                            <h4> Rs.<span>{item.price}</span></h4>
                                            <button onClick={() => addItem(item)}>add</button>
                                            {
                                                cartItem &&
                                                <QtyBox>
                                                    <div onClick={() => { decQuan(item) }}>-</div>
                                                    <span>{cartItem.quantity}</span>
                                                    <div onClick={() => { incQuan(item) }}>+</div>
                                                </QtyBox>
                                            }
                                        </DescItem>
                                    </FoodItem>
                                );
                            })
                            : menu.filter(item => item.category === itemCat).map((item) => {
                                const cartItem = cart?.Items.find((cartItem) => cartItem.item_id === item.item_id);

                                return (
                                    <FoodItem key={item.item_id}>
                                        <img src={`/images/${item.image}`} alt="" />
                                        <h3>{item.name}</h3>
                                        <DescItem>
                                            <h4> Rs.<span>{item.price}</span></h4>
                                            <button onClick={() => addItem(item)}>add</button>
                                            {cartItem &&
                                                <QtyBox>
                                                    <div onClick={() => { decQuan(item) }}>  -</div>
                                                    <span  >{cartItem.quantity}</span>
                                                    <div onClick={() => { incQuan(item) }}>+</div>
                                                </QtyBox>
                                            }
                                        </DescItem>
                                    </FoodItem>
                                );
                            })
                    }
                </Allitems> : ""

            }
        </Container >
    )
}

export default Menu;
