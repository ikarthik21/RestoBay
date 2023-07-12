import React, { useEffect, useState } from 'react'
import { Container } from '../Styles/Menu';
import { TableBookBox, TableItem, TablesBox } from '../Styles/Table';
import { getTables, bookTable } from '../../Service/Api';
import { notyf } from '../Styles/Navstyles';

import '../../App.css'
const TableBooking = () => {
    const [tables, setTables] = useState();
    const [table, setTable] = useState({ tableId: "", tableno: null, version: null });
    const [booking, setBooking] = useState({
        date: "",
        starttime: "",
        endtime: ""
    });

    useEffect(() => {
        const fetchTables = async () => {
            const resp = await getTables();
            setTables(resp.data);
        }
        fetchTables();
    }, [])

    const readInp = (e) => {

        setBooking((prevBooking) => ({
            ...prevBooking,
            [e.target.name]: e.target.value.trim()
        }));
    };


    const handleBooking = async () => {

        const currentDate = new Date().setHours(0, 0, 0, 0);
        
        const selectedDate = new Date(booking.date).setHours(0, 0, 0, 0);

        if (table.tableId === "" || table.tableno === null) {

            notyf.open({
                type: 'error',
                message: "Please select a table"
            });

        }
        else if (booking.starttime === "" || booking.date === "" || booking.endtime === "") {

            notyf.open({
                type: 'error',
                message: "Please fill in all details"
            });

        }
        else if (currentDate > selectedDate) {
            notyf.open({
                type: 'error',
                message: "Please select a valid date"
            });


        }
        else if (booking.starttime >= booking.endtime) {
            notyf.open({
                type: 'error',
                message: "Please select a valid time range"

            })
        }
        else {
            const tb_book = { ...table, ...booking };
            try {
                const resp = await bookTable(tb_book);
                notyf.open({
                    type: 'error',
                    message: resp.data.message
                })
            }
            catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <Container>
            <div style={{ margin: "0rem 4rem" }} className='flexSpaceAround'>

                <TablesBox>
                    {
                        tables && tables.map(table => {
                            return <TableItem key={table.tableId} onClick={() => {
                                setTable({ tableId: table.tableId, tableno: table.tableno, version: table.version })
                            }}>
                                <h1>{table.tableno}</h1>
                                <img src="/images/table.png" alt="" />
                            </TableItem>

                        })
                    }
                </TablesBox>

                <TableBookBox>
                    <h1 className='tableNo'>{table.tableno}</h1>

                    <p>Date</p>
                    <input type="date" name='date' onChange={readInp} />

                    <div className='applyFlex'>

                        <div className='applyFlexCol'>
                            <p>Start Time</p>
                            <select name="starttime" onChange={readInp}>
                                <option value="">--:--</option>
                                <option value="01:00">1:00</option>
                                <option value="02:00">2:00</option>
                                <option value="03:00">3:00</option>
                                <option value="04:00">4:00</option>
                                <option value="05:00">5:00</option>
                                <option value="06:00">6:00</option>
                                <option value="07:00">7:00</option>
                                <option value="08:00">8:00</option>
                                <option value="09:00">9:00</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>

                            </select>
                        </div>


                        <div className='applyFlexCol'>
                            <p>End Time</p>
                            <select name="endtime" onChange={readInp}>
                                <option value="">--:--</option>
                                <option value="01:00">1:00</option>
                                <option value="02:00">2:00</option>
                                <option value="03:00">3:00</option>
                                <option value="04:00">4:00</option>
                                <option value="05:00">5:00</option>
                                <option value="06:00">6:00</option>
                                <option value="07:00">7:00</option>
                                <option value="08:00">8:00</option>
                                <option value="09:00">9:00</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                            </select>

                        </div>

                    </div>
                    <button onClick={handleBooking}>Book Table</button>
                </TableBookBox>



            </div>
        </Container >
    )
}

export default TableBooking