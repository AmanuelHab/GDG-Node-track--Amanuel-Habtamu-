import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";
import productRouter from "./routers/productRouter.js";
import cartRouter from "./routers/cartRouter.js";
import orderRouter from "./routers/orderRouter.js";


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/orders", orderRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
})