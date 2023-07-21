import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import SideNav from './Components/Navbar/SideNav';
import Menu from './Components/Menu/Menu';
import Login from './Components/Login/Login';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import AdminOrders from './Components/Admin/AdminOrders';
import AllOrders from './Components/Menu/AllOrders';
import TableBooking from './Components/Table/TableBooking';
import { getAllOrders } from './Service/Api';
import AllTableOrders from './Components/Table/AllTableOrders';
import AdminTables from './Components/Admin/AdminTables';
import AdminUsers from './Components/Admin/AdminUsers';
import Profile from './Components/Login/Profile';
import ResetPassword from './Components/Login/ResetPassword';
import Verify from './Components/Login/Verify';
function App() {
  const [userRole, setUserRole] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setuserId] = useState("")
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      const { role, username } = decodedToken;
      setuserId(username);


      if (role === "admin" || role === "customer") {

        setUserRole(role);
        setIsAuth(true);
      }
    }
  }, []);

  const [orders, setOrders] = useState();

  useEffect(() => {
    const fetchAllOrders = async () => {
      const res = await getAllOrders();
      setOrders(res.data)
    }
    if (isAuth) {
      fetchAllOrders();
    }
  }, [isAuth, orders]);



  return (
    <div >
      <Router>
        <SideNav />
        <Navbar isAuth={isAuth} />
        <Routes>
          {isAuth && (userRole === "admin" || userRole === "customer") ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu userId={userId} />} />
              <Route path="/tables" element={<TableBooking />} />
              <Route path="/allorders" element={<AllOrders orders={orders} />} />
              <Route path="/alltableorders" element={<AllTableOrders />} />
              <Route path="/admin/orders" element={<AdminOrders />} />
              <Route path="/admin/tables" element={<AdminTables />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/resetPassword/:token" element={<ResetPassword />} />
              <Route path="/verify/email/:token" element={<Verify />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/verify/email/:token" element={<Verify />} />
              <Route path="/resetPassword/:token" element={<ResetPassword />} />

            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
