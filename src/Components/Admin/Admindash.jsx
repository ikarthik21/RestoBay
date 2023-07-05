import React, { useEffect } from 'react'
import { Container, OrderRow } from '../Styles/Menu';
import '../../App.css'
import { AdminTable } from '../Styles/Adminstyles';
// import ImageSilder from '../Home/ImageSlider';




const Admindash = () => {
      return (
        <Container>
            <AdminTable>
                <OrderRow>
                    <h1>Users</h1>
                </OrderRow>

                <OrderRow>


                </OrderRow>

            </AdminTable>
        </Container>
    )
}

export default Admindash