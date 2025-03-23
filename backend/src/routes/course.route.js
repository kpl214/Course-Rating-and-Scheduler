import express from "express";
import { createReview } from "../controllers/course.controller.js"

const router = express.Router();

router.post("/:id/reviews", createReview);

export default router;
