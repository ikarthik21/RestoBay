import styled from "styled-components"


export const MainSection = styled.div`
display :flex;
align-items:center;
margin : 0px  25px; 
padding:25px 20px;
z-index:2;
margin-top:5rem;


`
export const Imagebox = styled.div` 
padding: 60px 90px; 
img{
  height:390px;
}


`
export const Contentbox = styled.div`
display :flex;
color:var(--subHeadColor);
h2{
  font-family: var(--mainHead);
  font-size: 48px;
  font-weight:bolder; 
}
p{
  font-size: 20px;
  font-weight: 100;
  dispaly:flex;
  align-items:center; 
  font-family:monospace;
  font-weight :bold;
}

button{
  outline:none;
  border:none;
  margin: 0px 20px;
  padding: 13px 20px;   
  letter-spacing: 2px;
}
   
justify-content:center;
flex-direction: column;
z-index:2;
 
`

export const StartOpSel = styled.div`
display:flex; 
align-items:center;
justify-content :space-around;
border:2px solid red;
a{
  text-decoration:none;
  color:black;
  margin: 10px 10px;
}

margin-top:15px;
background-color:#ef5644;
border-radius:25px;
p{
  font-size:16px;
}
 

`



export const ContentInner = styled.div` 
margin-top:100px;
align-items: center; 
flex-direction:column;
min-height:230px;

`

export const ContactUs = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

export const ContactBox = styled.div`
margin:10px 10px;
display: flex;
justify-content: center;
padding:25px 5px; 
`

export const ContactItem = styled.div`
padding:5px 5px;
margin:10px 10px;
flex-direction:column;
p{
  margin: 15px 0px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  min-width : 250px;
}

h3{
  font-family: var(--logoHead);
  color:var(--subHeadColor);
  font-size: 20px;
  border-bottom : 5px solid var(--mainColor);
  display:inline;
}

`





export const FeedBackForm = styled.div`
display:flex;
align-items:center;
justify-content:center; 
padding : 15px 25px;

`


export const FormItem = styled.div`
display:flex;
align-items:center;
justify-content:center;
h3{
  color:var(--subHeadColor);
  margin-right:10px;
}
h2{
  color:var(--subHeadColor);
  font-weight:800;
} 
padding : 15px 15px;
input{
width: 350px;
height: 38px;
border-radius:5px;
outline:none;
border:none;
padding :5px 5px;
border-bottom :3px solid var(--mainColor);
background-color:transparent;
margin-left:20px;
&:focus{
transform: scale(1.12,1.12);
transition: transform 0.5s linear;
}
 
}


textarea{
  width: 350px;
 
  border-radius:5px;  
outline:none;
border:none;
padding :5px 5px;
border :3px solid var(--mainColor);
background-color:transparent;
margin-left:20px;
&:focus{
  transform: scale(1.12,1.12);
  transition: transform 0.5s linear;
  
  
  }
 font-size:18px;
}

`