import Order from '../../models/OrderSchema.js';
import TableOrder from '../../models/TableOrderSchema.js'
const AdminController = () => {
    return {
        async foodorders(req, res) {

            try {
                const orders = await Order.find({}).sort({ createdAt: -1 });
                return res.status(200).json(orders);
            }
            catch (err) {
                console.log(err);
            }

        },
        async tablebooks(req, res) {
            try {
                const orders = await TableOrder.find({}).sort({ createdAt: -1 });
                return res.status(200).json(orders);
            }
            catch (err) {
                console.log(err);
            }

        }
    }
}

export default AdminController;

