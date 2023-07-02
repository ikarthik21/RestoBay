import React from 'react'
import '../../App.css';
import { Logo, Nav, SLink, SignBox } from '../Styles/Navstyles';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const navigate = useNavigate();
  const logout = () => {
    Object.keys(Cookies.get()).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
    navigate('/');
    window.location.reload();
  }

  return (
    <>
      <Nav>

        <Logo>
          <SLink to='/' style={{ color: '#ef5644' }}>
            <h1>RESTOBAY</h1>
          </SLink>
        </Logo>


        <SignBox>


          {props.isAuth ? <button to="/login" className='mainBtStyle' onClick={logout}><h4>Log Out</h4></button>
            : <SLink to="/login" className='mainBtStyle'><h4>Log In</h4></SLink>}
        </SignBox>
      </Nav>


    </>
  )
}

export default Navbar;
