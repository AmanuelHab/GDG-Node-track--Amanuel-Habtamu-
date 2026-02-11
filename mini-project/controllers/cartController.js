import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";
import { cartValidationSchema } from "../utils/validationSchema.js";

export const getCart = async (req, res) =>{
    try {let cart = await Cart.findOne({ userId: req.body.userId });
        if(!cart){
            cart = new Cart({ userId: req.body.userId, items: [] });
            await cart.save();
        }
        res.status(200).json(cart);
    }catch (error){
        res.status(500).json({message: error.message });
    }
};

export const addItemToCart = async (req, res) => {
    try {
        const { error } = cartValidationSchema.validate(req.body);
        if(error){
            return res.status(404).json({ errors: error.details[0]})
        }

        let cart = await Cart.findOne({ userId: req.body.userId });

        if(!cart){
            cart = new Cart({ userId: req.body.userId, items: [] });
            await cart.save();
        }

        const itemIndex = cart.items.findIndex(item => item.product.toString() === req.body.productId);
        if (itemIndex >= 0){
            cart.items[itemIndex].quantity += req.body.quantity;
        }else{
            cart.items.push({
                product: req.body.productId,
                quantity: req.body.quantity
            });
        }
        await cart.save();
        res.status(200).json(cart);
    }catch(error){
        res.status(400).json({ message: error.message });
    }
};

export const updateCartItems = async (req, res) => {
    try {
        const { cartId, items } = req.body;
        const updatedCart = await Cart.findByIdAndUpdate(cartId, { items }, { new: true, runValidators: true });

        if(!updatedCart){
            return res.status(404).json({ message: "Cart not found"});
        }
        res.status(200).json(updatedCart);
    }catch(error){
        res.status(400).json({ message: error.message });
    }
};

export const removeItemFromCart = async (req, res) => {
    try {
        const { productId } = req.params;
        const { userId } = req.body;

        let cart = await Cart.findOne({ userId });
        if(!cart){
            return res.status(404).json({ message: "Cart not found" });
        }

        cart.items = cart.items.filter(item => item.product.toString() !== productId);
        await cart.save();

        res.status(200).json(cart);
    } catch(error){
        res.status(400).json({ message: error.message });
    }
};