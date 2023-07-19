import styled from "styled-components";
import { Link } from "react-router-dom";
import '../../App.css';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

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
margin-left:5rem;
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
 font-family:var(--mainHead);
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


export const notyf = new Notyf({
  duration: 3000,
  position: {
    x: 'right',
    y: 'top',
  },
  types: [
    {
      type: 'error',
      background: '#ef5644',
      duration: 5000,
      dismissible: true
    },
    {
      type: 'info',
      background: '#00adf1',
      duration: 5000,
      dismissible: true
    }

  ]
});



export const SideBar = styled.div`
height:100vh;
background-color:#ff644f;
color : red;
z-index:4;
position:fixed;
top:0;
left :0;
diplay:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:3.5rem;
&:hover{
  width:15rem;
  transition: width 0.5s ease-in-out;
} 
overflow:hidden;
padding: 5rem 0.5rem;
a{

  text-decoration:none;
  color:white;  
}


`


export const LinkItem = styled.div`
 display: flex;
 align-items:center;
 min-width:15rem;
 p{
  margin-left:2rem;
  font-size:1rem;
  width:10rem;  
  font-family: 'Josefin Sans', sans-serif;
  letter-spacing:1.2px;
  font-weight:bold;
}
  margin-bottom:1.8rem;
  &:hover{
     color: red;
  }


`


