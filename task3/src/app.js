import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler.js";

export const app = express();
export const PORT = 3000;

app.use(morgan("dev"));
app.use(express.json());

app.use("/books", bookRoutes);

// Error handling middleware (must be last)
app.use(errorHandler);
