
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';
import '../../App.css'


const ImageSilder = () => {
  var settings = {

    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrapper>
        <img src="/images/fi5.jpg" alt="" />
      </Wrapper>
      <Wrapper>


        <img src="/images/homesliderimg.webp" alt="" />

      </Wrapper>
      <Wrapper>

        <img src="/images/fi3.jpg" alt="" />


      </Wrapper>

      <Wrapper>


        <img src="/images/homeslider2.png" alt="" />


      </Wrapper>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
    }
 
  }

  ul li button {
    
    &:before {
      font-size: 11px;
      color: white;
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
   
  }

  img{
    height: 620px;
    width : 98.5vw;
    border-radius: 20px;
  }



`;

const Wrapper = styled.div`
display :flex;
align-items:center;
justify-content:center;
margin: 10px 0px;
padding:10px 10px;
object-fill:cover;
position: relative;

`;

export default ImageSilder;