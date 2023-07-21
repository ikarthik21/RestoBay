import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../Service/Api';
import { AdminTable, TableRow, TableInnerRow } from '../Styles/Adminstyles';
import moment from 'moment';
import '../../App.css';
import { Allitems, Container } from '../Styles/Menu'
import { MdVerified } from 'react-icons/md'
import { ImCross } from 'react-icons/im'
import { AllSecWrap } from '../Styles/HomeStyles';



const AdminUsers = () => {
    const [users, setUsers] = useState();


    useEffect(() => {
        const fetchTableorders = async () => {
            const resp = await getAllUsers();
            setUsers(resp.data);

        }
        fetchTableorders();
    }, [])

    return (

        <AllSecWrap>
            <Container>

                <Allitems>
                    <h1>All Users</h1>
                </Allitems>
                <div className='flexSpacebtw2'>
                    <AdminTable>

                        {
                            users?.map((order, idx) => {

                                return <TableRow key={idx} style={{ width: '35vw' }}>
                                    <TableInnerRow>

                                        <div className='applyFlex2 marginBottom'>
                                            <div className='flexSpacebtw marginBottom'>

                                                {
                                                    order.verified === true ? <MdVerified color="green" size={25} /> :


                                                        <ImCross color="red" size={20} />}

                                            </div>


                                            <div className='applyFlex3 marginBottom'>
                                                <h4 className='sub_clr '>Name: <span className='font2'>{order.name}</span> </h4>
                                            </div>
                                            <div className='applyFlex3 marginBottom'>
                                                <h4 className='sub_clr '>Email: <span className='font2'>{order.email}</span> </h4>
                                            </div>
                                            <div className='applyFlex3 marginBottom'>
                                                <h4 className='sub_clr '>Phone: <span className='font2'>{order.phone}</span> </h4>
                                            </div>
                                            <div className='applyFlex3 marginBottom'>
                                                <h4 className='sub_clr '>Role: <span className='font2'>{order.role}</span> </h4>
                                            </div>
                                            <div className='applyFlex3 marginBottom'>
                                                <h4 className='sub_clr '>At : <span className='font2'> {moment(order.createdAt).format('DD-MM-YYYY h:mm A')} </span> </h4>
                                            </div>


                                        </div>



                                    </TableInnerRow>

                                </TableRow>


                            })
                        }





                    </AdminTable>



                </div>
            </Container>

        </AllSecWrap>

    )
}

export default AdminUsers