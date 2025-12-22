import express from "express";
import bookController from "../controllers./bookController.js";

export const router = express.Router();

router.get("/", bookController.getAllBooks);
router.get("/search", bookController.searchBook);
router.get("/:id", bookController.getBook);
router.post("/", bookController.createBook);
router.delete("/:id", bookController.deleteBook);