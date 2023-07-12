import styled from "styled-components";

export const TablesBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
max-width : 50vw;

`

export const TableItem = styled.div`
img{
    height:5rem;
    width:5rem;
    z-index: 0;
}
h1{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 4.15rem; 
    left: 0.85rem; 
    font-size:20px;
    font-family: "Kanit", sans-serif;  
    z-index:1;
    
    border-radius: 100px;
    height:52px;
    width:52px;
    &:hover{
        background-color:#ef5644;
    }
}
margin:  0.2rem 2rem; 
cursor: pointer;

`

export const TableBookBox = styled.div`
display:flex;
flex-direction: column;
align-items: center;
input{
    cursor: pointer;
    margin: 2rem 5rem;
    height: 2.5rem;
    width: 15rem;
    border-radius:1rem;
    border: none;
    outline: none;
    padding: 0.8rem;
    font-family: "Kanit", sans-serif;
    font-size:18px;
}

select{
    margin: 2rem 2rem;
    height: 2.5rem;
    width: 7rem;
    border-radius:1rem;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    border: none;
    outline: none;
    font-size:18px;
    font-family: "Kanit", sans-serif;
}

select option:checked {
    background-color:#f98679;
}

button{    
    cursor: pointer;
    border: 3px solid #ef5644;
    background-color: #ef5644;
    letter-spacing: 1px;
    padding: 10px 19px;
    border-radius: 2rem;
    font-family: "Kanit", sans-serif;   
    letter-spacing:1.2px;
    color:white;
    &:hover{
        transform : scale(1.12,1.12);
        transition : transform 0.4s ease-in-out;    
    } 

}

p{
    font-family: "Kanit", sans-serif;
   position: relative;
   top: 20px;

}



`