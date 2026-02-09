import Order from "../models/orderModel.js";

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
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};