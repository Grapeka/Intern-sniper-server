import express, { Express, Request, Response } from "express";
import authRoute from "./routes/authRoute";
import programRoute from "./routes/programRoute";
import dotenv from "dotenv";
import mongoose from "mongoose";
import directorRoute from "./routes/directorRoute";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

// connect db
mongoose.connect(process.env.MONGO_URI ?? "");

// app routes
app.use("/auth", authRoute);

app.use("/programs", programRoute);

app.use("/director", directorRoute);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
