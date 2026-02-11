import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

export const getAllOrders = async (req, res) =>{
    try{
        const allOrders = await Order.find().populate("items.product");

        return res.status(200).json(allOrders);
    }catch (error){
        res.status(400).json({message: error.message });
    }
};

export const getOrderById = async (req, res) => {
    try{
        const { id } = req.params;
        const order = await Order.findById(id).populate("items.product");

        if(!order){
            return res.status(404).json({ message: "Order not found"});
        }

        res.status(200).json(order);
    }catch (error){
        res.status(400).json({ message: error.message });
    }
};

export const createOrder = async (req, res) => {
    try{
        const { items, customerInfo } = req.body;

        if(!items || items.length == 0){
            return res.status(400).json({ message: "Order must include at least one item"});
        }
        let total = 0;
        for (const item of items){
            const product = await Product.findById(item.product).select("price");
            if (!product){
                return res.status(404).json({ message: `${item.product} not found`});
            }

            total += product.price * item.quantity;
        }
        const order = new Order({ items, customerInfo, total });
        await order.save();
        res.status(201).json(order);
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};