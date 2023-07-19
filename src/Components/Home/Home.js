import React, { useState } from 'react'
import '../../App.css';
import ImageSilder from './ImageSlider';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import styled, { keyframes, css } from 'styled-components';
import { MdLunchDining, MdDinnerDining, MdFastfood, MdTableBar } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { MainSection, Imagebox, ContentInner, AllSecWrap, Contentbox, ContactBox, StartOpSel, ContactItem, ContactUs } from '../Styles/HomeStyles';
import { Container } from '../Styles/Menu'


const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (

    <AllSecWrap>
      <Container>

        <MainSection  >
          <Imagebox>
            <img src="/images/home_main.png" alt='' />
          </Imagebox>

          <Contentbox>

            <ContentInner>
              <h2>Welcome To Restobay</h2>
              <div className="applyFlex">
                <p>
                  Book Order Enjoy..!
                </p>
                <button className='mainBtStyle' onClick={toggleMenu}><h3>Get Started</h3></button>
              </div>

              {isOpen ?
                <>

                  <Menu isOpen={isOpen}>
                    <StartOpSel  >
                      <Link className='applyFlexCol' to='/tables' >
                        <MdTableBar color='white' size={30} />
                        <p>Book Table</p>
                      </Link>

                      <Link className='applyFlexCol' to='/menu'  >
                        <MdFastfood color='white' size={30} />
                        <p>Order Food</p>
                      </Link>
                    </StartOpSel>
                  </Menu>
                </>
                : <></>}
            </ContentInner>
          </Contentbox>
        </MainSection>

        <div className='applyFlex'>
          <h2 className='sec-Head'>Our Restaurant</h2>

        </div>


        <ImageSilder />


        <ContactUs>
          <h2 className='sec-Head'>Contact Us</h2>
          <ContactBox>
            <ContactItem>
              <h3 > Contact Details</h3>
              <p> <FaPhoneAlt color='#ef5644' size={18} /> &nbsp; +91 9999999999</p>
              <p> <MdEmail color='#ef5644' size={20} /> &nbsp; restobayfood@gmail.com</p>
              <p> <AiFillHome color='#ef5644' size={20} /> &nbsp; 2-56, New Town, Hyderabad</p>
            </ContactItem>
            <ContactItem>
              <h3>Locations</h3>
              <p> <HiLocationMarker color='#ef5644' size={18} /> &nbsp;  Newtown, Hyderabad</p>
              <p> <HiLocationMarker color='#ef5644' size={20} /> &nbsp; New Bandra, Mumbai</p>
              <p> <HiLocationMarker color='#ef5644' size={20} /> &nbsp; Opp SPSD ,New Delhi</p>
              <p> <HiLocationMarker color='#ef5644' size={20} /> &nbsp; Old Bus stop,Chennai</p>
            </ContactItem>
            <ContactItem>
              <h3>Timings</h3>
              <p className='applyFont'><MdLunchDining color='#ef5644' size={20} /> &nbsp;
                Lunch</p>
              <p>

                Take-out & Dine-In (Daily): 11am -3pm
              </p>

              <p className='applyFont'><MdDinnerDining color='#ef5644' size={24} />&nbsp; Dinner</p>
              <p>
                Indoor dinning (Daily) : 4pm – 10pm</p>

              <p>   Outdoor dinning (Thur – Sun) 4pm -10pm </p>

              <p>Happy Hour (Mon – Fri) 4pm – 6pm</p>
            </ContactItem>
          </ContactBox>
        </ContactUs>

      </Container>
    </AllSecWrap>
  )
}

export default Home;

const openAnimation = keyframes`
  0% {
    transform: translateY(-70%);
  }
  100% {
    transform: translateY(0);
  }

`;

const Menu = styled.div`
  position: relative;
  top: ${({ isOpen }) => (isOpen ? '0' : "")};
  left: 0; 
  background-color: #f1f1f1;
  animation: ${({ isOpen }) =>
    isOpen
      ? css`
          ${openAnimation} 1s ease;
        `
      : ``};
`;
