import express from "express";

export const app = express();
export const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());

import bookRoutes from "./routes/bookRoutes.js";
import morgan from "morgan";

app.use("/books", bookRoutes);
