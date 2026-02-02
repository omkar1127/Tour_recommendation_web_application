import express from "express";
import {
  countByCity,
  countByType,
  createPackage,
  deletePackage,
  getPackage,
  getPackages,
  updatePackage,
} from "../controllers/package.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createPackage);

//UPDATE
router.put("/:id", verifyAdmin, updatePackage);
//DELETE
router.delete("/:id", verifyAdmin, deletePackage);
//GET

router.get("/find/:id", getPackage);
//GET ALL

router.get("/", getPackages);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
