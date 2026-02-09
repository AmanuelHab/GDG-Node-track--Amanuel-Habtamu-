import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
    try{
        const allProducts = await Product.find();
        return res.status(200).json(allProducts);   
    }catch(error){
        console.log("Error: " + error.message);
        return res.status(500).json({ message: error.message });
    }
};

export const getProductById = async (req, res) => {
    try{   
        const { id } = req.params;
        const product = await Product.findById(id);

        if(!product){
            return res.status(404).json({ message: "Product not found"});
        }

        res.status(200).json(product);
    }catch(error){
        res.status(400).json({ message: error.message });
    }
};

export const createProduct  = async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    }catch (error){
        res.status(400).json({ message: error.message });
    }
};

export const updateProductById = async (req, res) => {
    try{
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate( id, req.body, { new: true, runValidators: true});

        if(!updatedProduct){
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(updatedProduct);
    }catch(error){
        res.status(400).json({ message: error.message });
    }
};

export const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct){
            return res.status(404).json({message: "Product not found"});
        }

        res.status(200).json({ message: "Product deleted successfully" });
    }catch(error) {
        res.status(400).json({ message: error.message });
    }
};