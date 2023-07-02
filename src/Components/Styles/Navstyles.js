import styled from "styled-components";
import { Link } from "react-router-dom";
import '../../App.css';

export const SLink = styled(Link)`
text-decoration: none;
  &> li {
    list-style :none;
  }
`;



export const Nav = styled.div`
display :flex;
position:fixed;
top:0;
left:0;
width:100%;
z-index:3;
justify-content:space-between;
background-color: var(--backGround_col);

`

export const Logo = styled.div`
font-family: var(--logoHead);
color : var(--mainColor);
letter-spacing  :0.51px;
padding : 8px 8px;
`

export const SignBox = styled.div`
display:flex;
align-items :center;
justify-content:center;
margin:0px 8px;
`


export const CartBox = styled.div`
color: var(--logoColor);
 display:flex;
 align-items:center;
 justify-content:center;
 height:43px;
 width: 80px;
margin: 0px 8px;
background-color:white;
border-radius: 13px;
padding:8px 13px;
h4{
  margin:0px 8px;
  color: black;
}
cursor:pointer;
position:fixed;
right:0;
z-index:10;

`