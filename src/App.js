import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Login from './Components/Login/Login';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import Admindash from './Components/Admin/Admindash';
import AllOrders from './Components/Menu/AllOrders';
import SingleOrder from './Components/Menu/SingleOrder';
import TableBooking from './Components/Table/TableBooking';
import { getAllOrders } from './Service/Api'

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
        <Navbar isAuth={isAuth} />
        <Routes>
          {isAuth && (userRole === "admin" || userRole === "customer") ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu userId={userId} />} />
              <Route path="/admin" element={<Admindash />} />
              <Route path="/tables" element={<TableBooking />} />
              <Route path="/allorders" element={<AllOrders orders={orders} />} />
              <Route path="/orders/:oid" element={<SingleOrder orders={orders} />} />

            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />

            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
