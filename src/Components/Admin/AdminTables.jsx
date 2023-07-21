import React, { useState, useEffect } from 'react';
import { getTableOrders, } from '../../Service/Api';
import { AdminTable, TableRow, TableInnerRow, SingleRow, SingleOrder } from '../Styles/Adminstyles';
import moment from 'moment';
import '../../App.css';
import { Allitems, Container } from '../Styles/Menu'
import { MdVerified } from 'react-icons/md'
import { ImCross } from 'react-icons/im'




const AdminTables = () => {
    const [tables, setTables] = useState();
    const [table, setTable] = useState();

    useEffect(() => {
        const fetchTableorders = async () => {
            const resp = await getTableOrders();
            setTables(resp.data);

        }
        fetchTableorders();
    }, [])

    return (
        <Container>
            <Allitems>
                <h1>All Tables</h1>
            </Allitems>

            <div className='flexSpacebtw2'>



                <AdminTable>

                    {
                        tables?.map((order) => {

                            return <TableRow key={order.orderId}>
                                <TableInnerRow>
                                    <img src={"/images/tablelogo.png"} alt="" />


                                    <div className='applyFlex2 marginBottom'>
                                        <div className='flexSpacebtw marginBottom'>
                                            <h3  >{order.orderId}</h3>
                                            {order.status === "payment successful" ? <MdVerified color="green" size={25} /> :


                                                <ImCross color="red" size={20} />}

                                        </div>


                                        <div className='applyFlex3 marginBottom'>
                                            <h4 className='sub_clr '>Table No : <span className='font2'>{order.tableno}</span> </h4>
                                        </div>
                                        <div className='applyFlex3 marginBottom'>
                                            <h4 className='sub_clr '>At : <span className='font2'> {moment(order.createdAt).format('DD-MM-YYYY h:mm A')} </span> </h4>
                                        </div>


                                    </div>



                                </TableInnerRow>
                                <div className='applyFlex3 floatRight '>
                                    <h4 className="font1 " style={{ cursor: "pointer" }} onClick={() => setTable(order)}
                                    >VIEW DETAILS</h4>
                                </div>
                            </TableRow>


                        })
                    }





                </AdminTable>

                {table ? <SingleOrder>



                    <div className='flexSpacebtw marginBottom'>
                        <h2 className='spl_num fntfmly1'>  {table?.orderId}</h2>
                        <MdVerified color="green" size={25} />
                    </div>

                    <h3 className='spl_num fntfmly1' >Table Summary</h3>

                    <SingleRow>
                        <h3 className='tableNo'>
                            {table.tableno}

                        </h3>

                    </SingleRow>

                    <TableRow>
                        <SingleRow>
                            <div className='applyFlex3 marginBottom'>

                            </div>
                        </SingleRow>

                        <div className='flex_left'>
                            <SingleRow>
                                <div className='applyFlex3 marginBottom'>
                                    <h4 className='sub_clr'> Name : <span className='font2'>{table.name}  </span> </h4>
                                </div>
                            </SingleRow>
                            <SingleRow>
                                <div className='applyFlex3 marginBottom'>
                                    <h4 className='sub_clr'> Email : <span className='font2'>{table.email}  </span> </h4>
                                </div>
                            </SingleRow>
                            <SingleRow>
                                <div className='applyFlex3 marginBottom'>
                                    <h4 className='sub_clr'> Phone : <span className='font2'>{table.phone}  </span> </h4>
                                </div>
                            </SingleRow>
                            <SingleRow>
                                <div className='applyFlex3 marginBottom'>
                                    <h4 className='sub_clr'> Date : <span className='font2'>{table.date}  </span> </h4>
                                </div>
                            </SingleRow>
                            <SingleRow>
                                <div className='applyFlex3 marginBottom'>
                                    <h4 className='sub_clr'> Start Time : <span className='font2'>{table.starttime} PM</span> </h4>
                                </div>
                            </SingleRow>
                            <SingleRow>
                                <div className='applyFlex3 marginBottom'>
                                    <h4 className='sub_clr'> End Time : <span className='font2'>{table.endtime} PM</span> </h4>
                                </div>
                            </SingleRow>
                            <SingleRow>
                                <div className='applyFlex3 marginBottom'>
                                    <h4 className='sub_clr'> Amount : <span className='font5'> Rs.{table.totalPrice}  </span> </h4>
                                </div>
                            </SingleRow>
                        </div>
                    </TableRow>



                </SingleOrder> : ""}



            </div>
        </Container>
    )
}

export default AdminTables