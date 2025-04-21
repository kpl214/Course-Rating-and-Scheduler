import express from "express";
import { createReview, getCourses, getReviews } from "../controllers/course.controller.js"
import { initAuth } from '@propelauth/express';

const {
    requireUser,
} = initAuth({
    authUrl: "https://40459826599.propelauthtest.com",
    apiKey: "d621ec3ebf8c4c1831f3d6f56993e824dee828dc7d7db58b3c8051d31ac9acf8bac013fc3e056d848158cd5fcef9c88b"
});


const router = express.Router();

router.post("/:code/reviews", requireUser, createReview);

router.get("/all", requireUser, getCourses);

router.get("/:code/reviews", requireUser, getReviews);

export default router;
