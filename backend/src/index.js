import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import courseRouter from "./routes/course.route.js"
import reportRouter from "./routes/report.route.js"

import { connectDB } from "./lib/db.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: false
}))

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
})

app.use("/api/courses", courseRouter);
app.use("/api/report", reportRouter);

app.listen(5000, () => {
  console.log(`Server running on port 5000`)
  connectDB();
});