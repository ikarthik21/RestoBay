import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Login from './Components/Login/Login';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import Payment from './Components/Cart/Payment';
import Admindash from './Components/Admin/Admindash';

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
              <Route path="/pay" element={<Payment />} />
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
