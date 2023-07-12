import Tables from '../models/TableSchema.js';

const TableController = () => {
    return {
        async getTables(req, res) {
            try {
                const tables = await Tables.find({}, { tableId: 1, tableno: 1, version: 1, _id: 0 });
                res.status(200).json(tables);
            }
            catch (error) {
                console.log(error);
            }
        },
        async bookTable(req, res) {
            try {
                const { tableId, tableno, date, endtime, starttime, version } = req.body;

                const table = await Tables.findOne({ tableId: tableId });

                if (!table) {
                    return res.json({ message: 'Table not found.' });
                }

                if (table.version !== version) {
                    return res.json({ message: 'Table has been modified by another user. Please try again.' });
                }

                const isTableBooked = table.bookings.some(booking => {
                    return (
                        booking.date === date &&
                        booking.starttime < endtime &&
                        booking.endtime > starttime
                    );
                });

                if (isTableBooked) {
                    return res.json({ message: 'Table is not available at the chosen date and time.' });
                }

                table.bookings.push({ date, starttime, endtime });
                table.version += 1;

                await table.save();

                return res.status(200).json({ message: 'Table Book Successful' });
            } catch (error) {
                console.error(error);
                return res.json({ message: 'An error occurred while processing your request.' });
            }
        }

    }
}

export default TableController