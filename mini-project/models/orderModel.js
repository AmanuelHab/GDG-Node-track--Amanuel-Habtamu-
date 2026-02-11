import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        items: [
            {
                product:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true
                },
                quantity:{
                    type: Number,
                    min: 1,
                    required: true
                }
            }
        ],
        total: {
            type: Number,
            min: 0,
        },
        customerInfo: {
            name: {
                type: String,
                minlength: 3,
                required: true,
                trim : true
            },
            email:{
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            }
        }
    },
    {
        timestamps: true
    }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;