import express from "express";
import Report from "../models/report.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { description } = req.body;
    if (!description || description.trim() === "") {
      return res.status(400).json({ error: "Description is required." });
    }

    const report = new Report({ description });
    await report.save();

    res.status(201).json({ message: "Report submitted successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

export default router;
