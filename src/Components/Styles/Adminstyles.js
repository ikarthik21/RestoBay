import styled from "styled-components";

export const AdminTable = styled.div`
display: flex;
flex-direction: column;
align-items: center; 
margin: 10px 10px;
padding: 2rem 5rem;
height:80vh;
overflow:scroll;
&::-webkit-scrollbar {
  width: 0.50rem;
}

&::-webkit-scrollbar-thumb {
  background-color: #ef5644;
  border-radius: 25px;
}

&::-webkit-scrollbar-thumb:hover {
  background-color: #ef5644;
}
 
 `

export const TableRow = styled.div`
          display:flex;
          flex-direction:column;          
          justify-content: center;      
          padding:1rem 0.5rem;      
          margin-bottom: 2rem;       
          border-radius: 10px;
          background-color: #fdddb9;
 `

export const TableInnerRow = styled.div`  
          display:flex;
          img{
            height:6rem;
            width:10rem;
            border-radius: 10px;
            margin-right: 2rem;            
          }
          padding: 1rem;
               h3{ font-family: "Kanit", sans-serif; 
                color:#ef5644;
               }        
h4{
  font-family: "Kanit", sans-serif;
  letter-spacing: 0.8px;
}

 `
export const SingleOrder = styled.div`
  background-color:white;
  height:  70vh;
  margin:0rem 3rem;
  background-color: #fdddb9;
  border-radius:10px;
  padding:3rem;
  overflow:scroll;

  &::-webkit-scrollbar {
    width: 0.50rem;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #ef5644;
    border-radius: 25px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: #ef5644;  
  }

 `

export const SingleRow = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin-top:1rem;
 img{
  height: 3rem;
  width: 4rem;
  border-radius:10px;
 }

 `

export const EachItem = styled.div`
display:flex;
align-items: center;
justify-content: center; 
min-width:9rem;
h3{
  margin-left:10px;
  text-justify:justify;
}

 `

export const EachItemHead = styled.div`
display:flex;
align-items: center;
justify-content: center; 
min-width:10rem;
h3{
  margin-left:10px;
  text-justify:justify;
 }
 
 `


export const UserDetails = styled.div`
display:flex;
align-items: center;
justify-content: center; 
  margin:1rem 0.5rem;
h3{
  font-family: "Kanit", sans-serif;
}
span{
  font-family: 'Ubuntu', sans-serif;
  font-size:14px;
}

 
`


