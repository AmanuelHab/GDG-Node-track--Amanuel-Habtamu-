import express from "express";
import { getCart, addItemToCart, updateCartItems, removeItemFromCart } from "../controllers/cartController.js";

const router = express.Router();

router.get("/", getCart);
router.post("/", addItemToCart);
router.put("/", updateCartItems);
router.delete("/:productId", removeItemFromCart);

export default router;