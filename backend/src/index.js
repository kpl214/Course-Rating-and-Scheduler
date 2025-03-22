import express from 'express';
import cors from "cors";
import dotenv from "dotenv";

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

app.listen(5000, () => {
  console.log(`Server running on port 5000`)
  connectDB();
});