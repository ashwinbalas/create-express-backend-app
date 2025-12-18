import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.ts";
import { errorHandler } from "./middlewares/error.middleware.ts";

dotenv.config();

const app = express();

// built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", routes);

// health check
app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

// error handler (last middleware)
app.use(errorHandler);

export default app;
