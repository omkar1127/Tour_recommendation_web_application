import express from "express";

const router = express.Router();
import {
    getRecPackages
} from "../controllers/recommendation.js";

router.get("/", getRecPackages);

export default router;
