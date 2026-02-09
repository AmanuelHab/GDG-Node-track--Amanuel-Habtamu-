import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        description:{
            type: String
        },
        stock:{
            type: Number,
            min: [0],
            default: 0
        },
        category:{
            type: String,
            trim: true
        },
        imageUrl:{
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", productSchema);

export default Product;