import React, { useEffect, useState } from 'react'
import { SideBar, LinkItem } from '../Styles/Navstyles';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'
import { BiSolidFoodMenu ,BiSolidLogIn} from 'react-icons/bi'
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { MdTableBar, MdFastfood, MdTableRestaurant } from 'react-icons/md';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import '../../App.css'
const SideNav = () => {


    const [role, setRole] = useState();
    const [Auth, setIsAuth] = useState(false);

    const navigate = useNavigate();
    const logout = () => {
        Object.keys(Cookies.get()).forEach((cookieName) => {
            Cookies.remove(cookieName);
        });
        navigate('/');
        window.location.reload();
    }

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            const decodedToken = jwt_decode(token);
            const { role } = decodedToken;
            if (role === "admin" || role === "customer") {
                setRole(role)
                setIsAuth(true);
            }
        }
    }, []);



    return (
        <SideBar>
            <Link to="/">
                <LinkItem >
                    <AiFillHome size={30} color='white' />
                    <p>Home</p>

                </LinkItem>
            </Link>

            <Link to="/menu">
                <LinkItem>
                    <BiSolidFoodMenu size={30} color='white' />
                    <p>Menu</p>

                </LinkItem>
            </Link>
            <Link to="/tables">
                <LinkItem>
                    <MdTableBar size={32} color='white' />
                    <p>Tables</p>

                </LinkItem>
            </Link>
            <Link to="/allorders">
                <LinkItem>
                    <MdFastfood size={32} color='white' />
                    <p>Order History</p>

                </LinkItem>
            </Link>



            {
                role === "admin" ?
                    <>
                        <Link to="/admin/orders">
                            <LinkItem>
                                <MdFastfood size={32} color='white' />
                                <p>All Orders</p>

                            </LinkItem>
                        </Link>
                        <Link to="/admin/tables">
                            <LinkItem>
                                <MdTableRestaurant size={32} color='white' />
                                <p>All Tables</p>

                            </LinkItem>
                        </Link>
                        <Link to="/admin/users">
                            <LinkItem>
                                <HiUsers size={30} color='white' />
                                <p>Users</p>
                            </LinkItem>
                        </Link>


                    </> : ""
            }
            <Link to="/alltableorders">
                <LinkItem>
                    <MdTableRestaurant size={32} color='white' />
                    <p>Table History</p>

                </LinkItem>
            </Link>

            <Link to="/profile">
                <LinkItem>
                    <FaUserAlt size={30} color='white' />
                    <p>Profile</p>

                </LinkItem>
            </Link>


            {

                Auth ?
                    <LinkItem onClick={logout} className='logoutst1'>
                        <FaSignOutAlt size={30} color='white' />
                        <p>Logout</p>
                    </LinkItem>
                    :
                    <LinkItem onClick={() => {
                        navigate('/login');
                    }} className='logoutst1'>
                        <BiSolidLogIn size={30} color='white' />
                        <p>Login</p>
                    </LinkItem>

            }









        </SideBar>
    )
}

export default SideNav