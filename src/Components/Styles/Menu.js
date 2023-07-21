import styled from "styled-components"

export const Container = styled.div`
margin-top:80px;
display:flex; 
flex-direction:column;
 

 
`

export const Allitems = styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
h1{
  margin-bottom:1rem;
  font-family: 'Kanit', sans-serif;

  color: #ef5644;
}

 
`

export const SelectCat = styled.div`
display:flex;
min-height:60px;
font-family:var(--mainHead);
 padding:0px 35px;
ul{
    display:flex;    
}
li{
    list-style:none;
    margin:10px 10px;
    font-weight:bold;
    cursor:pointer;
    font-size:17px;
    color:#3f3f3f;
    padding:5px 10px;
    &:hover{
        border-bottom: 5px solid #ef5644;
        border-radius:5px;
    }
}

`
export const FoodItem = styled.div`
  min-width:270px;
  font-family:var(--mainHead);
 img{
    height:165px;
    width:240px;
    object-fit:center;
    border-radius:10px;
 }
 display:flex;
flex-direction:column;
margin:20px 8px;
padding: 10px 14px;
 
align-items:center;
justify-content:center;
h3{
    margin:8px 8px;
    color:#3f3f3f;
    font-size: 19px;
   
    letter-spacing:1.5px;
}
background-color: #fde4c7;
border-radius:10px;

&:hover{
    transform:scale(1.15,1.15);
      transition :transform 0.5s ease-in-out;
      background-color: #ffc685;
      -webkit-box-shadow: 0px 0px 10px 2px #ffb764;
  -moz-box-shadow: 0px 0px 10px 2px #ffb764;
  box-shadow: 0px 0px 10px 2px #ffb764;
}

`

export const DescItem = styled.div`
display:flex;
align-items:center;
justify-content:center;
button{
    padding: 10px 25px;
    margin-left:10px;
    border:none;
    cursor:pointer;
    background-color:var(--mainColor);
    color:white;
    font-family:monospace;
    font-weight:bold;
    border-radius:20px;
    font-size:17px;

    &:hover{
        background-color:white;
        color:var(--mainColor);
    }
}

h4{
    span{
        
        color: red;
        font-size:20px;
    }
    
}

`

export const QtyBox = styled.div`
display: flex;
align-items:center;
justify-content:center;
div{
    background-color:var(--mainColor);
    padding: 3px 3px;
    min-width:25px;
    display: flex;
    align-items:center;
    justify-content:center;
    margin: 2px 10px;
    font-weight:bold;
    cursor:pointer;
    color:white;
    &:hover{
    transform: scale(1.15,1.15);
    transition: transform 0.3s ease-in-out;
}

}

span{
    font-weight:bold;

}

 
`


export const CartCheckBox = styled.div`
padding: 15px 40px;
color:#3f3f3f;
font-family:var(--mainHead);
letter-spacing:1.5px;
letter-spacing:1.5px;

`
export const OrderTable = styled.div`

padding: 15px 40px;
margin : 10px 30px;
display: flex;
flex-direction :column;
 




`
export const OrderRow = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 10px 4px;   


`
export const OrderItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
img{
height:4rem;
width:4rem;
border-radius:50px;
} 
margin: 10px 4px;
min-width: 14rem;
h3{
  color:#3f3f3f;
  font-size: 19px;
}


`


export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index:10;
  align-items: center; 
 
`;

export const ModalContent = styled.div`
  background-color:  #fff0df;
  border-radius: 12px;
  width: 80%;
  height: 95%;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0.60rem;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #ef5644;
    border-radius: 25px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: #ef5644;
  
  }
 
`;



export const ModalCloseBtn = styled.div`
   
    color:white;
    font-size:25px;
    position: absolute;
    top: 2rem;
    background-color:var(--mainColor);
    border-radius: 30px;
    right: 12rem;
    outline: none;
    border: none;
     cursor: pointer;
    padding: 6px 13px;
  
` 
